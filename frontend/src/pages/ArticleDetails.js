import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';

const DETAILS = gql`
query GetArticle($id: ID) { 
	articles{ 
  	data(id: $id){
      id,
      attributes{
        title,
        content,
      }
    }
  }
}
`

const ArticleDetails = () => {
    const {id} = useParams()
    const {loading, error, data} = useQuery(DETAILS, {
        variables: {id: id}
    });
    console.log(data);

    if(loading) return <p>Loading ...</p>
    if(error) return <p>Error ...</p>

    
    return (
        <div>
            <h2>{data.attributes.title}</h2>
            <small>console list</small>
            <p>{data.attributes.content}</p>
        </div>
    );
};

export default ArticleDetails;