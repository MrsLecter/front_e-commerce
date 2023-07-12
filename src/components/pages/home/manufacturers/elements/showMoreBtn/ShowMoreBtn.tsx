import { FC } from "react";
import styled from "styled-components";

interface Props {
  hiddenCards: number;
  clickHandler: () => void;
}

const ShowMoreBtn: FC<Props> = ({ hiddenCards, clickHandler }) => {
  return (
    <StyledShowMoreBtn onClick={clickHandler}>
      Показать еще {hiddenCards}
    </StyledShowMoreBtn>
  );
};

const StyledShowMoreBtn = styled.button`
  display: none;
  margin-top: 8px;
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 4px;
  box-shadow: 0 2px 4px 0 rgba(81, 115, 152, 0.2);
  overflow: hidden;
  background-color: white;

  @media (max-width: 760px) {
    display: block;
  }
`;

export default ShowMoreBtn;
