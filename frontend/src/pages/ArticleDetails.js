import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import ReactMarkdown from 'react-markdown';

const DETAILS = gql`
query GetArticle($id: ID!){ 
	article(id: $id){ 
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

const ArticleDetails = () => {
    const {id} = useParams()
    const {loading, error, data} = useQuery(DETAILS, {
        variables: {id: id}
    });
    
    console.log(data);

    if(loading) return <p>Loading ...</p>
    if(error) return <p>Error ...</p>

    console.log(data);
    
    return (
        <div>
            <h2>{data.article.data.attributes.title}</h2>
            <small>console list</small>
            <ReactMarkdown>{data.article.data.attributes.content}</ReactMarkdown>
        </div>
    );
};

export default ArticleDetails;