import Link from "next/link";
import { FC } from "react";

import { AppRoutes } from "@/constants/common";
import { IRimObject } from "@/types/common.types";

import { StyledRimLink } from "./RimLink.styles";
import { getPriceLabel } from "@/utils/functions";

interface Props {
  rimData: IRimObject;
}

const RimLink: FC<Props> = ({ rimData }) => {
  const { rimId, name, price } = rimData;
  return (
    <Link href={AppRoutes.Rim + `/${rimId}`}>
      <StyledRimLink>{`${name}, (от ${getPriceLabel(
        price
      )} грн - 1шт.)`}</StyledRimLink>
    </Link>
  );
};

export default RimLink;
