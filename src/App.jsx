import { useEffect } from 'react';
import { Routes, Route } from "react-router-dom"
import { AsideSection } from "./aside";
import Space from "./space";
import Profile from './profile';
import Projects from "./projects"
import Resume from "./resume";
import EmailContactForm from './mail'
import "./App.css"



function App() {


  return (
    <>
      <div className='dashboard'>
        <div className='dashboard-top'>
          <div className='led-zone'>
            <span className='led-light'></span>
          </div>
          <div className='dashboard-display'>
            <p className='amatic-sc-regular'>Friends</p>
          </div>
        </div>
        <div className='container'>
          <AsideSection />
          <main>
            <div className='control-panel'>
              <div className='control-panel-inner'>
                <div className='main-wrapper' id='parent' >
                  <Space></Space>
                  <Routes>
                    <Route exact path="/" element={<Profile />} />
                    <Route path="/Projects" element={<Projects />} />
                    <Route path="/Resume" element={<Resume/>} />
                    <Route path="/Email" element={<EmailContactForm />} />
                  </Routes>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}

export default App
