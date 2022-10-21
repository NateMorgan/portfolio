import bs from './battleship-snap.png'
import tm from './team-manager-snap.png'
import wip from './wip.jpeg'

const Projects = (props) => {
  return ( 
    <main>
      <h1>Projects </h1>
      <div className="row row-cols-1 row-cols-md-3 g-4 m-4">
        <div className="col-sm-6">
          <div className="card">
            <img src={wip} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title"> Taste of TikTok</h5>
              <p className="card-text"><b>Tech Used:</b> React, MongoDB, Express, Node</p>
              <p className="card-text"><b>Info:</b> Application designed to make and explore local restaurants based off of TikTok restaurant review videos</p>
              <p className='btn btn-primary m-1'>Vist Application</p>
              <p className='btn btn-primary m-1'>Visit Project GitHub</p>
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
          <img src={bs} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">BATTLESHIP</h5>
              <p className="card-text"><b>Tech Used:</b> Javascript, Bootstrap, CSS, HTML</p>
              <p className="card-text"><b>Info:</b> Classic Battleship game coded in Vanilla Javascript</p>
              <a href="https://play-battleship.netlify.app/" target="_blank" rel="noreferrer"> <p className='btn btn-primary m-1'> Vist Application</p></a>
              <a href="https://github.com/NateMorgan/battleship" target="_blank" rel="noreferrer"><p className='btn btn-primary m-1'>Visit Project GitHub</p></a>
            </div>
          </div>
        </div>
      </div>
    </main>
   );
}
 
export default Projects;