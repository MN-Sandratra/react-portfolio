import React from 'react';
import '../Styles/footer.scss';


function Footer(){
    let date=new Date();
    let year=date.getFullYear();

    return(
        <footer className="footer text-center">
            <div className="container px-4 px-lg-5">
                <ul className="list-inline mb-5">
                    <li className="list-inline-item">
                        <a className="social-link rounded-circle text-white mr-3" href="https://www.facebook.com/profile.php?id=100006694788606" target="_blank"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                    </li>
                    <li className="list-inline-item">
                        <a className="social-link rounded-circle text-white mr-3" href="https://github.com/MN-Sandratra" target="_blank"><i className="fa fa-github" aria-hidden="true"></i></a>
                    </li>
                    <li className="list-inline-item">
                        <a className="social-link rounded-circle text-white" href="https://instagram.com/m.n_sandratra?utm_medium=copy_link" target="_blank"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                    </li>
                </ul>
                <p className="text-muted small mb-0">Copyright © Sandratra Devellopement {year}</p>
            </div>
        </footer>
    );

}
export default Footer;