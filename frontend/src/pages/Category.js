import React from 'react';
import { useQuery, gql } from '@apollo/client';
import {useParams, Link} from 'react-router-dom';

const CATEGORY = gql`
query GetCategory($id: ID!) { 
	category(id: $id) { 
        data{
            id,
            attributes{
              name,
              articles{
                data{
                  id,
                  attributes{
                    title,
                    content,
                    categories {
                      data {
                        id,
                        attributes{name}
                      }
                    }
                  }
                }
              }
            }
        }
    }
}
`

const Category = () => {
    const {id} = useParams();
    const {loading, error, data} = useQuery(CATEGORY, {
        variables: {id: id}
    });

    if(loading) return <p>Loading ...</p>
    if(error) return <p>Error ...</p>

    console.log(data);

    return (
        <div>
            <h2>{data.category.data.attributes.name}</h2>
            {data.category.data.attributes.articles.data.map((article) => (
                <div key={article.id}>
                    <h2>{article.attributes.title}</h2>
                    <p>{article.attributes.content.substring(0, 200)}...</p>
                    <Link to={`/details/${article.id}`}>Read more</Link>
                </div>
            ))}
        </div>
    );
};

export default Category;