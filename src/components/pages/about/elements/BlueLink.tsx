import Link from "next/link";
import { FC } from "react";
import { styled } from "styled-components";

interface Props {
  link: string;
  label: string;
}

const BlueLink: FC<Props> = ({ link, label }) => {
  return (
    <Link href={link}>
      <StyledLink>{label}</StyledLink>
    </Link>
  );
};

const StyledLink = styled.span`
  padding: 2px 0;
  text-decoration: underline;
  color: rgb(80, 114, 153);
`;

export default BlueLink;
