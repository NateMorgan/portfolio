import './Contact.css'

const Contact = (props) => {
  return ( 
    <main id="contacts">
      <div id="leftSideContact">
        <div className="logoPic"> 
            <img src="/img/logos/Email.png" alt="Email"/>
        </div>
        <div className="contactRef">
            <p> <b>Email: </b>nathanielrmorgan@gmail.com </p>
        </div>
        <div className="logoPic">
            <img src="/img/logos/GitHub.png" alt="Github"/>
        </div>
        <div className="contactRef">
            <p><b>Github: </b>https://github.com/NateMorgan</p>
        </div>
        <div className="logoPic">
            <img src="/img/logos/LinkedIn.png" alt="LinkedIn"/>
        </div>
        <div className="contactRef">
            <p> <b> LinkedIn: </b> INSERT LINKEDIN URL HERE</p>
        </div>
        <div className="logoPic">
            <img src="/img/logos/Twitter.png" alt="Twitter"/>
        </div>
        <div className="contactRef">
            <p> <b> Twitter: </b> INSERT TWITTER URL HERE</p>
        </div>
        {/* <div className="logoPic">
            <img src="/img/logos/Youtube.png" alt="YouTube"/>
        </div>
        <div className="contactRef">
            <p> <b> YouTube: </b> INSERT YOUTUBE URL HERE</p>
        </div> */}
      </div>
      <div id="rightSide">
          <img src="img/headshot2.jpg" alt="Headshot of Nathaniel Morgan"/>
      </div>

    </main>
   );
}
 
export default Contact;