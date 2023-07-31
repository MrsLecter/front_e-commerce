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
  font-family: var(--font-roboto);
  font-size: 14px;
  letter-spacing: 0.5px;
  font-weight: 500;
  border: none;
  border-radius: 4px;
  box-shadow: 0 2px 4px 0 rgba(81, 115, 152, 0.2);
  overflow: hidden;
  text-align: center;
  background-color: ${(props) => (props.color === "blue" ? "#507299" : "#fff")};
  color: ${(props) => (props.color === "blue" ? "#fff" : "#425f80")};
  opacity: 0.8;

  &:hover {
    opacity: 1;
  }

  @media (max-width: 760px) {
    margin: 8px auto 0;
    width: 488px;
  }

  @media (max-width: 510px) {
    width: 100%;
  }
`;

export default ShowMoreBtn;
