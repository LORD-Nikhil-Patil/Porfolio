import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { AsideSection } from "./aside";
import Space from "./space";
import Profile from './profile';
import Projects from "./projects"
import Resume from "./resume";
import EmailContactForm from './mail'
import "./App.css"

function App() {

  function checkOrientation() {
    var winWidth = window.innerWidth;
    var winHeight = window.innerHeight;

    if (winHeight > winWidth) {
      document.body.style.width = winHeight + 'px';
      document.body.style.height = winWidth + 'px';
    } else {
      // Reset body dimensions to their original values if not in portrait mode
      document.body.style.width = 'auto';
      document.body.style.height = 'auto';
    }
  }

  useEffect(() => {
    checkOrientation();

  }, [])

  return (
    <>
      <div className='dashboard'>
        <div className='dashboard-top'>
          <div className='led-zone'>
            <span className='led-light'></span>
          </div>
          <div className='dashboard-display'>
            <p className='amatic-sc-regular'>Portfolio</p>
          </div>
        </div>
        <div className='container'>
          <AsideSection />
          <main>
            <div className='main-layout'>
              <div className='main-layout-inner'>
                <div className='main-wrapper' id='parent' >
                  <Space></Space>
                  <Routes>
                    <Route exact path="/" element={<Profile />} />
                    <Route path="/Projects" element={<Projects />} />
                    <Route path="/Resume" element={<Resume />} />
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
