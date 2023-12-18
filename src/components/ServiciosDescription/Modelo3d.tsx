import React, { Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { Loader, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import {Car} from "../../assets/3d/Car"
import { Vector3 } from 'three';

import RotatingModel from './RotatingModel'; 
import { Rueda } from '../../assets/3d/Rueda';
import { Ventilador } from '../../assets/3d/Ventilador';
import { Mecanica } from '../../assets/3d/Mecanica';
import { Luces } from '../../assets/3d/Luces';
import { Carkey } from '../../assets/3d/Carkey';
import { CarPlate } from '../../assets/3d/CarPlate';
import { Carbatery } from '../../assets/3d/Carbatery';
import { Itv } from '../../assets/3d/Itv';


type Modelo3dProps = {
  icono: string;
};

export const Modelo3d: React.FC<Modelo3dProps> = ({icono}) => {
  const cameraRef = useRef<THREE.PerspectiveCamera>(null);






  return (
  
    <div style={{ width: '100%', height: '40vh', overflow:"visible" }}>


{ icono === "neumatico" &&
  <>
  <Canvas>
  <PerspectiveCamera makeDefault ref={cameraRef} position={[150, 0, 0]} />
  <ambientLight intensity={5} />
  <Suspense fallback={true}>
    <pointLight position={[35, 35, 0]} intensity={0.4}/>
    <pointLight position={[-35, 35, 0]} intensity={0.4}/>
    <RotatingModel
     rotationSpeed={0.005}   // Velocidad de rotación
     rotationAxis="y"        // Eje de rotación
     rotationPoint={new Vector3(5, 0, 20.25)} // Punto de rotación
    
    >
      <Rueda />
    </RotatingModel>
  </Suspense>
  <OrbitControls />
</Canvas>
<Loader
 dataInterpolation={(p) => `Loading ${p.toFixed(2)}%`}
/>

</>
}


{ icono === "aire" &&
<>
<Canvas>
        <PerspectiveCamera makeDefault ref={cameraRef} position={[0, 0, 3]} />
        <ambientLight intensity={5} />
        <Suspense fallback={null}>
          <pointLight position={[35, 35, 0]} intensity={0.4}/>
          <pointLight position={[-35, 35, 0]} intensity={0.4}/>
          <RotatingModel
          rotationSpeed={0.005}   // Velocidad de rotación
          rotationAxis="y"        // Eje de rotación
          rotationPoint={new Vector3(0, -0.75, 1.25)} // Punto de rotación
          >
            <Ventilador />
          </RotatingModel>
        </Suspense>
        <OrbitControls />
      </Canvas>
      <Loader
 dataInterpolation={(p) => `Loading ${p.toFixed(2)}%`}
/>

</>
}


{ icono === "mecanica" &&

<>
<Canvas>
        <PerspectiveCamera makeDefault ref={cameraRef} position={[350, 50, 0]} />
        <ambientLight intensity={5} />
        <Suspense fallback={null}>
          <pointLight position={[35, 35, 0]} intensity={0.4}/>
          <pointLight position={[-35, 35, 0]} intensity={0.4}/>
          <RotatingModel 
              rotationSpeed={0.005}   // Velocidad de rotación
              rotationAxis="y"        // Eje de rotación
              rotationPoint={new Vector3(200, -10, 10.25)} // Punto de rotación
          >
            <Mecanica />
          </RotatingModel>
        </Suspense>
        <OrbitControls />
      </Canvas>

      <Loader
 dataInterpolation={(p) => `Loading ${p.toFixed(2)}%`}
/>

</>
  
}

{ icono === "luces" &&
  <>
  <Canvas>
        <PerspectiveCamera makeDefault ref={cameraRef} position={[1, 1, 0]} />
        <ambientLight intensity={5} />
        <Suspense fallback={null}>
      
          <RotatingModel
                        rotationSpeed={0.005}   // Velocidad de rotación
                        rotationAxis="y"        // Eje de rotación
                        >
            <Luces />
          </RotatingModel>
        </Suspense>
        <OrbitControls />
      </Canvas>
      <Loader
 dataInterpolation={(p) => `Loading ${p.toFixed(2)}%`}
/>

</>
      }

 { icono === "llave" &&
  
  <>
  <Canvas>
        <PerspectiveCamera makeDefault ref={cameraRef} position={[0, 1, 1]} />
        <ambientLight intensity={5} />
        <Suspense fallback={null}>
      
          <RotatingModel>
            <Carkey />
          </RotatingModel>
        </Suspense>
        <OrbitControls />
      </Canvas>
      <Loader
 dataInterpolation={(p) => `Loading ${p.toFixed(2)}%`}
/>

</>
      
      }
   


{ icono === "matricula" &&


<>
<Canvas>
        <PerspectiveCamera makeDefault ref={cameraRef} position={[20, 1, 1]} />
        <ambientLight intensity={5} />
        <Suspense fallback={null}>
      
          <RotatingModel>
            <CarPlate />
          </RotatingModel>
        </Suspense>
        <OrbitControls />
      </Canvas>
      
      <Loader
 dataInterpolation={(p) => `Loading ${p.toFixed(2)}%`}
/>

</>
      }









{ icono === "visitanos" && 
<>
<Canvas>
      <PerspectiveCamera makeDefault ref={cameraRef} position={[250, 50, 0]} />
      <ambientLight intensity={5} />
      <Suspense fallback={null}>
        <pointLight position={[35, 35, 0]} intensity={0.4} />
        <pointLight position={[-35, 35, 0]} intensity={0.4} />
        <RotatingModel>
          <Car />
        </RotatingModel>
      </Suspense>
      <OrbitControls />
    </Canvas>
    <Loader
 dataInterpolation={(p) => `Loading ${p.toFixed(2)}%`}
/>

</>
    
    }


   { icono === "electronica" && 


<>
   <Canvas>
        <PerspectiveCamera makeDefault ref={cameraRef} position={[1, 1, 1]} />
        <ambientLight intensity={5} />
        <Suspense fallback={null}>
      
          <RotatingModel>
            <Carbatery />
          </RotatingModel>
        </Suspense>
        <OrbitControls />
      </Canvas>
      <Loader
 dataInterpolation={(p) => `Loading ${p.toFixed(2)}%`}
/>

</>
      
      }

{ icono === "itv" &&
<>
<Canvas>
        <PerspectiveCamera makeDefault ref={cameraRef} position={[2, 1, 2]} />
        <ambientLight intensity={5} />
        <Suspense fallback={null}>
      
          <RotatingModel>
            <Itv />
          </RotatingModel>
        </Suspense>
        <OrbitControls />
      </Canvas>
      <Loader
 dataInterpolation={(p) => `Loading ${p.toFixed(2)}%`}
/>

</>
      
      }



  
    </div>

  );
};

export default Modelo3d;
