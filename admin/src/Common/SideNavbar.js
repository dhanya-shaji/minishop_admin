import React from 'react'
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
export default class SideNavbar extends React.Component{
    render(){
        return(
        <div>
        <nav className="side-navbar">
        <div className="side-navbar-wrapper">
        <div className="sidenav-header d-flex align-items-center justify-content-center">
          <div className="sidenav-header-inner text-center">
              <img src="img/d.jpeg" alt="person" className="img-fluid rounded-circle"/>
            <h2 className="h5">Dhanya shaji</h2><span>Web Developer</span>
          </div>
          <div className="sidenav-header-logo">
              <a href="" className="brand-small text-center"> 
              <strong>B</strong><strong className="text-primary">D</strong></a></div>
        </div>
        <div className="main-menu">
          <ul id="side-admin-menu" className="side-menu list-unstyled"> 
            <li><Link to={{ pathname: "/Categories_View"}}>CATEGORIES</Link> </li>
            <li> <Link to={{pathname:"/Product_view"}}>PRODUCT_VIEW</Link></li>
          </ul>
        </div>
      </div>
    </nav>
     </div>
            
        )
    }
}