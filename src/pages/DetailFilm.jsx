import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const DetailFilm = () => {
  const { id } = useParams()
  const [movie, setMovie] = useState({})
  const url = `http://localhost:3000/movies/${id}`
  
  const fetchData = () => {
    axios.get(url).then((resp) => {
      setMovie(resp.data)
    })
  }
  
  useEffect(() => {
    fetchData()
  }, [])
  
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 mt-5">
            <div className="card shadow-sm">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={`http://localhost:3000${movie.image}`} className="img-fluid rounded-start" alt={movie.title}/>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h1 className="card-title">{movie.title}</h1>
                    <p className="card-text">{movie.abstract}</p>
                    <p className="card-text">
                      <small className="text-muted">Regia: {movie.director}</small>
                    </p>
                    <p className="card-text">
                      <small className="text-muted">Anno: {movie.release_year}</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DetailFilm