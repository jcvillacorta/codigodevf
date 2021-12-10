import React from 'react'

const account = localStorage.getItem("cuenta_logueada")

function NavBar(props) {
  const {countCartItems, navigateTo, page_cart, page_products, page_signup, page_login} = props;

  return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand mt-2" href="index.html">Shopping Cart</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mt-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#/home" onClick={() => navigateTo(page_products)}>Home</a>
        </li>
        <li className="nav-item">
        <a className="nav-link" href="#/home" onClick={() => navigateTo(page_signup)}>Regístrate</a>
        </li>
        <li className="nav-item">
        <a className="nav-link" href="#/home" onClick={() => navigateTo(page_login)}>Login</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#/home" onClick={() => navigateTo(page_cart)}>
            Carrito 
          </a>
        </li>
        <li className="nav-item">
            {countCartItems ? (
              <button className="btn btn-danger">{countCartItems}</button>
            ) : ("")
            }
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    )
}


export default NavBar