import styled from "styled-components";

export const StyledPopular = styled.section`
  padding-top: 30px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const CardContainer = styled.div`
  margin: 12px auto;
  width: 992px;
  height: 740px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: stretch;

  @media (max-width: 1020px) {
    width: 740px;
    height: 1110px;
  }

  @media (max-width: 766px) {
    width: 488px;
    height: 1110px;
  }

  @media (max-width: 600px) {
    width: 236px;
    height: 1110px;
  }
`;
