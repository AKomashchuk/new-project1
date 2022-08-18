import chat from '../image/chat.svg';
import '../style/sectionForm.css';
import whatsapp from '../image/whatsapp-icon.svg';

function SectionForm() {
  return (
    <section className="form-section">
      <div className="form-container">
        <div className="titleWithImg">
          <img src={chat} alt="chat-icon.svg" className="image"/>
          <h3 className="form-title">Ainda tem dúvidas? Fale conosco!</h3>
        </div>
        <div className="form-info">
          <div className="our-contacts">
            <p className="information">Ofereça um meio de comunicação direto.</p>
            <p className='information'>
              Pode ser um <a href="mailto: contato@email.com" className='information-email'> contato@email.com.br</a>
            </p>
            <p className="information">Ou crie um formulário ao lado que entrem em contato 
              <strong className="strong-words-information"> o mais rápido possível!</strong>
            </p>
            <div className="whatsapp-information">
              <img src={whatsapp} alt="whatsapp-icon.svg"/>
              <p className="conections">Hey! Estamos no whatsapp!</p>
            </div>
          </div>
          <div className="form-fields">
            <form action="" className="form-imputs">
              <label htmlFor="name" className="label">Name</label>
              <input type="text" className="input" placeholder="Nome Sobrenome" id="name"/>
              <label htmlFor="email" className="label">Email</label>
              <input type="email" className="input" placeholder="nome@email.com.br" id="email"/>
              <label htmlFor="tel" className="label">Telefone</label>
              <input type="tel" className="input" placeholder="21 9988-7766" id="tel"/>
              <button type="submit" className="button button-yellow">
                <a href="/" className="button-link">Enviar!</a>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionForm;