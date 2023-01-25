import bs from './battleship-snap.png'
import tm from './team-manager-snap.png'
import tot from './tot-snap.png'
import cc from './coin-collector-snap.png'
import sw from './starwars-info.png'
import phone from './react-phonebook.png'

// Images are 900 by 556 or 1800 by 1112

const Projects = (props) => {
  return ( 
    <main>
      <h1>Projects </h1>
      <div className="row row-cols-1 row-cols-md-3 g-4 m-4">
        <div className="col-sm-6">
          <div className="card">
            <img src={tot} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title"> Taste of TikTok</h5>
              <p className="card-text"><b>Tech Used:</b> React, MongoDB, Express, Node</p>
              <p className="card-text"><b>Info:</b> Application designed to make and explore local restaurants based off of TikTok restaurant reviews</p>
              <a href="https://tots-hot-tots.netlify.app/" target="_blank" rel="noreferrer"> <p className='btn btn-primary m-1'> Vist Application</p></a>
              <a href="https://github.com/dabyzness/tot-front-end" target="_blank" rel="noreferrer"><p className='btn btn-primary m-1'>Visit Project GitHub</p></a>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card">
          <img src={tm} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Team Manager</h5>
              <p className="card-text"><b>Tech Used:</b> MongoDB, Express, Node, Javascript, Bootstrap </p>
              <p className="card-text"><b>Info:</b> Application designed to make managing a team easier</p>
              <a href="https://rec-team-manager.fly.dev/" target="_blank" rel="noreferrer"> <p className='btn btn-primary m-1'> Vist Application</p></a>
              <a href="https://github.com/NateMorgan/team-manager" target="_blank" rel="noreferrer"><p className='btn btn-primary m-1'>Visit Project GitHub</p></a>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card">
            <img src={sw} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title"> Star Wars Info </h5>
              <p className="card-text"><b>Tech Used:</b> React, Express, Node, RESTful APIs</p>
              <p className="card-text"><b>Info:</b> Application designed to view starship information from an external API</p>
              <a href="https://starwars-inform.netlify.app/" target="_blank" rel="noreferrer"> <p className='btn btn-primary m-1'> Vist Application</p></a>
              <a href="https://github.com/NateMorgan/react-swapi" target="_blank" rel="noreferrer"><p className='btn btn-primary m-1'>Visit Project GitHub</p></a>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card">
            <img src={cc} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title"> Collect Coins </h5>
              <p className="card-text"><b>Tech Used:</b> Django, PostgreSQL, Python</p>
              <p className="card-text"><b>Info:</b> Application designed to make organizing collections of coins easier to manage</p>
              <a href="https://collect-coins.herokuapp.com/" target="_blank" rel="noreferrer"> <p className='btn btn-primary m-1'> Vist Application</p></a>
              <a href="https://github.com/NateMorgan/coin-collector" target="_blank" rel="noreferrer"><p className='btn btn-primary m-1'>Visit Project GitHub</p></a>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card">
            <img src={phone} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title"> React Phonebook</h5>
              <p className="card-text"><b>Tech Used:</b> React </p>
              <p className="card-text"><b>Info:</b> Simple application UI for saving and searching for contacts written in React</p>
              <a href="http://phonebook.nate-morgan.com/" target="_blank" rel="noreferrer"> <p className='btn btn-primary m-1'> Vist Application</p></a>
              <a href="https://github.com/NateMorgan/phonebook-react" target="_blank" rel="noreferrer"><p className='btn btn-primary m-1'>Visit Project GitHub</p></a>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card">
          <img src={bs} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">BATTLESHIP</h5>
              <p className="card-text"><b>Tech Used:</b> Javascript, Bootstrap, CSS, HTML</p>
              <p className="card-text"><b>Info:</b> Classic Battleship game coded in Vanilla Javascript</p>
              <a href="http://battleship.nate-morgan.com" target="_blank" rel="noreferrer"> <p className='btn btn-primary m-1'> Vist Application</p></a>
              <a href="https://github.com/NateMorgan/battleship" target="_blank" rel="noreferrer"><p className='btn btn-primary m-1'>Visit Project GitHub</p></a>
            </div>
          </div>
        </div>
      </div>
    </main>
   );
}
 
export default Projects;