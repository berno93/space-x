import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import '../../styles/V_Rockets/V_Rockets_details.css';

function RocketDetails() {
  const [rocket, setRocket] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://api.spacexdata.com/v4/rockets',
        );

        const filteredRockets = response.data.filter(
          (rocket) => rocket.id === id,
        );

        if (filteredRockets.length === 0) {
          setRocket(null);
        } else {
          setRocket(filteredRockets[0]);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [id]);

  if (rocket === null) {
    return <div>Membre introuvable</div>;
  }
  document.title = `${rocket.name}`;

  return (
    <div>
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
          <img src={rocket.flickr_images[0] || rocket.flickr_images[1] || rocket.flickr_images[2] || rocket.flickr_images[3] } className="img-rocket-details"></img>
          </div>
          <div className="carousel-item">
          <img src={rocket.flickr_images[1] || rocket.flickr_images[2] || rocket.flickr_images[3] || rocket.flickr_images[0]} className="img-rocket-details"></img>
          </div>
          <div className="carousel-item">
          <img src={rocket.flickr_images[2] || rocket.flickr_images[3] || rocket.flickr_images[0] || rocket.flickr_images[1] } className="img-rocket-details"></img>
          </div>
          <div className="carousel-item">
          <img src={rocket.flickr_images[3] || rocket.flickr_images[0] || rocket.flickr_images[1] || rocket.flickr_images[2] } className="img-rocket-details"></img>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* <img src={rocket.flickr_images[1]} className="img-rocket-details"></img> */}
      <div id="overview">
        <h2>{rocket.name}</h2>
        <h1>OVERVIEW</h1>
        <table>
          <tbody>
            <tr>
              <td className="td-float-l">Height</td>
              <td className="td-float-r">
                {rocket.height.meters} m / {rocket.height.feet} ft
              </td>
            </tr>
            <tr>
              <td className="td-float-l">Mass</td>
              <td className="td-float-r">
                {rocket.mass.kg} kg / {rocket.mass.lb} lb
              </td>
            </tr>
            <tr>
              <td className="td-float-l">Diameter</td>
              <td className="td-float-r">
                {rocket.diameter.meters} m / {rocket.diameter.feet} ft
              </td>
            </tr>
            <tr>
              <td className="td-float-l">Company</td>
              <td className="td-float-r">{rocket.company}</td>
            </tr>
            <tr>
              <td className="td-float-l">First Flight</td>
              <td className="td-float-r">{rocket.first_flight}</td>
            </tr>
            <tr>
              <td className="td-float-l">Stage</td>
              <td className="td-float-r">{rocket.stages}</td>
            </tr>
            <tr>
              <td className="td-float-l">Country</td>
              <td className="td-float-r">{rocket.country}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div id="description">
        <h1 id="title-description">DESCRIPTION</h1>
        <p id="p-description">{rocket.description}</p>
      </div>
    </div>
  );
}

export default RocketDetails;
