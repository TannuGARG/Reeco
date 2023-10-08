
import { Route, Routes } from 'react-router-dom';
import OrderPage from './components/OrderDetails/OrderPage';
import Store from './components/Store';
import Analytics from './components/Analytics';
import Nofound from './components/NoFound';
import "./App.css"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = "/" element = {<OrderPage />} />
        <Route path = "/store" element = {<Store />} />
        <Route path = "/analytics" element = {<Analytics />} />
        <Route path = "*" element = {<Nofound />} />
      </Routes>
     
    </div>
  );
}

export default App;
