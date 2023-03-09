import React from 'react';
import { Link } from 'react-router-dom';
function Pagenotfound(props) {
    return (
        <div className='PageNotFound'>
            <img src='https://www.brainmeasures.com/videocourse/files/not-found.gif' style={{ mixBlendMode: '' }} alt='notfoundimg'></img>
            <h1>Page Not Found</h1>
            <Link to='/' className='button-css'>
                Go Back
            </Link>
        </div>

    );
}

export default Pagenotfound;