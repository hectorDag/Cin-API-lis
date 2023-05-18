import { useState, useEffect } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card'
import '../ParaTi/ParaTi.css'

const ParaTi = () => {
  const [movies, setMovies] = useState([])
  const [images, setImages] = useState([])

  /**
   * Un solo use effect para traer las peliculas y las imagenes, no es necesario hacer dos llamadas a la api, con una sola es suficiente
   */

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=747b36d52c8c76c86925e8a5867acb43')
      .then(response => response.json())
      .then(data => {
        setMovies(data.results);
        setImages(data.results.map(image => `https://image.tmdb.org/t/p/w500${image.poster_path}`))
      })
      .catch(error => console.log(error))
  }, [])

  // dividimos el array de peliculas en chunks de 5 para mostrar 5 peliculas por slide
  const movieChunks = movies && Array(Math.ceil(movies.length / 5)).fill().map((_, index) => index * 5).map(begin => movies.slice(begin, begin + 5));

  /**
   * En el return, en vez de hacer un carousel item por cada imagen, hacemos un carousel item por cada chunk de peliculas, 
   * y dentro de cada carousel item hacemos un map de las peliculas de ese chunk.
   * De esta forma, si cambiamos el numero de peliculas por slide, no tenemos que cambiar el codigo, solo el css
   */
  return (
    <>
      <h1>Top Rated</h1>

      <Carousel className='carousel-card'>
        {movieChunks && movieChunks.map((movieChunk, chunkIndex) => (
          <Carousel.Item key={chunkIndex}>
            <div className='cards-wrapper'>
              {movieChunk.map((movie, index) => (
                <Card key={index} className='individual-card' style={{ width: '20%' }}>
                  <Card.Img variant='top' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                  <Card.Body>
                    <p>{movie.title}</p>
                  </Card.Body>
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
