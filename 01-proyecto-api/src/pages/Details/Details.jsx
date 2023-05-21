import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Details = () => {
  const id = useParams()

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=747b36d52c8c76c86925e8a5867acb43&query=${name})`)
      .then(reponse => reponse.json())
      .then(data => {
        setMovies(data.results)
      })
      .catch(error => console.log(error))
  }, [name])

  return (
    <div>Details</div>
  )
}
export default Details
