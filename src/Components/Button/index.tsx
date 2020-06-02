import React, { FC, useRef } from "react";
import * as S from "./style";
import Icon from "../Icon";
import gsap from "gsap";
import { BUTTON_COLOR } from "../../constants";
// import { Physics2DPlugin } from "gsap/all";

const particles = (
  parent: HTMLDivElement,
  quantity: number,
  x: number,
  y: number,
  minAngle: number,
  maxAngle: number
) => {
  const colors = ["#FFFF04", "#EA4C89", "#892AB8", "#4AF2FD"];
  for (let i = quantity - 1; i >= 0; i--) {
    // gsap.registerPlugin(Physics2DPlugin);
    const angle = gsap.utils.random(minAngle, maxAngle);
    const velocity = gsap.utils.random(70, 140);
    const dot = document.createElement("div");
    dot.style.setProperty("--b", colors[Math.floor(gsap.utils.random(0, 4))]);
    parent.appendChild(dot);
    gsap.set(dot, {
      opacity: 0,
      x,
      y,
      scale: gsap.utils.random(0.4, 0.7),
    });
    gsap
      .timeline({
        onComplete() {
          dot.remove();
        },
      })
      .to(
        dot,
        {
          duration: 0.05,
          opacity: 1,
        },
        0
      )
      .to(
        dot,
        {
          duration: 1.8,
          rotationX: `-=${gsap.utils.random(720, 1440)}`,
          rotationZ: `+=${gsap.utils.random(720, 1440)}`,
          physics2D: {
            angle,
            velocity,
            gravity: 120,
          },
        },
        0
      )
      .to(
        dot,
        {
          duration: 1,
          opacity: 0,
        },
        0.8
      );
  }
};

export const Button: FC<{ theme?: BUTTON_COLOR }> = ({
  theme = BUTTON_COLOR.Default,
}) => {
  const ButtonRef = useRef<HTMLButtonElement>(null);
  const IconRef = useRef<HTMLDivElement>(null);
  const EmitterRef = useRef<HTMLDivElement>(null);

  const handleOnClick = () => {
    ButtonRef.current?.classList.add("success");
    gsap.to(ButtonRef.current, {
      "--icon-x": -3,
      "--icon-y": 3,
      "--z-before": 0,
      duration: 0.2,
      onComplete() {
        particles(EmitterRef.current!, 100, -4, 6, -80, -50);
        gsap.to(ButtonRef.current, {
          "--icon-x": 0,
          "--icon-y": 0,
          "--z-before": -6,
          duration: 1,
          ease: "elastic.out(1, .5)",
          onComplete() {
            ButtonRef.current?.classList.remove("success");
          },
        });
      },
    });
  };

  return (
    <>
      <S.Button bgColor={theme} ref={ButtonRef} onClick={handleOnClick}>
        <S.Icon ref={IconRef}>
          <S.Cannon bgColor={theme} />
          <S.Confetti>
            <Icon />
            <S.Emitter ref={EmitterRef}></S.Emitter>
          </S.Confetti>
        </S.Icon>
        <S.Text>Confirm</S.Text>
      </S.Button>
    </>
  );
};
