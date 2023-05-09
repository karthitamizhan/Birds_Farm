import React from "react";
import "../../css/Navbar1.css";
import { NavLink, Outlet } from "react-router-dom";
import logo1 from "../../assets/logo1b.png";
export default function AdminNav(){
    return(
        <>
        <header>
        <div class="container-fluid">

            <div class="navb-logo">
                <img src={logo1} alt="Logo" />
            </div>

            <div class="navb-items nav-items d-none d-xl-flex">

                <div class="item">
                    <NavLink to="/form"  >Add&nbsp;Product</NavLink>
                </div>

                <div class="item">
                    <NavLink to="/viewproduct"  >Edit&nbsp;Product</NavLink>
                </div>

                <div class="item">
                    <NavLink to="/order" >Orders</NavLink>
                </div>
            </div>

        </div>
        <div class="mobile-toggler d-xl-none">
                        <a href="/home" data-bs-toggle="modal" data-bs-target="#navbModal">
                        <i class="fa fa-solid fa-bars fontbars"></i>
                        </a>
                    </div>


                    <div class="modal fade" id="navbModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">

                                <div class="modal-header">
                                    <img src={logo1} alt="Logo" />
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"><i class="fa fa-xmark"></i></button>
                                </div>

                                <div class="modal-body">

                                    <div class="modal-line">
                                    <i class="fa fa-home" aria-hidden="true"></i><a href="/">Home</a>
                                    </div>

                                    <div class="modal-line">
                                    <i class="fa-solid fa-droplet"></i> <a href="/products">Products</a>
                                    </div>

                                    <div class="modal-line">
                                    <i class="fa-solid fa-phone"></i> <a href="/contact">Contact</a>
                                    </div>

                                    <div class="modal-line">
                                    <i class="fa-solid fa-circle-info"></i> <a href="/about">About</a>
                                    </div>

                                    <a href="/login" class="navb-button" type="button">Login</a>
                                </div>

                                
                            </div>
                        </div>
                    </div>

                
        </header>
        <Outlet/>
        {/* <h3 style={{textAlign:"center",color:"red",paddingTop:"15%",fontFamily:"Times New Roman', Times, serif",fontSize:"30px"}} >This page is maintained by admin</h3> */}
        </>
    );
}