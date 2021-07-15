import React,{useState} from 'react';
import '../Styles/Navbar.scss'

function Navbar(){
        const [navColour, updateNavbar] = useState(false);
      
        function scrollHandler() {
          if (window.scrollY >= 20) {
            updateNavbar(true);
          } else {
            updateNavbar(false);
          }
        }
      
        window.addEventListener("scroll", scrollHandler);

    return(
        <nav className={`${navColour ? "scroll navbar" : "navbar"} navbar-expand-lg navbar-light fixed-top py-4`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#porfolio">MyPorfolio</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link js-scroll-trigger" href="#about">A propos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link js-scroll-trigger" href="#resume">Resume</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link js-scroll-trigger" href="#portfolio">Portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link js-scroll-trigger" href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
export default Navbar;