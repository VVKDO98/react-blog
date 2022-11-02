import React from 'react';
import {Link} from "react-router-dom";
import { useQuery, gql } from '@apollo/client';

const CATEGORIES = gql`
query GetArticles{ 
	categories { 
  	data{
      id,
      attributes{
        name
      }
    }
  }
}
`

const SiteHeader = () => {
    const {loading, error, data} = useQuery(CATEGORIES);

    if(loading) return <p>Loading ...</p>
    if(error) return <p>Error ...</p>

    console.log(data.categories.data);

    return (
        <div>
            <Link to="/"><h1>Articles</h1></Link>
            <nav>
                {data.categories.data.map((category) => (
                    <Link key={category.id} to={`category/${category.id}`}>{category.attributes.name}</Link>
                ))}
            </nav>
        </div>
    );
};

export default SiteHeader;