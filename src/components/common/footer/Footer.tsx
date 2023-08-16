import Link from "next/link";
import { FC } from "react";

import { FOOTER_LINKS } from "@/constants/common";

import Logo from "../logo/Logo";
import {
  ContactWrapper,
  FooterWrapper,
  LinksWrapper,
  LogoWrapper,
  StyledFooter,
} from "./Footer.styles";

const Footer: FC = () => {
  return (
    <StyledFooter>
      <FooterWrapper>
        <LogoWrapper>
          <Logo color={"gray"} />
        </LogoWrapper>
        <LinksWrapper>
          <ul>
            {FOOTER_LINKS.map((item) => {
              return (
                <li key={item.id}>
                  <Link href={item.href}>{item.description}</Link>
                </li>
              );
            })}
          </ul>
        </LinksWrapper>
        <ContactWrapper>
          <p>
            <a href="mailto:blokhvova@gmail.com">blokhvova@gmail.com</a>
          </p>
          <p>
            <a href="tel:+380503403726">(050) 340-37-26</a>
          </p>
        </ContactWrapper>
      </FooterWrapper>
    </StyledFooter>
  );
};

export default Footer;
