import { FC, useEffect, useState } from "react";

import rimsService from "@/api/rims-service";
import Header from "@/components/common/header/Header";
import ModalWrapper from "@/components/common/wrappers/modalWrapper/ModalWrapper";
import { AppModals } from "@/constants/common";
import { IModalProps, IRimObject } from "@/types/common.types";
import ResultItem from "../resultItem/ResultItem";
import SearchBar from "../searchBar/SearchBar";
import SearchResult from "../searchResult/SearchResult";
import { ModalContent, StyledSearchModal } from "./SearchModal.styles";

const SearchModal: FC<IModalProps> = ({ managementObject }) => {
  const [input, setInput] = useState<string>("");
  const [searchResult, setSearchResult] = useState<IRimObject[]>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getSearchResult = async () => {
      setLoading(true);
      const response = await rimsService.postSearchString({
        searchText: input || "",
      });
      setSearchResult((prev) => [...response.data.message]);
      setLoading(false);
    };
    setSearchResult((prev) => []);
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
          <StyledSearchModal id="modal">
            <Header
              color={"none"}
              modalHandler={managementObject.activateHandler}
            />
            <ModalContent>
              <SearchBar
                inputSearch={input}
                setInputHandler={(value) => setInput(value)}
                autoFocus={true}
                isDisabled={false}
              />
              {input.length > 0 && (
                <SearchResult>
                  {!loading &&
                    searchResult &&
                    searchResult.map((item, index) => {
                      return <ResultItem key={item.rimId} params={item} />;
                    })}
                  {loading && <></>}
                </SearchResult>
              )}
            </ModalContent>
          </StyledSearchModal>
        </ModalWrapper>
      )}
    </>
  );
};

export default SearchModal;
