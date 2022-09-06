import React from 'react'
import {Link} from 'react-router-dom'
const Footer = () => {
  return (
    <div className='container'>
        <footer className='text-white py-4 bg-dark'>
            
                <nav className='row'>
                    <Link to={'/'} className='col-12 col-md3 d-flex aling-items-center justyfy-content-cente'>
                        <img src='./LaLigaPremier.png' className='mx-2 ' width='80'></img>
                    </Link>
                </nav>
          
        </footer>
    </div>
  )
}

export default Footer