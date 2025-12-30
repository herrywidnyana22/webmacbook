import gsap from "gsap";

import { useGSAP } from "@gsap/react";
import { useMediaQuery } from "react-responsive"

const Highlight = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 1024px)' });

  useGSAP(() => {
    gsap.to(['.left-column', '.right-column'], {
      scrollTrigger:{
          trigger: '#highlight',
          start: isMobile ? 'bottom bottom' : 'top center',
      },
      y: 0,
      opacity: 1,
      stagger: 0.5,
      duration: 1,
      ease: 'power1.inOut'
    })
  }, [isMobile]);

  return (
    <section id='highlight'>
      <h2>There's never been a better time to upgrade</h2>
      <h3>Here's what you get with the new Macbook with M6 Chip</h3>

      <div className="masonry">
        <div className="left-column">
          <div>
            <img src="/images/laptop.png" alt="laptop" />
            <p>Fly through demanding tasks up to 14.2x faster</p>
          </div> 
          <div>
            <img src="/images/sun.png" alt="sun" />
            <p>
              A stunning<br/>
              Liquid Retina XDR<br/>
              display<br/>
            </p>
          </div> 
        </div>
        <div className="right-column">
          <div className="apple-gradient">
            <img src="/images/ai.png" alt="AI" />
            <p>
              Built for<br/>
              <span>Apple Intelligence</span>
            </p>
          </div> 
          <div>
            <img src="/images/battery.png" alt="battery" />
            <p>
              Up to
              <span className="green-gradient">{' '}16 more hours{' '}</span><br/>
              battery life.
              <span className="text-dark-100">
                {' '}(Up to 27 hours total.){' '}
              </span>
            </p>
          </div> 
        </div>
      </div>
    </section>
  )
}

export default Highlight