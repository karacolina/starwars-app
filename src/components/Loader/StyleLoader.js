import styled, { keyframes } from "styled-components";

const bounce = keyframes`
    50% {
      transform: translateY(-20px);
    
  }`;

export const StyledLoader = styled.span`
  width: 60px;
  display: flex;
  justify-content: space-evenly;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;
  span {
    width: 12px;
    height: 12px;
    background-color: var(--primary);
    list-style: none;
    border-radius: 50%;
    &:nth-child(1) {
      animation: ${bounce} 2s ease-in-out infinite;
    }

    &:nth-child(2) {
      animation: ${bounce} 2s ease-in-out 300ms infinite;
    }

    &:nth-child(3) {
      animation: ${bounce} 2s ease-in-out 500ms infinite;
    }
  }
`;
