import styled, { css } from "styled-components";

export const StyledBlueBtn = styled.button<{
  mainColor: string;
  fontColor: string;
  height: string;
  isModal: boolean;
}>`
  width: 100%;
  height: ${(props) => props.height + "px"};
  font-family: var(--font-roboto);
  font-size: 14px;
  letter-spacing: 0.5px;
  font-weight: 500;
  opacity: 1;
  border: none;
  border-radius: 4px;
  color: ${(props) => props.fontColor};
  background-color: ${(props) => props.mainColor};
  transition-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
  transition-duration: 0.45s;

  &:hover,
  &:focus {
    opacity: 0.8;
    ${(props) =>
      props.isModal &&
      css`
        opacity: 1;
        background-color: #4a698d;
      `}
  }
`;
