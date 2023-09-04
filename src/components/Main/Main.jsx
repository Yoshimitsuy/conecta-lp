import './Main.css';
import lataGuarana1 from '../../assets/lata-guarana-1.svg';
const Main = () => {
  return (
    <>
      <div className="main-container">
        
        <div className="guarana">
          <img src={lataGuarana1} alt="" />
        </div>

        <div className='main-description'>
        <div className='title'>
          <h2>uma nova bebida, um novo sabor</h2>
        </div>

        <div>
          <button className='button-1'>experimente</button>
        </div>
        </div>
        
        
      </div>
    </>
  )
}

export default Main;