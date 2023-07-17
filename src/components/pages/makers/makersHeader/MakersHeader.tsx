import { FC } from "react";

import NavBtn from "../elements/navBtn/NavBtn";
import { StyledMakersHeader } from "./MakersHeader.styled";
import { usePathname } from "next/navigation";
import { getBtnLabel } from "@/utils/functions";

const MakersHeader: FC = () => {
  const pathname = usePathname();

  const path = pathname
    .split("/")
    .filter((item) => item !== "/" && item !== "");

  return (
    <StyledMakersHeader>
      {path.map((item, index) => {
        return (
          <NavBtn
            key={index}
            label={getBtnLabel(path.slice(0, index))}
            currentHref={path.slice(0, index + 1).join("/")}
          />
        );
      })}
    </StyledMakersHeader>
  );
};

export default MakersHeader;
