import React from 'react'
import { Link, Outlet } from 'react-router-dom'
// import { Link, Outlet } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <h1>About Page</h1>
            <div>
            <button className='btn btn-warning'>
                        <Link to="/dashboard/details/about/setting">Setting</Link>
                        </button>
                        </div>
                        <Outlet/>

        </div>
    )
}

export default About