import Image from "next/image";
import { FC } from "react";

import { IRimObject } from "@/types/common.types";
import { getPriceLabel } from "@/utils/functions";

import { ItemName, ItemPrice, StyldResultItem } from "./ResultItem.styled";
import { useRouter } from "next/navigation";
import { AppRoutes } from "@/constants/common";

interface Props {
  params: IRimObject;
}

const ResultItem: FC<Props> = ({ params }) => {
  const { rimId, name, image, diameter, price } = params;
  const router = useRouter();
  const priceLabel = getPriceLabel(price);

  const redirectHandler = () => {
    router.push(AppRoutes.Rim + `/${rimId}`);
  };
  return (
    <StyldResultItem onClick={redirectHandler}>
      <div>
        <Image src={image} alt="rim.png" width={36} height={36} />
      </div>
      <div>
        <ItemName>{name.split("-")[1].trim()}</ItemName>
        <ItemPrice>от&nbsp;{priceLabel}&nbsp;грн</ItemPrice>
      </div>
    </StyldResultItem>
  );
};

export default ResultItem;
