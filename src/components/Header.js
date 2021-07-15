import React from 'react'
import homeLogo from '../Assets/home-main.svg'
import '../Styles/Header.scss'
import Type from './Type'

function Header() {
    return (
        <header className="masthead" id="porfolio">
            <div className="container home-content">
                <div className="row  home-header align-items-center justify-content-center">
                    <div className="col-md-7">
                    <h1 style={{ paddingBottom: 15 }} className="heading">
                        Bienvenue! <span className="wave">👋🏻</span>
                    </h1>
                    <h1 className="heading-name">
                        Je suis
                        <strong className="main-name"> MBELO NDRIAMANAMPY Sandratra</strong>
                    </h1>
                    <div style={{ padding: 50, textAlign: "left" }} className="soratra-move">
                        <Type/>
                    </div>
                    </div>
                    <div className="col-md-5">
                        <img src={homeLogo} alt="home pic" className="img-fluid" />
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header;