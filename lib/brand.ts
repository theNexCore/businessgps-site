import { readFileSync } from "node:fs";
import path from "node:path";

/**
 * Inlines the supplied Illustrator lockups so they can be recoloured for navy
 * panels without needing a second asset.
 *
 * Two things have to happen to the exported artwork first:
 *
 * 1. Illustrator styles the shapes with a `<style>` block of generic classes
 *    (.st0, .st1 …). Inlined, that CSS is global — a second copy of the lockup
 *    would fight the first — and its text shows up in the document's text
 *    content. So the rules are flattened onto the elements as presentation
 *    attributes and the `<style>` block is dropped.
 *
 * 2. The artwork is dark-on-light: "Business" is navy (#001749), "GPS" is red,
 *    and the compass uses a white-to-navy radial gradient. For navy panels only
 *    the flat navy fills are repainted white, so the red italic "GPS" and the
 *    compass keep their brand colours. A blanket brightness/invert filter would
 *    flatten both away, and recolouring the gradient stops would make the
 *    compass glow instead of settling into the panel.
 *
 * Gradient ids are still namespaced per variant so several inlined copies on
 * one page cannot collide.
 */

export type BrandAsset = "lockup" | "mark";
export type BrandTone = "dark" | "light";

/** viewBox width / height for each asset — drives the aspect-ratio boxes. */
export const brandAspect: Record<BrandAsset, number> = {
  lockup: 3072.16 / 1254,
  mark: 1343.82 / 1254,
};

const NAVY = "#001749";
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

export function brandSvg(asset: BrandAsset, tone: BrandTone): string {
  const key = `${asset}:${tone}`;
  const cached = cache.get(key);
  if (cached) return cached;

  const file = path.join(process.cwd(), "public", "brand", `${asset}.svg`);
  let svg = readFileSync(file, "utf8")
    .replace(/<\?xml[\s\S]*?\?>/g, "")
    .replace(/<!--[\s\S]*?-->/g, "");

  const styleBlock = svg.match(/<style>([\s\S]*?)<\/style>/);
  const rules = styleBlock ? parseStyleRules(styleBlock[1]) : new Map();
  if (styleBlock) svg = svg.replace(styleBlock[0], "");

  // Flatten the class rules onto the elements themselves.
  svg = svg.replace(/\sclass="([^"]+)"/g, (_match, classList: string) => {
    const attrs = new Map<string, string>();
    for (const className of classList.trim().split(/\s+/)) {
      const declarations = rules.get(className);
      if (!declarations) continue;
      for (const [property, value] of declarations) attrs.set(property, value);
    }
    if (attrs.size === 0) return "";

    return [...attrs]
      .map(([property, value]) => {
        const painted =
          tone === "light" && value.toLowerCase() === NAVY ? "#ffffff" : value;
        return ` ${property}="${escapeAttr(painted)}"`;
      })
      .join("");
  });

  const namespace = `${asset === "lockup" ? "lk" : "mk"}${tone === "light" ? "l" : "d"}`;
  svg = svg
    .replace(/radial-gradient/g, `${namespace}rg`)
    .replace(/id="Layer_1"/g, `id="${namespace}-layer"`)
    .trim();

  // The wrapper controls size and carries the accessible name, so the SVG
  // itself is decorative.
  svg = svg.replace(
    /<svg\s/,
    '<svg aria-hidden="true" focusable="false" preserveAspectRatio="xMidYMid meet" style="display:block;width:100%;height:100%" ',
  );

  cache.set(key, svg);
  return svg;
}
