import React from 'react';

export const DashboardHeader = ({ title }) => (
    <>
    <div className="header-area header-transparent">
        <div className="main-header ">
            <div className="header-bottom  header-sticky">
                <div className="container-fluid">
                    <div className="row align-items-center">
                       
                        <div className="col-xl-2 col-lg-2">
                            <div className="logo">
                                <a href="index.html"><img src="assets/img/logo/logo.png" alt="" /></a>
                            </div>
                        </div>
                        <div className="col-xl-10 col-lg-10">
                            <div className="menu-wrapper d-flex align-items-center justify-content-end">
                                
                                <div className="main-menu d-none d-lg-block">
                                    <nav>
                                        <ul id="navigation">                                                                                          
                                            <li className="active" ><a href="index.html">Home</a></li>
                                            <li><a href="courses.html">Courses</a></li>
                                            <li><a href="about.html">About</a></li>
                                            <li className="button-header"><a href="login.html" className="btn btn3">Log Out</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div> 
                    
                        <div className="col-12">
                            <div className="mobile_menu d-block d-lg-none"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <section className="slider-area slider-area2">
        <div className="slider-active">
            <div className="single-slider slider-height2">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-11 col-md-12">
                            <div className="hero__caption hero__caption2">
                                <h1 data-animation="bounceIn" data-delay="0.2s">{title}</h1>                     
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                        <li className="breadcrumb-item"><a href="#">{title}</a></li> 
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>          
            </div>
        </div>
    </section>
    </>
);
