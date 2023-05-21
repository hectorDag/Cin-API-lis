import CarouselCom from '../../components/Carousel/Carousel'
import ParaTi from '../../components/ParaTi/ParaTi'
import '../Home/Home.css'

const Home = () => {
  return (
    <>
      <div className='contenedor-pages'>
        <CarouselCom />
        <ParaTi Title='Top Rated' API='https://api.themoviedb.org/3/movie/top_rated?api_key=747b36d52c8c76c86925e8a5867acb43' />
      </div>
    </>

  )
}
export default Home
