import React from 'react'
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
         <nav class="navbar navbar-expand-lg navbar-light bg-secondary">
            <div class="collapse navbar-collapse Mainheader Mainheading" id="navbarTogglerDemo01">
             
              <h3 class="text-white  heading">Blog App </h3>
              <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
              </ul>
    
             
    
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item active nav-item">
                  <Link className='nav-link text-white navlnk' to='/'>Home</Link>
                </li>
    
                <li class="nav-item active nav-item">
                  <Link className='nav-link text-white navlnk' to='/read'>Blog CRUD</Link>
                </li>
    
               
    
              
    
              </ul>
            </div>
          </nav>
    </div>
  )
}

export default Navbar