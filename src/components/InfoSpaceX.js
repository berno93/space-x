import React, { useState, useEffect } from 'react'
import axios from 'axios'
 
function MyComponent() {
    const [data, setData] = useState([])
 
    useEffect(() => {
        fetchData()
    }, [])
 
    const fetchData = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
            setData(response.data)
        } catch (error) {
            console.error(error)
        }
    }
 
    return (
        <div>
            <h1>Liste des éléments :</h1>
            <ul>
                {data.map((item) => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </div>
    )
}
 
export default MyComponent