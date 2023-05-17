import './App.css'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter } from 'react-router-dom'
import RoutesIndex from './routes'

function App () {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <RoutesIndex />
      </BrowserRouter>
    </>
  )
}

export default App
