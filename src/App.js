import logo from "./Holberton Logo.jpg";
import "./App.css";
import { getFullYear, getFooterCopy } from "./utils";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo"></img>
        <h1>School dashboard</h1>
      </div>
      <body className="App-body">
        <p>Login to access the full dashboard</p>
        <form>
          <label>Email</label>
          <input type="email" id="email" name="email"></input>

          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
          <button>OK</button>
        </form>
      </body>
      <footer className="App-footer">
        <p>
          Copyright {getFullYear()} - {getFooterCopy(true)}
        </p>
      </footer>
    </div>
  );
}

export default App;
