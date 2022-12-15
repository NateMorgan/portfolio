const AboutMe = (props) => {
  return ( 
    <main className='chat-main'>
      <div className="chat-container">
        <div className="chat">
          <div className="mine messages"> 
            <div className="message">
              I am a software developer focused on utilizing cutting edge technology to create innovative and efficient tools
            </div>
            <div className="message">
              My background is working in the insurance industry as an actuarial analyst and in the financial services as a registered professional
            </div>
            <div className="message">
              I hope to leverage my background in big data analytics to ease the communication gap between developers and business partners 
            </div>
            <div className="message">
              My core technology stack includes: React, SQL, MongoDB, Express, Node, Javascript, Python, and Jupyter Notebooks
            </div>
            <div className="message last">
              I am currently in pursuit of an AWS Certified Cloud Practicioner certificate as well as a full-time job
            </div>
          </div>
        </div>
      </div>
      <div className="img-container">
        <img className="headshot" src="./img/headshot2.png" alt="Headshot of Nathaniel Morgan"/>
      </div>
    </main>
  );
}

export default AboutMe;