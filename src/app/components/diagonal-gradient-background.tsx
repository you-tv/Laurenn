import bgImage from "figma:asset/page_bg.png";

export function DiagonalGradientBackground() {
  return (
    <div 
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-white"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    />
  );
}