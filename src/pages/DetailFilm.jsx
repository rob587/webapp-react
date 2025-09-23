import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import ReviewForm from '../components/ReviewForm'

const DetailFilm = () => {
  const { id } = useParams()
  const [movie, setMovie] = useState({})
  const [reviews, setReviews] = useState([])
  const url = `http://localhost:3000/movies/${id}`
  
  const fetchData = () => {
    axios.get(url).then((resp) => {
      setMovie(resp.data.film)
      setReviews(resp.data.reviews)
      
    })
  }
  
  useEffect(() => {
    fetchData()
  }, [id])
  
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 mt-5">
            <div className="card shadow-sm">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={`http://localhost:3000/cover/${movie.image}`} className="img-fluid rounded-start" alt={movie.title}/>
                </div>
                <div className="col-md-8 px-4">
                  <div className="card-body ">
                    <h1 className="card-title">{movie.title}</h1>
                    <p className="card-text">{movie.abstract}</p>
                    <p className="card-text">
                      <small>Regia: {movie.director}</small>
                    </p>
                    <p className="card-text">
                      <small>Anno: {movie.release_year}</small>
                    </p>
                  </div>
                  <div className="col-12">
                    <h3>Recensioni:</h3>
                    {reviews.map((review)=>{
                      return(
                        <div key={review.id} className="card my-2">
                          <div className="card-body">
                              <h4>{review.name} ({review.vote})</h4>
                              <p className='card-text'>{review.text}</p>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="review-form">
         <ReviewForm movieId={id} onReviewAdded={fetchData} />
        </div>
        
      </div>
    </>
  )
}

export default DetailFilm