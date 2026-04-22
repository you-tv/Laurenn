export function RainbowWaves() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Dégradé arc-en-ciel animé avec les couleurs Rainbow */}
      <div className="absolute inset-0 opacity-40">
        {/* Couche 1 - Rose à Orange */}
        <div 
          className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-br from-[#CF0072] via-[#FF4500] to-transparent"
          style={{
            animation: 'wave1 15s ease-in-out infinite',
            transformOrigin: 'center',
          }}
        />
        
        {/* Couche 2 - Orange à Vert */}
        <div 
          className="absolute top-1/4 right-0 w-2/3 h-1/2 bg-gradient-to-bl from-[#FF4500] via-[#34B233] to-transparent"
          style={{
            animation: 'wave2 18s ease-in-out infinite',
            animationDelay: '2s',
            transformOrigin: 'center',
          }}
        />
        
        {/* Couche 3 - Vert à Bleu ciel */}
        <div 
          className="absolute bottom-1/3 left-0 w-3/4 h-1/2 bg-gradient-to-tr from-[#34B233] via-[#0085CA] to-transparent"
          style={{
            animation: 'wave3 20s ease-in-out infinite',
            animationDelay: '4s',
            transformOrigin: 'center',
          }}
        />
        
        {/* Couche 4 - Bleu ciel à Bleu marine */}
        <div 
          className="absolute top-1/2 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-[#0085CA] via-[#6639B7] to-transparent"
          style={{
            animation: 'wave4 16s ease-in-out infinite',
            animationDelay: '6s',
            transformOrigin: 'center',
          }}
        />
        
        {/* Couche 5 - Violet Alcatel */}
        <div 
          className="absolute bottom-0 left-1/4 w-2/3 h-1/3 bg-gradient-to-tr from-[#5e2d91] via-[#6639B7] to-transparent"
          style={{
            animation: 'wave5 22s ease-in-out infinite',
            animationDelay: '8s',
            transformOrigin: 'center',
          }}
        />
      </div>

      <style>{`
        @keyframes wave1 {
          0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); }
          33% { transform: translate(10%, -5%) scale(1.1) rotate(5deg); }
          66% { transform: translate(-5%, 10%) scale(0.9) rotate(-5deg); }
        }
        
        @keyframes wave2 {
          0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); }
          33% { transform: translate(-10%, 5%) scale(1.15) rotate(-8deg); }
          66% { transform: translate(8%, -8%) scale(0.95) rotate(8deg); }
        }
        
        @keyframes wave3 {
          0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); }
          33% { transform: translate(8%, 10%) scale(1.2) rotate(10deg); }
          66% { transform: translate(-10%, -5%) scale(0.85) rotate(-10deg); }
        }
        
        @keyframes wave4 {
          0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); }
          33% { transform: translate(-8%, -10%) scale(0.9) rotate(-6deg); }
          66% { transform: translate(12%, 8%) scale(1.1) rotate(6deg); }
        }
        
        @keyframes wave5 {
          0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); }
          33% { transform: translate(5%, -8%) scale(1.05) rotate(4deg); }
          66% { transform: translate(-8%, 5%) scale(0.95) rotate(-4deg); }
        }
      `}</style>
    </div>
  );
}