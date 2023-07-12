import { FC } from "react";
import styled from "styled-components";
import Card from "../Card/Card";
import ShowMoreBtn from "../showMoreBtn/ShowMoreBtn";

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
  let pageWidth = 800;
  // if (typeof window !== undefined) {
  //   pageWidth = document.documentElement.clientWidth;
  // }

  const splicedArr = cardList.slice(0, 2);
  return (
    <StyledContainer>
      {(pageWidth < 760 && !isHaveHiddenCards) ||
        (pageWidth >= 760 &&
          cardList.map((item) => {
            return (
              <Card
                key={item.id}
                id={item.id}
                logo={item.logo}
                rim={item.rim}
                href={item.href}
              />
            );
          }))}
      {pageWidth < 760 &&
        isHaveHiddenCards &&
        splicedArr.map((item) => {
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
  );
};

const StyledContainer = styled.div`
  padding: 14px 16px 0px 16px;
  width: 100%;
  max-width: 1024px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: 990px) {
    padding: 14px 0px 0px 0px;
    width: 740px;
    flex-wrap: wrap;
  }

  @media (max-width: 760px) {
    width: 100%;

    flex-wrap: nowrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export default CardContainer;
