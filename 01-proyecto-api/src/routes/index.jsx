import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Genres from '../pages/Genres/Genres'

const RoutesIndex = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/genres' element={<Genres />} />
    </Routes>
  )
}
export default RoutesIndex
