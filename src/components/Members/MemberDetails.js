import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

function MemberDetails() {
  const [member, setMember] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.spacexdata.com/v4/crew');
        const filteredMembers = response.data.filter((item) => item.id === id);

        if (filteredMembers.length === 0) {
          setMember(null);
        } else {
          setMember(filteredMembers[0]);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [id]);

  if (member === null) {
    return <div>Member not found</div>;
  }

  return (
    <div className='member-container'>
      <div className='card mb-3'>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={member.image} className="img-fluid rounded-start" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              {member.status && <p className="card-text">{member.name} is working at {member.agency}</p>}
              {!member.status && <p className="card-text">{member.name} has worked at {member.agency}</p>}
              <a href={member.wikipedia} className="wikiLink" target='blank'>Wikipedia</a>
            </div>
          </div>
        </div>

      </div>
      <Link to="/members">Retour à la liste des membres</Link>
    </div>
  );
}

export default MemberDetails;
