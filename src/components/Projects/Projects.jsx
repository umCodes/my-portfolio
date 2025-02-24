import './Projects.css'
import Project from './Project/Project'

export default function Projects({ref}){

    return(
        <div className='projects' ref={ref}>
            <Project
                screen="mobile"
                link="https://umcodes.github.io/mobile-invoicing-app/"
                title="Invoice Manager (HTML/CSS/JS)"
                text="A simple invoincing mobile web app that handles the documentation of invoices, expenses and payments for small businesses."                
                github="https://github.com/umCodes/mobile-invoicing-app"
            />  

            <Project
                screen="calculator"
                link="https://umcodes.github.io/simple-calculator/"
                title="Math Slayer 3000 (HTML/CSS/JS)"
                text="This simple calculator app handles the heavy lifting of basic math—addition, subtraction, multiplication, and division. Whether you’re splitting the bills, crunching numbers, or just showing off your arithmetic skills, this app keeps it easy. No fancy graphs, no scientific jargon—just good old math without the headache."
                github="https://github.com/umCodes/simple-calculator"
            />
        </div>
    )
}