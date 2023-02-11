import './App.css';
import './components/styles/style.css';
import Nav from './components/Nav.js';
import Header from './components/Header.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <>
      <div class="flex-container">
        <div class="headerbox">
          <div class="header-container">
            <div class="logobox"><Header /></div>
            <div class="navbox"><Nav /></div>
          </div>
        </div>
        <div class="mainbox">
          <Main />
        </div>
        <div class="footerbox"><Footer /></div>
      </div>
    </>
  );
}

export default App;
