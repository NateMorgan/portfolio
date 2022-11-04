const Contact = (props) => {
  return ( 
    <main id="contacts">
      <div id="leftSideContact">
        <div className="logoPic"> 
          <a href="mailto:nathanielrmorgan@gmail.com">
            <img className="contact-img" src="/img/logos/Email.png" alt="Email"/>
          </a>
        </div>
        <div className="contactRef">
            <p> 
              <b>Email: </b>
              <a href="mailto:nathanielrmorgan@gmail.com">nathanielrmorgan@gmail.com</a> 
            </p>
        </div>
        <div className="logoPic">
          <a href="https://github.com/NateMorgan" target="_blank" rel="noreferrer">
            <img className="contact-img" src="/img/logos/github.svg" alt="Github"/>
          </a>
        </div>
        <div className="contactRef">
            <p>
              <b>Github: </b>
              <a href="https://github.com/NateMorgan" target="_blank" rel="noreferrer">https://github.com/NateMorgan</a>
            </p>
        </div>
        <div className="logoPic">
          <a href="https://www.linkedin.com/in/nathaniel-r-morgan/" target="_blank" rel="noreferrer">
            <img className="contact-img" src="/img/logos/linkedin.svg" alt="LinkedIn"/>
          </a>
        </div>
        <div className="contactRef">
            <p> 
              <b> LinkedIn: </b> 
              <a href="https://www.linkedin.com/in/nathaniel-r-morgan/" target="_blank" rel="noreferrer">https://www.linkedin.com/in/nathaniel-r-morgan/</a>
            </p>
        </div>
        <div className="logoPic">
          <a href="https://twitter.com/Nate_R_Morgan" target="_blank" rel="noreferrer">
            <img className="contact-img" src="/img/logos/twitter.svg" alt="Twitter"/>
          </a>
        </div>
        <div className="contactRef">
            <p> 
              <b> Twitter: </b> 
              <a href="https://twitter.com/Nate_R_Morgan" target="_blank" rel="noreferrer">https://twitter.com/Nate_R_Morgan</a>
            </p>
        </div>
      </div>
      <div id="rightSide">
          <img className="headshot" src="img/headshot2.jpg" alt="Headshot of Nathaniel Morgan"/>
      </div>

    </main>
   );
}
 
export default Contact;