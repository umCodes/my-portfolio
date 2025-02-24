/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPerson } from "@fortawesome/free-solid-svg-icons"
import './Header.css'
import { useContext } from "react"
import { AppContext } from "../../App"
export default function Header ({ref, icon}){
    
    const navPoint = useContext(AppContext)
    



    return (
    <div className="header">
        <div className="logo">
            <FontAwesomeIcon icon={icon} />
        </div>
        <nav ref={ref}>
            <div id="about" className={"nav-btn " + navPoint}>About</div>
            <div id="projects" className={"nav-btn " + navPoint}>Projects</div>
            <div id="contact" className={"nav-btn " + navPoint}>Contact</div>
        </nav>
    
    </div>
    )
}