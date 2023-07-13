import React, { useState, useEffect } from 'react';
import '../../styles/Last_lauch/Last_lauch.css';
import { ClipLoader } from 'react-spinners';
import { format } from 'date-fns';

function LastLaunchInfo() {
  const [lastLaunch, setLastLaunch] = useState(null);
  const [crewMembers, setCrewMembers] = useState([]);
  const [capsules, setCapsules] = useState([]);
  const [payloads, setPayloads] = useState([]);
  const [launchpad, setLaunchpad] = useState(null);

  useEffect(() => {
    fetch('https://api.spacexdata.com/v5/launches/latest')
      .then((response) => response.json())
      .then((data) => {
        setLastLaunch(data);
        fetchCrewMembers(data.crew);
        fetchCapsules(data.capsules);
        fetchPayloads(data.payloads);
        fetchLaunchpad(data.launchpad);
      })
      .catch((error) => {
        console.error('Error fetching latest launch:', error);
      });
  }, []);

  const fetchCrewMembers = (crewIds) => {
    const requests = crewIds.map((crew) => crew.crew);

    Promise.all(
      requests.map((id) =>
        fetch(`https://api.spacexdata.com/v4/crew/${id}`).then((response) =>
          response.json(),
        ),
      ),
    )
      .then((data) => {
        const crewMembersData = data.map((response) => response);
        setCrewMembers(crewMembersData);
        console.log('members', crewMembersData);
      })
      .catch((error) => {
        console.error('Error fetching crew members:', error);
      });
  };

  const fetchCapsules = (capsuleIds) => {
    const requests = capsuleIds.map((id) =>
      fetch(`https://api.spacexdata.com/v4/capsules/${id}`).then((response) =>
        response.json(),
      ),
    );

    Promise.all(requests)
      .then((data) => {
        setCapsules(data);
        console.log('capsules', data);
      })
      .catch((error) => {
        console.error('Error fetching capsules:', error);
      });
  };

  const fetchPayloads = (payloadIds) => {
    const requests = payloadIds.map((id) =>
      fetch(`https://api.spacexdata.com/v4/payloads/${id}`).then((response) =>
        response.json(),
      ),
    );

    Promise.all(requests)
      .then((data) => {
        setPayloads(data);
        console.log('capsules', data);
      })
      .catch((error) => {
        console.error('Error fetching payloads:', error);
      });
  };

  const fetchLaunchpad = (launchpadId) => {
    fetch(`https://api.spacexdata.com/v4/launchpads/${launchpadId}`)
      .then((response) => response.json())
      .then((data) => {
        setLaunchpad(data);
        console.log('launchpad', data);
      })
      .catch((error) => {
        console.error('Error fetching launchpad:', error);
      });
  };
  if (!lastLaunch) {
    return (
      <div className="loader">
        <ClipLoader color="#ffffff" size={50} />
      </div>
    );
  }

  const formatDate = (dateString) => {
    const dateObject = new Date(dateString);
    const formattedDate = format(dateObject, "do 'of' MMMM yyyy");
    return formattedDate;
  };

  return (
    <div>
      <h1 id="title-last-launch">Last Launch Information</h1>
      <section id="details">
        <div id="img-logo-last-lauch" className="div-section-details ">
          <img src={lastLaunch.links.patch.small}></img>
        </div>
        <div className="div-section-details">
          <h2 className="h2_last-_lauch">Details</h2>
          <p>Flight Number {lastLaunch.flight_number}</p>
          <p>Mission {lastLaunch.name}</p>
          <p>{formatDate(lastLaunch.date_local)}</p>
        </div>
      </section>
      <section id="members">
        <div>
          <h2 className="h2_last-_lauch">Crew Members</h2>
          <div>
            {crewMembers.map((crew) => (
              <div id="members-title-img" key={crew.id}>
                <h3 id="name-member">{crew.name}</h3>
                <a href={crew.wikipedia} target="blank"><img src={crew.image} className="img-membres-last-lauch" ></img></a>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div>
        {capsules.map((capsule) => (
          <div key={capsule.id}>
            <h2 className="h2_last-_lauch">Capsules</h2>
            <h3>{capsule.serial}</h3>
            <h3>{capsule.type}</h3>
          </div>
        ))}
      </div>
      <h2 className="h2_last-_lauch">Launchpad</h2>
      {launchpad && (
        <div>
          <p>{launchpad.full_name}</p>
          <p>
            {launchpad.locality}, {launchpad.region}
          </p>
          <p className="padding-last-lauch">{launchpad.details}</p>
          <img src={launchpad.images.large} id="img-launchpad"></img>
        </div>
      )}
    </div>
  );
}

export default LastLaunchInfo;
