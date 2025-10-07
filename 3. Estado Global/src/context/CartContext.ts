import {createContext} from 'react'
import type { CartProps } from '../types/CartType';

interface CartContextType {
    cart: CartProps[];
    visible: boolean;
    toggleVisible: () => void;
}

export const CartContext = createContext<CartContextType | undefined>(undefined)