import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import '../../styles/Articles/articles.css';
function History() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://api.spacexdata.com/v4/history',
        );
        const sortedData = response.data.sort(
          (a, b) => new Date(b.event_date_utc) - new Date(a.event_date_utc),
        );
        setData(sortedData);
        console.log('response.history ====> ', response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const formatDate = (dateString) => {
    const dateObject = new Date(dateString);
    const formattedDate = format(dateObject, "do 'of' MMMM yyyy");
    return formattedDate;
  };

  return (
    <div className="articles-container">
      <h1>Articles List </h1>
      {data.map((item) => (
        <div className="card" key={item.id}>
          <Link to={`/history/${item.id}`}>
            <div className="card-header">
              <div>{formatDate(item.event_date_utc)}</div>
            </div>
            <div className="card-body">
              <div className="card-title">{item.title}</div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default History;
