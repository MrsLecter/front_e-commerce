import { FC } from "react";
import {
  ChoosingWrapper,
  SearchWrapper,
  StyledSelecting,
  Substrate,
} from "./Selecting.styles";
import SearchBar from "./elements/searchBar/SearchBar";
import Choosing from "./elements/choosing/Choosing";

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
