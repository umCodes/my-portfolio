/* eslint-disable react/prop-types */
import './Contact.css'
import Form from './Form/Form'





export default function Contact({ref}){


    return(
    <div className='contact' ref={ref}>
        <Form />
    
    </div>)
}