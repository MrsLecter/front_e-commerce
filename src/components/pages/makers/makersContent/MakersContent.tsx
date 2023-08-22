import { usePathname, useSearchParams } from "next/navigation";
import { FC, useEffect, useState } from "react";

import rimsService from "@/api/rims-service";
import { IGetRimsDiameterResponse } from "@/api/rims-service.types";
import { useAppDispatch } from "@/hooks/reducers.hook";
import { setCarProps } from "@/store/reducers/carSlice";
import { IRimObject } from "@/types/common.types";
import { getAllConfigs } from "@/utils/functions";
import { AxiosResponse } from "axios";
import OptionBtn from "../elements/optionLink/OptionLink";
import RimLink from "../elements/rimLink/RimLink";
import { Message, StyledMakersContent } from "./MakersContent.styles";

const MakersContent: FC = () => {
  const pathname = usePathname();
  const patharr = pathname!.split("/");
  const searchParams = useSearchParams();
  const dispatch = useAppDispatch();

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
      const [_, makers, all, makerName] = patharr;
      const response = await rimsService.getAutoModels({ makerName });
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
      const [_, makers, all, makerName, modelName] = patharr;
      const response = await rimsService.getAutoYears({ makerName, modelName });
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
      const [_, makers, all, makerName, modelName, year] = patharr;
      const response = await rimsService.getRimsConfig({
        makerName,
        modelName,
        year,
      });

      if (response.data.message) {
        const retrieveConfigs = getAllConfigs(response.data.message);
        setParameters(retrieveConfigs);
        dispatch(setCarProps({ makerName, modelName, year }));
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

      let response: AxiosResponse<IGetRimsDiameterResponse, any>;
      if (rimsDiameter && rimsWidth && rimsBoltPattern) {
        response = await rimsService.getRimsByConfig({
          width: rimsWidth,
          diameter: rimsDiameter,
          mountingHoles: rimsBoltPattern,
        });
        const rimsList = response.data.message.rimList;
        if (!rimsList.length) setIsEmpty(true);
        if (rimsList.length) {
          setRimsLinks(rimsList);
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
