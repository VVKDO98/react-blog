import React from 'react';
import {Link} from "react-router-dom";

const SiteHeader = () => {
    return (
        <div>
            <Link to="/"><h1>Articles</h1></Link>
        </div>
    );
};

export default SiteHeader;