import './App.css'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter } from 'react-router-dom'
import RoutesIndex from './routes'
import SearchBar from './components/SearchBar/SearchBar'

function App () {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <SearchBar />
        <RoutesIndex />
      </BrowserRouter>
    </>
  )
}

export default App
