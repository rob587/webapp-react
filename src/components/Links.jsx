import React from 'react'
import {NavLink} from 'react-router-dom'
import CreateMovie from '../pages/CreateMovie'

const Links = () => {
  return (
  
    <>
    <div className="container mt-3">
        <div className="row">
            <div className="col-12">
                <div className="d-flex justify-content-center">
                    <h2>Benvenuto</h2>
                </div>
                <ul className="list-unstyled d-flex justify-content-around">
                    <li className="me-4 fs-3  ">
                       <NavLink style={{textDecoration: 'none'}} to='/'  > Homepage </NavLink> 
                    </li>
                    
                    <li>
                        <NavLink to="/movie/create" style={{ textDecoration: 'none' }}>
                            <button className='add-btn fs-3'>Inserisci Film</button>
                        </NavLink>
                    </li>
                    
                </ul>
            </div>
        </div>
    </div>


    </>
  )
}

export default Links

