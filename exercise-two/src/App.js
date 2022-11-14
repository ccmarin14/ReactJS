import logo from './logo.svg';
import './App.css';
import { ClockHook } from './components/pure/Clock.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ClockHook></ClockHook>
      </header>
    </div>
  );
}

export default App;
