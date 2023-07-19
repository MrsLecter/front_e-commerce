import { useRouter } from "next/navigation";
import { FC } from "react";

import TextBtn from "../buttons/TextBtn/TextBtn";
import Logo from "../Logo/Logo";
import { HeaderContent, StyledHeader } from "./Header.styles";

interface Props {
  color?: "blue" | "none";
  showContact: () => void;
}

const Header: FC<Props> = ({ color, showContact }) => {
  const router = useRouter();

  const showNews = () => {
    router.push("/news");
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

export default Header;
