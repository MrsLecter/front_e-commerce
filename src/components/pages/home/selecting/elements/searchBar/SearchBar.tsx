import Image from "next/image";
import { FC } from "react";

import searchIcon from "@icons/search-black.svg";

import { Icon, SearchInput, StyledSearchBar } from "./SearchBar.styles";

const SearchBar: FC = () => {
  return (
    <StyledSearchBar>
      <Icon>
        <Image src={searchIcon} width={18} height={18} alt={"search.svg"} />
      </Icon>
      <SearchInput type="text" placeholder="Поиск по дискам" name="searchBar" />
    </StyledSearchBar>
  );
};

export default SearchBar;
