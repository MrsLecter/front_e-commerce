import styled from "styled-components";

export const StyledProductCard = styled.div`
  margin-bottom: 16px;
  position: relative;
  width: 236px;
  height: 356px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  border-radius: 4px;
  box-shadow: 0 2px 4px 0 rgba(81, 115, 152, 0.2);
  overflow: hidden;
  background-color: #fff;

  div:first-child {
    position: absolute;
    top: 0px;
    left: 0px;
  }
`;

export const CardContent = styled.div`
  padding: 0px 12px 12px;
  width: 100%;
  font-family: var(--font-roboto);

  a {
    font-size: 15px;
    text-overflow: ellipsis;
    overflow: hidden;
    color: #507299;
    letter-spacing: 0.5px;
  }

  p:nth-child(2) {
    margin-top: 4px;
    font-size: 15px;
    font-weight: 700;
    color: #000;
    letter-spacing: 0.5px;
  }

  p:nth-child(3) {
    margin-top: 4px;
    margin-bottom: 13px;
    font-size: 10px;
    color: gray;
    letter-spacing: 0.4px;
  }
`;
