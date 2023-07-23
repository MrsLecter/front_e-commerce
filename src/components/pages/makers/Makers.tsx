import { FC } from "react";

import ContentWrapper from "@/components/common/wrappers/ContentWrapper";

import MakersContent from "./elements/makersContent/MakersContent";
import MakersHeader from "./makersHeader/MakersHeader";

interface Props {
  chooseOption: string[];
}

const MakersChoose: FC<Props> = ({ chooseOption }) => {
  return (
    <ContentWrapper>
      <MakersHeader />
      <MakersContent />
    </ContentWrapper>
  );
};

export default MakersChoose;
