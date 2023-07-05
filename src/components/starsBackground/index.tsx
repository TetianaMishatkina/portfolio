import React, { FC, useEffect, useRef, useState } from "react";
import { StyledStarsContainer } from "./styled";

export const StarsBackground: FC<{ isSeeMore: boolean }> = ({ isSeeMore }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [dimensions, setDimensions] = useState<{
    width: number;
    height: number;
  }>({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [stars, setStars] = useState<
    Array<{ x: number; y: number; opacity: number; speed: number }>
  >([]);

  useEffect(() => {
    const body = document.querySelector("body");
    if (body) {
      const { width, height } = body.getBoundingClientRect();
      setDimensions({ width, height });
      const newStars = Array.from({ length: 170 }, () => ({
        x: Math.floor(Math.random() * width),
        y: Math.floor(Math.random() * height),
        opacity: Math.random(),
        speed: 0.01 + Math.random() * 0.01,
      }));
      setStars(newStars);
    }
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = dimensions.width;
      canvas.height = dimensions.height;
      const context = canvas.getContext("2d");

      const drawStars = () => {
        if (context) {
          context.clearRect(0, 0, dimensions.width, dimensions.height);
          stars.forEach((star, i) => {
            context.beginPath();
            context.arc(star.x, star.y, 1, 0, 2 * Math.PI, false);
            context.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
            context.fill();
            star.opacity += star.speed;
            if (star.opacity > 1) {
              star.speed = -star.speed;
              star.opacity = 1;
            } else if (star.opacity < 0) {
              star.speed = -star.speed;
              star.opacity = 0;
            }
          });
          requestAnimationFrame(drawStars);
        }
      };
      drawStars();
    }
  }, [dimensions]);

  return <StyledStarsContainer ref={canvasRef} isSeeMore={isSeeMore} />;
};
