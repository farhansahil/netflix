import React from 'react'

const Navbar = () => {

   

  return (
    <>

<nav className="navbar bg-light">
  <div className="container-fluid">
    <h4 className="navbar-brand">Netflix</h4>
    <form  className="d-flex" role="search">
      <input className="form-control me-2"  type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>


</>
  )
}

export default Navbar