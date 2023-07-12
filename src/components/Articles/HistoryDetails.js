import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

function HistoryDetails() {
    const [historyDetails, setHistoryDetails] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://api.spacexdata.com/v4/history');
                const filteredHistoryDetails = response.data.filter((item) => item.id === id);

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

    if (historyDetails === null) {
        return <div>There is no articles</div>;
    }

    return (
        <div className="article-details">
            <div className="card-header">
                {historyDetails.title}
            </div>
            <div className="card-body">
                <h5 className="card-title">{historyDetails.event_date_utc}</h5>
                <p className="card-text">{historyDetails.details}</p>
                <a href={historyDetails.links.article} target='blank' className="card-footer text-body-secondary">article's Link</a>
            </div>
            <Link to="/history" className="btn btn-primary">Back to the articles list</Link>
        </div >
    );
}

export default HistoryDetails;
