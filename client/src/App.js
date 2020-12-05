import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import OtherPage from "./OtherPage";
import Fib from "./Fib";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Fib calculator version 2</h1>
          <Link to="/">Home</Link>
          <Link to="/otherPage">Other Page</Link>
        </header>
        <div>
          <Route exact path="/" component={Fib} />
          <Route path="/otherPage" component={OtherPage} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
