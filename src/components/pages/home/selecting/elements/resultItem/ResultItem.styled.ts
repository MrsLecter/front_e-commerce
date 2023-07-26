import styled from "styled-components";

export const StyldResultItem = styled.div`
  padding: 4px 8px;
  width: 100%;
  height: 44px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  & > div:first-child {
    width: 36px;
    height: 36px;
  }

  & > div:last-child {
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    font-family: var(--font-roboto);
    font-weight: 400;
  }

  &:hover {
    background-color: hsl(200, 20%, 95%);
    cursor: pointer;
  }
`;

export const ItemName = styled.div`
  font-size: 14px;
  height: 50%;
  width: 100%;
  color: #507299;
`;

export const ItemPrice = styled.div`
  display: block;
  width: 100%;
  height: 50%;
  font-size: 12px;
  color: #939393;
`;
