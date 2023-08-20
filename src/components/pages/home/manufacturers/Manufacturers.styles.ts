import styled from "styled-components";

export const StyledManufacturers = styled.section`
  padding: 32px 0 22px;
  width: 100%;
  height: 100%;
  min-height: 370px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #f1f0f1;
  overflow: hidden;

  @media (max-width: 1020px) {
    padding: 24px 0;
    min-height: 440px;
  }

  @media (max-width: 760px) {
    min-height: 472px;
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
