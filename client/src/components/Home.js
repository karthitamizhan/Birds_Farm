import "../css/Home.css";
import Carousel from 'react-bootstrap/Carousel';
import ScrollToTop from "../components/top.js";
import PreLoader from "./PreLoader";
import Whatsapp from "./Whatsapp";
import b1 from "../assets/b1.png";
import b2 from "../assets/b2.png";
import b3 from "../assets/b3.png";
import b4 from "../assets/b4.png";
import b5 from "../assets/b5.png";
import b7 from "../assets/b7.png";
import b12 from "../assets/b12.png";
import b8 from "../assets/b8.png";
import b9 from "../assets/b9.png";
import b11 from "../assets/b11.png";
import b10 from "../assets/b10.png";
import logo1 from "../assets/mbf.png"



// import Header from "../components/Navbar1"
function Home() {
  return (
    <>
    <PreLoader/>
    {/* <Header/> */}
      <h4 className="home"><i class="fa fa-home" aria-hidden="true">&nbsp;</i>Home</h4>
      <div className="backimg1">      
      {/* <h6 className="compname">
        <img className="imgstyling" src={logo2} alt="logo"></img>
      </h6> */}
      <div class="scroll-left">
      <p className="scroll-text">MITHUNA BIRDS FARM </p>
      </div>
      <Carousel className="caromod">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={b7}
            alt="First slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={b11}
            alt="Second slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={b7}
            alt="Third slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 h-100"
            src={b8}
            alt="Fourth slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={b9}
            alt="Fiftn slide slide"
          />
        </Carousel.Item>
      </Carousel>
    
      </div>
      
      <div className="imgback2">
      <div className="fullprod">
        <h4>&nbsp;</h4>
      <h3 className="oprod">Our Birds</h3>
       <div class="ag-format-container">
  <div class="ag-courses_box">
    <div class="ag-courses_item">
      <a href="/products" class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title">
        <img src={b5} alt="Coconut oil" className="sun1" />
        </div>

        <div class="ag-courses-item_date-box">
          <span class="ag-courses-item_date">
            Emerald
          </span>
        </div>
      </a>
    </div>

    <div class="ag-courses_item">
      <a href="/products" class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title">
        <img src={b10} alt="Groundnut Oil" className="sun1" />
        </div>

        <div class="ag-courses-item_date-box">
          <span class="ag-courses-item_date">
            Lutino Butterfly
          </span>
        </div>
      </a>
    </div>

    <div class="ag-courses_item">
      <a href="/products" class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title">
        <img src={b11} alt="Gingelly Oil" className="sun1" />
        </div>

        <div class="ag-courses-item_date-box">
        
          <span class="ag-courses-item_date">
            Lutino Pied
          </span>
        </div>
      </a>
    </div>

    <div class="ag-courses_item">
      <a href="/products" class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title">
        <img src={b4} alt="Castor oil" className="sun1" />
          
        </div>

        <div class="ag-courses-item_date-box">
          
          <span class="ag-courses-item_date">
            Lutino
          </span>
        </div>
      </a>
    </div>
    <div class="ag-courses_item">
      <a href="/products" class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title">
        <img src={b12} alt="Castor oil" className="sun1" />
          
        </div>

        <div class="ag-courses-item_date-box">
          
          <span class="ag-courses-item_date">
            Lutino Pied
          </span>
        </div>
      </a>
    </div>
    </div>
    </div>
</div>
</div>
       
      {/* <h4 className="Quote1">Quality in Birds</h4>

    <div className="backimg3">
      <div class="row" id="info" >
        <div class="col-sm-3">
          <div class="card3">
            <div class="card-body">
              <img src={sunFil} alt="SunLight Filteration" className="sun" />
              <h5 class="card-title" >Sunlight Filteration</h5>

            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card3">
            <div class="card-body">
              <img src={noprev} alt="No Preservatives" className="sun" />
              <h5 class="card-title">No Preservatives</h5>

            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card3">
            <div class="card-body">
              <img src={adultfree} alt="Adulteration Free" className="sun" />
              <h5 class="card-title">Adulteration Free</h5>

            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card3">
            <div class="card-body">
              <img src={natprod} alt="Natural Product" className="sun" />
              <h5 class="card-title">No Chemicals</h5>

            </div>
          </div>
        </div>
      </div>
      </div>
     */}
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

export default Home;