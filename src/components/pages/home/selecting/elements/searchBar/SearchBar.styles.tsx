import styled from "styled-components";

export const StyledSearchBar = styled.div`
  margin: 0 auto;
  position: relative;
  width: 362px;
  height: 48px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.2);

  @media (max-width: 500px) {
    width: calc(100% - 16px);
    margin: 0 auto;
  }
`;

export const SearchInput = styled.input`
  width: 362px;
  height: 100%;
  padding-left: 50px;
  border: none;
  border-radius: 4px;
  font-family: var(--font-roboto);
  font-size: 16px;
  letter-spacing: 0.6px;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.2);

  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const Icon = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 48px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
