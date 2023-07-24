import { FC, MouseEvent } from "react";

import { StyledTextBtn } from "./TextBtn.styles";

interface Props {
  label: string;
  clickHandler: (e: MouseEvent<HTMLButtonElement>) => void;
}

const TextBtn: FC<Props> = ({ label, clickHandler }) => {
  return (
    <StyledTextBtn onClick={(e) => clickHandler(e)}>{label}</StyledTextBtn>
  );
};

export default TextBtn;
