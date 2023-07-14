import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../styles/Roadster/Roadster.css';

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
    <div className="roadster-div margin">
      <div id="div-info-roadster">
        <h2 id="title-roadster">Where is the {roadsterData.name} ?</h2>
        {/* <p>Position actuelle : {roadsterData.flickr_images}</p> */}
        <p className='p-roadster'>Mass : {roadsterData.launch_mass_kg} kg</p>
        <p className='p-roadster'>Vitesse : {roundedSpeed} km/h</p>
        <p className='p-roadster'>Distance par rapport à la Terre : {roundedDistance} km</p>
        <p className='p-roadster' >Longitude : {roadsterData.longitude} °</p>
      </div>
    </div>
  );
};

export default RoadsterInfo;
