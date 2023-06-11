import './style.css';

import { RiDeleteBin5Fill } from "react-icons/ri";

const CartItem = ({ product, deleteProduct }) => {
    return ( 
    <section className="product">

        <div className="product__details">
            <img className='product__img' src={product.img} />
            <div className="product__title">{product.title}</div>
        </div>

        <div className='product__options'>

            <div className="product__price">{product.price}</div>

            <div className="product__controls">
                <button type="button">
                    <RiDeleteBin5Fill size={25}/>
                </button>
            </div>

        </div>

    </section>
     );
}
 
export default CartItem;