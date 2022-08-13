import React from 'react'
import './projectpagedescription.css'
import sakuki from '../../assets/Sakuki1.png'
import zenmon from '../../assets/Zenmon1.png'
import heiki from '../../assets/Heiki1.png'
import dan1 from '../../assets/Da-n1.png'
import danflix from '../../assets/Danflix1.png'
import courier_app from '../../assets/CourierApp1.png'
import HeaderSocialLinks from '../Header/HeaderSocialLinks'


const ProjectPageDescription = (data) => {
  console.log('projectpage',data)
  const image1 = (data.data.data.image1)
  const image2 = (data.data.data.image2)
  const title = (data.data.data.title)
  const description_text = (data.data.data.description_text)
  const long_description_text = (data.data.data.long_description_text)
  const completed_date = (data.data.data.completed_date)
  const stack_used = (data.data.data.stack_used)
  const github = (data.data.data.github)
  const site = (data.data.data.site)
  
  
  return (
    <>
    <section id='portfolio'>
    <h5>Short description</h5>
      <h2>{title}</h2>
     
      <div className='container description__container'>
            <article className='portfolio__item'>
          <div className='description__item__image__container'> 
            <div className="description__item-image">
              <img src={image1} alt={title}/>
            </div>
            <div className="description__item-image">
              <img src={image2} alt={title}/>
            </div>
          </div>   
          <h3>{title}</h3>
          <div className="portfolio__item__info">
            <small><strong>Description: </strong>{description_text}</small>
            <br></br>
            <small><strong>Completed: </strong>{completed_date}</small>
            <br></br>
            <small><strong>Used: </strong>{stack_used}</small>
            <br></br>
            <small>{long_description_text}</small>
          </div>
          <div className='portfolio__item-cta'>
            <a href={github} className='btn'  target="_blank">Github</a>
            <a href={site} className='btn btn-primary' target='_blank'>Live Site</a>
          </div>
        </article>
      </div>
    </section>
    </>
  )
}

export default ProjectPageDescription