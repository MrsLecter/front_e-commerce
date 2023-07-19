import { FC } from "react";
import { ItemHeader, StyledRSSItem } from "./RSSItem.styles";

interface Props {
  date: Date;
  source: string;
  header: string;
}

const RSSItem: FC<Props> = ({ date, source, header }) => {
  return (
    <StyledRSSItem>
      <ItemHeader>
        <span>{date.toLocaleDateString("en-US")}</span>
        <span>&#128279;</span>
        <span>internetua</span>
      </ItemHeader>
      <a href="https://mmr.net.ua/autoworld/178968">
        Найдорожчий у світі автомобільний номер оцінили у 24 млн доларів
      </a>
    </StyledRSSItem>
  );
};

export default RSSItem;