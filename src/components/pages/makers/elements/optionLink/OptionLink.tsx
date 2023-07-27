import { FC } from "react";
import { StyledOptionLink } from "./OptionLink.styles";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  label: string;
}

const OptionLink: FC<Props> = ({ label }) => {
  const pathname = usePathname();
  let link = label;
  if (label.length > 30) {
    const parsedLink = label.match(/[\d\.\x]+/g);
    link = `d-${parsedLink![0]}&w-${parsedLink![1]}&pcd-${parsedLink![2]}`;
  }

  return (
    <Link href={pathname + `/${link}/`}>
      <StyledOptionLink>{label}</StyledOptionLink>
    </Link>
  );
};

export default OptionLink;
