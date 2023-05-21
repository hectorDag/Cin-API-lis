import ParaTi from '../../components/ParaTi/ParaTi'
import { useEffect, useState } from 'react'

const Genres = () => {
  const [genres, setGenres] = useState([])

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=747b36d52c8c76c86925e8a5867acb43')
      .then(response => response.json())
      .then(data => setGenres(data.genres))
      .catch(error => console.log(error))
  }, [])

  return (
    <>
      <div className='contenedor-pages'>
        {genres && genres.map((genre, index) => (
          <ParaTi key={index} Title={genre.name} API={`https://api.themoviedb.org/3/discover/movie?api_key=747b36d52c8c76c86925e8a5867acb43&with_genres=${genre.id}`} />
        ))}
      </div>
    </>
  )
}
export default Genres
