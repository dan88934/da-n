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
  github: '',
  demo: ''
},
{id: 2, 
  image: zenmon, 
  title: 'Zenmon',
  github: '',
  demo: ''
},
{id: 3, 
  image: heiki, 
  title: 'Heiki',
  github: '',
  demo: ''
}
]

const Portfolio = () => {
  return (
    <>
    <section id='portfolio'>
      <h5>My Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>
        {/* Sakuki */}
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={sakuki} alt="sakuki"/>
          </div>
          <h3>Sakuki</h3>
          <h6>Same text here as under python in experience section. Give basic details about the project</h6>
          <div className='portfolio__item-cta'>
            <a href="https://github.com" className='btn'>Github</a>
            <a href="https://github.com" className='btn'>Details</a>
            <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Site</a>
          </div>
        </article>
        {/* Zenmon */}
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={zenmon} alt="zenmon"/>
          </div>
          <h3>Zenmon</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com" className='btn'>Github</a>
            <a href="https://github.com" className='btn'>Details</a>
            <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Site</a>
          </div>
        </article>
        {/* Heiki */}
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={heiki} alt="heiki"/>
          </div>
          <h3>Heiki</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com" className='btn'>Github</a>
            <a href="https://github.com" className='btn'>Details</a>
            <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Site</a>
          </div>
        </article>
        {/* Courier App */}
        {/* Danflix */}
        {/* Da-n.co */}
      </div>
    </section>
    </>
  )
}

export default Portfolio