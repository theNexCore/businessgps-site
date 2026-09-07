import { readFileSync } from "node:fs";
import path from "node:path";

/**
 * Inlines the supplied Illustrator lockups.
 *
 * The lockup is ALWAYS full-colour, on white or light backgrounds only. There
 * is deliberately no inverted/white variant here: a dark section that needs
 * branding uses typography and spacing instead (see <BizGPS />). Removing the
 * recolour path is what keeps that rule from quietly regressing.
 *
 * Illustrator emits generic class names (.st0, .st1 …) in a <style> block.
 * Inlined, that CSS is document-global — a second copy of the artwork would
 * fight the first — and its text lands in the page's text content. So the
 * rules are flattened onto the elements as presentation attributes and the
 * <style> block is dropped. Gradient ids are namespaced per asset so several
 * copies on one page cannot collide.
 */

export type BrandAsset = "lockup" | "mark" | "compass" | "wordmark";

/** viewBox width / height for each asset — drives the aspect-ratio boxes. */
export const brandAspect: Record<BrandAsset, number> = {
  lockup: 3072.16 / 1254,
  mark: 1343.82 / 1254,
  compass: 1,
  wordmark: 1081.2 / 145.2,
};

/**
 * Sub-boxes of compass.svg, in its own user space. Cropping the viewBox to one
 * of these shows a single part of the mark at full size without touching a
 * path — the geometry is only ever scaled, never redrawn.
 */
export const compassBox = {
  full: "195.2 40.6 953.2 953.2",
  core: "493.6 397.4 356.1 335.5",
  arrow: "648 156.5 408.4 396.8",
} as const;

const cache = new Map<string, string>();

/** Parses `.st1, .st2 { fill: none; stroke: #001749 }` into a class → attrs map. */
function parseStyleRules(css: string): Map<string, Map<string, string>> {
  const byClass = new Map<string, Map<string, string>>();

  for (const rule of css.matchAll(/([^{}]+)\{([^}]*)\}/g)) {
    const selectors = rule[1].split(",").map((selector) => selector.trim());
    const declarations = rule[2]
      .split(";")
      .map((declaration) => declaration.trim())
      .filter(Boolean);

    for (const selector of selectors) {
      if (!selector.startsWith(".")) continue;
      const className = selector.slice(1);
      const attrs = byClass.get(className) ?? new Map<string, string>();

      for (const declaration of declarations) {
        const separator = declaration.indexOf(":");
        if (separator === -1) continue;
        const property = declaration.slice(0, separator).trim();
        // Presentation attributes take unitless lengths.
        const value = declaration.slice(separator + 1).trim().replace(/px$/, "");
        attrs.set(property, value);
      }

      byClass.set(className, attrs);
    }
  }

  return byClass;
}

function escapeAttr(value: string): string {
  return value.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
}

export function brandSvg(asset: BrandAsset): string {
  const cached = cache.get(asset);
  if (cached) return cached;

  const file = path.join(process.cwd(), "public", "brand", `${asset}.svg`);
  let svg = readFileSync(file, "utf8")
    .replace(/<\?xml[\s\S]*?\?>/g, "")
    .replace(/<!--[\s\S]*?-->/g, "");

  const styleBlock = svg.match(/<style>([\s\S]*?)<\/style>/);
  const rules = styleBlock ? parseStyleRules(styleBlock[1]) : new Map();
  if (styleBlock) svg = svg.replace(styleBlock[0], "");

  svg = svg.replace(/\sclass="([^"]+)"/g, (_match, classList: string) => {
    const attrs = new Map<string, string>();
    for (const className of classList.trim().split(/\s+/)) {
      const declarations = rules.get(className);
      if (!declarations) continue;
      for (const [property, value] of declarations) attrs.set(property, value);
    }
    if (attrs.size === 0) return "";
    return [...attrs].map(([property, value]) => ` ${property}="${escapeAttr(value)}"`).join("");
  });

  const namespace = asset === "lockup" ? "lk" : "mk";
  svg = svg
    .replace(/radial-gradient/g, `${namespace}rg`)
    .replace(/id="Layer_1"/g, `id="${namespace}-layer"`)
    .trim();

  // The wrapper controls size and carries the accessible name.
  svg = svg.replace(
    /<svg\s/,
    '<svg aria-hidden="true" focusable="false" preserveAspectRatio="xMidYMid meet" style="display:block;width:100%;height:100%" ',
  );

  cache.set(asset, svg);
  return svg;
}
