import React ,{useState} from 'react'
import '../Styles/Work.scss';
import melodia from '../img/melodia.JPG'
import visitcard from '../img/back.JPG'
import asa from '../img/E-asa.JPG'
import alfa from '../img/Alfa.JPG'

function Work() {
    const projet = [
        {
            title: "MELODIA",
            description: "Application Android destinée  à lire un fichier MIDI et le jouer sur un piano virtuel  projeter sur une image 3D grace à la technologie AR",
            tech: [
                "C#",
                "Unity 3D",
                "Vuforia"
            ],
            img:melodia
        },
        {
            title: "E-ASA",
            description: "Conception d’une application web permettant de faire la gestion d’un ou plusieurs projet.",
            tech: [
                "TypeScript",
                "Java",
                "Angular",
                "Spring Boot"
            ],
            img:asa
        },
        {
            title: "Visit Card",
            description: "Conception d'une version web de ma propre carte de visite.",
            tech: [
                "Javascript",
                "HTML",
                "CSS/SCSS",
                "React"
            ],
            img:visitcard
        },
        {
            title: "Alfa",
            description: "Conception d'une Application Android contenant les paroles des chansons d'un choral,pour faciliter la recherche d'un de ces chansons .",
            tech: [
                "Java",
                "XML",
            ],
            img:alfa
        }

    ]
    const [currentSlider,SetCurrentSlider]=useState(0);
    const handleSlide=(way)=>{
        way===0 ? SetCurrentSlider(currentSlider >0? currentSlider-1:projet.length-1):
        SetCurrentSlider(currentSlider<projet.length-1 ? currentSlider+1:0)
    }
    return (
        <div className="mpitazona">
        <div className="work container-fluid " id="portfolio">
            <h2>Mes Projets</h2>
            <div className="slider" style={{transform:`translateX(-${currentSlider *100}vw)`}}>
                {projet.map((p,index) =>
                    <div className="work-container card " key={`w-${index}`}>
                        <div className="item card-body shadow row">
                            <div className="left col-md-4">
                                <h3 className='purple'>{p.title}</h3>
                                <p>
                                    {p.description}
                                </p>
                                <ul className="work__list">
                                    {p.tech.map(x=>
                                        <li>{x}</li>
                                        )};
                                </ul>
                            </div>
                            <div className="right col-md-8">
                             <img src={p.img} alt="sary" className="shadow"/>
                            </div>
                        </div>
                    </div>
                )}

            </div>
            <div className="arrow left" onClick={()=>handleSlide(0)}><i className="fa fa-arrow-left" aria-hidden="true"></i></div>
            <div className="arrow right" onClick={()=>handleSlide(1)}><i className="fa fa-arrow-right" aria-hidden="true"></i></div>
        </div>
        </div>
    )
}

export default Work;