// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function InfoSpaceX() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           'https://api.spacexdata.com/v4/company',
//         );
//         setData(response.data);
//         console.log("data", response.data)
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h1>Liste des éléments :</h1>
//       <h4>{}</h4>
//       <ul>
//         {data.map((item) => (
//           <li key={item.id}>{item.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default InfoSpaceX;
