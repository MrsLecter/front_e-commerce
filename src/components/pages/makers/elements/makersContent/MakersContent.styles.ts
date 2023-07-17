import styled from "styled-components";

export const StyledMakersContent = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;

  @media (max-width: 600px) {
    grid-template-columns: auto auto;
  }

  @media (max-width: 375px) {
    grid-template-columns: auto;
  }
`;
