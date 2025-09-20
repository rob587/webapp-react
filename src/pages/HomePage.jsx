import React, { useState } from 'react'
import axios from 'axios'

const HomePage = () => {

  const [movies, setMovies] = useState([])

  const url = ('http://localhost:3000/movies')

    const fetchData = () =>{
    axios.get(url).then((resp)=>{
      setMovies(resp.data)
    })
  }


  return (
    <>
      <div className="container">
        <div className="row">
          {movies.map((movie)=>{
            return(
          <div className="col-6">

          </div>

            )
          })}
        </div>
      </div>
    </>
  )
}

export default HomePage
