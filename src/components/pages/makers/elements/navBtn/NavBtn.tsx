import { useRouter } from "next/navigation";
import { FC } from "react";

import { StyledNavBtn } from "./NavBtn.styles";

interface Props {
  label: string;
  currentHref: string;
}

const NavBtn: FC<Props> = ({ label, currentHref }) => {
  const router = useRouter();

  const goToPathHandler = () => {
    router.push(currentHref);
  };

  return <StyledNavBtn onClick={goToPathHandler}>{label}</StyledNavBtn>;
};

export default NavBtn;
