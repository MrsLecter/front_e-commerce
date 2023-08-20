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
  margin: 0 auto;
  padding: 16px 20px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #eceff1;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;

  & > div {
    height: 180px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    div {
      margin-top: 14px;
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      & > button {
        width: 86px;
      }
    }

    & > img {
      margin-bottom: 8px;
    }

    & > p {
      width: 340px;
      text-align: center;
    }
  }
`;
