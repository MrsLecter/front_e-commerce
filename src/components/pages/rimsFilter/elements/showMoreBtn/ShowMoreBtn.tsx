import { FC } from "react";

import { StyledShowMoreBtn } from "./ShowMoreBtn.styles";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  clickHandler: () => void;
}

const ShowMoreBtn: FC<Props> = ({ clickHandler, ...defaultProps }) => {
  return (
    <StyledShowMoreBtn
      aria-label="showMore-button"
      aria-labelledby="showMore"
      onClick={clickHandler}
      {...defaultProps}
    >
      Показать еще
    </StyledShowMoreBtn>
  );
};

export default ShowMoreBtn;
