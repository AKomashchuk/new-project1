import '../style/sectionProduct.css';
import target from '../image/target.png'
import credit from '../image/credit.png'
import coin from '../image/coin.png'
import man from '../image/man1.png';
import blur from '../image/graduate.svg';

function SectionProduct() {
  return (
    <section className="product-section">
      <div className="product-container">
        <div className="product-context">
          <h3 className="product-title">Um subtítulo para quem rolou até aqui!</h3>
          <p className='product-paragragh'>Aproveite esta seção para destacar os benefícios do seu produto ou serviço. Palavras-chave ajudam no SEO.</p>
        </div>
        <div className="product-cards">
          <div className="card card-target">
            <img src={target} alt="target.png" className="target"/>
            <h4 className="card-title">
              Rápido
            </h4>
            <p className="card-description">
            Aproveite esta seção para destacar os benefícios do seu produto ou serviço.
            </p>
          </div>

          <div className="card card-coin">
            <img src={coin} alt="coin.png" className="coin"/>
            <h4 className="card-title">
              Do seu jeito
            </h4>
            <p className="card-description">
              Aproveite esta seção para destacar os benefícios do seu produto ou serviço.
            </p>
          </div>

          <div className="card card-credit">
            <img src={credit} alt="credit.png" className="credit"/>
            <h4 className="card-title">
              Como você queria
            </h4>
            <p className="card-description">
              Aproveite esta seção para destacar os benefícios do seu produto ou serviço.
            </p>
          </div>

        </div>
        <div className="additional">
          <div className="edditional-content">
            <p className="hash">#contecomagente</p>
            <h2 className="additional-title">Simples, rápido e do seu jeito.</h2>
            <p className="additional-description">
              Mostre os valores da sua marca e como ela 
              pode fazer parte da vida do usuário que está lendo. 
              Gerar identificação é a chave para 
              <strong className="additional-strong-word"> conquistar seu cliente.</strong> 
            </p>
            <button className="button button-yellow">
              <a className="button-link" href="/">Eu quero!</a>
            </button>
          </div>
          <div className="additional-images">
            <img src={man} alt="man.svg" className="image-man"/>
            <img src={blur} alt="man.svg" className="image-blur"/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionProduct;