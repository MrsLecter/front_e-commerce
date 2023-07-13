import { FC } from "react";
import styled from "styled-components";

interface Props {
  clickHandler: () => void;
}

const ShowMoreBtn: FC<Props> = ({ clickHandler }) => {
  return (
    <StyledShowMoreBtn onClick={clickHandler}>Показать все</StyledShowMoreBtn>
  );
};

const StyledShowMoreBtn = styled.button`
  margin: 12px auto;
  width: 488px;
  height: 40px;
  font-family: var(--font-roboto);
  font-size: 14px;
  font-weight: 500;
  color: #425f80;
  letter-spacing: 0.5px;
  text-align: center;
  overflow: hidden;
  border: none;
  border-radius: 4px;
  background-color: white;
  box-shadow: 0 2px 4px 0 rgba(81, 115, 152, 0.2);
`;

export default ShowMoreBtn;
