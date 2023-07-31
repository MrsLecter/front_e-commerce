import styled from "styled-components";

export const StyledMakersHeader = styled.div`
  padding: 0px 0px;
  width: 100%;
  min-height: 60px;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;

  @media (max-width: 600px) {
    width: calc(100% - 16px);
    flex-wrap: wrap;
    flex-direction: column;
  }
`;
