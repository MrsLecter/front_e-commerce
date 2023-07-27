import styled from "styled-components";

export const StyledProductCardContainer = styled.div`
  margin: 12px auto 6px;
  width: 992px;
  height: auto;
  display: grid;
  grid-template-columns: auto auto auto auto;

  @media (max-width: 1020px) {
    width: 740px;
    /* height: 1110px; */
    grid-template-columns: auto auto auto;
  }
  @media (max-width: 766px) {
    width: 488px;
    /* height: 1110px; */
    grid-template-columns: auto auto;
  }

  @media (max-width: 600px) {
    width: 236px;
    /* height: 1110px; */
    grid-template-columns: auto;
  }
`;
