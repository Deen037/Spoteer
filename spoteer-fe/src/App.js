import logo from './logo.svg';
import bg from './assets/bg/about-bg.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header" style={{backgroundImage: `url(${bg})`}}>
        <img src={logo} className="App-logo" alt="logo" />
        <p>Spoteer</p>
      </header>
    </div>

  );
}

export default App;
