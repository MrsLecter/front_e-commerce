import { usePathname } from "next/navigation";
import { FC, useEffect, useState } from "react";

import OptionBtn from "../optionLink/OptionLink";
import { Message, StyledMakersContent } from "./MakersContent.styles";
import rimsService from "@/api/rims-service";
import { IRimObject } from "@/types/common.types";
import { getAllConfigs } from "@/utils/functions";
import RimLink from "../rimLink/RimLink";

const MakersContent: FC = () => {
  const pathname = usePathname();
  const patharr = pathname!.split("/");

  const [parameters, setParameters] = useState<string[]>([]);
  const [rimsLinks, setRimsLinks] = useState<IRimObject[]>();
  const [loading, setLoading] = useState<boolean>(true);
  const [isEmpty, setIsEmpty] = useState<boolean>(false);

  useEffect(() => {
    const downloadAutoParameters = async () => {
      setLoading(true);
      const response = await rimsService.getAllAuto();
      if (response.data.message) {
        setParameters(response.data.message);
      } else {
        setIsEmpty(true);
      }

      setLoading(false);
    };

    const downloadAutoModels = async () => {
      setLoading(true);
      setIsEmpty(false);
      const brand = patharr[patharr.length - 1];
      const response = await rimsService.getAutoModels({ brand });
      if (response.data.message) {
        setParameters(response.data.message);
      } else {
        setIsEmpty(true);
      }
      setLoading(false);
    };

    const downloadAutoYears = async () => {
      setLoading(true);
      setIsEmpty(false);
      const brand = patharr[patharr.length - 2];
      const model = patharr[patharr.length - 1];
      const response = await rimsService.getAutoYears({ brand, model });
      if (response.data.message) {
        setParameters(response.data.message);
      } else {
        setIsEmpty(true);
      }
      setLoading(false);
    };

    const downloadConfigs = async () => {
      setLoading(true);
      setIsEmpty(false);
      const brand = patharr[patharr.length - 3];
      const model = patharr[patharr.length - 2];
      const year = patharr[patharr.length - 1];
      const response = await rimsService.getRimsConfig({ brand, model, year });

      if (response.data.message) {
        const retrieveConfigs = getAllConfigs(response.data.message);
        setParameters(retrieveConfigs);
      } else {
        setIsEmpty(true);
      }
      setLoading(false);
    };

    const downloadLinks = async () => {
      setLoading(true);
      setIsEmpty(false);
      const configPart = patharr[patharr.length - 1].match(/[\d\.\x]+/g);
      const diameter = configPart![0];
      const width = configPart![1];
      const mountingHoles = configPart![2];
      const response = await rimsService.getRimsByConfig({
        width,
        diameter,
        mountingHoles,
      });
      if (response.data.message) {
        setRimsLinks(response.data.message);
      } else {
        setIsEmpty(true);
      }

      setLoading(false);
    };

    if (patharr.length === 3 && !parameters.length) {
      downloadAutoParameters();
    }
    if (patharr.length === 4 && !parameters.length) {
      downloadAutoModels();
    }
    if (patharr.length === 5 && !parameters.length) {
      downloadAutoYears();
    }
    if (patharr.length === 6 && !parameters.length) {
      downloadConfigs();
    }
    if (patharr.length === 7 && !parameters.length && !rimsLinks && !isEmpty) {
      downloadLinks();
    }
  }, [patharr]);

  const goBack = () => {
    alert(pathname!.split("/"));
  };

  return (
    <StyledMakersContent>
      {loading && <Message>{"Loading..."}</Message>}
      {!loading && isEmpty && <Message>{"Data not found"}</Message>}
      {!loading &&
        parameters.length > 0 &&
        !rimsLinks &&
        parameters.map((item, index) => <OptionBtn key={index} label={item} />)}
      {!loading &&
        rimsLinks &&
        rimsLinks.length > 0 &&
        rimsLinks.map((item, index) => <RimLink key={index} rimData={item} />)}
    </StyledMakersContent>
  );
};

export default MakersContent;
