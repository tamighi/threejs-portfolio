import React from "react";

import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense } from "react";
import { CanvasLoader } from "../..";

const duration = 8000;

const smoothStep = (x: number) => {
  return x * x * (3 - 2 * x);
};

const Computers = () => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  const computerRef = React.useRef<any>(null);
  const [direction, setDirection] = React.useState<"right" | "left">("left");
  const [transitionProgress, setTransitionProgress] = React.useState(0);

  useFrame(() => {
    if (computerRef.current) {
      const rotation = 0.002;
      const speed = Math.abs(Math.abs(transitionProgress - 1) - 1);
      const easing = smoothStep(speed);
      const rotationSpeed = rotation * easing;
      if (direction === "right") {
        computerRef.current.rotation.y += rotationSpeed;
      } else {
        computerRef.current.rotation.y -= rotationSpeed;
      }
    }
  });

  React.useEffect(() => {
    const transitionInterval = setInterval(() => {
      setTransitionProgress((prevProgress) => prevProgress + 0.02);
    }, duration / 100);
    return () => clearInterval(transitionInterval);
  }, []);

  React.useEffect(() => {
    const directionInterval = setInterval(() => {
      setDirection((prevDirection) =>
        prevDirection === "right" ? "left" : "right"
      );
      setTransitionProgress(0);
    }, duration);
    return () => clearInterval(directionInterval);
  }, []);

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
        rotation={[-0.01, 0, -0.05]}
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
