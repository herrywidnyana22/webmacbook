import gsap from "gsap";
import Macbook16Model from "../Macbook16";
import Macbook14Model from "../Macbook14";

import { PresentationControls } from "@react-three/drei";
import { useRef, type RefObject } from "react";
import { useGSAP } from "@gsap/react";
import { Group } from "three";
import { ANIMATION_DURATION, OFFSET_DISTANCE, SCALE_DESKTOP, SCALE_MOBILE } from "../../../lib/constants";

const fadeMeshes = (meshRef: RefObject<Group | null>, isVisible: boolean) => {
    if(!meshRef.current) return;

    meshRef.current?.traverse((child: any) => {
        if(child.isMesh) {
            child.material.transparent = true

            gsap.to(child.material, {
                duration: ANIMATION_DURATION,
                opacity: isVisible ? 1 : 0,
            });
        }
    });
}

const moveMesh = (meshRef: RefObject<Group | null>, toPosition: number) => {
    if(!meshRef.current) return;

    gsap.to(meshRef.current.position, {
        duration: ANIMATION_DURATION,
        x: toPosition,
    });
}

const ModelSwitcher = ({scale, isMobile}: ModelSwitcherType) => {
    const macbook16Ref = useRef(null);
    const macbook14Ref = useRef(null);

    const showLargerModel = scale === SCALE_DESKTOP || scale == SCALE_MOBILE

    useGSAP(() => {

        moveMesh(macbook16Ref, showLargerModel ? 0 : OFFSET_DISTANCE);
        fadeMeshes(macbook16Ref, showLargerModel ? true : false);

        moveMesh(macbook14Ref, showLargerModel ? -OFFSET_DISTANCE : 0);
        fadeMeshes(macbook14Ref, showLargerModel ? false : true);

    }, [scale]);      

    const controlsConfig = {
        snap: true,
        speed: 1,
        zoom: 1,
        azimuth: [-Infinity, Infinity] as [number, number],
        config: { mass: 1, tension: 0, friction: 26 },
    }
    
    return (
        <>
            <PresentationControls {...controlsConfig}>
                <group ref={macbook16Ref}>
                    <Macbook16Model scale={isMobile ? SCALE_MOBILE : SCALE_DESKTOP}/>
                </group>
            </PresentationControls>
            <PresentationControls {...controlsConfig}>
                <group ref={macbook14Ref}>
                    <Macbook14Model scale={isMobile ? 0.03 : 0.06}/>
                </group>
            </PresentationControls>
        </>
    );
}
 
export default ModelSwitcher;
