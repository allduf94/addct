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
          <Route path="/addct/all" element={<All />} />
          <Route path="/addct/brand" element={<Brand />} />
          <Route path="/addct/note" element={<Note />} />
          <Route path="/addct/storelist" element={<Storelist />} />
          <Route path="/addct/detail" element={<Detail />} />
          <Route path="/addct/cart" element={<Cart />} />
          <Route path="/addct/login" element={<Login />} />
        </Routes>
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App
