import { FC } from "react";
import styled from "styled-components";

interface IBlueBtnProps {
  color: "dark" | "light" | "transparent";
  clickHandler: () => void;
  label: string;
}

const BlueBtn: FC<IBlueBtnProps> = ({ color, clickHandler, label }) => {
  const colors = {
    dark: {
      background: "#507298",
      font: "white",
      hover: "#507298",
    },
    light: {
      background: "#ebf1f4",
      font: "#425f8f",
      hover: "#ebf1f4",
    },
    transparent: {
      background: "transparent",
      font: "#425f80",
      hover: "#425f80",
    },
  };
  return (
    <StyledBlueBtn
      mainColor={colors[color].background}
      fontColor={colors[color].font}
      onClick={clickHandler}
    >
      {label}
    </StyledBlueBtn>
  );
};

const StyledBlueBtn = styled.button<{ mainColor: string; fontColor: string }>`
  width: 100%;
  height: 36px;
  font-family: var(--font-roboto);
  font-size: 14px;
  letter-spacing: 0.5px;
  font-weight: 500;
  opacity: 0.9;
  border: none;
  color: ${(props) => props.fontColor};
  background-color: ${(props) => props.mainColor};

  &:hover {
    opacity: 1;
    transition-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
    transition-duration: 0.45s;
  }
`;

export default BlueBtn;
