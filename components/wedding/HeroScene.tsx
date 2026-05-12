"use client";

import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  AdaptiveDpr,
  Environment,
  Float,
  Html,
  OrbitControls,
  PerspectiveCamera,
  Sparkles,
  Stars,
  Text,
  useTexture,
} from "@react-three/drei";
import * as THREE from "three";
import { heroPhotos } from "@/data/wedding";

const frameLayouts = [
  { position: [-3.6, 1.05, -1.3] as [number, number, number], rotation: [0.03, 0.42, -0.12] as [number, number, number], size: [1.7, 0.78] as [number, number] },
  { position: [3.55, 1.0, -1.15] as [number, number, number], rotation: [-0.05, -0.4, 0.11] as [number, number, number], size: [1.0, 1.55] as [number, number] },
  { position: [-2.9, -1.58, -1.0] as [number, number, number], rotation: [-0.08, 0.28, 0.12] as [number, number, number], size: [0.82, 1.45] as [number, number] },
  { position: [2.95, -1.48, -1.0] as [number, number, number], rotation: [0.06, -0.24, -0.11] as [number, number, number], size: [1.0, 1.55] as [number, number] },
  { position: [0, -2.05, -1.55] as [number, number, number], rotation: [-0.06, 0, 0] as [number, number, number], size: [1.05, 1.38] as [number, number] },
];

function RotatingRings() {
  const group = useRef<THREE.Group>(null);
  const diamond = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.18;
      group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.07;
    }

    if (diamond.current) {
      diamond.current.rotation.y -= delta * 0.65;
      diamond.current.position.y = 1.12 + Math.sin(state.clock.elapsedTime * 1.35) * 0.07;
    }
  });

  return (
    <group ref={group}>
      <Float speed={1.05} rotationIntensity={0.28} floatIntensity={0.4}>
        <mesh rotation={[Math.PI / 2, 0.15, 0.05]} position={[-0.58, -0.06, 0]}>
          <torusGeometry args={[1.05, 0.075, 24, 96]} />
          <meshStandardMaterial color="#f6d58a" metalness={1} roughness={0.16} emissive="#3d2505" emissiveIntensity={0.05} />
        </mesh>
        <mesh rotation={[Math.PI / 2, -0.18, 0.12]} position={[0.55, 0.04, 0.06]}>
          <torusGeometry args={[1.05, 0.075, 24, 96]} />
          <meshStandardMaterial color="#fff0b8" metalness={1} roughness={0.12} emissive="#5c400c" emissiveIntensity={0.05} />
        </mesh>
        <mesh ref={diamond} position={[0, 1.12, 0]} scale={[0.5, 0.5, 0.5]}>
          <octahedronGeometry args={[0.7, 0]} />
          <meshPhysicalMaterial color="#f7fbff" roughness={0.05} metalness={0.1} transmission={0.52} thickness={0.55} transparent opacity={0.72} />
        </mesh>
      </Float>
    </group>
  );
}

function FloatingPhotoFrames() {
  const texturePaths = heroPhotos.map((photo) => photo.src);
  const textures = useTexture(texturePaths);
  const group = useRef<THREE.Group>(null);

  useMemo(() => {
    textures.forEach((texture) => {
      texture.colorSpace = THREE.SRGBColorSpace;
      texture.anisotropy = 4;
    });
  }, [textures]);

  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.18) * 0.05;
  });

  return (
    <group ref={group}>
      {frameLayouts.map((frame, index) => (
        <Float key={texturePaths[index]} speed={0.95 + index * 0.06} floatIntensity={0.22} rotationIntensity={0.14}>
          <group position={frame.position} rotation={frame.rotation}>
            <mesh position={[0, 0, -0.018]}>
              <boxGeometry args={[frame.size[0] + 0.13, frame.size[1] + 0.13, 0.035]} />
              <meshStandardMaterial color="#fff7ec" roughness={0.5} metalness={0.05} />
            </mesh>
            <mesh>
              <planeGeometry args={frame.size} />
              <meshBasicMaterial map={textures[index]} toneMapped={false} side={THREE.DoubleSide} />
            </mesh>
          </group>
        </Float>
      ))}
    </group>
  );
}

