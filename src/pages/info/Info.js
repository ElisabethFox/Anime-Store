import Tittle1 from '../../components/title-1/Title1';
import './style.css'
const Info = () => {
    return ( 
    <main className="info-section">
        <div className="container">
                <Tittle1 title="Info"/>
                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">How to buy?</h2>
                        <p className='info__desc'>Choose the anime you wish to buy. Click on the "Buy" button on the product card or go to the full anime information page and click on the "Add to cart" button.</p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">How to pay?</h2>
                        <p className='info__desc'> You can pay with any bank card or promo code. Go to your shopping basket and press the "Pay" button.</p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">What next?</h2>
                        <p className='info__desc'>Once you pay, you'll have a download link to all the seasons of your chosen anime in blu-ray quality.</p>
                    </li>
                </ul>
        </div>
    </main>
    );
}
 
export default Info;