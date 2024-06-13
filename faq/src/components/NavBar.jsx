import { Link } from "react-router-dom";
import "../css/styles.css";
import trustfundregistrylogo from "/Users/heshamsharafaldin/Desktop/FAQ-Page/faq/src/Gallery/TrustFundRegistryImages/Trustfundregistery-01.png";
function Navbar() {
  return (
    <nav className="nav">
      <div className="site-title">
        <img src={trustfundregistrylogo}></img>TrustFundRegistry™
      </div>
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
