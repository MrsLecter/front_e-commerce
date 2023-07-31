import styled from "styled-components";

export const StyledPopular = styled.section`
  padding-top: 22px;
  padding-bottom: 16px;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;

  @media (max-width: 760px) {
    display: none;
  }
`;

export const CardContainer = styled.div<{ marginTop: number }>`
  margin: ${(props) => props.marginTop + "px auto 0px"};
  width: 992px;
  height: auto;
  display: grid;
  column-gap: 16px;
  justify-content: flex-start;
  grid-template-columns: auto auto auto auto;

  @media (max-width: 1020px) {
    width: 740px;
    grid-template-columns: auto auto auto;
  }
  @media (max-width: 766px) {
    width: 488px;
    grid-template-columns: auto auto;
  }

  @media (max-width: 600px) {
    width: 236px;
    grid-template-columns: auto;
  }
`;
