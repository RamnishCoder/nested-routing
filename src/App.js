import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import "./App.css"
import Home from './Robat/Home'
import Dashboard from './Robat/Dashboard'
import Product from './Robat/Product'
import Details from './Robat/Details'
import About from './Robat/About'
import Setting from './Robat/Setting'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
export default function App() {
  return (
    <div className="container mt-5 text-center">
      <BrowserRouter>
        <nav className="navbar navbar-expand-lg navbar-light bg-light m-6 mb-2">
          <button className='btn btn-danger m-2'>
            <Link className="nav-link" to="/">
              Home
            </Link>
          </button>
          <button className='btn btn-primary'>
            <Link className="nav-link" to="/dashboard">
              Dashboard
            </Link>
          </button>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="product" element={<Product />} />
            <Route path="details" element={<Details />} >
              <Route path="about" element={<About />} >
                <Route path="setting" element={<Setting />} />
              </Route>
            </Route>

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
