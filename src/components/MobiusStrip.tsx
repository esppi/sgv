import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function MobiusGeometry() {
  const meshRef = useRef<THREE.Mesh>(null);
  const targetVelocity = useRef(0);
  const smoothVelocity = useRef(0);
  const lastScrollY = useRef(0);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const dy = Math.abs(window.scrollY - lastScrollY.current);
        targetVelocity.current = Math.min(dy * 0.08, 1.5);
        lastScrollY.current = window.scrollY;
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const geometry = useMemo(() => {
    const segments = 120;
    const width = 0.6;
    const radius = 3;
    const positions: number[] = [];
    const colors: number[] = [];
    const indices: number[] = [];
    const strips = 16;

    for (let i = 0; i <= segments; i++) {
      const u = (i / segments) * Math.PI * 2;
      for (let j = 0; j <= strips; j++) {
        const v = (j / strips - 0.5) * width;
        const x = (radius + v * Math.cos(u / 2)) * Math.cos(u);
        const y = (radius + v * Math.cos(u / 2)) * Math.sin(u);
        const z = v * Math.sin(u / 2);
        positions.push(x, y, z);

        const t = i / segments;
        const greenAmount = 0.3 + 0.7 * Math.abs(Math.sin(t * Math.PI * 2));
        const r = 0.05 + greenAmount * 0.75;
        const g = 0.05 + greenAmount * 0.94;
        const b = 0.05 + greenAmount * 0.02;
        colors.push(r, g, b);
      }
    }

    for (let i = 0; i < segments; i++) {
      for (let j = 0; j < strips; j++) {
        const a = i * (strips + 1) + j;
        const b = a + strips + 1;
        indices.push(a, b, a + 1);
        indices.push(b, b + 1, a + 1);
      }
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
    geo.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));
    geo.setIndex(indices);
    geo.computeVertexNormals();
    return geo;
  }, []);

  useFrame((state, delta) => {
    if (!meshRef.current) return;

    // Decay target toward zero when not scrolling
    targetVelocity.current *= 0.96;

    // Heavy lerp — smoothVelocity catches up to target very gently
    smoothVelocity.current += (targetVelocity.current - smoothVelocity.current) * 0.03;

    const v = smoothVelocity.current;
    const t = state.clock.elapsedTime;

    // Slow base spin + gentle scroll boost
    meshRef.current.rotation.y += delta * 0.04 + v * delta * 0.6;

    // Gentle wobble + z-axis tilt
    meshRef.current.rotation.x = Math.sin(t * 0.2) * 0.2 + 0.3;
    meshRef.current.rotation.z = Math.cos(t * 0.15) * 0.2 + 0.4 + v * Math.sin(t * 0.8) * 0.3;
  });

  return (
    <mesh ref={meshRef} geometry={geometry} scale={1.2}>
      <meshStandardMaterial
        vertexColors
        transparent
        opacity={0.55}
        side={THREE.DoubleSide}
        roughness={0.4}
        metalness={0.6}
      />
    </mesh>
  );
}

export default function MobiusStrip() {
  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ contain: "strict", willChange: "transform" }}
    >
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{
          alpha: true,
          antialias: false,
          powerPreference: "high-performance",
          stencil: false,
          depth: true,
        }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} color="#CBFD12" />
        <directionalLight position={[-5, -3, -5]} intensity={0.3} color="#0174BE" />
        <MobiusGeometry />
      </Canvas>
    </div>
  );
}
