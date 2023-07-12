import { FC } from "react";
import styled from "styled-components";
import Logo from "../Logo/Logo";
import TextBtn from "../buttons/TextBtn";

interface Props {
  color?: "blue" | "none";
}

const Header: FC<Props> = ({ color }) => {
  const showNews = () => {
    alert("news click");
  };

  const showContact = () => {
    alert("show contact");
  };
  return (
    <StyledHeader color={color || "blue"}>
      <HeaderContent>
        <div>
          <Logo />
        </div>
        <div>
          <TextBtn label={"Новости"} clickHandler={showNews} />
          <TextBtn label={"Контакты"} clickHandler={showContact} />
        </div>
      </HeaderContent>
    </StyledHeader>
  );
};

const StyledHeader = styled.header<{ color: "blue" | "none" }>`
  position: relative;
  height: 48px;
  background-color: ${(props) =>
    props.color === "blue" ? "#517399" : "transparent"};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  z-index: 2;
  
  @media (max-width: 350px) {
    height: 90px;
    flex-direction: column;
    justify-content: flex-start;
  }
`;

const HeaderContent = styled.div`
  height: inherit;
  margin: 0 auto;
  width: 100%;
  padding: 0 16px;
  max-width: 1024px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  div:last-child {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
  }

  div:last-child button {
    margin-left: 16px;
  }

  @media (max-width: 350px) {
    padding: 16px 0 0;
    height: 90px;
    flex-direction: column;
    justify-content: flex-end;
  }
`;

export default Header;
