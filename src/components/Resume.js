import React from 'react'
import '../Styles/Resume.scss'

function Resume() {

  const exppro=[
    {
    title:"Stage en entreprise",
    date:"Octobre 2019 - Janvier 2020",
    societe:"Orange Madagascar",
    description:"Conception et mise en place d’un bastion d’accès. Application web permettant de gérer et surveiller l’accès aux ressources de la société afin d’améliorer leur sécurité. Utilisant HTML, CSS, JavaScript, Python, Django, Bootstrap"
  }];

  const education=[
    {
      title:"Master en Informatique",
      date:"Octobre 2020 - Jusqu'a maintenant",
      school:"Institut Supérieur  Polytechnique de Madagascar ",
      description:"etude en cours dans la filière Informatique multimédia Technologie de l’information, de la communication et de l' intelligence Artificielle"
    },
      {
        title:"Licence en Informatique",
        date:"Décembre 2016 - Septembre 2020",
        school:"Institut Supérieur  Polytechnique de Madagascar ",
        description:"filière Informatique multimédia Technologie de l’information, de la communication et de l' intelligence Artificielle"
      },
      {
        title:"Baccalaureat",
        date:"Octobre 2013-Aout 2016",
        school:"Lycée Saint Antoine Ankadifotsy",
        description:"Baccalaureat serie D"
      }
  ]

  return (
    <section id="resume" className="grey-section container-fluid">
      <div className="row resume-timeline container">

        <div className="col-md-12 resume-header">

          <h2>Experience <span className="purple">Professionel</span></h2>

        </div>

        <div className="col-md-12">

        {exppro.map((exp,index)=>
            <div className="timeline-wrap" key={`pro-${index}`}>

            <div className="timeline-block">

              <div className="timeline-ico ">
                <i className="fa fa-briefcase "></i>
              </div>

              <div className="timeline-header">
                <h3>{exp.title}</h3>
                <p>{exp.date}</p>
              </div>

              <div className="timeline-content">
                <h4>{exp.societe}</h4>
                <p>{exp.description}</p>
              </div>

            </div>

          </div>
          )}  
        </div>

      </div>

      <div className="row resume-timeline">

        <div className="col-twelve resume-header">

          <h2>Education</h2>

        </div>

        <div className="col-twelve">

          <div className="timeline-wrap">

            {education.map((edu,index)=>
             <div className="timeline-block" key={`edu-${index}`}>

             <div className="timeline-ico">
               <i className="fa fa-graduation-cap"></i>
             </div>

             <div className="timeline-header">
               <h3>{edu.title}</h3>
               <p>{edu.date}</p>
             </div>

             <div className="timeline-content">
               <h4>{edu.school}</h4>
               <p>{edu.description}</p>
             </div>

           </div>

            )}
           
          </div>

        </div>

      </div>
    </section>
  )
}
export default Resume;