/* eslint-disable react/no-unescaped-entities */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCss3, faHtml5, faJava, faJs, faReact } from "@fortawesome/free-brands-svg-icons"
import './Hero.css'

export default function Hero(){

    return (
        <div className="hero">
            <div className="hero-text">
                <h1>Hey There, it's <u>Umer</u>!!</h1>
                <p>An ordinary CS student interested in software development.</p>
            </div>

            <div className="hero-skills">
                <span className="skills-icon"><FontAwesomeIcon icon={faReact} /></span>
                <span className="skills-icon"><FontAwesomeIcon icon={faJs} /></span>
                <span className="skills-icon"><FontAwesomeIcon icon={faCss3} /></span>
                <span className="skills-icon"><FontAwesomeIcon icon={faHtml5} /></span>
                <span className="skills-icon"><FontAwesomeIcon icon={faJava} /></span>
            </div>
        
        </div>
    )
}