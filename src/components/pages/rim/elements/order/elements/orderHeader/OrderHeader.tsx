import { FC } from "react";
import styled from "styled-components";

interface Props {
  header: string;
}

const OrderHeader: FC<Props> = ({ header }) => {
  return <StyledOrderHeader>{header}</StyledOrderHeader>;
};

const StyledOrderHeader = styled.div`
  margin: 0px 0px 16px;
  width: 100%;
  font-family: var(--font-roboto);
  color: #507299;
  font-size: 22px;
  font-weight: 500;
  letter-spacing: 0.8px;
  overflow: hidden;
`;

export default OrderHeader;
