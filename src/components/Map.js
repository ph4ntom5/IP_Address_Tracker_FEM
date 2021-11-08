import React from "react";
import { MapContainer as LeafletMap, TileLayer } from "react-leaflet";
import styled from "styled-components/macro";

const Wrapper = styled.section`
  position: relative;
  z-index: 2;
`;

const Map = () => {
  const position = [56.26, 9.5];

  return (
    <Wrapper>
      <LeafletMap
        center={position}
        zoom={8}
        className="map"
        style={{
          height: "670px",
          width: "100%",
          position: "relative",
          zindex: 2,
        }}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </LeafletMap>
    </Wrapper>
  );
};

export default Map;
