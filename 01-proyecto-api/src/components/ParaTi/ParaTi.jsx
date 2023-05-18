import { useState, useEffect } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card'
import '../ParaTi/ParaTi.css'

const ParaTi = () => {
  const [movies, setMovies] = useState([])
  const [images, setImages] = useState([])
  console.log(movies)

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=747b36d52c8c76c86925e8a5867acb43')
      .then(response => response.json())
      .then(data => setImages(data.results.map(image => `https://image.tmdb.org/t/p/w500${image.poster_path}`)))
      .catch(error => console.log(error))
  }, [])

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=747b36d52c8c76c86925e8a5867acb43')
      .then(response => response.json())
      .then(data => setMovies(data.results))
      .catch(error => console.log(error))
  }, [])

  return (

    <>

      <h1>Top Rated</h1>

      <Carousel className='carousel-card'>

        <Carousel.Item>
          <div className='cards-wrapper'>

            <Card className='individual-card' style={{ width: '18rem' }}>
              <Card.Img variant='top' src={images[0]} />
              <Card.Body>
                <p>{movies[1].title}</p>
              </Card.Body>
            </Card>

            <Card className='individual-card' style={{ width: '18rem' }}>
              <Card.Img variant='top' src={images[1]} />
              <Card.Body />
            </Card>

            <Card className='individual-card' style={{ width: '18rem' }}>
              <Card.Img variant='top' src={images[2]} />
              <Card.Body />
            </Card>

            <Card className='individual-card' style={{ width: '18rem' }}>
              <Card.Img variant='top' src={images[3]} />
              <Card.Body />
            </Card>

            <Card className='individual-card' style={{ width: '18rem' }}>
              <Card.Img variant='top' src={images[4]} />
              <Card.Body />
            </Card>

          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className='cards-wrapper'>

            <Card className='individual-card' style={{ width: '18rem' }}>
              <Card.Img variant='top' src={images[5]} />
              <Card.Body />
            </Card>

            <Card className='individual-card' style={{ width: '18rem' }}>
              <Card.Img variant='top' src={images[6]} />
              <Card.Body />
            </Card>

            <Card className='individual-card' style={{ width: '18rem' }}>
              <Card.Img variant='top' src={images[7]} />
              <Card.Body />
            </Card>

            <Card className='individual-card' style={{ width: '18rem' }}>
              <Card.Img variant='top' src={images[8]} />
              <Card.Body />
            </Card>

            <Card className='individual-card' style={{ width: '18rem' }}>
              <Card.Img variant='top' src={images[9]} />
              <Card.Body />
            </Card>

          </div>
        </Carousel.Item>

      </Carousel>

    </>

  )
}
export default ParaTi
