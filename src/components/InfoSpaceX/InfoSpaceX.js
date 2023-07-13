import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../styles/Info/Info.css';

const SpaceXInfo = () => {
  document.title = 'SpaceX';
  const [info, setInfo] = useState({});

  useEffect(() => {
    axios
      .get('https://api.spacexdata.com/v4/company')
      .then((response) => {
        setInfo(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <img
        src="https://www.spacex.com/static/images/falcon-9/desktop/MerlinVac.jpg"
        id="img-info"
      ></img>
      <h1>Space X</h1>
      <table>
        <tbody>
          <tr>
            <td className="td-float-l-i">Founded</td>
            <td className="td-float-r-i">{info.founded}</td>
          </tr>
          <tr>
            <td className="td-float-l-i">PDG</td>
            <td className="td-float-r-i">{info.ceo}</td>
          </tr>
          <tr>
            <td className="td-float-l-i">Head Quarters</td>
            <td className="td-float-r-i">
              {info.headquarters?.address}, {info.headquarters?.city},{' '}
              {info.headquarters?.state}
            </td>
          </tr>
          <tr>
            <td className="td-float-l-i">Employees</td>
            <td className="td-float-r-i">{info.employees}</td>
          </tr>
          <tr>
            <td className="td-float-l-i">Vehicles</td>
            <td className="td-float-r-i">{info.vehicles}</td>
          </tr>
          <tr>
            <td className="td-float-l-i">Launch Sites</td>
            <td className="td-float-r-i">{info.launch_sites}</td>
          </tr>
        </tbody>
      </table>
      <div id="summary">
        <h1 id="title-summary">Summary</h1>
        <p id="p-summary">{info.summary}</p>
      </div>
      <div id="links">
        <h1 id="title-summary">Links</h1>
        <div>
          <a href={info.links?.website} target="blank">
            <img
              src="https://cdn.icon-icons.com/icons2/2389/PNG/512/spacex_logo_icon_144865.png"
              className="icon-resaux logo-nav "
            ></img>
          </a>
          <a href={info.links?.flickr} target="blank">
            <img
              src="https://www.freeiconspng.com/thumbs/flickr-logo-png/flickr-logo-png-17.png"
              className="icon-resaux"
            ></img>
          </a>
          <a href={info.links?.twitter} target="blank">
            <img
              src="https://www.doigtdecole.com/wp-content/uploads/2020/03/logo-rond-twitter.png"
              className="icon-resaux"
            ></img>
          </a>
          <a href={info.links?.elon_twitter} target="blank">
            <img
              src="https://cdn.pixabay.com/photo/2022/04/26/21/20/elon-musk-7159200_1280.png"
              className="icon-resaux"
            ></img>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SpaceXInfo;
