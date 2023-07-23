import { FC, useState } from "react";

import SectionHeader from "@/components/common/sectionHeader/SectionHeader";
import { MANUFACTURERS_CARD_LIST } from "@/constants/manufactures-card-list";

import CardContainer from "./elements/CardsContainer/CardsContainer";
import ShowMoreBtn from "./elements/showMoreBtn/ShowMoreBtn";
import { ShowMoreBtnWrapper, StyledManufacturers } from "./Manufacturers.styles";

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
        <ShowMoreBtnWrapper>
          <ShowMoreBtn
            clickHandler={() => toggleIsHaveHiddenCards(true)}
            hiddenCards={hiddenCardsAmount}
          />
        </ShowMoreBtnWrapper>
      )}
    </StyledManufacturers>
  );
};

export default Manufacturers;
