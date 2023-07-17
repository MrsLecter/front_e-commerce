import styled, { css } from "styled-components";

export const StyledContainer = styled.div<{ param: "large" | "small" }>`
  padding: 14px 16px 0px 16px;
  width: 100%;
  max-width: 1024px;
  display: ${(params) => (params.param === "large" ? "flex" : "none")};
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: 1020px) {
    padding: 14px 0px 0px 0px;
    width: 740px;
    flex-wrap: wrap;
  }

  @media (max-width: 760px) {
    display: ${(params) => (params.param === "large" ? "none" : "flex")};
    width: 100%;
    flex-wrap: nowrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    ${(params) =>
      params.param === "small" &&
      css`
        #rest {
          width: 100%;
          flex-wrap: nowrap;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}
  }
`;
