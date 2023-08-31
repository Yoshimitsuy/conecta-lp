import './Banner.css';
import banner1 from '../../assets/banner-1-mobile.png';
import banner2 from '../../assets/banner-2-mobile.png';
import lata1b from '../../assets/lata-guarana-1b.svg';

const Banner = () => {
  return (
    <>
      <div className='banner-container'>

        <div>
          <div className='img-banner-1'>
            <img src={banner1} alt="" />
          </div>
        
          <div className='banner-publi'>
            <h2 className='banner-h2'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
              Quam quidem, iure cupiditate molestias vero inventore, porro ab laudantium, quod culpa error laborum. 
              Iste, vitae dignissimos quis magnam modi accusamus quidem quia quasi qui ab, ad porro cumque pariatur aut aperiam!
            </h2>
            <h2 className='banner-a-h2'>@lorem-ipsum</h2>
          </div>

          <div>
            <img src={banner2} alt="" />Peça para seu bar
          </div>

          <div className='publi'>
            <img className='publi-img' src={lata1b} alt="" />
            <h3 className='banner-h3'>Quer experimentar ?</h3>
            <button className='button-3'>aqui um CTA</button>
          </div>
        </div>

      </div>
    </>
  )
}

export default Banner