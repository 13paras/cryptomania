import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Cryptocurrencies from "./components/Cryptocurrencies";
import Exchanges from "./components/Exchanges";
import News from "./components/News";
import CryptoDetails from "./components/CryptoDetails";
import Homepage from "./components/Homepage";

const App = () => {
  return (
    <div className=''>
      <BrowserRouter>
        <div>
          <Header />
        </div>
        <div className='container mx-auto'>
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/cryptocurrencies' element={<Cryptocurrencies />} />
            <Route path='/exchanges' element={<Exchanges />} />
            <Route path='/news' element={<News />} />
            <Route path='/crypto/:cryptoId' element={<CryptoDetails />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
