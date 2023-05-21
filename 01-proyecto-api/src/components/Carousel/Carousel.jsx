import '../Carousel/Carousel.css'
import Carousel from 'react-bootstrap/Carousel'
import { useState, useEffect } from 'react'

const CarouselCom = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=747b36d52c8c76c86925e8a5867acb43')
      .then(response => response.json())
      .then(data => setMovies(data.results.map(movie => `https://image.tmdb.org/t/p/w500${movie.poster_path}`)))
      .catch(error => console.log(error))
  }, [])

  return (
    <div className='contenedor-carousel'>
      <Carousel className='carousel'>
        {movies && movies.map((movie, index) => (
          <Carousel.Item key={index}>
            <img className='d-block' src={movie} alt={index + 1} />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  )
}
export default CarouselCom
