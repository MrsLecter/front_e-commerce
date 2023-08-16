import styled from "styled-components";

export const StyledPopular = styled.section`
  padding-top: 22px;
  padding-bottom: 16px;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;

  & > a {
    padding: 14px;
    width: 488px;
    height: 40px;
    font-family: var(--font-roboto);
    font-size: 14px;
    font-weight: 500;
    color: #425f80;
    line-height: 12px;
    letter-spacing: 0.5px;
    text-align: center;
    overflow: hidden;
    border: none;
    border-radius: 4px;
    background-color: white;
    box-shadow: 0 2px 4px 0 rgba(81, 115, 152, 0.2);
  }

  & > a:hover,
  & > a:focus {
    transition-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
    transition-duration: 0.2s;
    /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); */
  }

  @media (max-width: 760px) {
    display: none;
  }
`;

export const CardContainer = styled.div<{ marginTop: number }>`
  margin: ${(props) => props.marginTop + "px auto 0px"};
  width: 992px;
  height: auto;
  display: grid;
  column-gap: 16px;
  justify-content: flex-start;
  grid-template-columns: auto auto auto auto;

  @media (max-width: 1020px) {
    width: 740px;
    grid-template-columns: auto auto auto;
  }
  @media (max-width: 766px) {
    width: 488px;
    grid-template-columns: auto auto;
  }

  @media (max-width: 600px) {
    width: 236px;
    grid-template-columns: auto;
  }
`;
