import { FC } from "react";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
}

const ModalContentElement: FC<Props> = ({ children }) => {
  return <StyledModalContentElement>{children}</StyledModalContentElement>;
};

const StyledModalContentElement = styled.div`
  padding: 16px 20px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: end;
  background-color: #eceff1;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;

  & > div:last-child {
    width: 144px;
  }
`;

export default ModalContentElement;
