import './Project.css'

export default function Project({screen, link, title, text, github}){

    return(
        <div className='project'>
            <iframe src={link}  className={screen}></iframe>
            <blockquote>
            <a href={link}><h2>{title}</h2></a>
            <p>{text}<a href={github}>GitHub Repo</a></p>
            
            </blockquote>

        </div>
    )
}