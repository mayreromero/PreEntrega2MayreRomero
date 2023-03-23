import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import Navbar from "./Components/Navbar/Navbar";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartWidget from "./Components/CartWidget/CartWidget";
import Cart from "./Components/Cart/Cart";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />}></Route>
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
          <Route path="*" element={<h1>error 404: Not found</h1>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
