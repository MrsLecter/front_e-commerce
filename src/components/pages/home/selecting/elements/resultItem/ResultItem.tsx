import Image from "next/image";
import { FC } from "react";

import { IRimObject } from "@/types/common.types";

import { ItemName, ItemPrice, StyldResultItem } from "./ResultItem.styled";
import Link from "next/link";
import { getUrlToRimPage } from "@/utils/functions";

interface Props {
  params: IRimObject;
}

const ResultItem: FC<Props> = ({ params }) => {
  const { rimId, brand, name, image, minPrice, config } = params;
  const priceLabel = minPrice ? minPrice[0] : 0;
  const url = getUrlToRimPage({
    rimId,
    brand,
    name,
    config: config[0],
  });

  return (
    <Link href={url}>
      <StyldResultItem>
        <div>
          <Image src={image} alt="rim.png" width={36} height={36} />
        </div>
        <div>
          <ItemName>{name}</ItemName>
          {!!priceLabel && <ItemPrice>от&nbsp;{priceLabel}&nbsp;грн</ItemPrice>}
        </div>
      </StyldResultItem>
    </Link>
  );
};

export default ResultItem;
