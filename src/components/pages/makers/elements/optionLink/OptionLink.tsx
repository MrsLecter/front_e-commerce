import { FC } from "react";
import { StyledOptionLink } from "./OptionLink.styles";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  getRimConfigFromLabel,
  getSearchParamsByConfig,
} from "@/utils/functions";

interface Props {
  label: string;
}

const OptionLink: FC<Props> = ({ label }) => {
  const pathname = usePathname();
  let link = label;
  if (label.length > 30) {
    const rimParams = getRimConfigFromLabel(label);
    link = getSearchParamsByConfig(rimParams);
  }

  return (
    <Link href={pathname + `/${link}`}>
      <StyledOptionLink>{label}</StyledOptionLink>
    </Link>
  );
};

export default OptionLink;
