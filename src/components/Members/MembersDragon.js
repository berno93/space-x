import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "../../styles/Members/Members.css"

function Members() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.spacexdata.com/v4/crew');
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    // Appliquer le filtre lorsque le filtre ou les données changent
    if (filter.trim() === '') {
      // Si le filtre est vide, afficher toutes les données
      setFilteredData(data);
    } else {
      // Appliquer le filtre en fonction du nom du membre ou de son agence
      const filtered = data.filter(
        (item) =>
          item.name.toLowerCase().includes(filter.toLowerCase()) ||
          item.agency.toLowerCase().includes(filter.toLowerCase())
      );
      setFilteredData(filtered);
    }
  }, [filter, data]);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div className="members-container">
      <h1>Dragon crew members</h1>
      <div className="filter-container">
        <input
          type="text"
          placeholder="Filter by name or agency"
          value={filter}
          onChange={handleFilterChange}
        />
      </div>
      <div className="members-row">
        {filteredData.map((item) => (
          <div key={item.id} className='div-member'>
            <Link to={`/members/${item.id}`} className="card">
              <p className="card-text">{item.name}</p>
              <img src={item.image} className="card-img-top" alt={item.name} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Members;
