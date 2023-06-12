import CartButton from '../cart-button/CartButton';
import './style.css';


const CartItem = ({ product, deleteProduct }) => {
    const { title, animeId, price, img } = product;

    return ( 
    <section className="product">

        <div className="product__details">
            <img className='product__img' src={img} />
            <div className="product__title">{title}</div>
        </div>

        <div className='product__options'>

            <div className="product__price">{price}</div>

            <div className="product__controls">
                <CartButton deleteProduct={deleteProduct} id={animeId}/>
            </div>

        </div>

    </section>
     );
}
 
export default CartItem;