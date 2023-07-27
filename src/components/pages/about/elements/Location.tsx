import { FC } from "react";
import styled from "styled-components";

const Location: FC = () => {
  return (
    <MapWrapper>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d286.0194968181417!2d35.022059715701204!3d48.41905745516649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDjCsDI1JzA4LjciTiAzNcKwMDEnMjAuMCJF!5e0!3m2!1sru!2sua!4v1689573442366!5m2!1sru!2sua"
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
