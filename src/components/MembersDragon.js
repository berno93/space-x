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
        console.log(response.data);
        return data;
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Liste des membres :</h1>
      <ul>
        {data.map((item) => (
          <div key={item.id}>
            <Link to={`/members/${item.id}`}>
              <li>{item.name}</li>
              <li>Work at :{item.agency}</li>
              <li>{item.image}</li>
              <li>Status : {item.status}</li>
            </Link>
            <li key={item.id}>Link : {item.wikipedia}</li>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Members;
