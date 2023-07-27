import { FC, MouseEvent } from "react";

import { StyledTextBtn } from "./TextBtn.styles";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  clickHandler: (e: MouseEvent<HTMLButtonElement>) => void;
}

const TextBtn: FC<Props> = ({ label, clickHandler, ...defaultProps }) => {
  return (
    <StyledTextBtn
      aria-label={`${label}-button`}
      aria-labelledby={label}
      onClick={(e) => clickHandler(e)}
      {...defaultProps}
    >
      {label}
    </StyledTextBtn>
  );
};

export default TextBtn;
