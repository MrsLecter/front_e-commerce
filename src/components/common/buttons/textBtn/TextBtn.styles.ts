import styled from "styled-components";

export const StyledTextBtn = styled.button`
  padding: 16px 0;
  height: 48px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  text-decoration: none;
  font-family: var(--font-roboto);
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0.6px;
  color: white;
  background: transparent;
  border: none;

  &:hover {
    text-decoration: underline;
  }
`;
