import { IRimObject } from "@/types/common.types";
import { FC } from "react";
import Image from "next/image";
import { ItemName, ItemPrice, StyldResultItem } from "./ResultItem.styled";

interface Props {
  params: IRimObject;
}

const ResultItem: FC<Props> = ({ params }) => {
  const { rimId, name, image, diameter, price } = params;
  return (
    <StyldResultItem>
      <div>
        <Image src={image} alt="rim.png" width={36} height={36} />
      </div>
      <div>
        <ItemName>{name.split("-")[1].trim()}</ItemName>
        <ItemPrice>от&nbsp;{price}&nbsp;грн</ItemPrice>
      </div>
    </StyldResultItem>
  );
};

export default ResultItem;
