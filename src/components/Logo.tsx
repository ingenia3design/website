import logoUrl from "../../assets/491896976_639450382261535_2516910173933604862_n.jpg";
import { useI18n } from "../i18n/i18n";

export default function Logo({ size = 36 }: { size?: number }) {
  const { c } = useI18n();
  return (
    <div className="inline-flex items-center gap-3">
      <img
        src={logoUrl}
        width={size}
        height={size}
        className="h-9 w-9 rounded-full ring-1 ring-white/15"
        alt={c.brand.logoAlt}
        loading="eager"
      />
      <div className="leading-tight">
        <div className="text-sm font-semibold tracking-wide text-white">
          Ingenia3Design
        </div>
        <div className="text-xs text-white/60">{c.brand.strapline}</div>
      </div>
    </div>
  );
}

