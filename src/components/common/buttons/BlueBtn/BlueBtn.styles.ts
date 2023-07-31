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
  border-radius: 4px;
  color: ${(props) => props.fontColor};
  background-color: ${(props) => props.mainColor};

  &:hover,
  &:focus {
    opacity: 1;
    transition-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
    transition-duration: 0.45s;
    box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.2), 0 2px 10px 0 rgba(0, 0, 0, 0.19);
  }
`;
