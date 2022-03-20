import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState, useRef, useCallback } from "react";
import Product from "./Product"

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


// What we have
// {"_id":"5d7a0998002b646756cae26c",
// "name":"Garmin vívosport",
// "image_url":"https://fs.chomchob.com/file/image?path=/admin/upload/2018-02-13/f8c6966e-f5b9-4452-9b6e-4e26608e3d18",
// "description":"Garmin vívosport สายรัดข้อมือเพื่อสุขภาพ สี 3 สี เติมเต็มสไตล์ให้กับคุณ vivosportจุดเด่นที่การออกแบบทันสมัย หน้าจอสี ติดตามกิจกรรม,รวมถึงจำนวนก้าวเดิน,การนอนหลับ มีคุณสมบัติ Move IQ ตรวจจับเมื่อคุณเริ่มกิจกรรมหนึ่งๆได้โดยอัตโนมัติ การแจ้งเตือน Smart notifications",
// "price":"7191.00",
// "review":{"number":10,"rating":4},
// "brand_info":{"id":"B10","name":"Garmin","url":"https://fs.chomchob.com/file/image?path=/admin/upload/2018-02-13/45a6e245-e3a4-448e-b131-5cf5f61215c6"},
// "createdAt":"2019-09-12T09:02:16.589Z",
// "updatedAt":"2019-09-12T09:02:16.589Z",
// "__v":0}

// What we need
// Bg
// Preview aka picture
// Detail : Rating(star review) - Price - brand_pic - brand_name
// ====
// _id,name,image_url,price,review[0],review[1],brand_info[2]

const URL = `https://cc-mock-api.herokuapp.com/product`;
// let count = 0;

function App() {

  const [Data, DataSet] = useState([]);
  const [List, setList] = useState([{
    _id: "",
    name: "",
    image_url: "",
    price: "",
    review: "",
    brand_info: "",
    // review[0],review[1],brand_info[3]
  }]);

  useEffect(() => {
    async function fetchMyAPI() {
      let res = await fetch(URL);
      res = await res.json();

      console.log('hello')
      console.log(JSON.stringify(res))

      const shList = List;

      for (let i=0;i<res.length;i++){
        shList[i] = {
          _id: res[i]._id,
          name: res[i].name,
          image_url: res[i].image_url,
          price: res[i].price,
          review: res[i].review,
          brand_info: res[i].brand_info,
        };
      }
      console.log('shList' + shList)
      setList(shList);
      DataSet(JSON.stringify(res));
    }
    fetchMyAPI();
  }, []);
  
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
        <c>Products ({List.length})</c>
        <div className="list" href="https://www.chomchob.com/">
          {List.map((product) => (
            <Product key={product._id} product={product}></Product>
          ))}
          
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
