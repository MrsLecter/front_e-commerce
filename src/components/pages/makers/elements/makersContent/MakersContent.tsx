import { usePathname } from "next/navigation";
import { FC, useEffect, useState } from "react";

import OptionBtn from "../optionLink/OptionLink";
import { Message, StyledMakersContent } from "./MakersContent.styles";
import rimsService from "@/api/rims-service";

const MakersContent: FC = () => {
  const pathname = usePathname();
  const patharr = pathname.split("/");

  console.log("content download", patharr[patharr.length - 1]);

  const [parameters, setParameters] = useState<string[]>([]);

  useEffect(() => {
    const downloadAutoParameters = async () => {
      const response = await rimsService.getAllAuto();
      console.log("get all auto", response.data.message);
      setParameters(response.data.message);
    };
    const downloadAutoModels = async () => {
      const brand = patharr[patharr.length - 1];
      const response = await rimsService.getAutoModels({ brand });
      console.log("get auto models", response.data.message);
      setParameters(response.data.message);
    };
    const downloadAutoYears = async () => {
      const brand = patharr[patharr.length - 2];
      const model = patharr[patharr.length - 1];
      const response = await rimsService.getAutoYears({ brand, model });
      console.log("get auto years", response.data.message);
      setParameters(response.data.message);
    };
    console.log("patharr", patharr, patharr.length);
    if (patharr.length === 3 && !parameters.length) {
      downloadAutoParameters();
    }
    if (patharr.length === 4 && !parameters.length) {
      downloadAutoModels();
    }
    if (patharr.length === 5 && !parameters.length) {
      downloadAutoYears();
    }
    
  }, [patharr]);

  const goBack = () => {
    alert(pathname.split("/"));
  };

  useEffect(() => {
    console.log("pathname", pathname, pathname.split("/").length);
  }, []);

  const items = ["1", "2", "3", "4", "5", "6", "7"];
  return (
    <StyledMakersContent>
      {!parameters.length && <Message>{"Loading..."}</Message>}
      {parameters.length > 0 &&
        parameters.map((item, index) => <OptionBtn key={index} label={item} />)}
    </StyledMakersContent>
  );
};

export default MakersContent;
