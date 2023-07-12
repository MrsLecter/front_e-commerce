import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import logoPng from "@images/logo.png";
import styled from "styled-components";
import { rubik } from "@styles/fonts";

const Logo: FC = () => {
  return (
    <Link href="/">
      <StyledLogo className={rubik.variable}>
        <Image width={36} height={32} src={logoPng} alt={"logo.png"} />
        <p>Ukrdisk</p>
      </StyledLogo>
    </Link>
  );
};

const StyledLogo = styled.div`
  padding: 2px;
  height: 32px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  p {
    margin-left: 16px;
    font-family: var(--font-rubik);
    font-size: 24px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 48px;
    color: white;
    white-space: nowrap;
  }
`;

export default Logo;
