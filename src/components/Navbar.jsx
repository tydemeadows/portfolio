import React from 'react'
import './Nav.css';

const Navbar = () => {
  return (
      <nav className="nav-desktop">
          <div className="nav-desktop__container">
              <a className="nav-desktop__logo" >
                  LOGO
              </a>
              <ul className="nav-desktop__main">
                <li className="nav-desktop__main__item">
                     <a className="nav-desktop__main__item__trigger" ><span>Products</span>
                      </a>
                   </li>
                <li className="nav-desktop__main__item">
                   <a className="nav-desktop__main__item__trigger" ><span>Pricing</span>
                    </a>
                 </li>
                <li className="nav-desktop__main__item">
                   <a className="nav-desktop__main__item__trigger" ><span>About</span>
                    </a>
                 </li>
              </ul>
              <ul className="nav-desktop__side">
                  <li>
                    <a target="_blank" rel="noopener noreferrer" class="blue-hl">Login</a>
                  </li>
                  <li>
                    <a class="cta blue">
                    <span>Demo</span>
                     <div class="cta_bg" ></div>
                     <div class="cta_base_bg"></div>
                    </a>
                  </li>
              </ul>
          </div>
      </nav>
  )
}


export default Navbar

