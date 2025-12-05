import React, { useEffect, useRef } from "react";
import { useThree } from "@react-three/fiber";
import { OrbitControls as OrbitControlsImpl } from "three-stdlib";
import { OrbitControls } from "@react-three/drei";

export default function HoloControls() {
  const controlsRef = useRef<OrbitControlsImpl>(null);
  const { camera } = useThree();

  useEffect(() => {
    if (controlsRef.current) {
      // Configurar posición inicial de la cámara
      camera.position.set(0, 1.5, 3);
      camera.lookAt(0, 1, 0);

      // Configurar controles
      controlsRef.current.target.set(0, 1, 0);
      controlsRef.current.minDistance = 2;
      controlsRef.current.maxDistance = 8;
      controlsRef.current.autoRotate = true;
      controlsRef.current.autoRotateSpeed = 3;
      controlsRef.current.enableDamping = true;
      controlsRef.current.dampingFactor = 0.05;
      controlsRef.current.enableZoom = true;
      controlsRef.current.enablePan = true;
      controlsRef.current.update();
    }
  }, [camera]);

  return (
    <OrbitControls
      ref={controlsRef}
      enableZoom
      enablePan
      enableRotate
      autoRotate
    />
  );
}
