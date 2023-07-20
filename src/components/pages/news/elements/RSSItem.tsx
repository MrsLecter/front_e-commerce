import { FC } from "react";
import { ItemHeader, StyledRSSItem } from "./RSSItem.styles";
import { getPrettyDate } from "@/utils/functions";

interface Props {
  newsPublicDate: string;
  sourceLink: string;
  sourceName: string;
  newsTitle: string;
}

const RSSItem: FC<Props> = ({
  newsPublicDate,
  sourceLink,
  sourceName,
  newsTitle,
}) => {
  return (
    <StyledRSSItem>
      <ItemHeader>
        <span>{getPrettyDate(newsPublicDate)}</span>
        <span>&#128279;</span>&nbsp;
        <span>&nbsp;{sourceName}</span>
      </ItemHeader>
      <a href={sourceLink} target={"_blank"}>
        {newsTitle}
      </a>
    </StyledRSSItem>
  );
};

export default RSSItem;
