import React from 'react';
import useFetch from "../hooks/useFetch";

const Category = ({key}) => {
    const {loading, error, data} = useFetch(`http://localhost:1337/api/categories/`);

    if(loading) return <p>Loading ...</p>
    if(error) return <p>Error ...</p>

    console.log(data);
    return (
        <div>
            <h1>Cateogry</h1>
        </div>
    );
};

export default Category;