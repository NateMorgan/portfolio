import './AboutMe.css'

const AboutMe = (props) => {
  return ( 
    <main>
      <div className="message">
        <h1>I am a software developer focused on creating innovative tools for the financial services industry</h1>
      </div>
      <div className="message">
        <h1> I have worked in the P&C Insurance Industry as an actuarial analyst, as well as recently acquired my Series 7 to begin working as a Registered Representative</h1>
      </div>
      <div className="message">
        <h1> My core technology stack includes: React, SQL, MongoDB, Express, Node, Javascript, Python, and Jupyter Notebooks</h1>
      </div>
      <div className="message">
        <h1> I am currently in pursuit of an AWS Certified Cloud Practicioner certificate </h1>
      </div>
      <img src="./img/headshot2.jpg" alt="Headshot of Nathaniel Morgan"/>
    </main>
   );
}
 
export default AboutMe;