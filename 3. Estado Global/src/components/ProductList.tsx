import { useCart } from "../context/useCart";
import ProductItem from "./ProductItem";

function ProductList() {
    const {cart, visible} = useCart()
    if (!visible) return null
    return (
        <>
            {cart.map(c => (
                <ProductItem key={c.id} {...c}/>
            ))}
        </>
    );
}

export default ProductList;