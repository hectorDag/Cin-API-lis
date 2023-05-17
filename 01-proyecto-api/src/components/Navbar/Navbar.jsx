import '../Navbar/Navbar.css'
import logo from '../../assets/Logo.jpg'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <header className='navbar1'>

        <div className='part-bar'>

          <div className='logo'>
            <img src={logo} alt='' />
          </div>

          <div className='brand'>
            <NavLink className='nav-link'>Cin-API-lis</NavLink>
          </div>

          <div className='home'>
            <NavLink className='nav-link' to='/'>Home</NavLink>
          </div>

          <div className='genres'>
            <NavLink className='nav-link' to='/'>Genres</NavLink>
          </div>

        </div>

        <form className='searchBar'>
          <input type='text' placeholder='Search' aria-label='Search' />
          <button type='submit'>Search</button>
        </form>

      </header>
    </>
  )
}

export default Navbar
