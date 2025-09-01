const AnimatedParticles = ({value}:{value:number}) => {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: -1,
        width: "100%",
        height: "100%",
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
       
      >
        <defs>
          <radialGradient id="bubbleGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#f73620" stopOpacity="0.8" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
        </defs>

        <g>
          {[...Array(value)].map((_, i) => {
            const r = Math.random() * 2 + 0.8;
            const cx = Math.random() * 100;
            const cy = Math.random() * 100;
            const dx = Math.random() * 100;
            const dy = Math.random() * 100;
            const dur1 = (Math.random() * 10 + 5).toFixed(1) + "s";
            const dur2 = (Math.random() * 10 + 5).toFixed(1) + "s";

            return (
              <circle key={i} cx={cx} cy={cy} r={r} fill="url(#bubbleGlow)">
                <animate
                  attributeName="cy"
                  values={`${cy};${dy};${cy}`}
                  dur={dur1}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="cx"
                  values={`${cx};${dx};${cx}`}
                  dur={dur2}
                  repeatCount="indefinite"
                />
              </circle>
            );
          })}
        </g>
      </svg>
    </div>
  );
  };
  
  export default AnimatedParticles
  