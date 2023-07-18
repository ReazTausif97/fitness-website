import mapboxgl from "mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import { useEffect, useRef, useState } from "react";
const MapSection = () => {
  mapboxgl.accessToken =
    "pk.eyJ1IjoicmVhei10YXVzaWYiLCJhIjoiY2xob2c3bDI5MHd2MTNjbW5xZHhwNzI2cyJ9.iI4rJ7mKak_k-MRu5tf9GQ";
  const mapContainer = useRef(null);
  const map = useRef(null);
  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/reaztausif/clhofh7nk01sg01pg2d1bgzzp",
      center: [91.806, 22.3667],
      zoom: 14.09,
    });
  });

  return (
    <section className="w-full h-[500px]">
      <div className="h-full">
        <div ref={mapContainer} className="map-container h-full" />
      </div>
    </section>
  );
};
export default MapSection;
