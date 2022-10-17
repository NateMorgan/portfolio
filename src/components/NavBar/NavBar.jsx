import { Link } from "react-router-dom";

const NavBar = (props) => {
  return ( 
    <nav>
      <Link to='/about-me'> <h5> About Me</h5> </Link>
      <Link to='/projects'> <h5> Projects</h5> </Link>
      <Link to='/resume'> <h5> Resume</h5> </Link>
      <Link to='/contact'> <h5> Contact</h5> </Link>
    </nav>
   );
}
 
export default NavBar;