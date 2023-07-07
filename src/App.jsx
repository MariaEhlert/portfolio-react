import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './Components/Partials/Header/Header';
import { Home } from './Components/Home/Home';
import { Footer } from './Components/Partials/Footer/Footer';



function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Header />
          <Routes>
            <Route index element={<Home />} />
          </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
