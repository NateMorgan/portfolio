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
              My background is working in the insurance industry as an actuarial analyst, in the financial services as a registered professional and as a software developer for government focused SAAS company
            </div>
            <div className="message">
              I enjoy leveraging my background in big data analytics and financial industry to ease the communication gap between developers and business partners 
            </div>
            <div className="message">
              My core technology stack includes: React, SQL, MongoDB, Express, Node, Javascript, Python, Perl, and Jupyter Notebooks
            </div>
            <div className="message last">
              I currently have the AWS Certified Cloud Practicioner certificate, my Series 7, and around 3 months of work experience as a software developer
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