import PayButton from '../../buttons/PayButton';
import './style.css';

const CartFooter = ({ total }) => {
    const { price } = total;

    return ( 
    <div className="cart-footer">
        <div className="cart-footer__price">{price}$</div>
        
        <div className="cart-footer__btn">
            <PayButton />
        </div>
    </div>
     );
}
 
export default CartFooter;