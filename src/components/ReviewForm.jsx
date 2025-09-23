import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const ReviewForm = (movieId) => {

    const apiUrl = `http://localhost:3000/movies/${movieId}/reviews`

    const [formData, setFormData] = useState({
        text: "",
        vote: "",
        name: ""
    })

    const setFieldValue = e =>{
        const {name, value} = e.target
        setFormData({
            ...formData,
            [name]:value
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        axios.post(apiUrl, formData, {headers: {'Content-type': 'application/json'}}).then((resp)=>{
            setFormData({
                name: '',
                text: '',
                vote: ''
            })
        })
    }

  return (
    <>
    <div className="detail-card p-4">
        <h2 className='text-center'>Aggiungi una recensione </h2>
    </div>
    <form onSubmit={handleSubmit}  >
        <div className="form-group">
            <label htmlFor="" className='form-label'>Nome:</label>
            <input 
            type="text" 
            className='form-control' 
            placeholder='Nome' 
            name='name' 
            id='name' 
            value={formData.name}/>
        </div>
        <div className="form-group">
            <label htmlFor="" className='form-label'>Voto:</label>
            <input 
            type="number" 
            className='form-control' 
            placeholder='Voto'
            min={0}
            max={5} 
            name='vote' 
            id='vote' 
            value={formData.vote}/>
        </div>
        <div className="form-group">
            <label htmlFor="" className='form-label'>Testo recensione:</label>
            <input 
            type="text" 
            className='form-control' 
            placeholder='inserisci recensione' 
            name='text' 
            id='text' 
            value={formData.text}/>
        </div>
        <div className="form-group">
            <button type='submit'>Lascia recensione</button>
        </div>
    </form>

    </>
  )
}

export default ReviewForm
