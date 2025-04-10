import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage ,SignupPage, Home, CreateProduct,MyProducts,ProductDetails, Cart, Profile, CreateAddress,SelectAddress, OrderConfirmation, MyOrdersPage} from "./Routes";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage/>}/>
        <Route path='/home' element={<Home/>} />
        <Route path='/create-product' element={<CreateProduct/>} />
        <Route path='/create-product/:id' element={<CreateProduct/>}/>
        <Route path="/my-products" element={<MyProducts/>}/>
        <Route path="/product/:id" element={<ProductDetails/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/create-address" element={<CreateAddress/>}/>
        <Route path="/select-address" element={<SelectAddress/>}/>
        <Route path="/order-confirmation" element={<OrderConfirmation/>}/>
        <Route path="/myorders" element={<MyOrdersPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;