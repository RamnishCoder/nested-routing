import React from 'react'
import { Link, Outlet } from 'react-router-dom'
function Dashboard() {
    return (
        <div>
            <h2>React Nested Example</h2>
            <div >
                <Link to="/dashboard/product">Product</Link>
                <Link to="/dashboard/details">Details</Link>
            </div>
            <Outlet />
        </div>
    )
}
export default Dashboard