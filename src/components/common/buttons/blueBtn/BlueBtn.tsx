import { FC, KeyboardEvent } from "react";

import { StyledBlueBtn } from "./BlueBtn.styles";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color: "dark" | "light" | "transparent";
  height?: "36" | "30" | "32";
  clickHandler: () => void;
  label: string;
  isModal?:boolean
}

const BlueBtn: FC<Props> = ({
  color,
  clickHandler,
  label,
  height,
  isModal=false,
  ...defaultProps
}) => {
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

  const keyDownHandler = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "Enter") {
      clickHandler();
    }
  };
  return (
    <StyledBlueBtn
      mainColor={colors[color].background}
      fontColor={colors[color].font}
      onClick={clickHandler}
      onKeyDown={(e) => keyDownHandler(e)}
      height={height ? height : "36"}
      aria-label="submit-button"
      aria-labelledby="submit"
      isModal={isModal}
      {...defaultProps}
    >
      {label}
    </StyledBlueBtn>
  );
};

export default BlueBtn;