function LuxeCard3D() {
  const card = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!card.current) return;
    card.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.38) * 0.1;
    card.current.rotation.x = Math.cos(state.clock.elapsedTime * 0.3) * 0.05;
  });

  return (
    <Float speed={0.95} rotationIntensity={0.12} floatIntensity={0.3}>
      <group ref={card} position={[0, -0.35, -0.25]}>
        <mesh>
          <boxGeometry args={[3.45, 4.75, 0.08]} />
          <meshStandardMaterial color="#f9efe2" roughness={0.42} metalness={0.05} />
        </mesh>
        <mesh position={[0, 0, 0.052]}>
          <planeGeometry args={[3.18, 4.48]} />
          <meshStandardMaterial color="#fffaf2" roughness={0.6} />
        </mesh>
        <Text position={[0, 1.12, 0.095]} fontSize={0.2} color="#9f7233" anchorX="center" anchorY="middle" letterSpacing={0.18}>
          THE WEDDING OF
        </Text>
        <Text position={[0, 0.58, 0.095]} fontSize={0.46} color="#241812" anchorX="center" anchorY="middle">
          S + T
        </Text>
        <Text position={[0, -0.05, 0.095]} fontSize={0.18} color="#5d4432" anchorX="center" anchorY="middle">
          SATISH MAHARAJ
        </Text>
        <Text position={[0, -0.42, 0.095]} fontSize={0.14} color="#b08a52" anchorX="center" anchorY="middle">
          &
        </Text>
        <Text position={[0, -0.78, 0.095]} fontSize={0.18} color="#5d4432" anchorX="center" anchorY="middle">
          TYLA READY
        </Text>
      </group>
    </Float>
  );
}

function PetalField() {
  const petals = useMemo(
    () =>
      Array.from({ length: 24 }, (_, i) => ({
        id: i,
        x: Math.sin(i * 1.9) * 7.5,
        y: Math.cos(i * 0.8) * 4.2,
        z: -((i * 17) % 40) / 10,
        scale: 0.035 + (i % 5) * 0.012,
        speed: 0.14 + (i % 7) * 0.017,
      })),
    [],
  );

  const petalRefs = useRef<Array<THREE.Mesh | null>>([]);

  useFrame((state) => {
    petalRefs.current.forEach((petal, i) => {
      if (!petal) return;
      petal.rotation.x += 0.005 + (i % 3) * 0.0015;
      petal.rotation.y += 0.007;
      petal.position.y = petals[i].y + Math.sin(state.clock.elapsedTime * petals[i].speed + i) * 0.38;
      petal.position.x = petals[i].x + Math.cos(state.clock.elapsedTime * petals[i].speed + i * 0.4) * 0.16;
    });
  });

  return (
    <group>
      {petals.map((petal, i) => (
        <mesh
          key={petal.id}
          ref={(el) => {
            petalRefs.current[i] = el;
          }}
          position={[petal.x, petal.y, petal.z]}
          scale={[petal.scale * 1.25, petal.scale, petal.scale * 0.18]}
        >
          <sphereGeometry args={[1, 10, 6]} />
          <meshStandardMaterial color={i % 2 ? "#f5c7c7" : "#f6ead4"} roughness={0.7} transparent opacity={0.68} />
        </mesh>
      ))}
    </group>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      className="hero-canvas"
      dpr={[1, 1.5]}
      gl={{ powerPreference: "high-performance", antialias: false }}
      camera={{ position: [0, 0.15, 7.2], fov: 38 }}
    >
      <AdaptiveDpr pixelated />
      <PerspectiveCamera makeDefault position={[0, 0.15, 7.2]} fov={38} />
      <color attach="background" args={["#080506"]} />
      <ambientLight intensity={0.72} />
      <directionalLight position={[4, 6, 3]} intensity={1.55} color="#fff3d3" />
      <pointLight position={[-4, 1.8, 4]} intensity={13} color="#ffb8bf" />
      <pointLight position={[3, -1.8, 2]} intensity={8} color="#d7ffc9" />
      <Suspense fallback={<Html center className="three-loading">Preparing the 3D invite…</Html>}>
        <Stars radius={44} depth={18} count={1100} factor={3.2} saturation={0} fade speed={0.28} />
        <Sparkles count={70} scale={[8, 5, 5]} size={2.2} speed={0.25} color="#f6d58a" />
        <PetalField />
        <FloatingPhotoFrames />
        <group position={[0, -0.1, 0]}>
          <RotatingRings />
        </group>
        <group position={[0, -0.55, -1.1]} scale={0.6}>
          <LuxeCard3D />
        </group>
        <Environment preset="sunset" />
      </Suspense>
      <OrbitControls enablePan={false} enableZoom={false} autoRotate autoRotateSpeed={0.25} minPolarAngle={Math.PI / 2.6} maxPolarAngle={Math.PI / 1.8} />
    </Canvas>
  );
}
