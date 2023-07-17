import { FC } from "react";

import { StyledShowMoreBtn } from "./ShowMoreBtn.styles";

interface Props {
  clickHandler: () => void;
}

const ShowMoreBtn: FC<Props> = ({ clickHandler }) => {
  return (
    <StyledShowMoreBtn onClick={clickHandler}>Показать все</StyledShowMoreBtn>
  );
};

export default ShowMoreBtn;
