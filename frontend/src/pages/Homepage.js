import React from 'react';
import {Link} from 'react-router-dom';
import useFetch from "../hooks/useFetch";

const Homepage = () => {
    const {loading, error, data} = useFetch('http://localhost:1337/api/articles')

    if(loading) return <p>Loading of articles</p>
    if(error) return <p>Unable to load articles</p>

    console.log(data);

    return (
        <div className='mb-40'>
            {data.map((article) => (
                <div key={article.id} className="mb-5">
                    <h2 className='text-2xl text-green font-dmserif mb-3 lg:text-3xl lg:mb-5'>{article.attributes.title}</h2>
                    <p className='text-base mb-3 lg:text-xl'>{article.attributes.content.substring(0, 200)}<Link to={`/details/${article.id}`} className='text-base text-green font-thin lg:text-xl'> ... read more</Link></p>
                    <p className='text-base font-semibold lg:text-xl'>{article.attributes.date}</p>
                </div>
            ))}
        </div>
    );
};

export default Homepage;