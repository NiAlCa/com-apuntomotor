import React, { useRef, ReactNode, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Vector3 } from 'three';

type RotatingModelProps = {
  children: ReactNode;
  rotationSpeed?: number; // Velocidad de rotación
  rotationAxis?: 'x' | 'y' | 'z'; // Eje de rotación
  rotationPoint?: Vector3; // Punto de rotación
};

const RotatingModel: React.FC<RotatingModelProps> = ({
  children,
  rotationSpeed = 0.001,
  rotationAxis = 'y',
  rotationPoint = new Vector3(0, 0, 0)
}) => {
  const ref = useRef<THREE.Group>(null);

  // Ajustar la posición del grupo para el punto de rotación
  useEffect(() => {
    if (ref.current) {
      ref.current.position.set(rotationPoint.x, rotationPoint.y, rotationPoint.z);
    }
  }, [rotationPoint]);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation[rotationAxis] -= rotationSpeed;
    }
  });

  return <group ref={ref}>{children}</group>;
};

export default RotatingModel;
