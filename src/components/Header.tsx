import instagram from '../image/instagram.svg'
import facebook from '../image/facebook.svg'
import logo from '../image/logo.svg'
import '../style/header.css';

function Header() {
  console.log('instagram', instagram);
  
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="logo-page" />
        </div>
        <div className="questions">
          <a href="/" className="question">o que fazemos</a>
          <a href="/" className="question">como te ajudamos</a>
          <a href="/" className="question">fale conosco</a>
        </div>
        <div className="social-networks">
          <a 
            href="https://www.facebook.com/groups/693403427997061" 
            className="media instagram"
            target="_blank" 
            rel="noreferrer"
          >
            <img src={instagram} alt="logo-instagram" />
          </a>
          <a 
            href="https://www.instagram.com/amazon/" 
            className="media facebook"
            target="_blank" 
            rel="noreferrer"
          >
            <img src={facebook} alt="logo-facebook" />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;