import React from 'react';
import { useQuery, gql } from '@apollo/client';

const ARTICLES = gql`
query GetCategory($id: ID!) { 
	category(id: $id) { 
        data{
            id,
            attributes{
              name
            },
            articles{
                title,
                content,
            }
        }
    }
}
`

const Category = () => {
    return (
        <div>
            <h1>Category</h1>
        </div>
    );
};

export default Category;