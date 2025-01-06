import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Text } from '@react-three/drei';
import * as THREE from 'three';

const TechIcon = ({ position, text, url }) => {
  const meshRef = useRef();

  useFrame(() => {
    meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.01;
  });

  const handleClick = () => {
    if (url) window.open(url, '_blank');
  };

  return (
    <group position={position} ref={meshRef} onClick={handleClick}>
      <Sphere args={[0.5, 16, 16]}>
        <meshStandardMaterial
          color="#00f7ff"
          emissive="#4d4dff"
          emissiveIntensity={0.5}
          metalness={0.8}
          roughness={0.2}
        />
      </Sphere>
      <Text
        position={[0, 0, 0.6]}
        fontSize={0.2}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
      >
        {text}
      </Text>
    </group>
  );
};

const TechSphere = () => {
  const radius = 3;
  const techIcons = [
    { text: 'GitHub', url: 'https://github.com/yourusername' },
    { text: 'React', url: null },
    { text: 'AI', url: null },
    { text: 'Python', url: null },
    { text: 'Web', url: null },
  ];

  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 60 }}
      style={{ height: '400px' }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      {techIcons.map((icon, i) => {
        const theta = (i / techIcons.length) * Math.PI * 2;
        const x = Math.cos(theta) * radius;
        const y = Math.sin(theta) * radius;
        return (
          <TechIcon
            key={i}
            position={[x, y, 0]}
            text={icon.text}
            url={icon.url}
          />
        );
      })}
    </Canvas>
  );
};

export default TechSphere;
