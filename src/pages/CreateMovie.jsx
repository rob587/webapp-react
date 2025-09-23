import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


const CreateMovie = ({onMovieCreated}) => {

    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        title: '',
        director: '',
        image: null,
        abstract: '',
    })

    const setFieldValue = (e) =>{
        const {name, value} = e.target
        if(name === 'image') setFormData({...formData, image: e.target.files[0]})
        else setFormData({...formData, [name]: value})
    }


    const handleSubmit = (e) => {
  e.preventDefault()
  const data = new FormData()
  data.append('title', formData.title)
  data.append('director', formData.director)
  data.append('abstract', formData.abstract)
  data.append('image', formData.image) 
  axios.post('http://localhost:3000/movies', data, {
    headers: { "Content-Type": "multipart/form-data" }
  })
  .then((resp) => {
    console.log('film inserito correttamente')
    if (onMovieCreated) onMovieCreated()
  })
  .catch((err) => {
    console.log('errore inserimento', err)
  })
}

  return (
    <div className='container'>
      <div className="row">
        <div className="col-12">
            <h2>Aggiungi Film</h2>
        </div>
        <div className="col-12">
            <form onSubmit={handleSubmit} >
                <div className="row gy-4">
                    <div className="col-12 col-md-4">
                        <label htmlFor="" className='form-label'>Titolo</label>
                        <input
                        name='title'
                        id='title' 
                        type="text"
                        className='form-control'
                        placeholder='Inserisci Titolo'
                        value={formData.title}
                        onChange={setFieldValue}
                         />
                    </div>
                    <div className="col-12 col-md-4">
                        <label htmlFor="" className='form-label'>Autore</label>
                        <input
                        name='director'
                        id='director' 
                        type="text"
                        className='form-control'
                        placeholder='Inserisci AUTORE'
                        value={formData.director}
                        onChange={setFieldValue}
                         />
                    </div>
                    <div className="col-12 col-md-4">
                        <label htmlFor="" className='form-label'>Immagine</label>
                        <input
                        name='image'
                        id='image' 
                        type="file"
                        className='form-control'
                        placeholder='Inserisci immagine'
                        
                        onChange={setFieldValue}
                         />
                    </div>
                    <div className="col-12 col-md-4">
                        <label htmlFor="" className='Form-label'>Trama</label>
                        <textarea 
                        name="abstract"
                        id="abstract"
                        className='form-control'
                        placeholder='Inserisci la trama'
                        value={formData.abstract}
                        onChange={setFieldValue}
                        >

                        </textarea>
                    </div>                    
                </div>
                <div className="col-12 mt-5">
                    <button type="submit" className="btn btn-primary">
                        Salva Film
                    </button>
                </div>
            </form>
        </div>
      </div>
    </div>
  )
}

export default CreateMovie
