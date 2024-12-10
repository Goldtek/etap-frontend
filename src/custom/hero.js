import React from "react";
import { Link } from "react-router-dom";

export const  Hero = () => (
    <section className="slider-area ">
    <div className="slider-active">
        <div className="single-slider slider-height d-flex align-items-center">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-7 col-md-12">
                        <div className="hero__caption">
                            <h1 data-animation="fadeInLeft" data-delay="0.2s">Online learning<br /> platform</h1>
                            <p data-animation="fadeInLeft" data-delay="0.4s">Build skills with courses, certificates, and degrees online from world-className universities and companies</p>
                            <Link to="/register" className="btn hero-btn" data-animation="fadeInLeft" data-delay="0.7s">Join for Free</Link>
                        </div>
                    </div>
                </div>
            </div>          
        </div>
    </div>
</section>
);

export default Hero;



