import React from "react";

const smoothStep = (x: number) => {
  return x * x * (3 - 2 * x);
};

type Props = {
  duration: number;
  rotation: number;
};

const useRotationEasing = ({ duration, rotation }: Props) => {
  // Right = 1, left = -1
  const [direction, setDirection] = React.useState(1);
  const [transitionProgress, setTransitionProgress] = React.useState(0);
  const [rotationSpeed, setRotationSpeed] = React.useState(0);

  React.useEffect(() => {
    const transitionInterval = setInterval(() => {
      setTransitionProgress((prevProgress) => prevProgress + 0.02);

      const speed = Math.abs(Math.abs(transitionProgress - 1) - 1);

      const easing = smoothStep(speed);
      setRotationSpeed((rotation * easing) * direction);
    }, duration / 100);
    return () => clearInterval(transitionInterval);
  }, [direction, transitionProgress]);

  React.useEffect(() => {
    const directionInterval = setInterval(() => {
      setDirection((prevDirection) => prevDirection * -1);
      setTransitionProgress(0);
    }, duration);
    return () => clearInterval(directionInterval);
  }, []);

  return { rotationSpeed };
};

export default useRotationEasing;
