import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const ReviewForm = ({movieId}) => {

    const apiUrl = `http://localhost:3000/movies/${movieId}/reviews`
    const initialData = {
        text: "",
        vote: "",
        name: ""
    }
    const [formData, setFormData] = useState(initialData)

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
            setFormData(initialData)
        })
    }

  return (
    <>
    <div className="detail-card p-4">
        <h2 className='text-center'>Aggiungi una recensione </h2>
    </div>
    <form onSubmit={handleSubmit}  >
        <div className="form-group gy-3">
            <label htmlFor="" className='form-label'>Nome:</label>
            <input 
            type="text" 
            className='form-control' 
            placeholder='Nome' 
            name='name' 
            id='name' 
            value={formData.name}
            onChange={setFieldValue}
            required />
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
            value={formData.vote}
            onChange={setFieldValue}
            required />
        </div>
        <div className="form-group">
            <label htmlFor="" className='form-label'>Testo recensione:</label>
            <input 
            type="text" 
            className='form-control' 
            placeholder='inserisci recensione' 
            name='text' 
            id='text' 
            value={formData.text}
            onChange={setFieldValue} 
            required/>
        </div>
        <div className="rev-btn form-group mt-3 d-flex justify-content-end">
            <button type='submit'>Lascia recensione</button>
        </div>
    </form>

    </>
  )
}

export default ReviewForm
