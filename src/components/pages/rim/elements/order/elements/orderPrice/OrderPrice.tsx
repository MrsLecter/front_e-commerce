import { getPrettyPrice } from "@/utils/functions";
import { FC } from "react";
import styled from "styled-components";

interface Props {
  price: number;
}

const OrderPrice: FC<Props> = ({ price }) => {
  return <StyledOrderPrice>{getPrettyPrice(price)}&nbsp;грн</StyledOrderPrice>;
};

const StyledOrderPrice = styled.div`
  padding-top: 16px;
  margin: 0px 0px 16px 0px;
  width: 100%;
  border-top: 1px solid #839dbb;
  font-family: var(--font-roboto);
  font-size: 22px;
  font-weight: 500;
  letter-spacing: 0.8px;
  text-align: center;
  color: #507299;
`;

export default OrderPrice;
