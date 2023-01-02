import "./App.css";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
// import ClassComponent from "./components/ClassComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        {/* <ClassComponent /> */}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
