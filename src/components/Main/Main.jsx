import './Main.css';
import lataGuarana1 from '../../assets/lata-guarana-1.svg';
const Main = () => {
  return (
    <>
      <div className="main-container">
        
        <div className="guarana">
          <img src={lataGuarana1} alt="" />
        </div>

        <div className='title'>
          <h2>aqui um caralho de duas linhas</h2>
        </div>

        <div>
          <button className='button-1'>aqui um CTA</button>
        </div>
        
      </div>
    </>
  )
}

export default Main;