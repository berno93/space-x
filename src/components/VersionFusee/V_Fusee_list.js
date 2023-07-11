import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Fusee() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://api.spacexdata.com/v4/rockets');
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {data.map((item) => (
        <div key={item.id} className="conteiner">
          <h3>{item.name}</h3>
          <img src={item.flickr_images[0]}></img>
          <h3>{item.type}</h3>
          <h3>
            Hauteur : {item.height.meters} m x {item.height.feet} feet
          </h3>
          <h3>Masse : {item.mass.kg} kg</h3>
        </div>
      ))}
    </div>
  );
}

export default Fusee;
