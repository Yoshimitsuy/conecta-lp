import { GrFacebook } from 'react-icons/gr';
import { BsInstagram } from 'react-icons/bs';
import './Form.css';
import conecta from "../../assets/conecta-logo.svg";

const Form = () => {
  return (
    <>
      <div className='form-container'>

        <div className='talk'>
          <h2>Fale Conosco</h2>

          <div className='social-media'>
            <GrFacebook size={18} />
            <BsInstagram size={18}/>

            <div className='social'>
              |    REDES SOCIAIS
            </div>
          </div>
        </div>

        <form>

          <div className='form-inputs'>
            <label htmlFor="">
              NAME :
              <input type="text" placeholder='Rafael Lacana' />
            </label>

            <label htmlFor="">
              TELEFONE :
              <input type="text" placeholder='(21) 00000-0000' />
            </label>

            <label htmlFor="">
              E-MAIL :
              <input type="text" placeholder='email@email.com' />
            </label>

            <label htmlFor="">
              ASSUNTO :
              <select>
                <option type="select" placeholder='nome' hidden>selecione um assunto</option>
                <option type="select" placeholder='nome'>1</option>
                <option type="select" placeholder='nome'>2</option>
                <option type="select" placeholder='nome'>3</option>
                <option type="select" placeholder='nome'>4</option>
                <option type="select" placeholder='nome'>5</option>
              </select>
            </label>

            <label htmlFor="">
              ASSUNTO :
              <textarea type="text" placeholder='escreva aqui sua mensagem' maxLength='500' cols='30' rows='10'/>
            </label>
          </div>

        </form>
        
        <div>
          <button type='submit' className='button-2'>SUBMIT</button>
        </div>

        <div className='footer'>
          <span>
            Todos os direitos reservados © 2020 Conecta
          </span>

          <div>
            PROJETADO POR<img src={conecta} alt="conecta logo" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Form