import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const HomePage = () => {

  const [movies, setMovies] = useState([])

  const url = ('http://localhost:3000/movies')

    const fetchData = () =>{
    axios.get(url).then((resp)=>{
      setMovies(resp.data)
    })
  }

      useEffect(() => {
    fetchData()
  }, [])



  return (
    <>
      <div className="container">
        <div className="row">
          {movies.map((movie)=>{
            return(
          
            <div className="col-6 d-flex mt-5" key={movie.id}>
             <div className="card shadow-sm h-100">
                <img className="card-img-top p-3" src={movie.image}  alt={movie.description}/>
                <div className="card-body ">
                  <h2 className="card-title "><Link to={`/details/${movie.id}`}>{movie.title}</Link></h2>
                </div>
              </div>
           </div>
         

            )
          })}
        </div>
      </div>
    </>
  )
}

export default HomePage
