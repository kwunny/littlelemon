import './App.css';
import './components/styles/style.css';
import Nav from './components/Nav.js';
import Header from './components/Header.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';

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
          <Main />
        </div>
        <div className="footerbox">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
