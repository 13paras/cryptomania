import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Cryptocurrencies from "./pages/Cryptocurrencies";
import News from "./pages/News";
import CryptoDetails from "./pages/CryptoDetails";
import Homepage from "./pages/Homepage";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className=''>
      <BrowserRouter>
        <div>
          <Header />
        </div>
        <div className=' mx-10 lg:container lg:mx-auto'>
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/cryptocurrencies' element={<Cryptocurrencies />} />
            <Route path='/news' element={<News />} />
            <Route path='/crypto/:cryptoId' element={<CryptoDetails />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
