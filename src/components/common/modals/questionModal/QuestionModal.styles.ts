import styled from "styled-components";

export const StyledQuestionModal = styled.div`
  width: 464px;
  height: 368px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: end;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 45px,
    rgba(0, 0, 0, 0.22) 0px 10px 18px;
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;

  @media (max-width: 700px) {
    margin: 0 auto;
    width: calc(100% - 16px);
  }
`;
