import "../css/faq.css";
import logo from "../Gallery/Social media logos/image.png";
import sipc from "../Gallery/SIPC/image-Photoroom.png";
import fidelity from "../Gallery/companies/fidelity.png";
import blackrock from "../Gallery/companies/BlackRock.png";
import jpmorgan from "../Gallery/companies/Jpmorgan.png";
import background from "../Gallery/backgroundimages/background-ai-brush-removebg-xc4tv3hi.png";
import chatlogo from "../Gallery/chatlogo/image.png";
function Faq() {
  return (
    <div className=".center-column">
      <div className="center-padding">
        <div className="faq-text">
          <h1>Have questions?</h1>
          <h1>We've got you covered.</h1>
        </div>
        <div className="faqs">
          <ul>
            <h2>Topics</h2>
            <p>Setting Up A Child’s Trust Fund</p>
            <p>Sending Gifts to Trust Funds</p>
            <p>Managing Personal Account</p>
            <p>Account Security </p>
            <p>Sharing with Others</p>
            <p>Tax Information</p>
          </ul>
          <ul>
            <p>What Exactly Is A 529 Savings Plan?</p>
            <p>What Are The Benefits Associated With A 529 Account?</p>
            <p>What Can My Savings Be Spent On?</p>
            <p>What Is The Difference Between 529 And UTMA?</p>
            <p>How Much Can I Contribute?</p>
            <p>How Do I Transfer A 529 Account To Trust Fund Registry? </p>
          </ul>
        </div>
        <div className="center">
          <h1>Check the fine print.</h1>
        </div>
        <div className="center-rectangles">
          <div className="rectangle">
            <h2>Privacy Policies</h2>
            <div className="white-rectangle">
              <h4>Trust Fund Registry Privacy Policy</h4>
              <p>
                This discloses our privacy practices for personal information we
                collect when you use or access our products, services, features,
                or content.
              </p>
              <button className="white-button">Download PDF</button>
              <button className="purple-button">Read Article</button>
            </div>
            <div className="white-rectangle">
              <h4>Trust Fund Registry Privacy Policy</h4>
              <p>
                This discloses our privacy practices for personal information we
                collect when you use or access our products, services, features,
                or content.
              </p>
              <button className="white-button">Download PDF</button>
              <button className="purple-button">Read Article</button>
            </div>
            <div className="white-rectangle">
              <h4>Trust Fund Registry Privacy Policy</h4>
              <p>
                This discloses our privacy practices for personal information we
                collect when you use or access our products, services, features,
                or content.
              </p>
              <button className="white-button">Download PDF</button>
              <button className="purple-button">Read Article</button>
            </div>
          </div>
          <div className="rectangle">
            <h2>Regulatory Compliance</h2>
            <div className="white-rectangle">
              <h4>Trust Fund Registry GLBA Notice 2</h4>
              <p>
                This explains our information-sharing practices and how we
                safeguard sensitive data.
              </p>
              <button className="white-button">Download PDF</button>
              <button className="purple-button">Read Article</button>
            </div>
            <div className="white-rectangle">
              <h4>Trust Fund Registry GLBA Notice 2</h4>
              <p>
                This explains our information-sharing practices and how we
                safeguard sensitive data.
              </p>
              <button className="white-button">Download PDF</button>
              <button className="purple-button">Read Article</button>
            </div>
            <div className="white-rectangle">
              <h4>Trust Fund Registry GLBA Notice 2</h4>
              <p>
                This explains our information-sharing practices and how we
                safeguard sensitive data.
              </p>
              <button className="white-button">Download PDF</button>
              <button className="purple-button">Read Article</button>
            </div>
          </div>
          <div className="rectangle">
            <h2>Terms and Conditions</h2>
            <div className="white-rectangle">
              <h4>Trust Fund Registry Terms of Service</h4>
              <p>
                These Account Terms of Service (“TOS”) are a legally binding
                agreement between you, Trust Fund Registry and our financial
                institution partners.
              </p>
              <button className="white-button">Download PDF</button>
              <button className="purple-button">Read Article</button>
            </div>
            <div className="white-rectangle">
              <h4>Trust Fund Registry Terms of Service</h4>
              <p>
                These Account Terms of Service (“TOS”) are a legally binding
                agreement between you, Trust Fund Registry and our financial
                institution partners.
              </p>
              <button className="white-button">Download PDF</button>
              <button className="purple-button">Read Article</button>
            </div>
            <div className="white-rectangle">
              <h4>Trust Fund Registry Terms of Service</h4>
              <p>
                These Account Terms of Service (“TOS”) are a legally binding
                agreement between you, Trust Fund Registry and our financial
                institution partners.
              </p>
              <button className="white-button">Download PDF</button>
              <button className="purple-button">Read Article</button>
            </div>
          </div>
        </div>

        <div className="center margin1">
          <h1 style={{ margin: 0,fontSize: "50px" }}>
            20,000+ families and children <br /> are investing with us.
          </h1>
        </div>

        <div className="center">
          <div className="center-column">
            <p style={{ margin: 0, textAlign: "center", fontSize: "36px" }}>
              We’ve partnered with <br /> the most trusted financial services.{" "}
            </p>

            <div className="company-images">
              <img src={fidelity}></img>
              <img src={blackrock}></img>
              <img src={jpmorgan}></img>
            </div>
          </div>
          <div className="center-column">
            <p>Every account-holder is</p>
            <img src={sipc} width="194px" height=""></img>
            <p>protected up to $250,000.</p>
          </div>
        </div>
        <div className="center-right">
          <img src={chatlogo}></img>
          <h3>More Questions?</h3>
        </div>
      </div>
      <div className="background-container">
        {" "}
        <img src={background}></img>
      </div>
      <div className="footer">
        <div className="footer-items">
          <ul>
            <p>About us</p>
            <p>Gifting</p>
            <p>Help Center</p>
          </ul>
          <ul>
            <h4>TrustFund Registry™</h4>
          </ul>
          <ul>
            <p>Education</p>
            <p>Security</p>
            <p>Contact Us</p>
          </ul>
        </div>
        <div className="divider"></div>
        <div className="center-column">
          <div className="image-container">
            <img src={logo} alt="Social media links"></img>
          </div>
          <p>© 2010 — 2023 Privacy — Terms</p>
          <p>
            TrustFundRegistry is the tradename of TrustFundRegistry LLC, an
            SEC-registered investment adviser. Our internet-based investment
            advisory services are designed to assist clients in saving for
            college and are not intended to provide comprehensive tax advice or
            financial planning. Our services are available to U.S. residents
            only. This website shall not be considered a solicitation or
            offering for any service or product to any person in any
            jurisdiction where such solicitation or offer would be unlawful.
          </p>
          <p>
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
  );
}

export default Faq;
