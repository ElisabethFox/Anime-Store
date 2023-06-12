import './style.css';

const CartFooter = ({ total }) => {
    const { price } = total;

    return ( 
    <div className="cart-footer">
        <div className="cart-footer__price">{price}$</div>
    </div>
     );
}
 
export default CartFooter;