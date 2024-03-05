import React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

function Mappage() {
  const libraries = ["places"];
  const mapOptions = {
    disableDefaultUI: true // Disables default UI
  };
  const mapContainerStyle = {
    width: "500",
    height: "60vh",
  };
  const center = {
    lat: 13.0827,
    lng: 80.2707,
  };
 
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyA70tnLx8NK4UaCw0ZbtEdaL33iQxigrAg",
    libraries,
    
  });

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }
  return (
    <div>
      <div>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={10}
          center={center}
          options={mapOptions}
        >
          <Marker position={center} />
        </GoogleMap>
      </div>
    </div>
  );
}

export default Mappage;
