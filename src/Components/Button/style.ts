import styled, { css } from "styled-components";
import { BUTTON_COLOR } from "../../constants";

const { White, Default } = BUTTON_COLOR;

const commonStyle = css`
  display: inline-block;
  vertical-align: top;
  position: relative;
  z-index: 1;
`;

export const Button = styled.button<{ bgColor: BUTTON_COLOR }>`
  margin: 0 12px;
  display: block;
  outline: none;
  cursor: pointer;
  position: relative;
  border: 0;
  background: none;
  padding: 9px 22px 9px 16px;
  line-height: 26px;
  font-family: inherit;
  font-weight: 600;
  font-size: 14px;
  color: ${({
    theme: {
      palette: { default: def, white },
    },
    bgColor,
  }) => (bgColor === White ? white.color : def.color)};
  -webkit-appearance: none;
  -webkit-tap-highlight-color: transparent;
  &.success {
    & i {
      transform: scale(0);
    }
    & svg {
      stroke-dashoffset: 15;
    }
  }
  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    border-radius: 12px;
    ${({
      theme: {
        palette: { default: def, white, grey },
      },
      bgColor,
    }) => css`
      transform: translateZ(calc(var(--z-before, -6) * 1px));
      background: ${bgColor === Default
        ? def.background
        : bgColor === White
        ? white.background
        : grey.background};
      box-shadow: 0 4px 8px rgba(#00093d, 0.24);
      ${bgColor === White &&
      css`
        box-shadow: inset 0 0 0 1px ${white.border};
      `}
    `}
    & > div:first-child {
      transform: translate(
          calc(var(--icon-x, 0) * 1px),
          calc(var(--icon-y, 0) * 1px)
        )
        translateZ(2px);
    }
  }
`;

export const Icon = styled.div`
  ${commonStyle};
  --z: 2px;
  width: 24px;
  height: 14px;
  margin: 8px 16px 0 0;
`;

export const Cannon = styled.div<{ bgColor: BUTTON_COLOR }>`
  position: relative;
  width: 24px;
  height: 14px;
  transform: translate(0, 3px) rotate(-45deg);
  filter: drop-shadow(-2px 2px 2px rgba(#0d0f18, 0.9));
  &:before,
  &:after {
    content: "";
    display: block;
    height: 14px;
  }
  &:before {
    ${({
      theme: {
        palette: { default: def, white, grey },
      },
      bgColor,
    }) => css`
      width: 100%;
      -webkit-clip-path: polygon(25px -1px, 0 52%, 25px 15px);
      clip-path: polygon(25px -1px, 0 52%, 25px 15px);
      background: linear-gradient(
        ${bgColor === Default
          ? def.cannon_dark
          : bgColor === White
          ? white.cannon_dark
          : grey.cannon_dark},
        ${bgColor === Default
            ? def.cannon_light
            : bgColor === White
            ? white.cannon_light
            : grey.cannon_light}
          50%,
        ${bgColor === Default
          ? def.cannon_dark
          : bgColor === White
          ? white.cannon_dark
          : grey.cannon_dark}
      );
    `}
  }
  &:after {
    ${({
      theme: {
        palette: { default: def, white, grey },
      },
      bgColor,
    }) => css`
      width: 6px;
      position: absolute;
      right: -3px;
      top: 0;
      border-radius: 50%;
      box-shadow: inset 0 0 0 0.5px
        ${bgColor === Default
          ? def.cannon_light
          : bgColor === White
          ? white.cannon_light
          : grey.cannon_light};
      background: linear-gradient(
        90deg,
        ${bgColor === Default
          ? def.cannon_dark
          : bgColor === White
          ? white.cannon_dark
          : grey.cannon_dark},
        ${bgColor === Default
          ? def.cannon_light
          : bgColor === White
          ? white.cannon_light
          : grey.cannon_light}
      );
    `}
  }
`;

export const Confetti = styled.div`
  position: absolute;
  left: 17px;
  bottom: 9px;
`;

export const Emitter = styled.div`
  position: absolute;
  left: 4px;
  bottom: 4px;
  pointer-events: none;
  & > div {
    width: 4px;
    height: 4px;
    margin: -2px 0 0 -2px;
    border-radius: 1px;
    position: absolute;
    left: 0;
    top: 0;
    transform-style: preserve-3d;
    background: var(--confetti-all, var(--b, none));
  }
`;

export const Text = styled.span`
  ${commonStyle}
`;
