import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Loader from '../components/Loader'
import GlobalContext from '../contexts/globalContexts'

const HomePage = () => {

  const [movies, setMovies] = useState([])
  const {setIsLoading} = useContext(GlobalContext)

  const url = ('http://localhost:3000/movies')

    const fetchData = () =>{
      setIsLoading(true)
    axios.get(url).then((resp)=>{
      setMovies(resp.data)
      setIsLoading(false)
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
             <div className="card border-light border-3   ">
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
