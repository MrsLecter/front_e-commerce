import { FC } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AppRoutes } from "@/constants/common";
import { IRimObject } from "@/types/common.types";
import { StyledRimLink } from "./RimLink.styles";

interface Props {
  rimData: IRimObject;
}

const RimLink: FC<Props> = ({ rimData }) => {
  const { rimId, name, price } = rimData;
  return (
    <Link href={AppRoutes.Rim + `/${rimId}`}>
      <StyledRimLink>{`${name}, price - ${price[0]}`}</StyledRimLink>
    </Link>
  );
};

export default RimLink;
