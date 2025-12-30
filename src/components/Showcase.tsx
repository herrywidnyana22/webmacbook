import gsap from 'gsap';

import { useMediaQuery } from 'react-responsive'
import { useGSAP } from '@gsap/react';

const Showcase = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 1024px)' });

    useGSAP(() => {
        if(!isMobile) {
           const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: '#showcase',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true,
                    pin: true,
                }     
            })
            
            tl
                .to('.mask img', {
                    transform: 'scale(1.2)',
                })
                .to('.content', {
                    opacity: 1,
                    y: 0,
                    ease: 'power1.in',
                })
        }
    }, [isMobile]);

    return (
        <section id="showcase">
            <div className="media">
                <video src={'/videos/game.mp4'} autoPlay muted loop playsInline />
                <div className="mask">
                    <img src={'/images/mask-logo.svg'} alt="logo" />
                </div>
            </div>
            <div className="content">
                <div className="wrapper">
                    <div className="lg:max-w-md">
                        <h2>Recket Chip</h2>
                        <div className="space-y-5 mt-7 pe-10">
                            <p>Indroducing{" "}
                                <span className="text-white">
                                    M6, the next generation of Apple silicon for Macbook Pro
                                </span>
                                . M6 powers
                            </p>
                            <p>
                                It drives incredible performance while delivering amazing battery life.
                            </p>
                            <p>
                                A brand-new display engine enables up to 20 hours of video playback on the 16-inch Macbook Pro,
                                so you can work all day and into the night without needing to recharge. And a next-generation media engine
                                accelerates pro workflows like 4K and 8K video editing — all while staying cool and quiet.
                            </p>
                            <p className="text-primary">
                                Learn more about Macbook Pro with M6 Chip
                            </p>
                        </div>
                    </div>

                    <div className="max-w-3xs space-y-14">
                        <div className="space-y-2">
                            <p>Up to</p>
                            <h3>5x Faster</h3>
                            <p>pro rendering performance than M2 chip</p>
                        </div>
                        <div className="space-y-2">
                            <p>Up to</p>
                            <h3>2x Faster</h3>
                            <p>CPU performance than M2 chip</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Showcase