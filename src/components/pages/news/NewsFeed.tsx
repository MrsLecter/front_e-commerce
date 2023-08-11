import { FC, useEffect, useState } from "react";
import {
  NewsFeedWrapper,
  NewsHeader,
  RSSContent,
  Message,
} from "./NewsFeed.styles";
import rimsService from "@/api/rims-service";
import { INewsFeedItem } from "@/types/common.types";
import RSSItem from "./elements/RSSItem";
import ShowMoreBtn from "../home/manufacturers/elements/showMoreBtn/ShowMoreBtn";

const NewsFeed: FC = () => {
  const [currPage, setCurrPage] = useState<number>(0);
  const [newsFeed, setNewsFeed] = useState<INewsFeedItem[]>([]);

  useEffect(() => {
    const getFeed = async () => {
      const response = await rimsService.getNewsFeed({ page: currPage });
      setNewsFeed((prev) => [...prev, ...response.data.message]);
    };
    getFeed();
  }, [currPage]);

  const getMoreNews = () => {
    setCurrPage((prev) => prev + 1);
  };
  return (
    <NewsFeedWrapper>
      <NewsHeader>Новости мира машин</NewsHeader>
      <RSSContent>
        {!newsFeed.length && <Message>Loading...</Message>}
        {newsFeed.map((item, index) => {
          return (
            <RSSItem
              key={index}
              newsPublicDate={item.pubDate}
              sourceLink={item.link}
              sourceName={item.sourceName}
              newsTitle={item.title}
            />
          );
        })}
      </RSSContent>
      <div>
        {newsFeed.length > 0 ? (
          <ShowMoreBtn color={"blue"} clickHandler={getMoreNews} />
        ) : (
          <></>
        )}
      </div>
    </NewsFeedWrapper>
  );
};

export default NewsFeed;
