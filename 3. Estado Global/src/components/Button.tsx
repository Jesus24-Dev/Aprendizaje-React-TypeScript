import { useCart } from "../context/useCart";

function Button() {

    const {toggleVisible} = useCart();

    return (
        <button onClick={toggleVisible}>Agregar al carrito</button>
    );
}

export default Button;