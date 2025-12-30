import gsap from "gsap";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { performanceImages, performanceImgPositions } from "../lib/constants";
import { useMediaQuery } from 'react-responsive'

gsap.registerPlugin(ScrollTrigger);

const Performance = () => {
  const performanceRef = useRef<HTMLElement>(null);
  const isMobile = useMediaQuery({ query: '(max-width: 1024px)' });

  useGSAP(() => {
    gsap.fromTo(
        '.content p',
        {opacity: 0, y: 10},
        {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger:{
                trigger: '.content p',
                start: 'top bottom',
                end: 'top center',
                scrub: true,
                invalidateOnRefresh: true,
            }
        }
    )

    if(isMobile) return

    const tl = gsap.timeline({
        defaults:{
            ease: 'power1.inOut', 
            duration: 2,
            overwrite: 'auto',
        },
        scrollTrigger: {
            trigger: performanceRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
            invalidateOnRefresh: true,
        }
    })

    performanceImgPositions.forEach((pos: any) => {
        if(pos.id === "p5") return;

        const toVars: Record<string, string> = {};

        if (pos.left !== undefined) toVars.left = `${pos.left}%`;
        if (pos.right !== undefined) toVars.right = `${pos.right}%`;
        if (pos.bottom !== undefined) toVars.bottom = `${pos.bottom}%`;
        if (pos.transform !== undefined) toVars.transform = pos.transform;

        tl.to(`.${pos.id}`, toVars, 0)
    })

  }, { scope: performanceRef, dependencies: [isMobile] });


  return (
    <section id="performance" ref={performanceRef}>
        <h2>Next-level graphics performance. Game on</h2>

        <div className="wrapper">
            {
                performanceImages.map((image) => (
                    <img
                        key={image.id}
                        className={image.id}
                        src={image.src}
                        alt={image.id}
                    />
                ))
            }
        </div>
        <div className="content">
            <p>
                Run graphics-intensive apps and games with ease on the MacBook Pro’s powerful GPU.
                The <span className="text-white">M6 chip</span> with advanced architecture delivers up to 
                <span className="text-white"> 2x faster graphics performance </span>than the previous generation,
                so you can edit high-resolution photos and videos, design 3D models, and 
                <span className="text-white"> play the latest games like a pro.</span>
                
            </p>
        </div>
    </section> 
  )
}

export default Performance