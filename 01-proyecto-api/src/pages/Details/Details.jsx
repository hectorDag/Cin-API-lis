import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card'
import '../Details/Details.css'

const Details = () => {
  const { id } = useParams()
  const [movie, setMovie] = useState([])
  const [cast, setCast] = useState([])

  function replaceId (id) {
    const idNumerico = id.replace(/\D/g, '')
    return idNumerico
  }

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${replaceId(id)}?api_key=747b36d52c8c76c86925e8a5867acb43`)
      .then(response => response.json())
      .then(data => { setMovie(data) })
  }, [id])

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${replaceId(id)}/credits?api_key=747b36d52c8c76c86925e8a5867acb43`)
      .then(response => response.json())
      .then(data => { setCast(data.cast) })
  }, [id])

  const castChunks = cast && Array(Math.ceil(cast.length / 5)).fill().map((_, index) => index * 5).map(begin => cast.slice(begin, begin + 5))

  return (
    <div className='contenedor-pages'>

      <div className='contenedor-detail'>
        <section className='individual-card'>
          <Card key={movie.id} style={{ width: '100%' }}>
            <Card.Img variant='top' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
            <Card.Body>
              <p>{movie.title}</p>
            </Card.Body>
          </Card>
        </section>

        <section className='overview'>

          <h5>Overview</h5>
          <p>{movie.overview}</p>

          <Carousel className='carousel-cast'>
            {castChunks && castChunks.map((castChunk, chunkIndex) => (
              <Carousel.Item className='carousel-item' key={chunkIndex}>
                <div className='cards-wrapper'>
                  {castChunk.map((cast, index) => (
                    <Card key={index} className='individual-card' style={{ width: '20%' }}>
                      <Card.Img variant='top' src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`} />
                      <Card.Body>

                        <ul>
                          <li>{cast.original_name}</li>
                          <li>{cast.character}</li>
                        </ul>

                      </Card.Body>
                    </Card>
                  ))}
                </div>
              </Carousel.Item>
            ))}
          </Carousel>

        </section>
      </div>

    </div>
  )
}
export default Details
