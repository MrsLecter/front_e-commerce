import styled from "styled-components";

export const StyledFeedbackModal = styled.div`
  width: 365px;
  height: 206px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 2px;

  @media (max-width: 360px) {
    margin: 0 auto;
    width: calc(100% - 16px);
  }
`;

export const FeedbackModalContent = styled.div`
  padding: 16px 20px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #eceff1;

  & > p {
    width: 100%;
    text-align: center;
  }

  & > div {
    margin-top: 14px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;

    & > button {
      width: 86px;
    }
  }
`;
