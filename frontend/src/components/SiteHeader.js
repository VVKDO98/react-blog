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

    if(loading) return <p>Loading navigation</p>
    if(error) return <p>Error navigation</p>

    console.log(data.categories.data);

    return (
        <div className='w-full flex flex-col justify-center items-center'>
            <Link to="/"><h1 className='mb-[60px] text-white text-center uppercase'>B-LOG</h1></Link>
            <nav className='w-full'>
                <ul className='flex flex-row justify-center gap-8'>
                    {data.categories.data.map((category) => (
                        <li>
                            <Link key={category.id} to={`category/${category.id}`} className='text-green focus:text-red'>
                                {category.attributes.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default SiteHeader;