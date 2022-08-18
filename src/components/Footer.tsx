import instagram from '../image/inst-footer.svg'
import facebook from '../image/face-footer.svg'
import logo from '../image/logo-footer.svg'
import '../style/footer.css';

function Footer() {
  return (
    <footer className="footer-page">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="logo-page" />
        </div>
        <div className="questions">
          <a href="/" className="question question-footer">o que fazemos</a>
          <a href="/" className="question question-footer">como te ajudamos</a>
          <a href="/" className="question question-footer">fale conosco</a>
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
      <div className="email-container">
        <div className="email">
          <p className="email-text">Receba as novidades do nice</p>
          <input type="email" placeholder="nome@email.com" className="input-email"/>
          <button className="email-button">
            <a href="/" className="email-button">Inscrever</a>
          </button>
        </div>
      </div>
      <div className="sign-container">
        <p className="sign-text">Nice template by @lopesluiza on Figma - 2021</p>
      </div>
    </footer>
  )
}

export default Footer;