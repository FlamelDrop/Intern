import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">

      <div className="Header">
        <div className="rectangle1">
          <div className="Menu">
            <b1>Home</b1>
            <b2>New Products</b2>
            <b3>Women</b3>
            <b4>Men</b4>
            <b5>Kid</b5>
            <b6>Accessories</b6>
          </div>
        </div>
      </div>

      <div className="Context">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        Products (-)
      </div>

      <div className="Footer">
        <div className="rectangle2">
          <a>Copyright © 2021 ChomCHOB. All Rights Reserved.</a>
        </div>
      </div>

    </div>
  );
}

export default App;
