import { FC } from "react";
import Card from "../Card/Card";
import { StyledContainer } from "./CardsContainer.styles";

interface Props {
  isHaveHiddenCards: boolean;
  cardList: {
    id: number;
    logo: string;
    rim: string;
    href: string;
  }[];
}

const CardContainer: FC<Props> = ({ cardList, isHaveHiddenCards }) => {
  const splicedArr = cardList.slice(0, 2);
  const restArr = cardList.slice(2);
  return (
    <>
      <StyledContainer param={"large"}>
        {cardList.map((item) => {
          return (
            <Card
              key={item.id}
              id={item.id}
              logo={item.logo}
              rim={item.rim}
              href={item.href}
            />
          );
        })}
      </StyledContainer>
      <StyledContainer param={"small"}>
        {splicedArr.map((item) => {
          return (
            <Card
              key={item.id}
              id={item.id}
              logo={item.logo}
              rim={item.rim}
              href={item.href}
            />
          );
        })}
        {isHaveHiddenCards && (
          <div id="rest">
            {splicedArr.map((item) => {
              return (
                <Card
                  key={item.id}
                  id={item.id}
                  logo={item.logo}
                  rim={item.rim}
                  href={item.href}
                />
              );
            })}
          </div>
        )}
      </StyledContainer>
    </>
  );
};

export default CardContainer;
