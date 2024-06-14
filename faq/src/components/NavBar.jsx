//import { Link } from "react-router-dom";
import "../css/styles.css";
import tfr from '../Gallery/tfr.png';
function Navbar() {
  return (
    <nav className="nav">
      <div className="site-title"> <a href ="/lin"><img src={tfr} alt="Logo" className="logo" /></a>
      <a href = "/tfr">TrustFundRegistry™</a></div>
      <ul>
        <li>ABOUT US</li>
        <li>GIFTING</li>
        <li>LEARN</li>
        <li>HELP</li>
      </ul>

      <ul>
        <li>LOGIN</li>
        <li>
          <button className="btn-purple">CREATE AN ACCOUNT</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
