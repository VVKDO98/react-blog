import React from 'react';
import {Link} from "react-router-dom";
import useFetch from "../hooks/useFetch";

const SiteHeader = () => {
    const {loading, error, data} = useFetch('http://localhost:1337/api/categories');

    if(loading) return <p>Loading ...</p>
    if(error) return <p>Error ...</p>

    console.log(data);

    return (
        <div>
            <Link to="/"><h1>Articles</h1></Link>
            <nav>
                {data.map ((category) => (
                    <Link key={category.id} to={`/category/${category.id}`}>{category.attributes.name}</Link>
                ))}
            </nav>
        </div>
    );
};

export default SiteHeader;