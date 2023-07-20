import { FC } from "react";
import styled from "styled-components";

interface Props {
  label: string;
}

const ModalHeader: FC<Props> = ({ label }) => {
  return <StyledModalHeader>{label}</StyledModalHeader>;
};

const StyledModalHeader = styled.div`
  padding: 0 0 0 20px;
  width: 100%;
  height: 40px;
  font-family: var(--font-roboto);
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.1px;
  line-height: 40px;
  color: #fff;
  background-color: #507299;

  @media (max-width: 360px) {
    text-align: center;
  }
`;

export default ModalHeader;
