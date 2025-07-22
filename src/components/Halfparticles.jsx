import React, { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const Halfparticles = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  return (
    init && (
      <Particles
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        options={{
          fullScreen: { enable: false },
          background: { color: { value: "transparent" } },
          fpsLimit: 60,
          particles: {
            number: {
              value: 500, // ✅ Reduced to 6000
              density: {
                enable: true,
                area: 800,
              },
            },
            color: { value: "#0000" },
            shape: { type: "star" },
            opacity: { value: 0.1 },
            size: {
              value: 3,
              random: true,
            },
            move: {
              enable: true,
              speed: 2,
              direction: "none",
              outModes: { default: "out" },
            },
            links: {
              enable: true, // ✅ Linking lines enabled
              distance: 100,
              color: "#008000",
              opacity: 0.1,
              width: 1,
            },
          },
          detectRetina: true,
        }}
      />
    )
  );
};

export default Halfparticles;
