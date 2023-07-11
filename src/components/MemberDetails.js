import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios'

function MemberDetails() {
    const [data, setData] = useState([]);
    const { memberId } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://api.spacexdata.com/v4/crew');
                setData(response.data);
                console.log(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

    const member = data.find((item) => {
        item.id === memberId
    });


    if (!member) {
        return <div>Membre introuvable</div>;
    }

    return (
        <div>
            <h1>Details du membre :</h1>
            <ul key={member.id}>
                <li>{member.name}</li>
                <li>Travaille chez : {member.agency}</li>
                <li>Image : {member.image}</li>
                <li>Statut : {member.status}</li>
                <li>Lien : {member.wikipedia}</li>
            </ul>
            <Link to="/members">Retour à la liste des membres</Link>
        </div>
    );
}


export default MemberDetails