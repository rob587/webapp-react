import React from 'react'

const ReviewForm = () => {
  return (
    <>
    <div className="detail-card">
        <h2 className='text-center'>Aggiungi una recensione </h2>
    </div>
    <form >
        <div className="form-group">
            <label htmlFor="" className='form-label'>Nome</label>
            <input 
            type="text" 
            className='form-control' 
            placeholder='Nome' 
            name='name' 
            id='name' />
        </div>
        <div className="form-group">
            <label htmlFor="" className='form-label'>Voto</label>
            <input 
            type="number" 
            className='form-control' 
            placeholder='Voto'
            min={0}
            max={5} 
            name='vote' 
            id='vote' />
        </div>
        <div className="form-group">
            <label htmlFor="" className='form-label'>Testo recensione</label>
            <input 
            type="text" 
            className='testo recensione' 
            placeholder='Nome' 
            name='text' 
            id='text' />
        </div>
        <div className="form-group">
            <button type='submit'></button>
        </div>
    </form>

    </>
  )
}

export default ReviewForm
