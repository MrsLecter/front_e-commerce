import styled from "styled-components";

export const StyledRSSItem = styled.div`
  padding: 8px 16px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  font-family: var(--font-roboto);

  a {
    font-weight: 400;
    font-size: 16px;
    letter-spacing: 0.4px;
    text-align: left;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  &:hover {
    background: #f0f0f0;
  }
`;

export const ItemHeader = styled.div`
  width: 100%;
  height: 16px;
  font-size: 12px;
  font-weight: 400;

  span:nth-child(1) {
    margin-right: 8px;
    color: #e05453;
  }

  span:nth-child(2) {
    width: 10px;
  }

  span:nth-child(3) {
    color: #7d7d7d;
  }
`;
