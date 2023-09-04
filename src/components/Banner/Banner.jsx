import './Banner.css';
import banner1 from '../../assets/banner-1-mobile.svg';
// import banner2 from '../../assets/banner-2-mobile.svg';
import lata1b from '../../assets/lata-guarana-1b.svg';

import lataGuarana3 from '../../assets/lata-guarana-3.svg';
import lataGuarana4 from '../../assets/lata-guarana-4.svg';
import lataGuarana5 from '../../assets/lata-guarana-5.svg';

const Banner = () => {
  return (
    <>
      <div className='banner-container'>

        <div className='banners'>
          
          <div className='banner-group-1'>
            <div className='img-banner-1'>
              <img src={banner1} alt="" />
            </div>
          </div>
          
          <div className="banner-group-2">
            <div className='banner-publi'>
              <h2 className='banner-h2'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Quam quidem, iure cupiditate molestias vero inventore, porro ab laudantium, quod culpa error laborum.
                Iste, vitae dignissimos quis magnam modi accusamus quidem quia quasi qui ab, ad porro cumque pariatur aut aperiam!
              </h2>
              <h2 className='banner-a-h2'>@lorem-ipsum</h2>
            </div>

            <div className='bann2'>
              <h2>Peça para seu bar</h2>
            </div>
          </div>

        </div>

      </div>

      <div className="banner-footer">
        <div className="banner-group-3">
          <div className='publi'>
            <img className='publi-img' src={lata1b} alt="" />
            <img className='desktop1' src={lataGuarana3} alt="" />
            <img className='desktop2' src={lataGuarana4} alt="" />
            <img className='desktop3' src={lataGuarana5} alt="" />
            <h3 className='banner-h3'>Quer experimentar ?</h3>
            <button className='button-3'>faça seu pedido</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Banner