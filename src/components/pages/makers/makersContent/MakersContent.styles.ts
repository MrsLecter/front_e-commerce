import styled from "styled-components";

export const StyledMakersContent = styled.div<{ isLoading: boolean }>`
  display: grid;
  grid-template-columns: ${(props) =>
    props.isLoading ? "auto" : "auto auto auto"};

  @media (max-width: 780px) {
    grid-template-columns: auto auto;
  }

  @media (max-width: 560px) {
    grid-template-columns: auto;
  }
`;

export const Message = styled.div`
  margin: 4px;
  width: 100%;
  height: 30px;
  font-family: var(--font-roboto);
  font-size: 16px;
  line-height: 30px;
  text-align: center;
  box-sizing: border-box;
  color: #507299;
`;
