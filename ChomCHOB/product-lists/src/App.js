import logo from './logo.svg';
import './App.css';

var click1=document.querySelectorAll("d");
var preclick1;
for (var i=0;i<click1.length;i++){
  click1[i].onclick=function(){
    var classes=this.classList;
    if(classes.contains("show")){
      classes.remove("show")
    }
    else{
      if(preclick1!=null)
      preclick1.classList.remove("show");
      preclick1=this;
      classes.add("show");
      // this.classList.toggle("show");
    }
  }
}


//_id name image_url description price review brand_info



function App() {
  return (
    <div className="App">

      <div className="Header">
        <div className="rectangle1">
          <div className="Logo">
            <img src={logo} alt="logo"/>
            <d>LOGO!</d>
          </div>

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
        <c>Products (-)</c>
        <div className="card">
          <e1>product 1</e1>
          
        </div>
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
