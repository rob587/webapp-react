import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'


const CreateMovie = () => {

    const [formData, setFormData] = useState({
        title: '',
        author: '',
        image: null,
        abstract: '',
    })

    const setFieldValue = (e) =>{
        const {name, value} = e.target
        if(name === 'image') setFormData({...formData, image: e.target.files[0]})
        else setFormData({...formData, [name]: value})
    }

  return (
    <div className='container'>
      <div className="row">
        <div className="col-12">
            <h2>Aggiungi Film</h2>
        </div>
        <div className="col-12">
            <form >
                <div className="row gy-4">
                    <div className="col-12 col-md-4">
                        <label htmlFor="" className='form-label'>Titolo</label>
                        <input
                        name='title'
                        id='title' 
                        type="text"
                        className='form-control'
                        placeholder='Inserisci Titolo' />
                    </div>
                    <div className="col-12 col-md-4">
                        <label htmlFor="" className='form-label'>Autore</label>
                        <input
                        name='author'
                        id='author' 
                        type="text"
                        className='form-control'
                        placeholder='Inserisci AUTORE' />
                    </div>
                    <div className="col-12 col-md-4">
                        <label htmlFor="" className='form-label'>Immagine</label>
                        <input
                        name='image'
                        id='image' 
                        type="file"
                        className='form-control'
                        placeholder='Inserisci immagine' />
                    </div>
                    <div className="col-12 col-md-4">
                        <label htmlFor="" className='Form-label'>Trama</label>
                    </div>
                    
                </div>
            </form>
        </div>
      </div>
    </div>
  )
}

export default CreateMovie
