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

export const Message = styled.div`
  margin: 4px;
  height: 30px;
  font-family: var(--font-roboto);
  font-size: 16px;
  line-height: 30px;
  text-align: center;
  box-sizing: border-box;
  color: #507299;
`;
