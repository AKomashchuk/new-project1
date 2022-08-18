import '../style/sectionAbout.css';
import businessman from '../image/businessman.png';

function SectionAbout() {
  return (
    <section className="about">
      <div className="about-container">
        <div className="about-content">
          <h1 className="title">Um slogan chamativo aqui.</h1>
          <h2 className='descriotion'>
            Um texto sobre o seu produto ou serviço. 
            Explique <strong className="strong-words">porque ele é valioso</strong> e direcione o usuário ao próximo objetivo.
          </h2>
          <div className="buttons">
            <button className="button button-yellow">
              <a href="/" className="button-link">Eu quero!</a>
            </button>
            <button className="button button-normal">
              <a href="/" className="button-link">Conhecer mais</a>
            </button>
          </div>
        </div>
        <div className="about-image">
          <img src={businessman} alt="burger-man.png" className="burger-man-image"/>
        </div>
      </div>
    </section>
  )
}

export default SectionAbout;