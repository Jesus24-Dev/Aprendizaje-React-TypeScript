import Button from "./components/Button"
import ProductList from "./components/ProductList"
import CartProvider from "./context/CartProvider"

function App() {
  return (
    <CartProvider>
      <Button />
      <ProductList />
    </CartProvider>
  )
}

export default App
