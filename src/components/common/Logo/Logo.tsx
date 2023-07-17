import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

import logoGreyPng from "@images/logo-dark.png";
import logoPng from "@images/logo.png";
import { rubik } from "@styles/fonts";

import { StyledLogo } from "./Logo.styles";

interface Props {
  color?: "white" | "gray";
}

const Logo: FC<Props> = ({ color = "white" }) => {
  return (
    <Link href="/">
      <StyledLogo className={rubik.variable} color={color}>
        {color === "white" && (
          <Image width={36} height={32} src={logoPng} alt={"logo.png"} />
        )}
        {color === "gray" && (
          <Image width={36} height={32} src={logoGreyPng} alt={"logo.png"} />
        )}
        <p>Ukrdisk</p>
      </StyledLogo>
    </Link>
  );
};

export default Logo;
