import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card'
import '../ParaTi/ParaTi.css'

// eslint-disable-next-line react/prop-types
const ParaTi = ({ Title, API }) => {
  const [movies, setMovies] = useState([])

  /**
   * Un solo use effect para traer las peliculas y las imagenes, no es necesario hacer dos llamadas a la api, con una sola es suficiente
   */

  useEffect(() => {
    fetch(API)
      .then(response => response.json())
      .then(data => {
        setMovies(data.results)
      })
      .catch(error => console.log(error))
  }, [API])

  // dividimos el array de peliculas en chunks de 5 para mostrar 5 peliculas por slide
  const movieChunks = movies && Array(Math.ceil(movies.length / 5)).fill().map((_, index) => index * 5).map(begin => movies.slice(begin, begin + 5))

  /**
   * En el return, en vez de hacer un carousel item por cada imagen, hacemos un carousel item por cada chunk de peliculas,
   * y dentro de cada carousel item hacemos un map de las peliculas de ese chunk.
   * De esta forma, si cambiamos el numero de peliculas por slide, no tenemos que cambiar el codigo, solo el css
   */
  return (
    <>
      <h1>{Title}</h1>

      <Carousel className='carousel-card'>

        {movieChunks && movieChunks.map((movieChunk, chunkIndex) => (
          <Carousel.Item key={chunkIndex}>
            <div className='cards-wrapper'>
              {movieChunk.map((movie, index) => (
                <Card key={index} className='individual-card' style={{ width: '20%' }}>
                  <Link to={`/detail/:${movie.id}`}>
                    <Card.Img variant='top' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                  </Link>
                  <div className='card-body'>
                    <Link className='link' to={`/detail/:${movie.id}`}>
                      <p>{movie.title}</p>
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          </Carousel.Item>
        ))}

      </Carousel>
    </>
  )
}
export default ParaTi
