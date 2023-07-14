import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import '../../styles/Articles/articles.css';
import { format } from 'date-fns';

function HistoryDetails() {
  const [historyDetails, setHistoryDetails] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://api.spacexdata.com/v4/history',
        );
        const filteredHistoryDetails = response.data.filter(
          (item) => item.id === id,
        );

        if (filteredHistoryDetails.length === 0) {
          setHistoryDetails(null);
        } else {
          setHistoryDetails(filteredHistoryDetails[0]);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [id]);
  const formatDate = (dateString) => {
    const dateObject = new Date(dateString);
    const formattedDate = format(dateObject, "do 'of' MMMM yyyy");
    return formattedDate;
  };
  if (historyDetails === null) {
    return <div>There is no articles</div>;
  }
  console.log(historyDetails);
  return (
    <div className="articles-container article-details">
      <h5 className="card-date">{historyDetails.title}</h5>
      <div className="card">
        <div className="card-header">
          {formatDate(historyDetails.event_date_utc)}
        </div>
        <div className="card-body">
          <p className="card-text">{historyDetails.details}</p>
        </div>
        <div className="card-footer">
          <a href={historyDetails.links.article} target="blank" className="btn">
            <p>Article's Link</p>
          </a>
        </div>
      </div>
      <Link to="/history" className="btn-to-articles">
        Back to the articles list
      </Link>
    </div>
  );
}

export default HistoryDetails;
