import type { ReactNode } from "react";

/**
 * The CV row: bold title on the left, date flush right, an italic subtitle
 * line beneath, then optional \itemize points.
 */
export function Entry({
  title,
  subtitle,
  meta,
  right,
  points,
  children,
}: {
  title: ReactNode;
  subtitle?: ReactNode;
  meta?: ReactNode;
  right?: ReactNode;
  points?: string[];
  children?: ReactNode;
}) {
  return (
    <div className="mt-5 first:mt-0">
      <div className="latex-entry-head">
        <span className="font-bold">{title}</span>
        {right ? <span className="tnum text-[0.9em] text-muted whitespace-nowrap">{right}</span> : null}
      </div>

      {subtitle ? (
        <div className="latex-entry-head">
          <span className="italic text-[0.95em]">{subtitle}</span>
          {meta ? <span className="text-[0.9em] text-muted whitespace-nowrap">{meta}</span> : null}
        </div>
      ) : null}

      {points && points.length > 0 ? (
        <ul className="latex-itemize mt-1.5 text-[0.95em]">
          {points.map((p, i) => (
            <li key={i}>{p}</li>
          ))}
        </ul>
      ) : null}

      {children}
    </div>
  );
}
