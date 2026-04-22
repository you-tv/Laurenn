import bgImage from 'figma:asset/bb73f579843cf7dc4e457ab24bf0ac53789dba85.png';

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