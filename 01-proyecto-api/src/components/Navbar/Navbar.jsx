import '../Navbar/Navbar.css'
import logo from '../../assets/Logo.jpg'
import { NavLink, Link } from 'react-router-dom'
import { useState } from 'react'

const Navbar = () => {
  const [search, setSearch] = useState('')

  return (
    <>
      <header className='navbar1'>

        <div className='part-bar'>

          <div className='logo'>
            <img src={logo} alt='' />
          </div>

          <div className='brand'>
            <h5>Cin-API-lis</h5>
          </div>

          <div className='home'>
            <NavLink className='nav-link' to='/'>Home</NavLink>
          </div>

          <div className='genres'>
            <NavLink className='nav-link' to='/genres'>Genres</NavLink>
          </div>

        </div>

        <form className='searchBar'>
          <input type='text' placeholder='Search' aria-label='Search' value={search} onChange={(event) => { setSearch(event.target.value) }} />
          <Link to={`search/:${search}`}>
            <button type='submit'>Search</button>
          </Link>
        </form>

      </header>
    </>
  )
}

export default Navbar
