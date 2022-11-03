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

    if(loading) return <p>Loading of article</p>
    if(error) return <p>Unable to load article</p>

    console.log(data);
    
    return (
        <div className='mt-12 mb-40'>
            <h2 className='text-3xl text-green font-dmserif mb-8 lg:text-5xl selection:text-grey selection:bg-green'>{data.article.data.attributes.title}</h2>
            <ReactMarkdown className='text-base first-letter:text-6xl text-justify lg:text-xl'>{data.article.data.attributes.content}</ReactMarkdown>
        </div>
    );
};

export default ArticleDetails;