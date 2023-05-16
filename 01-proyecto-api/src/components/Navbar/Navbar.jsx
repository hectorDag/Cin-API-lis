import '../Navbar/Navbar.css'

const Navbar = () => {
  return (
    <>
      <header className='navbar1'>
        <div className='logo'>
          <a className='nav-link' href='#'>Cin-API-lis</a>
        </div>
        <div className='home'>
          <a className='nav-link' href='#'>Home</a>
        </div>
        <div className='searchBar'>
          <form>
            <input type='text' placeholder='Search' aria-label='Search' />
            <button type='submit'>Search</button>
          </form>
        </div>
      </header>
    </>
  )
}
export default Navbar
