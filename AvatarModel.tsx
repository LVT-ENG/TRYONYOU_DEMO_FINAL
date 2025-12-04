import React, { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { Group } from "three";

interface Outfit {
  id: number;
  name: string;
  color: string;
}

interface AvatarModelProps {
  outfit: Outfit;
}

export default function AvatarModel({ outfit }: AvatarModelProps) {
  const groupRef = useRef<Group>(null);

  useEffect(() => {
    if (groupRef.current) {
      groupRef.current.position.y = 0;
    }
  }, [outfit]);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.001;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Cabeza */}
      <mesh position={[0, 1.8, 0]} castShadow>
        <sphereGeometry args={[0.25, 32, 32]} />
        <meshStandardMaterial
          color="#f4a460"
          metalness={0}
          roughness={0.5}
        />
      </mesh>

      {/* Cuerpo */}
      <mesh position={[0, 1.2, 0]} castShadow>
        <boxGeometry args={[0.4, 0.6, 0.2]} />
        <meshStandardMaterial
          color={outfit?.color || "#1a1a1a"}
          metalness={0.1}
          roughness={0.6}
        />
      </mesh>

      {/* Brazos izquierdo */}
      <mesh position={[-0.3, 1.2, 0]} castShadow>
        <cylinderGeometry args={[0.08, 0.08, 0.5, 16]} />
        <meshStandardMaterial
          color="#f4a460"
          metalness={0}
          roughness={0.5}
        />
      </mesh>

      {/* Brazo derecho */}
      <mesh position={[0.3, 1.2, 0]} castShadow>
        <cylinderGeometry args={[0.08, 0.08, 0.5, 16]} />
        <meshStandardMaterial
          color="#f4a460"
          metalness={0}
          roughness={0.5}
        />
      </mesh>

      {/* Pierna izquierda */}
      <mesh position={[-0.15, 0.6, 0]} castShadow>
        <cylinderGeometry args={[0.1, 0.1, 0.8, 16]} />
        <meshStandardMaterial
          color="#333333"
          metalness={0}
          roughness={0.7}
        />
      </mesh>

      {/* Pierna derecha */}
      <mesh position={[0.15, 0.6, 0]} castShadow>
        <cylinderGeometry args={[0.1, 0.1, 0.8, 16]} />
        <meshStandardMaterial
          color="#333333"
          metalness={0}
          roughness={0.7}
        />
      </mesh>
    </group>
  );
}
