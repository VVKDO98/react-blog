import React from 'react';
import {Link} from "react-router-dom";

const SiteHeader = () => {

    return (
        <div className='w-full flex flex-col justify-center items-center mt-20 mb-20'>
            <div className='bg-green w-5 h-1 mb-2'></div>
            <Link to="/"><h1 className='text-white text-center text-xl uppercase'>B-LOG</h1></Link>
        </div>
    );
};

export default SiteHeader;