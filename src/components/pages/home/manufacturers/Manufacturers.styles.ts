import styled from "styled-components";

export const StyledManufacturers = styled.section`
  padding: 32px 0 22px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #f1f0f1;

  @media (max-width: 1020px) {
    padding: 24px 0;
  }
`;

export const ShowMoreBtnWrapper = styled.div`
  display: none;

  @media (max-width: 760px) {
    margin: 0 auto;
    display: block;
    width: calc(100% - 16px);
  }
`;
