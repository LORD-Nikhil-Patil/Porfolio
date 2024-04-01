import "./resumeStyles.css";
import vent from "../assets/vent.png"
import resume from "../assets/resume.pdf"
const Resume = () => {

    const handleDownload = () => {
        const resumePath = resume;
        
        const link = document.createElement('a');
        link.href = resumePath;
        
        link.download = 'resume.pdf';
        
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };

 return (<div className="resume" onClick={handleDownload}>
    <img src={vent} alt="image"/>
    <span className="amatic-sc-regular">Download resume</span>
 </div>)
}


export default Resume;