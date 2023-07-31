import { FC } from 'react';
import styled from 'styled-components';

const OrderDescription: FC = () => {
  return (
    <StyledOrderDescription>
      *Разместите заказ и с вами свяжется наш менеджер для уточнения деталей
    </StyledOrderDescription>
  );
};

const StyledOrderDescription = styled.div`
  margin: 16px 0px;
  width: 100%;
  color: #a4afba;
  font-family: var(--font-roboto);
  font-size: 12px;
  letter-spacing: 0.4px;
  text-align: center;
`;

export default OrderDescription;
