import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Genres from '../pages/Genres/Genres'
import Search from '../pages/Search/Search'
import Details from '../pages/Details/Details'

const RoutesIndex = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/genres' element={<Genres />} />
      <Route path='/search/:name' element={<Search />} />
      <Route path='/detail/:id' element={<Details />} />
    </Routes>
  )
}
export default RoutesIndex
