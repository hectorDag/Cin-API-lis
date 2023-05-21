import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'

const Search = () => {
  const { name } = useParams()
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=747b36d52c8c76c86925e8a5867acb43&query=${name})`)
      .then(reponse => reponse.json())
      .then(data => { setMovies(data.results) })
      .catch(error => console.log(error))
  }, [name])

  const movieChunks = movies && Array(Math.ceil(movies.length / 5)).fill().map((_, index) => index * 5).map(begin => movies.slice(begin, begin + 5))

  return (
    <div className='contenedor-pages'>
      {movieChunks && movieChunks.map((movieChunk, chunkIndex) => (

        <div key={chunkIndex} className='cards-wrapper'>
          {movieChunk.map((movie, index) => (
            <Card key={index} className='individual-card' style={{ width: '20%' }}>
              <Link to={`/detail/:${movie.id}`}>
                <Card.Img variant='top' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
              </Link>
              <Card.Body>
                <Link className='link' to={`/detail/:${movie.id}`}>
                  <p>{movie.title}</p>
                </Link>
              </Card.Body>
            </Card>
          ))}
        </div>

      ))}

    </div>

  )
}
export default Search
