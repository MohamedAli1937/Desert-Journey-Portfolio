import { useState } from 'react';

export default function Logo() {
  const [hover, setHover] = useState(false);

  const speedPlane = hover ? '10s' : '60s';
  const speedOuterRing = hover ? '5s' : '30s';
  const speedCrosshairs = hover ? '3s' : '15s';
  const speedInnerRing = hover ? '3s' : '12s';
  const speedNodes = hover ? '6s' : '30s';

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className="logo-svg"
      width="100%"
      height="100%"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ cursor: 'pointer' }}
    >
      <title>M.A Polar Geometry Logo</title>

      <style>
        {`
          .build-fade { opacity: 0; animation: fadeIn 1.5s ease-out forwards; }
          .build-draw-44 { stroke-dasharray: 277; stroke-dashoffset: 277; animation: drawLine 1.5s ease-out 0.2s forwards; }
          .build-draw-30 { stroke-dasharray: 189; stroke-dashoffset: 189; animation: drawLine 1.5s ease-out 0.5s forwards; }
          .build-draw-24 { stroke-dasharray: 151; stroke-dashoffset: 151; animation: drawLine 1.5s ease-out 0.8s forwards; }
          
          .build-petal {
            stroke-dasharray: 130; 
            stroke-dashoffset: 130; 
            fill-opacity: 0;
            stroke: var(--gold);
            animation: 
              drawLine 1.5s ease-in-out 1.2s forwards, 
              fillPetal 1s ease-in-out 2.8s forwards;
          }

          .build-core { opacity: 0; transform-origin: 50px 50px; animation: popIn 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards; }
          .build-core-inner { opacity: 0; transform-origin: 50px 50px; animation: popIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.3s forwards; }
          .build-node { opacity: 0; animation: popIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards; }

          @keyframes fadeIn { to { opacity: 1; } }
          @keyframes drawLine { to { stroke-dashoffset: 0; } }
          @keyframes popIn { 
            0% { opacity: 0; transform: scale(0); } 
            100% { opacity: 1; transform: scale(1); } 
          }
          @keyframes fillPetal { 
            to { fill-opacity: 1; stroke: var(--bg-primary); } 
          }
        `}
      </style>

      <g
        className="build-fade"
        style={{ animationDelay: '0.4s' }}
        stroke="var(--gold)"
        strokeWidth="0.3"
        strokeDasharray="1 2"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 50 50"
          to="360 50 50"
          dur={speedPlane}
          repeatCount="indefinite"
        />
        <line x1="50" y1="5" x2="50" y2="95" />
        <line x1="5" y1="50" x2="95" y2="50" />
      </g>

      <circle
        className="build-fade"
        style={{ animationDelay: '0.6s' }}
        cx="50"
        cy="50"
        r="42"
        fill="none"
        stroke="var(--gold)"
        strokeWidth="0.5"
        strokeDasharray="2 3"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 50 50"
          to="360 50 50"
          dur={speedOuterRing}
          repeatCount="indefinite"
        />
      </circle>

      <circle
        className="build-draw-44"
        cx="50"
        cy="50"
        r="44"
        fill="none"
        stroke="var(--gold)"
        strokeWidth="0.1"
      />

      <g
        className="build-fade"
        style={{ animationDelay: '1s' }}
        stroke="var(--gold)"
        strokeWidth="0.8"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="360 50 50"
          to="0 50 50"
          dur={speedCrosshairs}
          repeatCount="indefinite"
        />
        <line x1="50" y1="6" x2="50" y2="10" />
        <line x1="50" y1="90" x2="50" y2="94" />
        <line x1="6" y1="50" x2="10" y2="50" />
        <line x1="90" y1="50" x2="94" y2="50" />
      </g>

      <circle
        className="build-draw-30"
        cx="50"
        cy="50"
        r="30"
        fill="none"
        stroke="var(--gold)"
        strokeWidth="1.5"
        opacity="0.9"
      />

      <circle
        className="build-fade"
        style={{ animationDelay: '1.2s' }}
        cx="50"
        cy="50"
        r="27"
        fill="none"
        stroke="var(--gold)"
        strokeWidth="1"
        opacity="0.75"
        strokeDasharray="6 2"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="360 50 50"
          to="0 50 50"
          dur={speedInnerRing}
          repeatCount="indefinite"
        />
      </circle>

      <circle
        className="build-draw-24"
        cx="50"
        cy="50"
        r="24"
        fill="none"
        stroke="var(--gold)"
        strokeWidth="0.8"
        opacity="0.5"
      />

      <g fill="var(--gold)">
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 50 50"
          to="360 50 50"
          dur={speedNodes}
          repeatCount="indefinite"
        />
        <circle
          className="build-node"
          style={{ animationDelay: '2.2s', transformOrigin: '23px 38px' }}
          cx="23"
          cy="38"
          r="1.5"
        />
        <circle
          className="build-node"
          style={{ animationDelay: '2.4s', transformOrigin: '77px 62px' }}
          cx="77"
          cy="62"
          r="1.5"
        />
        <circle
          className="build-node"
          style={{ animationDelay: '2.6s', transformOrigin: '63px 23px' }}
          cx="63"
          cy="23"
          r="1"
          opacity="0.8"
        />
        <circle
          className="build-node"
          style={{ animationDelay: '2.8s', transformOrigin: '37px 77px' }}
          cx="37"
          cy="77"
          r="1"
          opacity="0.8"
        />
      </g>

      <g fill="var(--gold)" strokeWidth="1.5" strokeLinejoin="round">
        <path
          className="build-petal"
          d="M50,50 Q75,25 90,50 Q75,75 50,50"
          transform="rotate(0, 50, 50)"
        />
        <path
          className="build-petal"
          d="M50,50 Q75,25 90,50 Q75,75 50,50"
          transform="rotate(72, 50, 50)"
        />
        <path
          className="build-petal"
          d="M50,50 Q75,25 90,50 Q75,75 50,50"
          transform="rotate(144, 50, 50)"
        />
        <path
          className="build-petal"
          d="M50,50 Q75,25 90,50 Q75,75 50,50"
          transform="rotate(216, 50, 50)"
        />
        <path
          className="build-petal"
          d="M50,50 Q75,25 90,50 Q75,75 50,50"
          transform="rotate(288, 50, 50)"
        />
      </g>

      <circle className="build-core" cx="50" cy="50" r="3" fill="var(--gold)" />
      <circle
        className="build-core-inner"
        cx="50"
        cy="50"
        r="1.5"
        fill="var(--bg-primary)"
      />
    </svg>
  );
}
