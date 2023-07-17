import { FC } from 'react';
import styled from 'styled-components';

interface Props {
  label: string;
}

const SectionHeader: FC<Props> = ({ label }) => {
  return <StyledHeader>{label}</StyledHeader>;
};

const StyledHeader = styled.div`
  width: 100%;
  font-family: var(--font-roboto);
  font-size: 32px;
  letter-spacing: 0.7px;
  font-weight: 500;
  color: #333;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 14px;
    letter-spacing: 0.5px;
  }
`;

export default SectionHeader;
