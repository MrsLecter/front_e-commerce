import { FC } from "react";

import Choosing from "./elements/choosing/Choosing";
import SearchBar from "./elements/searchBar/SearchBar";
import {
  ChoosingWrapper,
  SearchWrapper,
  StyledSelecting,
  Substrate,
} from "./Selecting.styles";

const Selecting: FC = () => {
  return (
    <StyledSelecting>
      <Substrate />
      <SearchWrapper>
        <SearchBar />
      </SearchWrapper>
      <ChoosingWrapper>
        <Choosing />
      </ChoosingWrapper>
    </StyledSelecting>
  );
};

export default Selecting;
