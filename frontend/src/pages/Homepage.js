import React from 'react';
import {Link} from 'react-router-dom';
import useFetch from "../hooks/useFetch";

const Homepage = () => {
    const {loading, error, data} = useFetch('http://localhost:1337/api/articles')

    if(loading) return <p>Loading articles</p>
    if(error) return <p>Error cannot get articles</p>

    console.log(data);

    return (
        <div>
            {data.map((article) => (
                <div key={article.id}>
                    <h2>{article.attributes.title}</h2>
                    <p>{article.attributes.content.substring(0, 200)}...</p>
                    <Link to={`/details/${article.id}`}>Read more</Link>
                </div>
            ))}
        </div>
    );
};

export default Homepage;