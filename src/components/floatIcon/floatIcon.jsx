import './FloatIcon.css'
import wpp from '../../assets/wpp.svg'

const FloatIcon = () =>{
    return(
      <div className="floating-icon">
        <a
          className="floating-icon__whatsapp pulse-whatsapp"
          href="https://api.whatsapp.com/send?phone=5581983062703&text=Ol%C3%A1%2C%20venho%20atrav%C3%A9s%20do%20seu%20portf%C3%B3lio%2C%20podemos%20conversar%3F"
          target="_blank"
        >
          <i className="fa-brands fa-whatsapp"><img src={wpp} alt="botão flutuante para enviar mensagem no whatsapp"/></i>
        </a>
      </div>
    )
}

export default FloatIcon;