import styled from "styled-components";

export const StyledPopular = styled.section`
  padding-top: 30px;
  padding-bottom: 24px;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;

  @media (max-width: 960px) {
    padding-top: 34px;
  }

  @media (max-width: 760px) {
    display: none;
  }
`;

export const CardContainer = styled.div<{ isReady: boolean }>`
  margin: 12px auto 6px;
  width: 992px;
  min-height: 740px;
  display: grid;
  justify-content: flex-start;
  grid-template-columns: auto auto auto auto;
  filter: ${(props) => (props.isReady ? "blur(5px)" : "blur(0px)")};

  @media (max-width: 1020px) {
    width: 740px;
    min-height: 1110px;
    grid-template-columns: auto auto auto;
  }
  @media (max-width: 766px) {
    width: 488px;
    min-height: 1110px;
    grid-template-columns: auto auto;
  }

  @media (max-width: 600px) {
    width: 236px;
    min-height: 1110px;
    grid-template-columns: auto;
  }
  /* display: flex;
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
  } */
`;
