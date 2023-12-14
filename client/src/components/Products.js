import "../css/Products.css";
import React,{useState} from "react";
import Axios from "axios";
// import logo1 from "../assets/logo1b.png";
import logo1 from "../assets/mbf.png"

import ScrollToTop from "../components/top.js";
import PreLoader from "./PreLoader";
import Whatsapp from "./Whatsapp";

function Products(props){
    
    const [sell, setSell] = useState([]);


    Axios.get("http://localhost:8080/postItem", {

    }).then((res) => {
         
        const data = res.data
        setSell(data);
 


    });
    const Body = sell.map((val, key) => {

        return (
            
            <div className="allproducts2">
                <div className="card allvalues" key={key} >
                <img src={val.image} alt="petp" width="80%" height="130%" ></img> 
                    <hr></hr>
                    <h5 className="product-name"><b>Name :</b> {val.name}</h5>
                    <h5 className="product-name"><b>Price :</b>Rs. {val.price}</h5>
                    <h5 className="product-name"><b>Age :</b> {val.liter}</h5>
                    <h5 className="product-name"><b>Pairs :</b> {val.stocks}</h5>
                    <button className="product-add-button" onClick={()=>props.handleAddProduct(val)}>Add to Cart</button>
                </div>
                <div>

                </div>
            </div>

        )
    })


    
    return(
        <>
        <PreLoader/>
        <h4 className="Products"><i class="fa-solid fa-droplet"></i>&nbsp; Products</h4>
        
        <div className="flexing">{Body}</div>
        
        
        <div className="backimg2">
      <div className="compdetails text-center">
        <img src={logo1} alt="compname" className="comname"></img>
        <div className="row text-center">
          <div className="col-md-4">
            <h5 className="bottom" style={{color:"red"}}> Any Doubts ? :</h5>
            <h6 className="doubt"><i class="fa-solid fa-phone"></i>&nbsp;7373000019</h6>
          </div>
          <div className="col-md-4">
            <h5 className="bottom" style={{color:"red"}}>Address :</h5>
            <h6 className="address"><i class="fa-solid fa-location-dot"></i>&nbsp;&nbsp;113/1A1, Ponmullai Nagar,<br></br> Moolakarai,<br></br> Nirmalamadha School Near,<br></br>Nasiyanur, Erode District,<br></br> Tamil Nadu - 638 107.</h6>
          </div>
          <div className="col-md-4">
            <h5 className="bottom" style={{color:"red"}}>Email :</h5>
            <h6 className="email"><i class="fa-solid fa-envelope"></i>&nbsp;&nbsp;ragul737300@gmail.com</h6>
          </div>
        </div>
      </div>
      </div>
      
        <Whatsapp/>
        <ScrollToTop/>
        </>
        
    )
            }



export default Products;