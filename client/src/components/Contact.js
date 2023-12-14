import "../css/Contact.css";
import Top from "../components/top";
import Whatsapp from "./Whatsapp";
function Contact()
{
    return(
        <>
        <h4 className="contact"><i class="fa-solid fa-phone"></i>&nbsp; Contact</h4>
        <div className="contactback">
        <div className="cont">
            <h4 className="title" style={{color:"green"}}>Contact Details</h4>
            <div>
                <h5 className="add" style={{color:"red"}}>Address : </h5>
                <p className="addc">113/1A1, Ponmullai Nagar, Moolakarai, Nirmalamadha School Near, Nasiyanur Road, Erode District, Tamil Nadu - 638 107</p>
            </div>
            <div>
                <h5 className="add" style={{color:"red"}}>Whatsapp : </h5>
                <p className="addp">7373000019</p>
            </div>
            <div>
                <h5 className="add" style={{color:"red"}}>Phone : </h5>
                <p className="addp">7373000019</p>
            </div>
            <div>
                <h5 className="add" style={{color:"red"}}>Email : </h5>
                <p className="addc">ragul737300@gmail.com</p>
            </div>
            <div>
                <h5 className="add" style={{color:"red"}}>Store Open : </h5>
                <p className="addc">8 A.M - 8 P.M , Mon - Sun</p>
            </div>
        </div>
        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d4012924.123838464!2d78.28976490000001!3d10.821166349999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sin!4v1702129321739!5m2!1sen!2sin"  styles={{border:'0'}} className="map"  loading="lazy"  title="Mithuna birds farm" ></iframe> */}
        </div>
        <Whatsapp/>
       <Top/>
        </>
    )
}
export default Contact;