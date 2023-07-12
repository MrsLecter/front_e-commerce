import SectionHeader from "@/components/common/sectionHeader/SectionHeader";
import { StyledManufacturers } from "./Manufacturers.styles";
import { FC, useState } from "react";
import CardContainer from "./elements/CardsContainer/CardsContainer";
import ShowMoreBtn from "./elements/showMoreBtn/ShowMoreBtn";
import { MANUFACTURERS_CARD_LIST } from "@/constants/common";

const Manufacturers: FC = () => {
  const hiddenCardsAmount = MANUFACTURERS_CARD_LIST.length - 2;
  const [isHaveHiddenCards, toggleIsHaveHiddenCards] = useState<boolean>(false);

  return (
    <StyledManufacturers>
      <SectionHeader label={"Производители дисков"} />
      <CardContainer
        isHaveHiddenCards={isHaveHiddenCards}
        cardList={MANUFACTURERS_CARD_LIST}
      />
      {!isHaveHiddenCards && (
        <ShowMoreBtn
          clickHandler={() => toggleIsHaveHiddenCards(true)}
          hiddenCards={hiddenCardsAmount}
        />
      )}
    </StyledManufacturers>
  );
};

export default Manufacturers;
