import '../Home/Home.css'
import { useState, useEffect } from 'react'
import logo from '../../assets/Logo.jpg'
const Home = () => {
  const [series, setSeries] = useState([])

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=747b36d52c8c76c86925e8a5867acb43')
      .then(response => response.json())
      .then(data => setSeries(data.results))
      .catch(error => console.error(error))
  }, [])

  return (
    <>
      <div id='carouselExampleIndicators' className='carousel slide' data-ride='carousel'>
        <ol className='carousel-indicators'>
          <li data-target='#carouselExampleIndicators' data-slide-to='0' className='active' />
          <li data-target='#carouselExampleIndicators' data-slide-to='1' />
          <li data-target='#carouselExampleIndicators' data-slide-to='2' />
        </ol>
        <div className='carousel-inner'>
          <div className='carousel-item active'>
            <img className='d-block w-100' alt='First slide' />
          </div>
          <div className='carousel-item'>
            <img className='d-block w-100' alt='Second slide' />
          </div>
          <div className='carousel-item'>
            <img className='d-block w-100' alt='Third slide' />
          </div>
        </div>
        <a className='carousel-control-prev' href='#carouselExampleIndicators' role='button' data-slide='prev'>
          <span className='carousel-control-prev-icon' aria-hidden='true' />
          <span className='sr-only'>Previous</span>
        </a>
        <a className='carousel-control-next' href='#carouselExampleIndicators' role='button' data-slide='next'>
          <span className='carousel-control-next-icon' aria-hidden='true' />
          <span className='sr-only'>Next</span>
        </a>
      </div>
      {series.map(serie => (
        <p key={serie.id} />
      ))}
    </>

  )
}
export default Home
