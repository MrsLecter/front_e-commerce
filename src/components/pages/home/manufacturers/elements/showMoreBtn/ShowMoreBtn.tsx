import { FC } from "react";
import styled from "styled-components";

interface Props {
  color?: "blue" | "white";
  hiddenCards?: number;
  clickHandler: () => void;
}

const ShowMoreBtn: FC<Props> = ({
  color = "white",
  hiddenCards,
  clickHandler,
}) => {
  return (
    <StyledShowMoreBtn onClick={clickHandler} color={color}>
      {hiddenCards && `Показать еще ${hiddenCards}`}
      {!hiddenCards && "Показать еще"}
    </StyledShowMoreBtn>
  );
};

const StyledShowMoreBtn = styled.button<{ color: string }>`
  display: block;
  margin-top: 8px;
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 2px;
  box-shadow: 0 2px 4px 0 rgba(81, 115, 152, 0.2);
  overflow: hidden;
  background-color: ${(props) => (props.color === "blue" ? "#507299" : "#fff")};
  color: ${(props) => (props.color === "blue" ? "#fff" : "#425f80")};
  opacity: 0.8;

  &:hover {
    opacity: 1;
  }
`;

export default ShowMoreBtn;
