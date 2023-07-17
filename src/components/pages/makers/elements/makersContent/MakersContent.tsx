import { usePathname } from "next/navigation";
import { FC, useEffect } from "react";

import OptionBtn from "../optionLink/OptionLink";
import { StyledMakersContent } from "./MakersContent.styles";

const MakersContent: FC = () => {
  const pathname = usePathname();

  const goBack = () => {
    alert(pathname.split("/"));
  };

  useEffect(() => {
    console.log("pathname", pathname, pathname.split("/").length);
  }, []);

  const items = ["1", "2", "3", "4", "5", "6", "7"];
  return (
    <StyledMakersContent>
      {items &&
        items.map((item, index) => <OptionBtn key={index} label={item} />)}
    </StyledMakersContent>
  );
};

export default MakersContent;
