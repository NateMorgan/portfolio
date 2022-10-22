import { NavLink } from "react-router-dom";

const NavBar = (props) => {
  return ( 
    <nav>
      <NavLink to='/about-me'> <h5> About Me</h5> </NavLink>
      <NavLink to='/projects'> <h5> Projects</h5> </NavLink>
      <NavLink to='/resume'> <h5> Resume</h5> </NavLink>
      <NavLink to='/contact'> <h5> Contact Me</h5> </NavLink>
    </nav>
   );
}
 
export default NavBar;