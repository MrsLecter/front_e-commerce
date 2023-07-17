import { FC } from "react";
import { StyledOptionLink } from "./OptionLink.styles";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  label: string;
}

const OptionLink: FC<Props> = ({ label }) => {
  const pathname = usePathname();
  return (
    <Link href={pathname + `/${label}/`}>
      <StyledOptionLink>{label}</StyledOptionLink>
    </Link>
  );
};

export default OptionLink;
