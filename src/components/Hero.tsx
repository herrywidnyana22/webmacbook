import { useRef, useEffect } from 'react';

const Hero = () => {
    const videoRef = useRef<HTMLVideoElement>(null)

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 2;
        }
    }, []);

    return (
        <section id='hero'>
            <div>
                <h1>Macbook Pro</h1>
                <img src='/images/title.png' alt="title" />
            </div>
    
            <video
                ref={videoRef}
                src={'/videos/hero.mp4'}
                muted
                autoPlay
                playsInline
            />

            <button>Buy</button>
            <p>From $1599 or $133 for 12 months</p>
        </section>
    );
}
 
export default Hero;