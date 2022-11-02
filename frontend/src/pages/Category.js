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
                    date,
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

    if(loading) return <p>Loading category</p>
    if(error) return <p>Error category</p>

    console.log(data);

    return (
        <div>
            <p className='text-base'>{data.category.data.attributes.name}</p>
            {data.category.data.attributes.articles.data.map((article) => (
                <div key={article.id}>
                    <h2 className='text-2xl text-green font-dmserif mb-3'>{article.attributes.title}</h2>
                    <p className='text-base mb-3'>{article.attributes.content.substring(0, 200)}<Link to={`/details/${article.id}`} className='text-base text-green font-thin'>... read more</Link></p>
                    <p className='text-base font-semibold'>{article.attributes.date}</p>
                </div>
            ))}
        </div>
    );
};

export default Category;