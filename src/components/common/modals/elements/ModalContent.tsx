import { FC } from "react";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
}

const ModalContent: FC<Props> = ({ children }) => {
  return <StyledModalContent>{children}</StyledModalContent>;
};

const StyledModalContent = styled.div`
  padding: 16px 20px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: end;
  background-color: #eceff1;

  & > div:last-child {
    width: 144px;
  }
`;

export default ModalContent;
