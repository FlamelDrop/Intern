import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState, useRef, useCallback } from "react";

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


function App() {

  const [List, setList] = useState([{
    // _id,name,image_url,price,review[0],review[1],brand_info[3]
    
  }]);







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
