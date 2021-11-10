import React, { useEffect, useRef } from "react";
import { MapContainer as LeafletMap, TileLayer } from "react-leaflet";
import styled from "styled-components/macro";

const Wrapper = styled.section`
  position: relative;
  z-index: 2;
`;

const Maps = () => {
  const defaultPos = [55.67, 12.56];

  const mapRef = useRef();
  useEffect(() => {
    const { current = {} } = mapRef;
    const { leafletElement: map } = current;

    // read browser location ,creates error// map.locate({ setView: true });
  }, []);

  return (
    <Wrapper>
      <LeafletMap
        ref={mapRef}
        center={defaultPos}
        zoom={12}
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

export default Maps;
