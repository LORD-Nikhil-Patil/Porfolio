import React from "react";
import { useNavigate } from 'react-router-dom';

import admin from "../src/assets/admin0.png"
import project from "../src/assets/project1.png"
import resume1 from "../src/assets/resume1.png"
import mail from "../src/assets/mail.png"
import github from "../src/assets/github.png"
import social from "../src/assets/social.png"

export const AsideSection = () => {

 const navigate = useNavigate();

 const handlegit = () =>{
    window.location.href = 'https://github.com/LORD-Nikhil-Patil';
 }

 const handleLinkedIn = () => {
    window.location.href = 'https://www.linkedin.com/in/nikhil-patil-a86294284/'
 }

 const handleRoute = (path) =>{
    navigate(path)

 } 

    return (<aside>
        <p className='amatic-sc-regular'>Welcome</p>
        <div className='control-panel'>
            <div className='control-panel-inner'>
                <button className='action-btn' onClick={() => handleRoute("/")}>
                    <img src={admin} alt="image" />
                    <p className='amatic-sc-regular'>Profile</p>
                </button>
                <button className='action-btn' onClick={() => handleRoute("/Projects")}>
                    <img src={project} alt="image" />
                    <p className='amatic-sc-regular'>Project</p>
                </button>
                <button className='action-btn' onClick={() => handleRoute("/Resume")}>
                    <img src={resume1} alt="image" />
                    <p className='amatic-sc-regular'>Resume</p>
                </button>
                <hr />
                <button className='drama-btn' onClick={() => handleRoute("/Email")}>
                    <img src={mail} alt="image" />
                    <p className='amatic-sc-regular'>Mail</p>
                </button>
                <button className='drama-btn' onClick={handlegit}>
                    <img src={github} alt="image" />
                    <p className='amatic-sc-regular'>Github</p>
                </button>
                <button className='drama-btn' onClick={handleLinkedIn}>
                    <img src={social} alt="image" />
                    <p className='amatic-sc-regular'>social</p>
                </button>
            </div>
        </div>
    </aside>)
}

