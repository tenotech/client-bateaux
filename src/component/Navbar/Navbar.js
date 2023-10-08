import "./NavbarStyle.css";
import myLogo from '../../img/logo.png';
import { Link } from "react-router-dom";


const Navbar = ({ user }) => {
  const logout = () => {
    window.open("https://bateaux.onrender.com/auth/logout", "_self");
  }
    return (
      <div className="navbar">
        <nav className="NavbarItems">
          <div className="logo">
            <Link className="link" to="/">
              <img src={myLogo} alt="Logo" className="logo-image"></img>
            </Link>
          </div>
          { user ? (
            <div className="navbar-right">
              <div className="navbar-user">
                <img className="avatar" src={user.photos[0].value} alt="photo"></img>
                <div className="navbar-username">{user.displayName}</div>
              </div>
              <div className="navbar-logout" onClick={logout}>
                Logout
              </div>
            </div>
            ) : (
            <div className="hamburger-menu" >
              <i
                className="fas fa-sign-in-alt"
              ></i>
            </div>
          )}
        </nav>
      </div>
    );
}
export default Navbar;
