import './style.css';
import { RiDeleteBin5Fill } from "react-icons/ri";

const CartButton = ({ deleteProduct, id }) => {
    return ( 
    <button type="button" onClick={()=>{deleteProduct(id)}}>
        <RiDeleteBin5Fill size={25}/>
    </button>
    );
}
 
export default CartButton;