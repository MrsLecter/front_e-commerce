import { LOCATION_MAP_URL } from "@/constants/common";
import { FC } from "react";
import styled from "styled-components";

const Location: FC = () => {
  return (
    <MapWrapper>
      <iframe
        src={LOCATION_MAP_URL}
        width="100%"
        height="100%"
        style={{ border: "none" }}
        allowFullScreen={false}
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </MapWrapper>
  );
};

const MapWrapper = styled.div`
  margin-top: 8px;
  width: 100%;
  height: 400px;
  background-color: #f0f1f1;
`;

export default Location;
