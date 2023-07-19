import ContentWrapper from "@/components/common/wrappers/ContentWrapper";
import { FC } from "react";
import { NewsHeader, RSSContent } from "./News.styles";

const News: FC = () => {
  return (
    <ContentWrapper>
      <NewsHeader>Новости мира машин</NewsHeader>
      <RSSContent>rss</RSSContent>
    </ContentWrapper>
  );
};
