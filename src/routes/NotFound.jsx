import React from 'react'
import {Link} from "react-router-dom"

const NotFound = () => {
  return (
    <div>UPS... creo que tenemos un 404
        <Link to='/' className="btn btn-outline-primary" > Pagina Inicial</Link>

    </div>
    
  )
}

export default NotFound