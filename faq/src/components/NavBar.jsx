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
        <button>ABOUT US</button>
        <button>GIFTING</button>
        <button>LEARN</button>
        <button>HELP</button>
      </ul>
      <div className="auth-buttons">
        <button>LOGIN</button>
        <button style={{color: "white", background: "#631B77"}}>CREATE AN ACCOUNT</button>
      </div>
    </nav>
  );
}

export default Navbar;
