import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_kngafi8', 'template_iemurov', form.current, 'iujkvp77D8417LoSW')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    
      e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          {/* Email */}
          <article className="contact__option">
          <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <a href="mailto:danieltanaka2@hotmail.com" target="_blank">Send a message</a>
          </article>

          {/* Whatsapp */}
          <article className="contact__option">
          <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4> 
            {/* The below does not work - update it */}
            <a href="https://api.whatsapp.com/send?phone+447397241653" target="_blank">Send a message</a>
          </article>

          {/* LinkedIn */}
          <article className="contact__option">
          <RiMessengerLine className='contact__option-icon'/>
            <h4>LinkedIn</h4>
            <a href="https://m.me/danielmx1" target="_blank">Connect with me</a>
          </article>
        </div>
        {/* End of contact options */}
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact