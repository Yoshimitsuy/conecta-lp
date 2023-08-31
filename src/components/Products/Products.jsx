import Card from '../Card/Card';
import './Products.css';

const Products = () => {
  return (
    <>
      <div className="products-container">

        <div className='products-title'>
          <h2>Produtos</h2>
          <h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Animi, distinctio temporibus laborum repellat saepe aut 
              impedit atque ratione harum, laudantium nulla!
          </h3>
        </div>

        <div className='cards'>
          <Card />
          <Card />
        </div>
        
      </div>
    </>
  )
}

export default Products;