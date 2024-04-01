import muffind from "../assets/muffind.png"
import eventgreen from "../assets/eventgreen.png"
import spirri from "../assets/spirrie.png"


import './projectStyles.css'
const Projects = () =>{


    return(<div className="projects">
      <a className="project" href="https://muffin-d.com/">
        <img src={muffind} alt="img" />
        <p className="amatic-sc-regular">Muffin design</p>
      </a>
      <a className="project" href="https://www.evergreenclub.in/">
        <img src={eventgreen} alt="img" />
        <p className="amatic-sc-regular">EventGreen Club</p>
      </a>
       <a className="project" href="https://spirri.com/">
        <img src={spirri} alt="img" />
        <p className="amatic-sc-regular">Spirri</p>
      </a>
    </div>)
}


export default Projects;