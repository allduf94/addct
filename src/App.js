import "./css/global.css";
import "./css/App.css";
import { Header } from "./component/Header";
import { Home } from "./page/Home";
import { All } from "./page/All";
import { Brand } from "./page/Brand";
import { Note } from "./page/Note"
import { Storelist } from "./page/Storelist";
import { Detail } from "./page/Detail";
import { Cart } from "./page/Cart";
import { Login } from "./page/Login";
import { Footer } from "./component/Footer";
import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { CartProvider } from "./context/CartContext";

function App() {
  const location = useLocation();
  useEffect(() => { window.scrollTo(0, 0) }, [location]);

  return (
    <CartProvider>
      <div id="App">
        <Header />
        <Routes>
          <Route path="/addct" element={<Home />} />
          <Route path="/all" element={<All />} />
          <Route path="/brand" element={<Brand />} />
          <Route path="/note" element={<Note />} />
          <Route path="/storelist" element={<Storelist />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App
