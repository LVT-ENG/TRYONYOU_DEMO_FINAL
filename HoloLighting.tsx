import React from "react";

export default function HoloLighting() {
  return (
    <>
      {/* Luz principal frontal (key light) */}
      <directionalLight
        position={[5, 8, 5]}
        intensity={1.2}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />

      {/* Luz de relleno (fill light) */}
      <directionalLight position={[-5, 6, -5]} intensity={0.6} />

      {/* Luz de fondo (back light) */}
      <directionalLight position={[0, 4, -8]} intensity={0.4} color="#ffffff" />

      {/* Luz ambiental suave */}
      <ambientLight intensity={0.5} />

      {/* Luz puntual para efecto showroom */}
      <pointLight position={[0, 10, 0]} intensity={0.8} color="#e8f4f8" />

      {/* Luz de acento superior */}
      <pointLight position={[8, 12, 8]} intensity={0.5} color="#f0f8ff" />
    </>
  );
}
