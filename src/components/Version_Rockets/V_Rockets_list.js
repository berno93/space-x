import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../styles/V_Rockets/V_Rockets_list.css';
import { Link } from 'react-router-dom';

function Rocket() {
  document.title = 'The different versions of rockets used by SpaceX';
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
      <h1 className="margin-top">
      The different versions of rockets used by SpaceX
      </h1>
      {data.map((item) => (
        <div key={item.id} className="conteiner div-rocket">
          <Link to={`/rockets/${item.id}`}>
            {' '}
            <img src={item.flickr_images[0]} className="img_rocket"></img>
          </Link>{' '}
          <h2>{item.name}</h2>
          <h4>
            Height : {item.height.meters} m / {item.height.feet} ft
          </h4>
          <h4>
            Mass : {item.mass.kg} kg / {item.mass.lb} lb
          </h4>
          <h4>
            Diameter : {item.diameter.meters} m / {item.diameter.feet} ft
          </h4>
          <a href={item.wikipedia} target="blank">
            <img
              src="https://cdn-icons-png.flaticon.com/512/49/49360.png"
              id="logo-wiki"
            ></img>
          </a>
        </div>
      ))}
    </div>
  );
}

export default Rocket;
