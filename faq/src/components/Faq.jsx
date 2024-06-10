import "../css/faq.css";
function Faq() {
  return (
    <div className="items">
      <h1>Have questions?</h1>
      <p>We've got you covered.</p>
      <h2>Topics</h2>

      <div className="faqs">
        <ul>
          <li>Setting Up A Child’s Trust Fund</li>
          <li>Sending Gifts to Trust Funds</li>
          <li>Managing Personal Account</li>
          <li>Account Security </li>
          <li>Sharing with Others</li>
          <li>Tax Information</li>
        </ul>
        <ul>
          <li>What Exactly Is A 529 Savings Plan?</li>
          <li>What Are The Benefits Associated With A 529 Account?</li>
          <li>What Can My Savings Be Spent On?</li>
          <li>What Is The Difference Between 529 And UTMA?</li>
          <li>How Much Can I Contribute?</li>
          <li>How Do I Transfer A 529 Account To Trust Fund Registry? </li>
        </ul>
      </div>
      <div className="center">
        <h1>Check the fine print.</h1>
      </div>
      <div className="center">
        <div className="rectangle"></div>
        <div className="rectangle"></div>
        <div className="rectangle"></div>
      </div>
    </div>
  );
}

export default Faq;
