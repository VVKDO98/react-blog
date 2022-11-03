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

const Menu = () => {
    const {loading, error, data} = useQuery(CATEGORIES);

    if(loading) return <p>Loading navigation</p>
    if(error) return <p>Unable to load navigation</p>

    console.log(data.categories.data);

    return (
        <div className='w-full h-20 flex flex-col justify-center items-center fixed bottom-0 left-0 bg-grey outline outline-1 outline-green shadow-cust lg:top-0 lg:left-0 lg:w-32 lg:h-full'>
            <nav className='w-full'>
                <ul className='flex flex-row justify-center gap-8 lg:flex-col lg:items-center'>
                    <Link to="/" className='text-green focus:text-red selection:text-grey selection:bg-green'>Home</Link>
                    {data.categories.data.map((category) => (
                        <li>
                            <Link key={category.id} to={`category/${category.id}`} className='text-green focus:text-red selection:text-grey selection:bg-green'>
                                {category.attributes.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default Menu;