import './App.css';
import './components/styles/style.css';
import Nav from './components/Nav.js';
import Header from './components/Header.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <div className="flex-container">
        <div className="headerbox">
          <div className="header-container">
            <div className="logobox">
              <Header />
            </div>
            <div className="navbox">
              <Nav />
            </div>
          </div>
        </div>
        <div className="mainbox">
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/booking" element={<h1>Hi</h1>} />
          </Routes>
        </div>
        <div className="footerbox">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
