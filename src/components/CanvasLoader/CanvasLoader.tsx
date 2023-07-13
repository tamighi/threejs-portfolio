import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();

  return (
    <Html>
      <div className="flex flex-col items-center justify-center">
        <div className="canvas-loader" />
        <p className="font-extrabold text-[14px] mt-20 text-white">
          {progress.toFixed(2)}%
        </p>
      </div>
    </Html>
  );
};

export default CanvasLoader;
