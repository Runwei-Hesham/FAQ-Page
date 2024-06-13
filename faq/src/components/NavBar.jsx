import { Link } from "react-router-dom";
import "../css/styles.css";
import trustfundregistrylogo from "/Users/heshamsharafaldin/Desktop/FAQ-Page/faq/src/Gallery/TrustFundRegistryImages/Trustfundregistery-01.png";
function Navbar() {
  return (
    <nav className="nav">
      <div className="site-title">
        <img src={trustfundregistrylogo}></img>TrustFund  <i>Registry™</i>
      </div>
      <ul>
        <button>ABOUT US</button>
        <button>GIFTING</button>
        <button>LEARN</button>
        <button>HELP</button>
      </ul>
      <div className="auth-buttons">
        <button>LOGIN</button>
        <button className="btn-purple" style={{color: "white"}}>CREATE AN ACCOUNT</button>
      </div>
    </nav>
  );
}

export default Navbar;
