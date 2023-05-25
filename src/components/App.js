import { Routes, Route } from 'react-router-dom';
import Header from './Header.js';
import Footer from './Footer.js';
import Home from './HomePage.js';
import { MenuRoot, BanhMiMenu, BowlsMenu, DrinksMenu } from './MenuPage.js';
import Order from './OrderPage.js';
import About from './AboutPage.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='Toast-Mi/menu' element={<MenuRoot />} ></Route>
        <Route index path='/Toast-Mi' element={<Home />} ></Route>
        <Route path='Toast-Mi/order' element={<Order />} ></Route>
        <Route path='Toast-Mi/about' element={<About />} ></Route>
        <Route path='Toast-Mi/menu/banhmi' element={<BanhMiMenu />}></Route>
        <Route path='Toast-Mi/menu/bowls' element={<BowlsMenu />}></Route>
        <Route path='Toast-Mi/menu/drinks' element={<DrinksMenu />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
