import styled from "styled-components";

export const StyledBlueBtn = styled.button<{
  mainColor: string;
  fontColor: string;
  height: string;
}>`
  width: 100%;
  height: ${(props) => props.height + "px"};
  font-family: var(--font-roboto);
  font-size: 14px;
  letter-spacing: 0.5px;
  font-weight: 500;
  opacity: 0.9;
  border: none;
  border-radius: 2px;
  color: ${(props) => props.fontColor};
  background-color: ${(props) => props.mainColor};

  &:hover {
    opacity: 1;
    transition-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
    transition-duration: 0.45s;
  }
`;
