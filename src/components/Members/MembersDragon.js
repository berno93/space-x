import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Members() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.spacexdata.com/v4/crew');
        setData(response.data);
        return data;
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="members-container">
      <h1>Dragon crew members :</h1>

      {data.map((item) => (
        <div key={item.id}>
          <Link to={`/members/${item.id}`} className="card">
            <p className="card-text">{item.name}</p>
            <img src={item.image} className="card-img-top" />
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Members;
