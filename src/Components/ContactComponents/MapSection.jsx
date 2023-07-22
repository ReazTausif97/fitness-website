import mapboxgl from "mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import MapboxGeocoder from "mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import { useEffect, useRef, useState } from "react";
const MapSection = () => {
  mapboxgl.accessToken =
    "pk.eyJ1IjoicmVhei10YXVzaWYiLCJhIjoiY2xob2c3bDI5MHd2MTNjbW5xZHhwNzI2cyJ9.iI4rJ7mKak_k-MRu5tf9GQ";

  const mapContainerRef = useRef(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/reaztausif/clhofh7nk01sg01pg2d1bgzzp",
      center: [91.801626, 22.368229],
      zoom: 14.09,
    });
    const marker1 = new mapboxgl.Marker()
      .setLngLat([91.801626, 22.368229])
      .addTo(map);
    return () => map.remove();
  });

  return (
    <section className="w-full h-[500px]">
      <div className="h-full">
        <div ref={mapContainerRef} className="map-container h-full" />
      </div>
    </section>
  );
};
export default MapSection;
