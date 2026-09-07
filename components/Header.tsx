import { HeaderShell } from "./HeaderShell";
import { UtilityBar } from "./UtilityBar";
import { brandAspect, brandSvg } from "@/lib/brand";

/**
 * Server half of the header: reads the two lockup halves off disk once and
 * hands the markup to the client shell, which owns the sticky/condense
 * behaviour and the nav.
 */
export function Header() {
  return (
    <HeaderShell
      lockup={{
        compassSvg: brandSvg("compass"),
        wordmarkSvg: brandSvg("wordmark"),
        compassAspect: brandAspect.compass,
        wordmarkAspect: brandAspect.wordmark,
      }}
      utilityBar={<UtilityBar />}
    />
  );
}
