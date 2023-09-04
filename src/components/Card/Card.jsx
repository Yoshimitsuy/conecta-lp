import './Card.css';
import garrafa1 from '../../assets/garrafa-1.png';

const Card = () => {
  return (
    <>
      <div className="card-container">
        
        <img src={garrafa1} alt="" />

        <h4>garrafa 350ml</h4>
        <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h5>
        
        <button className='button-2'>adicionar ao carrinho</button>
      </div>
    </>
  )
}

export default Card;