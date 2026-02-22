"use client";

import { Canvas } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere } from "@react-three/drei";

export default function HeroScene() {
  return (
    <div className="h-[400px] w-full md:h-[500px]">
      <Canvas camera={{ position: [0, 0, 4] }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[2, 2, 2]} intensity={1} />

        <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
          <Sphere args={[1.2, 64, 64]}>
            <MeshDistortMaterial
              color="white"
              distort={0.4}
              speed={2}
              roughness={0.2}
            />
          </Sphere>
        </Float>
      </Canvas>
    </div>
  );
}