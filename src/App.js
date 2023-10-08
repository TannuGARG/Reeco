import { Route, Routes } from "react-router-dom";
import OrderPage from "./components/OrderDetails/OrderPage";
import Store from "./components/Store";
import Analytics from "./components/Analytics";
import Nofound from "./components/NoFound";
import "./App.css";
import Navbar from "./components/Navbar";
import AllOrderPage from "./components/AllOrderPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/orders" element={<AllOrderPage />}>
          <Route path=":orderId" element={<OrderPage />} />
        </Route>
        <Route path="/" element={<Store />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="*" element={<Nofound />} />
      </Routes>
    </div>
  );
}

export default App;
