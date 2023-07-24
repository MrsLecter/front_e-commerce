import { FC } from "react";

import Choosing from "./elements/choosing/Choosing";
import SearchBar from "./elements/searchBar/SearchBar";
import {
  ChoosingWrapper,
  SearchWrapper,
  StyledSelecting,
  Substrate,
} from "./Selecting.styles";

interface Props {
  openSearchModal: (modalId: number) => void;
}

const Selecting: FC<Props> = ({ openSearchModal }) => {
  return (
    <StyledSelecting>
      <Substrate />
      <SearchWrapper>
        <SearchBar openSearchModal={openSearchModal} />
      </SearchWrapper>
      <ChoosingWrapper>
        <Choosing />
      </ChoosingWrapper>
    </StyledSelecting>
  );
};

export default Selecting;
