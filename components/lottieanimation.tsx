"use client";

import Lottie from "lottie-react";
import { useMemo } from "react";

interface LottieAnimationProps {
  animationData: object;
  className?: string;
  style?: React.CSSProperties;
}

export default function LottieAnimation({ animationData, className, style }: LottieAnimationProps) {
  const memoizedAnimation = useMemo(() => animationData, [animationData]);

  return (
    <Lottie
      animationData={memoizedAnimation}
      loop={true}
      className={className}
      style={style}
    />
  );
}