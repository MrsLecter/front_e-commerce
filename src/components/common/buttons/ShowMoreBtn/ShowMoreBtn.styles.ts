import styled from "styled-components";

export const StyledShowMoreBtn = styled.button`
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

  &:hover,
  &:focus {
    transition-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
    transition-duration: 0.25s;
    /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); */
  }
`;
