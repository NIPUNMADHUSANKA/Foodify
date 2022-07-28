import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

export default function Home() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}

function Map() {
  const center = useMemo(() => ({ lat:6.92 , lng: 79.86 }), []);

  return (
    <GoogleMap sx={{
        marginTop:'3%',
        width:'50',
        height:'50',
      }} zoom={10} center={center} mapContainerClassName="map-container">
      <Marker position={center} />
    </GoogleMap>
  );
}