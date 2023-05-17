import '../Navbar/Navbar.css'
import logo from '../../assets/Logo.jpg'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <header className='navbar1'>
        <div className='logo'>
          <img src={logo} alt='' />
        </div>
        <div className='brand'>
          <NavLink className='nav-link' to='#'>Cin-API-lis</NavLink>
        </div>
        <div className='home'>
          <NavLink className='nav-link' to='/'>Home</NavLink>
        </div>
      </header>
    </>
  )
}

export default Navbar
