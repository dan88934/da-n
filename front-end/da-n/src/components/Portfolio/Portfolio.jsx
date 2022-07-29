import React from 'react'
import './portfolio.css'
import sakuki from '../../assets/Sakuki1.png'
import zenmon from '../../assets/Zenmon1.png'
import heiki from '../../assets/Heiki1.png'
// import danflix from '../../assets/Sakuki1.png'
// import courier_app from '../../assets/Sakuki1.png'


const data = [
  {id: 1, 
  image: sakuki, 
  title: 'Sakuki',
  //Add description here, pass it into the map and template below
  github: '',
  site: ''
},
{id: 2, 
  image: zenmon, 
  title: 'Zenmon',
  github: '',
  site: ''
},
{id: 3, 
  image: heiki, 
  title: 'Heiki',
  github: '',
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
        data.map(({id, image, title, github, site}) => {
          return (
            <article key={id} className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={image} alt={title}/>
          </div>
          <h3>{title}</h3>
          <p>test</p>
          <div className='portfolio__item-cta'>
            <a href={github} className='btn'>Github</a>
            <a href="https://github.com" className='btn'>Details</a>
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