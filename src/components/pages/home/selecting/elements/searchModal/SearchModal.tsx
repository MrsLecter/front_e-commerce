import { FC, MouseEvent, useEffect, useState } from "react";

import { AppModals } from "@/constants/common";
import ModalWrapper from "@/components/common/wrappers/modalWrapper/ModalWrapper";
import { ModalContent, StyledSearchModal } from "./SearchModal.styles";
import SearchBar from "../searchBar/SearchBar";
import SearchResult from "../searchResult/SearchResult";
import ResultItem from "../resultItem/ResultItem";
import Header from "@/components/common/header/Header";
import { IModalProps, IRimObject } from "@/types/common.types";
import rimsService from "@/api/rims-service";

const SearchModal: FC<IModalProps> = ({ managementObject }) => {
  const [input, setInput] = useState<string>("");
  const [searchResult, setSearchResult] = useState<IRimObject[]>();
  const [loading, setLoading] = useState<boolean>(true);

  const modalClickHandler = (e: MouseEvent) => {
    e.stopPropagation();
  };

  useEffect(() => {
    console.log("input", input);
    const getPopularResult = async () => {
      setLoading(true);
      const response = await rimsService.getPopularRims();
      console.log("popular respone", response);
      setSearchResult((prev) => [...response.data.message]);
      setLoading(false);
    };
    const getSearchResult = async () => {
      setLoading(true);
      const response = await rimsService.postSearchString({
        searchText: input || "",
      });
      console.log("search input", response);

      setSearchResult((prev) => [...response.data.message]);
      setLoading(false);
    };
    setSearchResult(prev=>[]);
    if (!input) {
      getPopularResult();
    }
    if (input) {
      getSearchResult();
    }
  }, [input]);

  return (
    <>
      {!managementObject.isActive(AppModals.Search) && <></>}
      {managementObject.isActive(AppModals.Search) && (
        <ModalWrapper
          backClickHandler={() => managementObject.closeHandler()}
          isAppearing={managementObject.isAppearing}
          hasAnimation={false}
        >
          <StyledSearchModal>
            <Header
              color={"none"}
              modalHandler={managementObject.activateHandler}
            />
            <ModalContent>
              <SearchBar
                inputSearch={input}
                setInputHandler={(value) => setInput(value)}
                autoFocus={true}
              />
              <SearchResult>
                {!loading &&
                  searchResult &&
                  searchResult.map((item) => {
                    return <ResultItem key={item.rimId} params={item} />;
                  })}
                {loading && <></>}
              </SearchResult>
            </ModalContent>
          </StyledSearchModal>
        </ModalWrapper>
      )}
    </>
  );
};

export default SearchModal;
