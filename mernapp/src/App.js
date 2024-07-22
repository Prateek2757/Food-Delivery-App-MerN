
import './App.css';
import Home from './screens/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';

import Login from './screens/Login.js';
import Signupp from './screens/Signupp.js';
import { CartProvider } from './components/ContextReducer.js';
import MyOrder from './screens/MyOrder.js';

const trashSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path d="M21 4h-4V3c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v1H3c-.55 0-1 .45-1 1s.45 1 1 1h18c.55 0 1-.45 1-1s-.45-1-1-1zM8 4H4V3c0-.55.45-1 1-1h2c.55 0 1 .45 1 1v1zm12 16H4c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h16c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1zm-2-10H8c-.55 0-1 .45-1 1s.45 1 1 1h10c.55 0 1-.45 1-1s-.45-1-1-1zm-3 6h-2c-.55 0-1 .45-1 1s.45 1 1 1h2c.55 0 1-.45 1-1s-.45-1-1-1z"/>
</svg>
`;


function App() {
  return (
       <CartProvider>
    <Router>
    <div>
      <Routes>
         <Route exact path="/" element={<Home/>}/>
         <Route exact path="/login" element={<Login/>}/>
         <Route exact path="/createuser" element={<Signupp/>}/>
         <Route exact path="/myOrder" element={<MyOrder/>}/>
         
         
      </Routes>

      </div>
    </Router>
    </CartProvider>
  );
}

export default App;
