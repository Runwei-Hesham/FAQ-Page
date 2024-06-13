import "../css/faq.css";
import fb from "../Gallery/Social media logos/Facebook.png";
import ins from "../Gallery/Social media logos/Instgram Circled.png";
import li from "../Gallery/Social media logos/LinkedIn Circled.png";
import tw from "../Gallery/Social media logos/Twitter Circled.png";
import background from "../Gallery/backgroundimages/background-ai-brush-removebg-xc4tv3hi.png";
function Faq() {
  return (
    <div className=".center-column">
      <div className="background-container">
        {" "}
        <img src={background}></img>
      </div>
      <div className="footer">
        <div className="footer-items">
          <ul>
          <a href = "/aboutus">About Us</a> 
          <a href = "/gifting">Gifting</a>
          <a href = "/help">Help Center</a>  
          </ul>
          <ul>
          <a href>
        <span>TrustFund</span>
        <span>Registry<sup>™</sup></span>
        </a> 
          </ul>
          <ul>
          <a href = "/ed">Education</a>    
            <a href = "/sec">Security</a>
            <a href = "/contact">Contact Us</a>
          </ul>
        </div>
        <div className="divider"></div>
        <div className="center-column">
          <div className="pictureSocial">
          <div className="backgroundcolor">
          <div className="socialIcons">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <img src={fb} alt="Facebook" className="picture2" />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <img src={tw} alt="Twitter" className="picture2" />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <img src={li} alt="LinkedIn" className="picture2" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <img src={ins} alt="Instagram" className="picture2" />
        </a>
        </div>
        </div>
          </div>
          <p>© 2010 — 2023 Privacy — Terms</p>
          <div className="footerText">
          <p style={{fontFamily: 'Poppins, sans-serif'}}>
            TrustFundRegistry is the tradename of TrustFundRegistry LLC, an
            SEC-registered investment adviser. Our internet-based investment
            advisory services are designed to assist clients in saving for
            college and are not intended to provide comprehensive tax advice or
            financial planning. Our services are available to U.S. residents
            only. This website shall not be considered a solicitation or
            offering for any service or product to any person in any
            jurisdiction where such solicitation or offer would be unlawful.
          </p>
          <p style={{fontFamily: 'Poppins, sans-serif'}}>
            Investing in securities involves risks, and investing in 529 plans
            in particular involves certain tax considerations and related risks.
            Any investments you make in a 529 plan through TrustFundRegistry may
            lose value. Historical returns, expected returns, and probability
            projections are provided for informational and illustrative
            purposes, and may not reflect actual future performance. Our savings
            calculator and pricing comparison are hypothetical tools provided
            for illustrative purposes only and are based on important
            assumptions described here.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Faq;
