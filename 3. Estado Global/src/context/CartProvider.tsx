import {useState, useEffect} from 'react'
import type { ReactNode } from "react";
import { CartContext } from "./CartContext";
import type { CartProps } from '../types/CartType';
import data from '../data/cart.json'

function CartProvider({children} : {children: ReactNode}) {
  const [cart, setCart] = useState<CartProps[]>([]);
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    setCart(data);
  }, [])

  const toggleVisible = () => {
    setVisible(!visible)
  }
    
    return (
        <CartContext.Provider value={{cart, visible, toggleVisible}}>
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;