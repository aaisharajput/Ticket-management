import React, { useEffect, useState } from "react";
import styles from  "./style.module.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Nav() {
  const location=useLocation();
  const [auth,setAuth]=useState(JSON.parse(localStorage.getItem('tokenDetails')));
  useEffect(function(){
    setAuth(JSON.parse(localStorage.getItem('tokenDetails')));
  },[location])
 
    return(
<nav className={`${styles.navbar} navbar navbar-expand-md`}>
  <Link to='/' className="navbar-brand">
    <span className={styles.ticket}>Ticket</span> <span className={styles.service}>Service</span>
  </Link>

  <button
    className={`${styles.navbarToggler} navbar-toggler`}
    type="button"
    data-toggle="collapse" 
    data-target="#collapsibleNavbar"
  >
    <span className={`navbar-toggler-icon ${styles.navbarTogglerIcon}`}><i className={`fa fa-bars ${styles.faBars}`}></i></span>
  </button>

  <div
    className="collapse navbar-collapse pr-3 justify-content-end"
    id="collapsibleNavbar"
  >
   { (auth!=null && auth.login && auth.token!=null)?<UserLogin/>:<UserLogout/>}
    
    </div>
    </nav>
    )
}

function UserLogin(){
  return(<>
    
      <ul className="navbar-nav">
        <li className="nav-item">
        <form class="d-flex pt-3 pr-5">
          <input class="form-control" type="text" placeholder="Search"/>
          <button class="btn btn-primary ml-2" type="button">Search</button>
        </form>
        </li>
          <li className="nav-item pr-4 pt-3">
            <Link to="/logout">
              <button className="btn" type="submit">
                <span className={`${styles.link2} link2`}>Logout</span>
              </button>
            </Link>
          </li>
        </ul> </>
)}

function UserLogout(){
  return(
      <ul className="navbar-nav pt-3">
          <li className="nav-item pr-4">
            <Link className="nav-link" to="/">
              <span className={`${styles.link2} link2`}>
                Home
              </span>
            </Link>
          </li>
          <li className="nav-item pr-4">
            <Link className="nav-link" to="/about">
              <span className={`${styles.link2} link2`}>
                About
              </span>
            </Link>
          </li>
          <li className="nav-item pr-4">
            <Link className="nav-link" to="/login">
              <span className={`${styles.link2} link2`}>Signin</span>
            </Link>
          </li>
          <li className="nav-item pr-4">
            <Link className="nav-link" to="/signup">
              <span className={`${styles.link2} link2`}>Signup</span>
            </Link>
          </li>
        </ul>
  )
}