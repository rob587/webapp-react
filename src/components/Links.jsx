import React from 'react'
import {NavLink} from 'react-router-dom'

const Links = () => {
  return (
  
    <>
    <div className="container">
        <div className="row">
            <div className="col-12">
                <div className="d-flex justify-content-center">
                    <h2>Benvenuto</h2>
                </div>
                <ul className="list-unstyled d-flex justify-content-center">
                    <li className="me-4 ">
                       <NavLink style={{textDecoration: 'none'}} to='/'  > Homepage </NavLink> 
                    </li>
                    <button>Inserisci nuovo Film</button>
                </ul>
            </div>
        </div>
    </div>


    </>
  )
}

export default Links

