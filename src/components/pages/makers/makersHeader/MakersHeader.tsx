import { FC } from "react";

import { AppRoutes } from "@/constants/common";
import { getBtnLabel } from "@/utils/functions";
import { usePathname } from "next/navigation";
import NavBtn from "../elements/navBtn/NavBtn";
import { StyledMakersHeader } from "./MakersHeader.styled";

const MakersHeader: FC = () => {
  const pathname = usePathname();
  
  let path = pathname!.substring(1, pathname!.length).split("/");
  path.splice(0, 1);

  return (
    <StyledMakersHeader>
      {path.map((item, index) => {
        return (
          <NavBtn
            key={index}
            label={getBtnLabel(path!.slice(0, index))}
            currentHref={
              AppRoutes.Home + "makers/" + path!.slice(0, index + 1).join("/")
            }
          />
        );
      })}
    </StyledMakersHeader>
  );
};

export default MakersHeader;
