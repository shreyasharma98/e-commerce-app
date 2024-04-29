import { BrowserRouter, Route, Routes, HashRouter} from "react-router-dom"
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import Checkout from "./pages/Checkout"
import { Appbar } from "./components/AppBar"


function App() {
 

  return (
    <>
    <BrowserRouter>
    <Appbar />
    <Routes>
      <Route path="/" element={<Home />} ></Route>
      <Route path="/cart" element={<Cart />} ></Route>
      <Route path="/checkout" element={<Checkout />} ></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
