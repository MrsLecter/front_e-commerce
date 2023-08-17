import { usePathname, useSearchParams } from "next/navigation";
import { FC, useEffect, useState } from "react";

import OptionBtn from "../elements/optionLink/OptionLink";
import { Message, StyledMakersContent } from "./MakersContent.styles";
import rimsService from "@/api/rims-service";
import { IRimObject } from "@/types/common.types";
import { getAllConfigs, getPrepearedRimsData } from "@/utils/functions";
import RimLink from "../elements/rimLink/RimLink";
import { IGetRimsResponse } from "@/api/rims-service.types";
import { AxiosResponse } from "axios";

const MakersContent: FC = () => {
  const pathname = usePathname();
  const patharr = pathname!.split("/");
  const searchParams = useSearchParams();

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
      const rimsDiameter = searchParams!.get("diameter");
      const rimsWidth = searchParams!.get("width");
      const rimsBoltPattern = searchParams!.get("bolt_pattern");
      let response: AxiosResponse<IGetRimsResponse, any>;
      if (rimsDiameter && rimsWidth && rimsBoltPattern) {
        response = await rimsService.getRimsByConfig({
          width: rimsWidth,
          diameter: rimsDiameter,
          mountingHoles: rimsBoltPattern,
        });
        if (!response.data.message.length) setIsEmpty(true);
        if (response.data.message.length) {
          const popularRims = getPrepearedRimsData(response.data.message).rims;
          setRimsLinks(popularRims);
        }
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
