const LandingPage = (props) => {
  return ( 
    
    <main className='chat-main'>
      <div className="chat-container">
        <div className="chat">
          <div className="mine messages"> 
            <div className="message">
              <h1>Welcome!</h1>
            </div>
            <div className="message last">
              <h1>Feel free to look around</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="img-container">
        <img className="headshot" src="./img/headshot2.jpg" alt="Headshot of Nathaniel Morgan"/>
      </div>
    </main>
   );
}
 
export default LandingPage;