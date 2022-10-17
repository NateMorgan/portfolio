import './Resume.css'

const Resume = (props) => {
  return ( 
    <main>
      <embed 
        type="application/pdf" 
        src="/resume.pdf"
        height="92%"
        width="80%"
        />
      <div className="buttonDiv">
        <button>Download Resume</button>
      </div>
    </main>
   );
}
 
export default Resume;