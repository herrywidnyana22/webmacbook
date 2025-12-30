import clsx from "clsx"
import gsap from "gsap"
import Lightning from "./models/threeJS/Lightning"
import MacbookModel from "./models/Macbook"
import useMacbookStore from "../store"

import { Html } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { features, featureSequence, SCALE_DESKTOP, SCALE_MOBILE } from "../lib/constants"
import { Suspense, useEffect, useRef } from "react"
import { useMediaQuery } from "react-responsive"
import { useGSAP } from "@gsap/react"

const ScrollTrigger = () => {
  const groupRef = useRef<any>(null)
  const isMobile = useMediaQuery({ query: '(max-width: 1024px)' });

  const { setTextture } = useMacbookStore()

  useEffect(() => {
    featureSequence.forEach((feature) => {
      const vid = document.createElement('video');

      Object.assign(vid, {
        src: feature.videoPath,
        muted: true,
        preload: 'auto',
        playsInline: true,
        crossOrigin: 'anonymous',
      });

      vid.load();
    })
  }, [])

  useGSAP(() => {
    // MODEL PINNING ROTATION
    const ModelTl = gsap.timeline({
      scrollTrigger: {
        trigger: '#f-canvas',
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
        pin: true,
      }
    })

    // SYNC THE CONTENt
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#f-canvas',
        start: 'top center',
        end: 'bottom top',
        scrub: 1,
      } 
    })

    // 3D SPIN
    if(groupRef.current){
      ModelTl.to(groupRef.current.rotation, {
        y: Math.PI * 2,
        ease: 'power1.inOut',
      })
    }

    featureSequence.forEach(({ videoPath, boxClass, delay }) => {
      tl
        .call(() => setTextture(videoPath))
        .to(boxClass, {
          opacity: 1,
          y: 0,
          delay,
        })
    })

  }, [setTextture, isMobile])

  return(
    <group ref={groupRef}>
      <Suspense 
        fallback={
          <Html>
            <h1>Loading...</h1>
          </Html>
        }>
          <MacbookModel 
            scale={isMobile ? SCALE_MOBILE : SCALE_DESKTOP}
            position={[0, -1, 0]}
          />
      </Suspense>
    </group>
  )
}

const Features = () => {
  return (
    <section id="features">
      <h2>See it all in a new light</h2>
      <Canvas id="f-canvas" camera={{}}>
        <Lightning/>
        <ambientLight intensity={0.5} />
        <ScrollTrigger />
      </Canvas>

      <div className="absolute inset-0">
        { features.map((feature, i) => (
            <div 
              key={feature.id} 
              className={clsx('box', 
                `box${i+1}`,
                feature.styles
              )}>
              <img src={feature.icon} alt={feature.highlight} />
              <span className="text-white">{feature.highlight}</span>
              <p>{feature.text}</p>
            </div>
        ))

        }
      </div>
    </section>
  )
}

export default Features