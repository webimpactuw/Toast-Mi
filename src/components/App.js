import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import '../style.css';
import { Routes, Route } from 'react-router-dom';
import Header from './Header.js';
import Footer from './Footer.js';
import Home from './HomePage.js';
import Menu from './MenuPage.js';
import Order from './OrderPage.js';
import About from './AboutPage.js';
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
          <Route path='menu' element={<Menu/>} ></Route>
          <Route index element={<Home/>} ></Route>
          <Route path='order' element={<Order />} ></Route>
          <Route path='about' element={<About />} ></Route>
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
