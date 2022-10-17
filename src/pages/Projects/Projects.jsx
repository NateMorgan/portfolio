const Projects = (props) => {
  return ( 
    <main>
      <h1>My Favorite Projects</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4 m-4">
        <div className="col-sm-6">
          <div className="card">
            <img src="./img/messagebackground.png" class="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title"> Taste of TikTok</h5>
              <p className="card-text"><b>Tech Used:</b> React, MongoDB, Express, Node</p>
              <p className="card-text"><b>Info:</b> Application designed to make restaurant tours based off of TikTok restaurant review videos</p>
              <p className='btn btn-primary m-1'>Vist Application</p>
              <p className='btn btn-primary m-1'>Visit Project GitHub</p>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card">
          <img src="./img/messagebackground.png" class="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Team Manager</h5>
              <p className="card-text"><b>Tech Used:</b> MongoDB, Express, Node, Javascript, Bootstrap </p>
              <p className="card-text"><b>Info:</b> Application designed to make managing a team easier</p>
              <p className='btn btn-primary m-1'>Vist Application</p>
              <p className='btn btn-primary m-1'>Visit Project GitHub</p>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card">
          <img src="./img/messagebackground.png" class="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">BATTLESHIP</h5>
              <p className="card-text"><b>Tech Used:</b> Javascript, Bootstrap, CSS, HTML</p>
              <p className="card-text"><b>Info:</b> Classic Battleship game coded in Vanilla Javascript</p>
              <p className='btn btn-primary m-1'>Vist Application</p>
              <p className='btn btn-primary m-1'>Visit Project GitHub</p>
            </div>
          </div>
        </div>
      </div>
    </main>
   );
}
 
export default Projects;