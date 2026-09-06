import { HeaderShell } from "./HeaderShell";
import { UtilityBar } from "./UtilityBar";
import { brandAspect, brandSvg } from "@/lib/brand";

/**
 * Server half of the header: reads the lockup off disk once and hands the
 * markup to the client shell, which owns the sticky/condense behaviour.
 */
export function Header() {
  return (
    <HeaderShell
      lockupSvg={brandSvg("lockup")}
      lockupAspect={brandAspect.lockup}
      utilityBar={<UtilityBar />}
    />
  );
}
