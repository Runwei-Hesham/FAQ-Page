import { Link } from "react-router-dom";
import "../css/styles.css";
function Navbar() {
  return (
    <nav className="nav">
      <div className="site-title">TrustFund Registry</div>
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
