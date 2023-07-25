import Image from "next/image";
import { FC } from "react";

import cars from "@images/auto-search.png";

import { StyledChoosing } from "./Choosing.styles";
import ChooseParamsBox from "@/components/common/chooseParamsBox/ChoosePramsBox";

interface IListItemType {
  id: number;
  label: string;
}

const Choosing: FC = () => {
  return (
    <StyledChoosing>
      <div>
        <Image
          src={cars}
          width={165}
          height={165}
          alt={"cars.png"}
          style={{ marginLeft: "10px", marginTop: "6px" }}
        />
      </div>
      <ChooseParamsBox
        header={"Подбор по авто"}
        defaultParams={[null, null, null]}
      />
    </StyledChoosing>
  );
};

export default Choosing;
