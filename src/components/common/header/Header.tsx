import { useRouter } from "next/navigation";
import { FC } from "react";

import TextBtn from "../buttons/TextBtn/TextBtn";
import Logo from "../Logo/Logo";
import { HeaderContent, StyledHeader } from "./Header.styles";
import { AppModals } from "@/constants/common";

interface Props {
  color?: "blue" | "none";
  modalHandler: (modalID: number) => void;
}

const Header: FC<Props> = ({ color, modalHandler }) => {
  const router = useRouter();

  const showNews = () => {
    router.push("/news");
  };

  const showContact = () => {
    modalHandler(AppModals.Contact);
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
