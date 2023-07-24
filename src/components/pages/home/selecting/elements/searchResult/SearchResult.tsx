import { FC } from "react";
import { StyledSearchResult } from "./SearchResult.styles";

interface Props {
  children: React.ReactNode;
}

const SearchResult: FC<Props> = ({ children }) => {
  return <StyledSearchResult>{children}</StyledSearchResult>;
};

export default SearchResult;
