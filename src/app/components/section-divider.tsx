/**
 * SectionDivider
 * Renders a full-width SVG wave where the NEXT section's color (toColor)
 * forms a large convex arch that reaches UP into the previous section (fromColor).
 *
 * @param fromColor  - Background of the section ABOVE (e.g. "#ffffff")
 * @param toColor    - Background of the section BELOW — this color forms the arch
 */
export function SectionDivider({
  fromColor,
  toColor,
}: {
  fromColor: string;
  toColor: string;
}) {
  return (
    <div
      className="relative w-full overflow-hidden leading-[0] block"
      style={{ backgroundColor: fromColor, marginBottom: -1 }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 120"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="w-full block"
        style={{ height: "clamp(80px, 10vw, 140px)" }}
      >
        {/*
          The toColor arch:
          - Starts at bottom-left corner (0, 120)
          - Cubic bezier sweeps up to near y=0 at center
          - Ends at bottom-right corner (1440, 120)
          - Closes along the bottom edge
          → Creates a wide convex arch of the NEXT section rising into the current one
        */}
        <path
          d="M0,120 C480,0 960,0 1440,120 L1440,120 L0,120 Z"
          fill={toColor}
        />
      </svg>
    </div>
  );
}
