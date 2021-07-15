import React from 'react'
import '../Styles/about.scss'
import about from '../img/webporfolio.png'
import pdf from '../Assets/cvsandratra.pdf';
import '@fortawesome/fontawesome-free/css/all.css';
import {
    SiLinux,
    SiVisualstudiocode,
    SiJupyter,
    SiPostman,
    SiNpm,
  } from "react-icons/si";

  import {
    DiJavascript1,
    DiHtml5,
    DiCss3,
    DiReact,
    DiAngularSimple,
    DiPython,
    DiJava,
    DiPhp,
  } from "react-icons/di";

function About() {
    const languague=[{
        title:"HTML",
        font:<DiHtml5/>
    },
    {
        title:"CSS",
        font:<DiCss3/>
    },
    {
        title:"JS",
        font:<DiJavascript1/>
    },
    {
        title:"Angular",
        font:<DiAngularSimple/>
    },
    {
        title:"React",
        font:<DiReact/>
    },
    {
        title:"Java",
        font:<DiJava/>
    },
    {
        title:"Python",
        font:<DiPython/>
    },
    {
        title:"php",
        font:<DiPhp/>
    }
    ];

    const outil=[
        {
            title:"Linux",
            font:<SiLinux/>
        },
        {
            title:"npm",
            font:<SiNpm/>
        },
        {
            title:"postman",
            font:<SiPostman/>
        },{
            title:"Jupiter",
            font:<SiJupyter/>
        },{
            title:"vs code",
            font:<SiVisualstudiocode/>
        }
    ]

    return (
        <div className="container-fluid about-section" id="about">
            <div className="container">
                <div className="row about" style={{ justifyContent: "center", padding: "10px" }}>
                    <div className="col-md-7"
                        style={{
                            justifyContent: "center",
                            paddingTop: "30px",
                            paddingBottom: "50px",
                        }}
                    >
                        <h1 style={{ fontSize: "2.1em", paddingBottom: "10px" }}>
                            A propos de <strong className="purple">Moi</strong>
                        </h1>
                        <div className=" card quote-card-view">
                            <div className="card-body">
                                <blockquote className="blockquote mb-0">
                                    <p style={{ textAlign: "justify" }}>
                                        Je m'appelle  <span className="blue">Sandratra MBELO NDRIAMANAMPY </span>
                                        je viens d'<span className="purple"> Antananarivo, Madagascar.</span>
                                        <br />Etudiant de <span className="purple">5ème année</span> en informatique à l'institut supérieur polytechnique de Madagascar dans la filière <span className="blue">IMTICIA</span> 
                                        <br />
                                        <br />
                                        Apart le devellopement informatiquue, il y a quelques activites que j'aime pratiquer!
                                    </p>
                                    <ul>
                                        <li className="about-activity">
                                        	Jeux vidéo
                                        </li>
                                        <li className="about-activity">
                                            Dessiner
                                        </li>
                                        <li className="about-activity">
                                            Voyager
                                        </li>
                                    </ul>
                                    <a class="btn btn-light btn-xl" href={pdf} target="_blank">Telecharger mon Cv</a>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5 about-img"
                        style={{ paddingTop: "120px", paddingBottom: "50px" }}
                    >
                        <img src={about} alt="about" className="img-fluid" />
                    </div>
                </div>
                <h1 className="project-heading">
                    Domaines de<strong className="purple"> Connaissances </strong>
                </h1>

                <div className="row" style={{ justifyContent: "center", paddingBottom: "50px" }}>
                    {languague.map((el,index)=>
                        <div className="col-xs-4 col-md-2 tech-icons" key={`${el.title}-${index}`}>
                        {el.font}
                        </div>
                    )}
                </div>

                <h1 className="project-heading">
                    <strong className="purple">Outils</strong> utilisé
                </h1>
                <div className="row" style={{ justifyContent: "center", paddingBottom: "50px" }}>
                    {outil.map((o,index)=>
                        <div className="col-xs-4 col-md-2 tech-icons" key={`${o.title}-${index}`}>
                        {o.font}
                    </div>
                    )}
                </div>
            </div>
        </div>
    );
}
export default About;