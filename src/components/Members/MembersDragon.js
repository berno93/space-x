import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../../styles/Members/Members.css';

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
      <h1>Dragon crew members</h1>
      <div className="members-row">
        {data.map((item) => (
          <div key={item.id} className="div-member">
            <Link to={`/members/${item.id}`} className="card">
              <p className="card-text">{item.name}</p>
              <img src={item.image} className="card-img-top" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Members;
