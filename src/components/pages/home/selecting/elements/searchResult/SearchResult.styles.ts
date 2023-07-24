import styled from "styled-components";

export const StyledSearchResult = styled.div`
  margin: 10px auto 0px;
  width: 362px;
  height: 448px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border: none;
  border-radius: 4px;
  font-family: var(--font-roboto);
  font-size: 16px;
  letter-spacing: 0.6px;
  background-color: white;
  z-index: 10;
  overflow: auto;

  @media (max-width: 500px) {
    width: 100%;
  }
`;
