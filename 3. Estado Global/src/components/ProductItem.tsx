import type { CartProps } from '../types/CartType';

function ProductItem({id, nombre, precio, stock}: CartProps) {
    return (
        <div>
            <p>ID: {id}</p>
            <p>Nombre: {nombre}</p>
            <p>Precio: {precio}</p>
            <p>Stock: {stock}</p>
            <hr />
          </div>
    );
}

export default ProductItem;