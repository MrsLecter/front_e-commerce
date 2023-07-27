import { FC } from "react";
import styled from "styled-components";

interface Props {
  label: string;
}

const ModalHeaderElement: FC<Props> = ({ label }) => {
  return <StyledModalHeaderElement>{label}</StyledModalHeaderElement>;
};

const StyledModalHeaderElement = styled.div`
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
  border-top-right-radius:2px;
  border-top-left-radius:2px;

  @media (max-width: 360px) {
    text-align: center;
  }
`;

export default ModalHeaderElement;
