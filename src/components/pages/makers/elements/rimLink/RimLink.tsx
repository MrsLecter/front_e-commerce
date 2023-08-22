import Link from "next/link";
import { FC } from "react";

import { IRimObject } from "@/types/common.types";

import { StyledRimLink } from "./RimLink.styles";
import { getPrettyPrice, getUrlToRimPage } from "@/utils/functions";

interface Props {
  rimData: IRimObject;
}

const RimLink: FC<Props> = ({ rimData }) => {
  const { name, brand, minPrice, diameters, image, rimId, config } = rimData;
  const diameterLabel = diameters ? diameters : [0];
  const priceLabel = minPrice ? minPrice[0] : 0;
  const urlToPage = getUrlToRimPage({
    rimId,
    brand,
    name,
    config: config[0],
  });
  return (
    <Link href={urlToPage}>
      <StyledRimLink>{`${brand} - ${name}, (от ${getPrettyPrice(
        priceLabel
      )} грн - 1шт.)`}</StyledRimLink>
    </Link>
  );
};

export default RimLink;
