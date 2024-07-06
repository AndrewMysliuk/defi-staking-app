import { useState, useEffect } from "react"
import Particles, { initParticlesEngine } from "@tsparticles/react"
import { loadFull } from "tsparticles"

const ParticleSettings = () => {
  const [init, setInit] = useState(false)

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine)
    }).then(() => {
      setInit(true)
    })
  }, [])

  return (
    <div>
      {init && (
        <Particles
          id="tsparticles"
          style={{
            position: "absolute",
            height: "1000px",
            width: "100vw",
          }}
          options={{
            background: {
              color: {
                value: "#0d47a1",
              },
            },
            fpsLimit: 60,
            interactivity: {
              detect_on: "canvas",
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: {
                  enable: true,
                },
              },
              modes: {
                bubble: {
                  distance: 400,
                  duration: 2,
                  opacity: 0.8,
                  size: 40,
                },
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#ffffff",
              },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: "bounce",
                random: false,
                speed: 3,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: 5,
              },
            },
            detectRetina: true,
          }}
        />
      )}
    </div>
  )
}

export default ParticleSettings
