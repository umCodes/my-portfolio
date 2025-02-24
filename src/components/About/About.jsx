/* eslint-disable react/prop-types */
import './About.css'
import Background from './Background/Background'
import Hero from './Hero/Hero'


export default function About({ref}){



    return(
        <div className="about" ref={ref}>
            <Hero />
            <Background 
                title="Education"
                backgrounds={[
                    {id: 1, subInfo: 'September 2023 - Expected Graduation July 2027', Info: 'Arab Open University Bachelor’s in computing with business'},
                ]}
            />

            <Background 
                title="Certifications"
                backgrounds={[
                    {id: 1, subInfo: 'April 24 2024', Info: 'FreeCodeCamp JavaScript Algorithms and Data Structure (Beta), Developer Certification'},
                    {id: 2, subInfo: 'November 21 2024', Info: 'AOU AI Club WebChamps Web Development Bootcamp, Certificate of completion'}
                ]}
            />
            <Background 
                title="Skills"
                backgrounds={[
                    {id: 1,subInfo: 'Programming Languages', Info: 'JavaScript, Java'},
                    {id: 2, subInfo: 'Web Development and Design', Info: 'HTML, CSS, JavaScript, React, Adobe XD'},
                    {id: 3, subInfo: 'Soft Skills', Info: 'Adaptability, Teamwork, Communication'}
                ]}
            />
            
        </div>
    )
}