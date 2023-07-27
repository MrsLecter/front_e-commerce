import styled from "styled-components";

export const NewsFeedWrapper = styled.div`
  margin: 10px auto;
  padding: 8px 0px;
  width: calc(100% - 16px);
  min-width: 230px;
  max-width: 960px;
  height: auto;
  background-color: #fefeff;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px;
  border-radius: 2px;

  & > div:last-child {
    margin: 20px auto;
    width: 212px;
  }
`;

export const NewsHeader = styled.div`
  padding: 16px 16px;
  width: 100%;
  text-align: center;
  font-family: var(--font-roboto);
  font-size: 18px;
  letter-spacing: 0.5px;
  font-weight: 500;
  text-align: left;
  border-bottom: 1px solid #f0f0f0;
  color: #333;
`;

export const RSSContent = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Message = styled.div`
  padding: 8px 16px;
  width: 100%;
  font-family: var(--font-roboto);
  font-weight: 400;
  font-size: 16px;
  letter-spacing: 0.4px;
  text-align: center;
`;
