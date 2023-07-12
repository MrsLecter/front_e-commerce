import { FC } from "react";
import styled from "styled-components";

interface ITextBtn {
  label: string;
  clickHandler: () => void;
}

const TextBtn: FC<ITextBtn> = ({ label, clickHandler }) => {
  return <StyledTextBtn onClick={clickHandler}>{label}</StyledTextBtn>;
};

const StyledTextBtn = styled.button`
  padding: 14px 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  text-decoration: none;
  font-family: var(--font-roboto);
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.4px;
  color: white;
  background: transparent;
  border: none;



  &:hover {
    text-decoration: underline;
  }
`;

export default TextBtn;
