/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAt } from '@fortawesome/free-solid-svg-icons'
import './Form.css'
import { useState } from 'react'
import emailjs from '@emailjs/browser'



    





export default function Form(){
    const [mail, setMail] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    })


    const handleEmail = e => {
        
            e.preventDefault();

            if(mail.name && mail.message && mail.email)
            emailjs.send('service_agdhf6a', 'template_zmt1dyx', mail,  {
                publicKey: 'mSXNk7vyNHJsD7Kqj',
              }).then(
                function (response) {
                console.log('SUCCESS!', response.status, response.text);
                },
                function (err) {
                console.log('FAILED...', err);
                },)
            
    }

   
    

    return (
        <div className='form'>
            <form>
                <h2>Let's Get in Touch</h2>
                
                <div className="form-element">
                    <label htmlFor="name">Name: </label>
                    <input type="text" id='name' value={mail.name} onChange={(e) => setMail({...mail, name: event.target.value})}/>
                </div>

                <div className="form-element">
                    <label htmlFor="email">Email: </label>
                    <input type="text" id='email' value={mail.email} onChange={(e) => setMail({...mail, email: event.target.value})}/>
                </div>

                <div className="form-element">
                    <label htmlFor="subject">Subject: </label>
                    <input type="text" id='subject' value={mail.subject} onChange={(e) => setMail({...mail, subject: event.target.value})}/>
                </div>

                <div className="form-element">
                    <label htmlFor="message">Message: </label>
                    <textarea id="message" cols="30" rows="10" value={mail.message} onChange={(e) => setMail({...mail, message: event.target.value})}></textarea>
                </div>

                <div className="form-element sm">
                    <div className="social-media">
                        <a href='https://github.com/umCodes'><FontAwesomeIcon icon={faGithub}/></a>
                        <a href='https://www.linkedin.com/in/umer-mohammed-a47573339/'><FontAwesomeIcon icon={faLinkedin}/></a>
                        <a href='mailto:umohammed.official@gmail.com'><FontAwesomeIcon icon={faAt}/></a>
                    </div>
                    <button onClick={handleEmail}>Submit</button>
                </div>
            </form>
        </div>
    )
}
