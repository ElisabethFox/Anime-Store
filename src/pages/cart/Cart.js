import { useEffect, useState } from "react";
import CartFooter from "../../components/cart/cart-footer/CartFooter";
import CartHeader from "../../components/cart/cart-header/CartHeader";
import CartItem from "../../components/cart/cart-item/CartItem";

import { animeList } from '../../helpers/animeList';
import Tittle1 from "../../components/title-1/Title1";

const Cart = () => {
    const [cart, setCart] = useState(animeList);
    const [total, setTotal] = useState({
        price: cart.reduce((prev, curr) => prev + Number(curr.price.slice(0, -1)), 0)
    })

    useEffect(() => {
        setTotal({
            price: cart.reduce((prev, curr) => prev + Number(curr.price.slice(0, -1)), 0)
        })
    
    }, [cart])

    const deleteProduct = (id) => {
        setCart((cart) => cart.filter((product) => id !== product.animeId));
    };

    const products = cart.map((product) => {
        return <CartItem product={product} key={product.animeId} deleteProduct={deleteProduct} />
    })

    return (
                <section className="cart">
                    <Tittle1 title="Cart"/>
                    <CartHeader />
                    {products}
                    <CartFooter total={total}/>
                </section>
    )
};

export default Cart;    