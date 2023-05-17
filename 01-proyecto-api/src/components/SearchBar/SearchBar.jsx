import '../SearchBar/SearchBar.css'

const SearchBar = () => {
  return (
    <>
      <div className='contenedor'>
        <form className='searchBar'>
          <input type='text' placeholder='Search' aria-label='Search' />
          <button type='submit'>Search</button>
        </form>
      </div>
    </>
  )
}
export default SearchBar
