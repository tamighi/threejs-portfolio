import React from "react";

import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense } from "react";
import { CanvasLoader } from "../..";
import { useRotationEasing } from "../../../hooks";

const Computers = () => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  const computerRef = React.useRef<any>(null);
  const { rotationSpeed } = useRotationEasing({duration: 8000, rotation: 0.002});

  useFrame(() => {
    if (computerRef.current) {
      computerRef.current.rotation.y += rotationSpeed;
    }
  });

  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener("change", handleMediaChange);
    return () => mediaQuery.removeEventListener("change", handleMediaChange);
  }, []);

  return (
    <mesh>
      <hemisphereLight intensity={1} groundColor={"black"} />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.65 : 0.8}
        position={[0, -0.5, -1.5]}
        rotation={[-0.01, -1, -0.05]}
        ref={computerRef}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  return (
    <Canvas
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
