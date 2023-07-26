import { FC } from "react";

import { StyledBlueBtn } from "./BlueBtn.styles";

interface Props {
  color: "dark" | "light" | "transparent";
  height?: "36" | "30";
  clickHandler: () => void;
  label: string;
}

const BlueBtn: FC<Props> = ({ color, clickHandler, label, height }) => {
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
      height={height ? height : "36"}
    >
      {label}
    </StyledBlueBtn>
  );
};

export default BlueBtn;
