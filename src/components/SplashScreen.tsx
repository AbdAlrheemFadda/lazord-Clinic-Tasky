import React, { useEffect, useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sparkles, Text, Environment, Center } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';
import implantBg from '../assets/images/dental-implant.png';

const ImplantPart = ({ position, rotation, color, metalness, roughness, geometry, delay, name }: any) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useEffect(() => {
    if (meshRef.current) {
      // Disassembling animation
      gsap.to(meshRef.current.position, {
        x: position[0] * 3,
        y: position[1] * 2.5,
        z: position[2] * 2,
        duration: 2.5,
        delay: 1 + delay,
        ease: "expo.out"
      });
      
      gsap.to(meshRef.current.rotation, {
        x: (Math.random() - 0.5) * 2,
        y: (Math.random() - 0.5) * 2,
        duration: 3,
        delay: 1 + delay,
        ease: "power2.out"
      });
    }
  }, [position, delay]);

  return (
    <mesh ref={meshRef} position={[0, 0, 0]} rotation={rotation}>
      <primitive object={geometry} attach="geometry" />
      <meshPhysicalMaterial 
        color={color} 
        metalness={metalness} 
        roughness={roughness} 
        clearcoat={1}
        emissive={color}
        emissiveIntensity={0.03}
      />
    </mesh>
  );
};

const CinematicImplant = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.004;
    }
  });

  const crownGeo = new THREE.CylinderGeometry(0.6, 0.45, 0.8, 32);
  const abutmentGeo = new THREE.CylinderGeometry(0.3, 0.2, 0.6, 32);
  const screwGeo = new THREE.CylinderGeometry(0.2, 0.1, 1.2, 32);

  return (
    <group ref={groupRef}>
      <ImplantPart 
        name="Crown"
        geometry={crownGeo}
        position={[0, 1.2, 0]}
        rotation={[0, 0, 0]}
        color="#f0ede8"
        metalness={0.1}
        roughness={0.15}
        delay={0.2}
      />
      <ImplantPart 
        name="Abutment"
        geometry={abutmentGeo}
        position={[0, 0.2, 0]}
        rotation={[0, 0, 0]}
        color="#c0cdd8"
        metalness={0.85}
        roughness={0.2}
        delay={0.4}
      />
      <ImplantPart 
        name="Screw"
        geometry={screwGeo}
        position={[0, -1.0, 0]}
        rotation={[0, 0, 0]}
        color="#95a5b0"
        metalness={0.95}
        roughness={0.3}
        delay={0.6}
      />
    </group>
  );
};

export const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [visible, setVisible] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Text Reveal
    tl.fromTo(textRef.current, 
      { opacity: 0, scale: 0.8, letterSpacing: "20px" },
      { opacity: 1, scale: 1, letterSpacing: "5px", duration: 1.5, ease: "power4.out" }
    );

    // Fade out splash
    tl.to(containerRef.current, {
      opacity: 0,
      duration: 1,
      delay: 3.5,
      onComplete: () => {
        setVisible(false);
        onComplete();
      }
    });

    return () => { tl.kill(); };
  }, [onComplete]);

  if (!visible) return null;

  return (
    <div ref={containerRef} className="splash-screen">
      <div className="splash-img-bg" style={{ 
        backgroundImage: `url(${implantBg})`,
        opacity: 0.03,
        position: 'absolute',
        inset: 0,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        filter: 'grayscale(1) brightness(1.5)'
      }}></div>
      <div className="splash-bg"></div>
      
      <div className="splash-canvas">
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <color attach="background" args={['#0A1922']} />
          <ambientLight intensity={0.4} />
          <pointLight position={[10, 10, 10]} intensity={1.5} color="#7ec8b8" />
          <pointLight position={[-10, -10, -10]} intensity={0.8} color="#6fa8dc" />
          <Environment preset="city" />
          
          <Center>
            <CinematicImplant />
          </Center>
          
          <Sparkles count={150} scale={10} size={1.5} speed={0.3} opacity={0.3} color="#7ec8b8" />
        </Canvas>
      </div>

      <div className="splash-content">
        <div ref={textRef} className="splash-logo">
          <h1>LAZORD</h1>
          <div className="splash-loader">
            <div className="loader-bar"></div>
          </div>
          <p>M O D E R N   D E N T A L   L A B</p>
        </div>
      </div>
      
      <style>{`
        .splash-screen {
          position: fixed;
          inset: 0;
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #0A1922;
          overflow: hidden;
        }

        .splash-bg {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, #0F2430 0%, #0A1922 100%);
          opacity: 0.85;
        }

        .splash-canvas {
          position: absolute;
          inset: 0;
          z-index: 1;
        }

        .splash-content {
          position: relative;
          z-index: 2;
          text-align: center;
          pointer-events: none;
        }

        .splash-logo h1 {
          font-family: 'Inter', 'Tajawal', sans-serif;
          font-size: 4.5rem;
          font-weight: 900;
          color: #fff;
          margin-bottom: 20px;
          background: linear-gradient(135deg, #e8e5e0, #7ec8b8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          filter: drop-shadow(0 0 30px rgba(126, 200, 184, 0.2));
          letter-spacing: 8px;
        }

        .splash-logo p {
          font-size: 0.85rem;
          color: var(--text-muted);
          margin-top: 15px;
          opacity: 0.7;
          letter-spacing: 3px;
        }

        .splash-loader {
          width: 180px;
          height: 1.5px;
          background: rgba(255, 255, 255, 0.06);
          margin: 0 auto;
          position: relative;
          overflow: hidden;
          border-radius: 2px;
        }

        .loader-bar {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 0;
          background: linear-gradient(90deg, #7ec8b8, #6fa8dc);
          box-shadow: 0 0 12px rgba(126, 200, 184, 0.3);
          animation: load 3s ease-in-out forwards;
        }

        @keyframes load {
          0% { width: 0; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  );
};
