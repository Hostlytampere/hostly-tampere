/**
 * Logon kaari, irrotettuna omaksi motiivikseen.
 * Toistuu sivulla: logossa, turvallisuusosion taustassa, footerissa.
 * `draw`-tilassa viiva piirtyy itsestään kun se tulee näkyviin.
 */
type ArchProps = {
  className?: string;
  strokeClassName?: string;
  dotClassName?: string;
  strokeWidth?: number;
  showDot?: boolean;
  draw?: boolean;
  delayMs?: number;
  style?: React.CSSProperties;
};

export function Arch({
  className = "",
  strokeClassName = "stroke-petrol",
  dotClassName = "fill-terracotta",
  strokeWidth = 13,
  showDot = true,
  draw = false,
  delayMs = 0,
  style,
}: ArchProps) {
  return (
    <svg
      viewBox="10 20 116 96"
      fill="none"
      aria-hidden="true"
      className={`${draw ? "arch-draw" : ""} ${className}`}
      style={
        {
          ...(delayMs ? { "--reveal-delay": `${delayMs}ms` } : {}),
          ...style,
        } as React.CSSProperties
      }
    >
      <path
        d="M18,108 C18,58 50,28 68,28 C86,28 118,58 118,108"
        className={strokeClassName}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      {showDot && <circle cx="96" cy="58" r="9" className={dotClassName} />}
    </svg>
  );
}
