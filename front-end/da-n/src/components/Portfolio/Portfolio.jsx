import React from 'react'
import './portfolio.css'
import sakuki from '../../assets/Sakuki1.png'
import zenmon from '../../assets/Zenmon1.png'
import heiki from '../../assets/Heiki1.png'
import dan1 from '../../assets/Da-n1.png'
import danflix from '../../assets/Danflix1.png'
import courier_app from '../../assets/CourierApp1.png'


const data = [
  {id: 1, 
  image: sakuki, 
  title: 'Sakuki',
  description_text:'Japanese business translation app',
  completed_date:'July 2022',
  stack_used:'GO (Gin), Javascript (React), CSS (Styled Components)',
  //Add description here, pass it into the map and template below
  github: 'https://github.com/dan88934/sakuki',
  site: ''
},
{id: 2, 
  image: zenmon, 
  title: 'Zenmon',
  description_text:'Flashcard creation and study app',
  completed_date:'October 2021',
  stack_used:'Python (Django), Javascript (Vue), Bootstrap',
  github: 'https://github.com/dan88934/zenmon',
  site: ''
},
{id: 3, 
  image: heiki, 
  title: 'Heiki',
  description_text:'Vocabulary list creation app',
  completed_date:'March 2021',
  stack_used:'Python (Flask), HTML, Bootstrap',
  github: 'https://github.com/dan88934/heiki',
  site: ''
},
{id: 4, 
  image: dan1, 
  title: 'Da-n',
  description_text:'Portfolio website',
  completed_date:'August 2022',
  stack_used:'Go (Mux), Javascript (React), CSS',
  github: 'https://github.com/dan88934/da-n',
  site: ''
},
{id: 5, 
  image: courier_app, 
  title: 'Courier / Insurance Processing App',
  description_text:'Application which calculates insurance charges for a fictional courier company',
  completed_date:'November 2021',
  stack_used:'Python (Flask), Javascript',
  github: 'https://github.com/dan88934/courier_app',
  site: ''
},
{id: 6, 
  image: danflix, 
  title: 'Danflix',
  description_text:'Clone of Netflix front-end',
  completed_date:'October 2021',
  stack_used:'Go (Gin), Javascript (React), CSS (Styled Components)',
  github: 'https://github.com/dan88934/Danflix',
  site: ''
}
]

const Portfolio = () => {
  return (
    <>
    <section id='portfolio'>
      <h5>My Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>
       {
        data.map(({id, image, title, github, site, completed_date, stack_used, description_text}) => {
          return (
            <article key={id} className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={image} alt={title}/>
          </div>
          <h3>{title}</h3>
          <div className="portfolio__item__info">
            <small><strong>Description: </strong>{description_text}</small>
            <br></br>
            <small><strong>Completed: </strong>{completed_date}</small>
            <br></br>
            <small><strong>Used: </strong>{stack_used}</small>
          </div>
          <div className='portfolio__item-cta'>
            <a href={github} className='btn'  target="_blank">Github</a>
            <a href="https://github.com" className='btn'  target="_blank">Details</a>
            <a href={site} className='btn btn-primary' target='_blank'>Live Site</a>
          </div>
        </article>
          )
        })
       }
      </div>
    </section>
    </>
  )
}

export default Portfolio