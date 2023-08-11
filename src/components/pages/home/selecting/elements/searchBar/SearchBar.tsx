import Image from "next/image";
import { ChangeEvent, FC, KeyboardEvent, MouseEvent, useState } from "react";

import { AppModals } from "@/constants/common";
import searchIcon from "@icons/search-black.svg";

import { Icon, SearchInput, StyledSearchBar } from "./SearchBar.styles";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  setInputHandler?: (searchInput: string) => void;
  openSearchModal?: (modalId: number) => void;
  inputSearch?: string;
}

const SearchBar: FC<Props> = ({
  setInputHandler,
  openSearchModal,
  inputSearch,
  ...defaultProps
}) => {
  const onPressEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (openSearchModal) openSearchModal(AppModals.Search);
    }
  };

  const changeInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (setInputHandler) setInputHandler(e.target.value);
  };

  const setFocus = () => {
    if (openSearchModal) openSearchModal(AppModals.Search);
  };

  const barClickHandler = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <StyledSearchBar onClick={(e) => barClickHandler(e)}>
      <Icon>
        <Image src={searchIcon} width={18} height={18} alt={"search.svg"} />
      </Icon>
      <SearchInput
        type="text"
        onChange={(e) => changeInput(e)}
        onKeyDown={(e) => onPressEnter(e)}
        onClick={setFocus}
        placeholder="Поиск по дискам"
        name="searchBar"
        {...defaultProps}
      />
    </StyledSearchBar>
  );
};

export default SearchBar;
