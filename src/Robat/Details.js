import React from 'react'
import { Link, Outlet } from 'react-router-dom';

const Details = () => {
    return (
        <div>

            <h1>Details...</h1>
            <img src="	https://res.cloudinary.com/dgdcpiqgk/image/upload/v1660717636/gpcoders-logo_ae490f.png" alt='not found' />
            <div>
                <button className='btn btn-danger'>
                <Link to="/dashboard/details/about">About</Link>
                </button>
            </div>
            <Outlet/>
        </div>
    )
}


export default Details;
