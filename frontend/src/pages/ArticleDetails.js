import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from "../hooks/useFetch";


const ArticleDetails = () => {
    const {id} = useParams()
    const {loading, error, data} = useFetch('http://localhost:1337/api/articles/' + id)

    if(loading) return <p>Loading ...</p>
    if(error) return <p>Error ...</p>

    console.log(data);
    
    return (
        <div>
            <h2>{data.attributes.title}</h2>
            <small>console list</small>
            <p>{data.attributes.content}</p>
        </div>
    );
};

export default ArticleDetails;