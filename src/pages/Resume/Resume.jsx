const Resume = (props) => {
  return ( 
    <main>
      <embed 
        type="application/pdf" 
        src="/resume.pdf"
        height="95%"
        width="80%"
        />
      <br />
      <button>Download Resume</button>
    </main>
   );
}
 
export default Resume;