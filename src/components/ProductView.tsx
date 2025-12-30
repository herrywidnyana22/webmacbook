import clsx from "clsx";
import useMacbookStore from "../store";

import Lightning from "./models/threeJS/Lightning";
import ModelSwitcher from "./models/threeJS/ModelSwitcher";

import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { MB14_SCALE, MB16_SCALE } from "../lib/constants";

const ProductView = () => {
    const { selectedColor, setSelectedColor, scale, setScale } = useMacbookStore();
    const [grabbing, setGrabbing] = useState(false)

    const isMobile = useMediaQuery({ query: '(max-width: 1024px)' });
    
    return (
        <section id="productView">
            <h2>Take a closer look</h2>

            <div className="controls">
                <p className="info">Macbook Pro {scale === MB14_SCALE ? '14"' : '16"'} {selectedColor === '#adb5bd' ? 'Silver' : 'Space Black'}</p>

                <div className="flex-center gap-5 mt-5">
                    <div className="colorControl">
                        <div 
                            onClick={() => setSelectedColor('#adb5bd')}
                            className={clsx("bg-neutral-300", selectedColor === '#adb5bd' && 'active')}
                        />
                        <div 
                            onClick={() => setSelectedColor('#2e2c2e')}
                            className={clsx("bg-neutral-900", selectedColor === '#2e2c2e' && 'active')}
                        />
                    </div>

                    <div className="sizeControl">
                        <div
                            onClick={() => setScale(MB14_SCALE)}
                            className={clsx(scale === MB14_SCALE 
                                ? 'bg-white text-black' 
                                : 'bg-transparent text-white'
                            )}
                        >
                            <p>14"</p>
                        </div>
                        <div
                            onClick={() => setScale(MB16_SCALE)}
                            className={clsx(scale === MB16_SCALE 
                                ? 'bg-white text-black' 
                                : 'bg-transparent text-white'
                            )}
                        >
                            <p>16"</p>
                        </div>
                    </div>
                </div>
            </div>

            <Canvas 
                id="canvas"
                camera={{
                    position: [0, 2, 5],
                    fov: 50,
                    near: 0.1,
                    far: 100,
                }}
                onPointerDown={() => setGrabbing(true)}
                onPointerUp={() => setGrabbing(false)}
                onPointerLeave={() => setGrabbing(false)}
                className={grabbing ? 'cursor-grabbing' : 'cursor-grab'}
            >
                <Lightning />
                <ModelSwitcher 
                    scale={isMobile ? scale - 0.03 : scale} 
                    isMobile={isMobile}
                />
            </Canvas>
        </section>
    );
}
 
export default ProductView;