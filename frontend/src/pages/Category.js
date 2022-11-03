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

    if(loading) return <p>Loading of category</p>
    if(error) return <p>Unable to load category</p>

    console.log(data);

    return (
        <div>
            <p className='text-base'>{data.category.data.attributes.name}</p>
            {data.category.data.attributes.articles.data.map((article) => (
                <div key={article.id} className='mb-5 flex flex-col lg:flex-row'>
                  <div id='content' className='lg:order-2'>
                    <h2 className='text-2xl text-green font-dmserif mb-3 lg:text-3xl lg:mb-5 selection:text-grey selection:bg-green'>{article.attributes.title}</h2>
                    <p className='text-base mb-3 lg:text-xl text-justify selection:text-grey selection:bg-green'>{article.attributes.content.substring(0, 200)}<Link to={`/details/${article.id}`} className='text-base text-green font-thin'>... read more</Link></p>
                  </div>
                  <div id='date' className='lg:order-1 lg:mr-5'>
                    <p className='text-base font-semibold lg:text-3xl selection:text-grey selection:bg-green'>{article.attributes.date}</p>
                  </div>
                </div>
            ))}
        </div>
    );
};

export default Category;