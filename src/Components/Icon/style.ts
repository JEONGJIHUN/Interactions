import styled, { css } from "styled-components";

export const Svg = styled.svg`
  ${({
    theme: {
      palette: { default: def },
    },
  }) => css`
    width: 18px;
    height: 16px;
    display: block;
    stroke-width: 1px;
    fill: none;
    stroke-linejoin: round;
    stroke-linecap: round;
    & * {
      transition: stroke-dashoffset 0.2s;
      stroke-dasharray: 15 20;
      stroke-dashoffset: 0;
      stroke: var(--stroke-all, var(--stroke, ${def.confetti_2}));
      &:nth-child(2) {
        --stroke: ${def.confetti_3};
      }
      &:nth-child(3) {
        --stroke: ${def.confetti_1};
      }
    }
  `}
`;

export const I = styled.i`
  ${({
    theme: {
      palette: { default: def },
    },
  }) => css`
    width: 4px;
    height: 4px;
    display: block;
    transform: scale(0.5);
    position: absolute;
    transition: transform 0.25s;
    left: -1px;
    top: 3px;
    border-radius: 1px;
    background: ${def.confetti_1};
    &:nth-child(2) {
      left: 9px;
      top: -1px;
      border-radius: 2px;
      background: ${def.confetti_4};
    }
    &:nth-child(3) {
      left: 5px;
      top: 3px;
      background: ${def.confetti_1};
    }
    &:nth-child(4) {
      left: 10px;
      top: 14px;
      background: ${def.confetti_2};
    }
    &:nth-child(5) {
      left: 9px;
      top: 7px;
      background: ${def.confetti_4};
    }
    &:nth-child(6) {
      left: 6px;
      top: 8px;
      border-radius: 2px;
      background: ${def.confetti_2};
    }
  `}
`;
