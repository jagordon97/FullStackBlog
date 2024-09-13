import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

function Header(){
  return (
    <header className="App-header">
        <div class="flex--all-center">
          <div className="App-logo-div flex--all-center">
            <img src={logo} className="App-logo"  alt="logo" />
          </div>
          
          <div>
            Squash Collective
          </div>
        </div>
        <Login />
        
      </header>
  )
}


function Login(){
  return (
    <a
      className="Login"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Log in
    </a>
  )
}

export default App;
