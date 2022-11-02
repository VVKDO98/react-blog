import React from 'react';
import {Link} from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';

const ARTICLES = gql`
query GetArticles{ 
	articles { 
  	data{
      id,
      attributes{
        title,
        content,
      }
    }
  }
}
`

const Homepage = () => {
    // const {loading, error, data} = useFetch('http://localhost:1337/api/articles')
    const {loading, error, data} = useQuery(ARTICLES);

    if(loading) return <p>Loading ...</p>
    if(error) return <p>Error ...</p>

    console.log(data);

    return (
        <div>
            {data.articles.data.map((article) => (
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