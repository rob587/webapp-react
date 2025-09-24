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
        <div className="row ">
           
          {movies.map((movie)=>{
            return(
              
            <div className="col-4 d-flex justify-content-center mt-5" key={movie.id}>
             <div className="card  ">
                <img className="card-img-top " src={`http://localhost:3000/cover/${movie.image}`}  alt={movie.description}/>
                <div className="card-body ">
                  <h2 className="card-title "><Link style={{textDecoration: 'none'}} to={`/details/${movie.id}`}>{movie.title}</Link></h2>
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
