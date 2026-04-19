import React, { useRef, useMemo, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Float, Sparkles, ContactShadows, Environment, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import clinicImg from '../assets/images/clinic-interior.webp';
import techImg from '../assets/images/dental-technology.webp';
import smileImg from '../assets/images/smile-closeup.webp';
import crownImg from '../assets/images/dental-crown.webp';

gsap.registerPlugin(ScrollTrigger);

// Holographic UI elements component
const HologramPanel = ({ position, texture, title, delay = 0 }: any) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const borderRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y += Math.sin(state.clock.elapsedTime + delay) * 0.0008;
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.4 + delay) * 0.03;
    }
  });

  return (
    <group position={position}>
      {/* Border */}
      <mesh ref={borderRef}>
        <planeGeometry args={[1.6, 1.0]} />
        <meshBasicMaterial color="#7ec8b8" wireframe transparent opacity={0.1} />
      </mesh>
      
      {/* Content Image */}
      <mesh ref={meshRef}>
        <planeGeometry args={[1.5, 0.9]} />
        <meshBasicMaterial 
          map={texture} 
          transparent 
          opacity={0.4} 
          side={THREE.DoubleSide}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
      
      {/* UI Lines */}
      <mesh position={[0, -0.55, 0]}>
        <planeGeometry args={[1.5, 0.015]} />
        <meshBasicMaterial color="#7ec8b8" transparent opacity={0.2} />
      </mesh>
    </group>
  );
};

// Procedural Medical Interface Backdrop
const MedicalGrid = () => {
  return (
    <group rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
      <gridHelper args={[40, 40, "#1a3a4a", "#0d1a2a"]} />
      <Sparkles count={60} scale={20} size={0.8} speed={0.15} color="#7ec8b8" />
    </group>
  );
};

export const Scene = () => {
  const { camera } = useThree();
  const groupRef = useRef<THREE.Group>(null);
  const crownRef = useRef<THREE.Mesh>(null);
  const abutmentRef = useRef<THREE.Mesh>(null);
  const screwRef = useRef<THREE.Mesh>(null);
  const hologramsGroupRef = useRef<THREE.Group>(null);

  // Load project images
  const textures = useTexture({
    clinic: clinicImg,
    tech: techImg,
    smile: smileImg,
    crown: crownImg
  });

  // Thread geometry for the screw
  const threadGeometry = useMemo(() => {
    const points: THREE.Vector3[] = [];
    const turns = 8;
    const height = 1.4;
    for (let i = 0; i <= turns * 32; i++) {
      const t = i / (turns * 32);
      const angle = t * turns * Math.PI * 2;
      const radius = 0.2 - t * 0.08;
      const y = -t * height + height / 2;
      points.push(new THREE.Vector3(Math.cos(angle) * radius, y, Math.sin(angle) * radius));
    }
    return new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points), 128, 0.03, 8, false);
  }, []);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5,
      }
    });

    if (groupRef.current && crownRef.current && abutmentRef.current && screwRef.current) {
      // Cinematic disassembly sequence
      tl.to(crownRef.current.position, { y: 3.5, z: 0.5, duration: 2 }, 0)
        .to(abutmentRef.current.position, { y: 1.8, duration: 2 }, 0)
        .to(screwRef.current.position, { y: -1.2, duration: 2 }, 0)
        .to(groupRef.current.rotation, { y: Math.PI * 1.5, duration: 4 }, 0);
      
      // Parallax camera movement
      tl.to(camera.position, { x: 2, z: 8, duration: 2 }, 0)
        .to(camera.position, { x: -2, y: 1, duration: 2 }, 2);

      // Holograms entrance/fade
      if (hologramsGroupRef.current) {
        tl.to(hologramsGroupRef.current.position, { y: -1, z: 2, duration: 2 }, 1)
          .to(hologramsGroupRef.current.rotation, { y: Math.PI * 0.2, duration: 4 }, 0);
      }
    }
  }, [camera]);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.0015;
      groupRef.current.position.y = Math.sin(t * 0.3) * 0.08;
    }
  });

  return (
    <>
      <Environment preset="night" />
      <ambientLight intensity={0.15} />
      
      {/* Volumetric Spotlights — Softer, calming tones */}
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1.2} color="#7ec8b8" castShadow />
      <spotLight position={[-10, 5, 5]} angle={0.2} penumbra={1} intensity={0.8} color="#6fa8dc" />
      <pointLight position={[0, 2, 5]} intensity={0.6} color="#e8e5e0" />

      <MedicalGrid />

      <group ref={groupRef} position={[0, 0, 0]}>
        {/* Animated Implant Model */}
        <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.3}>
          <group>
            {/* Crown */}
            <mesh ref={crownRef} position={[0, 1.4, 0]}>
              <cylinderGeometry args={[0.6, 0.45, 0.9, 32]} />
              <meshPhysicalMaterial 
                color="#f0ede8" 
                metalness={0.05} 
                roughness={0.12} 
                clearcoat={1} 
                transmission={0.1}
                thickness={0.5}
              />
            </mesh>
            
            {/* Abutment */}
            <mesh ref={abutmentRef} position={[0, 0.5, 0]}>
              <cylinderGeometry args={[0.3, 0.2, 0.7, 32]} />
              <meshPhysicalMaterial color="#c0cdd8" metalness={0.85} roughness={0.15} />
            </mesh>
            
            {/* Threaded Screw */}
            <mesh ref={screwRef} position={[0, -0.6, 0]} geometry={threadGeometry}>
              <meshPhysicalMaterial color="#95a5b0" metalness={0.95} roughness={0.2} />
            </mesh>
            <mesh position={[0, -0.6, 0]}>
              <cylinderGeometry args={[0.15, 0.08, 1.4, 32]} />
              <meshPhysicalMaterial color="#95a5b0" metalness={0.95} roughness={0.2} />
            </mesh>
          </group>
        </Float>

        {/* Floating Holograms Group */}
        <group ref={hologramsGroupRef}>
          <HologramPanel position={[-3, 1, -2]} texture={textures.tech} delay={0} />
          <HologramPanel position={[3, 2, -3]} texture={textures.clinic} delay={1} />
          <HologramPanel position={[-2.5, -1.5, -1]} texture={textures.smile} delay={2} />
          <HologramPanel position={[3.5, -1, -2]} texture={textures.crown} delay={3} />
        </group>
      </group>

      <ContactShadows position={[0, -2, 0]} opacity={0.25} scale={20} blur={2.5} far={4.5} />
      
      {/* Background Ambient Particles — Reduced for calm */}
      <Sparkles count={180} scale={15} size={1} speed={0.25} opacity={0.15} color="#7ec8b8" />
    </>
  );
};
