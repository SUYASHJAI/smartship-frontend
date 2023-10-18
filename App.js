import Nav from "./components/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateComponent from "./components/PrivateComponent";

import "./App.css";
import Footer from "./components/Footer";
import SignUp from "./components/SignUp";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav></Nav>
        <Routes>
          <Route element={<PrivateComponent></PrivateComponent>}>
            <Route
              path="/"
              element={<h1>Product Listning Component</h1>}
            ></Route>
            <Route path="/add" element={<h1>Add Product Component</h1>}></Route>
            <Route
              path="/update"
              element={<h1>Update Product Component</h1>}
            ></Route>
            <Route
              path="/logout"
              element={<h1>Logout Product Component</h1>}
            ></Route>
            <Route
              path="/profile"
              element={<h1>ProfileProduct Component</h1>}
            ></Route>
          </Route>

          <Route path="/signup" element={<SignUp />}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
