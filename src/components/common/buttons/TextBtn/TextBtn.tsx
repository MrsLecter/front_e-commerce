import { FC } from "react";

import { StyledTextBtn } from "./TextBtn.styles";

interface Props {
  label: string;
  clickHandler: () => void;
}

const TextBtn: FC<Props> = ({ label, clickHandler }) => {
  return <StyledTextBtn onClick={clickHandler}>{label}</StyledTextBtn>;
};

export default TextBtn;
