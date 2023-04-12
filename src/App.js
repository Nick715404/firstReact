import logo from './logo.svg';
import './App.css';
import Fcomponent from './Fcomponent';
import Ccomponent from './Ccomponent';
import Footer from './Footer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Ccomponent name = 'Bogdan' />

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Web developer blog
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Footer />
      </header>
      
    </div>
  );
}

export default App;
