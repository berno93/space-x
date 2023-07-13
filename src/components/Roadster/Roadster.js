import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RoadsterInfo = () => {
  const [roadsterData, setRoadsterData] = useState(null);

  useEffect(() => {
    const fetchRoadsterData = async () => {
      try {
        const response = await axios.get(
          'https://api.spacexdata.com/v4/roadster',
        );
        setRoadsterData(response.data);
      } catch (error) {
        console.log("Une erreur s'est produite lors de la requête :", error);
      }
    };

    fetchRoadsterData();
  }, []);

  if (!roadsterData) {
    return <div>Chargement en cours...</div>;
  }
  const roundedSpeed = Math.round(roadsterData.speed_kph * 100) / 100;
  const roundedDistance =
    Math.round(roadsterData.earth_distance_km * 100) / 100;

  return (
    <div>
      <h2>{roadsterData.name}</h2>
      {/* <p>Position actuelle : {roadsterData.flickr_images}</p> */}
      <p>Mass : {roadsterData.launch_mass_kg} kg</p>
      <p>Vitesse : {roundedSpeed} km/h</p>
      <p>Distance par rapport à la Terre : {roundedDistance} km</p>
      <p>Longitude : {roadsterData.longitude} °</p>
    </div>
  );
};

export default RoadsterInfo;
