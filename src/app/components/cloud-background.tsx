import { motion } from "motion/react";

interface CloudBackgroundProps {
  density?: "low" | "medium" | "high";
  opacity?: number;
}

export function CloudBackground({ density = "medium", opacity = 0.15 }: CloudBackgroundProps) {
  const cloudCount = density === "low" ? 3 : density === "medium" ? 5 : 8;

  // Générer des nuages avec positions et tailles variées
  const clouds = Array.from({ length: cloudCount }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    scale: 0.5 + Math.random() * 1,
    duration: 40 + Math.random() * 40,
    delay: Math.random() * 20,
    color: [
      "#5e2d91", // Violet Alcatel
      "#6639B7", // Bleu marine Rainbow
      "#0085CA", // Bleu ciel Rainbow
      "#CF0072", // Rose Rainbow
    ][i % 4],
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {clouds.map((cloud) => (
        <motion.div
          key={cloud.id}
          className="absolute"
          initial={{
            x: `${cloud.x}%`,
            y: `${cloud.y}%`,
          }}
          animate={{
            x: [`${cloud.x}%`, `${cloud.x + 20}%`, `${cloud.x}%`],
            y: [`${cloud.y}%`, `${cloud.y - 10}%`, `${cloud.y}%`],
          }}
          transition={{
            duration: cloud.duration,
            repeat: Infinity,
            ease: "linear",
            delay: cloud.delay,
          }}
          style={{
            transform: `scale(${cloud.scale})`,
          }}
        >
          <svg
            width="200"
            height="100"
            viewBox="0 0 200 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ opacity }}
          >
            {/* Nuage technologique stylisé */}
            <g>
              {/* Forme principale du nuage */}
              <path
                d="M 50 50 Q 40 30, 60 30 Q 70 20, 85 25 Q 100 20, 110 30 Q 130 25, 135 40 Q 150 35, 150 50 Q 155 60, 145 65 Q 150 75, 130 75 Q 120 85, 100 80 Q 80 85, 70 75 Q 50 80, 45 65 Q 35 70, 40 55 Q 35 45, 50 50 Z"
                fill={cloud.color}
                fillOpacity="0.1"
                stroke={cloud.color}
                strokeWidth="1"
                strokeOpacity="0.3"
              />
              
              {/* Lignes de connexion internes (aspect technologique) */}
              <line x1="60" y1="45" x2="80" y2="50" stroke={cloud.color} strokeWidth="0.5" strokeOpacity="0.4" strokeDasharray="2,2" />
              <line x1="80" y1="50" x2="100" y2="45" stroke={cloud.color} strokeWidth="0.5" strokeOpacity="0.4" strokeDasharray="2,2" />
              <line x1="100" y1="45" x2="120" y2="50" stroke={cloud.color} strokeWidth="0.5" strokeOpacity="0.4" strokeDasharray="2,2" />
              <line x1="70" y1="60" x2="90" y2="65" stroke={cloud.color} strokeWidth="0.5" strokeOpacity="0.4" strokeDasharray="2,2" />
              <line x1="90" y1="65" x2="110" y2="60" stroke={cloud.color} strokeWidth="0.5" strokeOpacity="0.4" strokeDasharray="2,2" />
              
              {/* Points de connexion (nodes) */}
              <circle cx="60" cy="45" r="2" fill={cloud.color} fillOpacity="0.5" />
              <circle cx="80" cy="50" r="2" fill={cloud.color} fillOpacity="0.5" />
              <circle cx="100" cy="45" r="2" fill={cloud.color} fillOpacity="0.5" />
              <circle cx="120" cy="50" r="2" fill={cloud.color} fillOpacity="0.5" />
              <circle cx="70" cy="60" r="2" fill={cloud.color} fillOpacity="0.5" />
              <circle cx="90" cy="65" r="2" fill={cloud.color} fillOpacity="0.5" />
              <circle cx="110" cy="60" r="2" fill={cloud.color} fillOpacity="0.5" />
            </g>
          </svg>
        </motion.div>
      ))}
    </div>
  );
}
