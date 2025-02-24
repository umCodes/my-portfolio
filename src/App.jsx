
import './App.css'
import Header from './components/Header/Header'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import React, { useEffect, useRef, useState } from 'react'
import { faEnvelope, faGears, faPerson } from '@fortawesome/free-solid-svg-icons'






export const AppContext = React.createContext();

function App() {

  
  const components = useRef();
  const nav = useRef();
  const [isScrolling, setIsScrolling] = useState(0);
  const [navPoint, setNavPoint] = useState('');
  const [icon, setIcon] = useState(faPerson)

  
  useEffect(() => {
    const [about, projects, contact] = nav.current.children;
    const [aboutC, projectsC, contactC] = components.current.children;

    about.addEventListener('click',() => aboutC.scrollIntoView({ behavior: "smooth"}))
    projects.addEventListener('click',() => projectsC.scrollIntoView({ behavior: "smooth"}))
    contact.addEventListener('click',() => contactC.scrollIntoView({ behavior: "smooth"}))

    const observer = new IntersectionObserver(entry =>{
      if(entry[0].isIntersecting){
        setNavPoint('show-' + entry[0].target.className);  
        
        switch(entry[0].target.className){
            case 'about': setIcon(faPerson)
            break;
            case 'projects': setIcon(faGears)
            break;
            case 'contact': setIcon(faEnvelope)
            break;
            
        }
      }
    }, {threshold: .1,})
  
    for(const c of components.current.children)
      observer.observe(c)

  }, [isScrolling])

  window.addEventListener('scroll', () => {
    setIsScrolling(window.scrollY)
  });
  


  return (
    <>
      <AppContext.Provider value={navPoint}>
      <Header ref={nav} icon={icon}/>
      </AppContext.Provider>
      <div ref={components} icon={icon} style={{overflowY: 'scroll', height: '100%'}}>          
        <About />
        <Projects  />
        <Contact />
      </div>
    </>
  )
}



export default App
