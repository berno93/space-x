import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../styles/V_Rockets_list.css';
import { Link } from 'react-router-dom';

function Rocket() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://api.spacexdata.com/v4/rockets',
        );
        setData(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Les différentes versions de fusées utilisées par SpaceX</h1>
      {data.map((item) => (
        <div key={item.id} className="conteiner div-rocket">
          <Link to={`/rockets/${item.id}`}>
            {' '}
            <img src={item.flickr_images[0]} className="img_rocket"></img>
          </Link>{' '}
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
}

export default Rocket;
