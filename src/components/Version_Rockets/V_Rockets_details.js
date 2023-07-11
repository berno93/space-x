import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const RocketDetails = () => {
  const [data, setData] = useState([]);
  const { RocketId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://api.spacexdata.com/v4/rockets',
        );
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const rocket = data.find((item) => {
    item.id === RocketId;
    console.log(item.id)
  });

  if (!rocket) {
    return <div>Fusée introuvable</div>;
  }

  return (
    <div>
      <h1>Les différentes versions de fusées utilisées par SpaceX</h1>
      {data.map((item) => (
        <div key={item.id} className="conteiner div-rocket">
          <img src={item.flickr_images[0]} className="img_rocket"></img>
          <h2>{item.name}</h2>
          <h4>
            Hauteur : {item.height.meters} m / {item.height.feet} ft
          </h4>
          <h4>
            Masse : {item.mass.kg} kg / {item.mass.lb} lb
          </h4>
          <h4 className="margin-bottom">
            Diamètre : {item.diameter.meters} m / {item.diameter.feet} ft
          </h4>
        </div>
      ))}
    </div>
  );
};

export default RocketDetails;
