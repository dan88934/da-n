import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <>
    <section id='experience'>
    <h5>The skills I have</h5>
    <h2>My Experience</h2>

    <div className="container experience__container">
      {/* Frontend Experience */}
      <div className="experience__frontend">
        <h3>Frontend Development</h3>
        <div className="experience__content">
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
              <h4>HTML</h4>
              <small>
              <ul>
                <li>HTML5</li>
              </ul>
              </small>
              {/* The small text here had className='text-light */}
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
              <h4>CSS</h4>
              <small>
              <ul>
              <li>Bootstrap</li>
              <li>Styled Components</li>
              </ul>
              </small>
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
              <h4>Javascript</h4>
              <small>
              <ul>
              <li>React</li>
              <li>TypeScript</li>
              <li>Vanilla</li>
              </ul>
              </small>
            </div>
          </article>
        </div>
      </div>
      {/* Backend Experience */}
      <div className="experience__backend">
      <h3>Backend Development</h3>
        <div className="experience__content">
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
              <h4>Python</h4>
              <small>
              <ul>
              <li>Django</li>
              <li>Flask</li>
              </ul>
              </small>
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
              <h4>Go</h4>
              <small>
              <ul>
              <li>Gin</li>
              <li>Mux</li>
              </ul>
              </small>
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
              <h4>SQL</h4>
              <small>
              <ul>
              <li>PostgreSQL</li>
              </ul>
              </small>
            </div>
          </article>
        </div>
      </div>
      {/* DevOps  */}
      <div className="experience__other">
      <h3>DevOps</h3>
        <div className="long__experience__content">
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
              <h4>Docker</h4>
              <small>
              <ul>
              <li>Most of my projects run in Docker containers</li>
              </ul>
              </small>
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
              <h4>CI/CD</h4>
              <small>
              <ul>
              <li>Semaphore CI</li>
              <li>Set up a CI+CD pipeline for one of my projects</li>
              <li>Selenium</li>
              </ul>
              </small>
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
              <h4>Linux</h4>
              <small>
              <ul>
              <li>My projects are all deployed on a Ubuntu Server VPS </li>
              <li>Configured NGINX as reverse proxy</li>
              </ul>
              </small>
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
              <h4>Git</h4>
              <small>
              <ul>
              <li>All my personal projects use Git & Github</li>
              <li>At 1Password, used Gitlab regularly</li>
              </ul>
              </small>
            </div>
          </article>
        </div>
      </div>
        {/* Cyber Security */}
        <div className="experience__frontend">
        <h3>Cyber Security</h3>
        <div className="long__experience__content">
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
              <h4>Security+</h4>
              <small>
              <ul>
              <li>Passed Security+ exam in 2023</li>
              <li>Studied topics including:
                  {/* <br></br>
                  * Vulnerability management */}
                  <br></br>
                  * Secure coding (input validation)
                  {/* <br></br>
                  * Encryption and hashing */}
                  {/* <br></br>
                  * Digital signatures and public key infrastructure */}
                  {/* <br></br>
                  * Identity and access management  */}
                  <br></br>
                  * AWS (Security Groups, Transit Gateways)
                  {/* <br></br>
                  * Network and mobile security (Ports, VPNs, MDM) */}
                  <br></br>
                  * Incident response (MITRE, Cyber Kill Chain)
                  <br></br>
                  * Compliance (ISO standards, SOC audits)
                  <br></br>
                  * Risk Management 
              </li>
              </ul>
              </small>
              {/* The small text here had className='text-light */}
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
              <h4>zSecurity Ethical Hacking Course</h4>
              <small>
              <ul>
              <li>Developed practical experience in:

                <br></br>
                * Network hacking (Packet sniffing, WPA cracking)
                <br></br>
                * ARP poisoning 
                <br></br>
                * Wireshark 
                <br></br>
                * Metasploit 
                {/* <br></br>
                * Email spoofing
                <br></br>
                * Remote file Inclusion */}
                <br></br>
                * SQL injections
                <br></br>
                * Cross site scripting
              </li>
              </ul>
              </small>
              {/* The small text here had className='text-light */}
            </div>
          </article>
        </div>
      </div>
      
    </div>
    </section>
    </>
  )
}

export default Experience