import styled from "styled-components";

export const StyledNavBtn = styled.button`
  margin: 4px 2px;
  padding: 8px 16px;
  box-sizing: border-box;
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  min-height: 36px;
  height: auto;
  border-radius: 4px;
  border: none;
  font-family: var(--font-roboto);
  font-size: 14px;
  letter-spacing: 0.1px;
  line-height: 20px;
  color: #364d66;
  background-color: #e4e8ed;

  @media (max-width: 600px) {
    width: 100%;
    margin: 4px auto;
  }
`;
