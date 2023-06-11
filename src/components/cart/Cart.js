import { useState } from "react";
import CartFooter from "./cart-footer/CartFooter";
import CartHeader from "./cart-header/CartHeader";
import CartItem from "./cart-item/CartItem";

import { animeList } from '../../helpers/animeList';
import Tittle1 from "../title-1/Title1";

const Cart = () => {
    const [cart, setCart] = useState(animeList);

    const deleteProduct = () => {
        
    }

    const products = cart.map((product) => {
        return <CartItem product={product} key={product.id} />
    })



    return (
                <section className="cart">
                    <Tittle1 title="Cart"/>
                    <CartHeader />
                    {products}
                    <CartFooter />
                </section>
    )
};

export default Cart;    