import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useRef, useMemo } from "react";

function Stars(props) {
  const ref = useRef();

  // Generate particles
  const particles = useMemo(() => {
    const positions = new Float32Array(3000 * 3);

    for (let i = 0; i < 3000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 15;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 15;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 15;
    }

    return positions;
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * 0.02;
      ref.current.rotation.y += delta * 0.03;
    }
  });

  return (
    <Points
      ref={ref}
      positions={particles}
      stride={3}
      frustumCulled
      {...props}
    >
      <PointMaterial
        transparent
        color="#8b5cf6"
        size={0.03}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
}

export default function ThreeBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 5] }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.5} />
        <Stars />
      </Canvas>
    </div>
  );
}