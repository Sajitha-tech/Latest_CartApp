import React from 'react'
import { Link } from 'react-router-dom'

const Navcart = () => {
  return (
    <div>
        <nav class="nav">
  <Link class="nav-link active" aria-current="page" to="/">Add</Link>
  <Link class="nav-link" to="/view">View</Link>
  
</nav>
    </div>
  )
}

export default Navcart