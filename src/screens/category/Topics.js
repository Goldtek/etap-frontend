import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';
import {  DashboardHeader, Footer } from "../../custom";

const Topics = ()=> {

    React.useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
    }, []);

    return (
    <>
        
    <main>
       <DashboardHeader title="Topics" />
       
        <div className="courses-area section-padding40 fix">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-7 col-lg-8">
                        <div className="section-tittle text-center mb-55">
                            <h2>Topics</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="properties properties2 mb-30">
                            <div className="properties__card">
                                <div className="properties__img overlay1">
                                    <a href="#"><img src="assets/img/gallery/featured1.png" alt="" /></a>
                                </div>
                                <div className="properties__caption">
                                    <p>User Experience</p>
                                    <h3><a href="#">Fundamental of UX for Application design</a></h3>
                                    <p>The automated process all your website tasks. Discover tools and techniques to engage effectively with vulnerable children and young people.
                                    </p>
                                    <div className="properties__footer d-flex justify-content-between align-items-center">
                                        <div className="restaurant-name">
                                            <div className="rating">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star-half"></i>
                                            </div>
                                            <p><span>(4.5)</span> based on 120</p>
                                        </div>
                                        <div className="price">
                                            <span>$135</span>
                                        </div>
                                    </div>
                                    <a href="#" className="border-btn border-btn2">Find out more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="properties properties2 mb-30">
                            <div className="properties__card">
                                <div className="properties__img overlay1">
                                    <a href="#"><img src="assets/img/gallery/featured2.png" alt="" /></a>
                                </div>
                                <div className="properties__caption">
                                    <p>User Experience</p>
                                    <h3><a href="#">Fundamental of UX for Application design</a></h3>
                                    <p>The automated process all your website tasks. Discover tools and techniques to engage effectively with vulnerable children and young people.
                                        
                                    </p>
                                    <div className="properties__footer d-flex justify-content-between align-items-center">
                                        <div className="restaurant-name">
                                            <div className="rating">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star-half"></i>
                                            </div>
                                            <p><span>(4.5)</span> based on 120</p>
                                        </div>
                                        <div className="price">
                                            <span>$135</span>
                                        </div>
                                    </div>
                                    <a href="#" className="border-btn border-btn2">Find out more</a>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="properties properties2 mb-30">
                            <div className="properties__card">
                                <div className="properties__img overlay1">
                                    <a href="#"><img src="assets/img/gallery/featured3.png" alt="" /></a>
                                </div>
                                <div className="properties__caption">
                                    <p>User Experience</p>
                                    <h3><a href="#">Fundamental of UX for Application design</a></h3>
                                    <p>The automated process all your website tasks. Discover tools and techniques to engage effectively with vulnerable children and young people.
                                        
                                    </p>
                                    <div className="properties__footer d-flex justify-content-between align-items-center">
                                        <div className="restaurant-name">
                                            <div className="rating">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star-half"></i>
                                            </div>
                                            <p><span>(4.5)</span> based on 120</p>
                                        </div>
                                        <div className="price">
                                            <span>$135</span>
                                        </div>
                                    </div>
                                    <a href="#" className="border-btn border-btn2">Find out more</a>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="properties properties2 mb-30">
                            <div className="properties__card">
                                <div className="properties__img overlay1">
                                    <a href="#"><img src="assets/img/gallery/featured4.png" alt="" /></a>
                                </div>
                                <div className="properties__caption">
                                    <p>User Experience</p>
                                    <h3><a href="#">Fundamental of UX for Application design</a></h3>
                                    <p>The automated process all your website tasks. Discover tools and techniques to engage effectively with vulnerable children and young people.
                                        
                                    </p>
                                    <div className="properties__footer d-flex justify-content-between align-items-center">
                                        <div className="restaurant-name">
                                            <div className="rating">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star-half"></i>
                                            </div>
                                            <p><span>(4.5)</span> based on 120</p>
                                        </div>
                                        <div className="price">
                                            <span>$135</span>
                                        </div>
                                    </div>
                                    <a href="#" className="border-btn border-btn2">Find out more</a>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="properties properties2 mb-30">
                            <div className="properties__card">
                                <div className="properties__img overlay1">
                                    <a href="#"><img src="assets/img/gallery/featured5.png" alt="" /></a>
                                </div>
                                <div className="properties__caption">
                                    <p>User Experience</p>
                                    <h3><a href="#">Fundamental of UX for Application design</a></h3>
                                    <p>The automated process all your website tasks. Discover tools and techniques to engage effectively with vulnerable children and young people.
                                        
                                    </p>
                                    <div className="properties__footer d-flex justify-content-between align-items-center">
                                        <div className="restaurant-name">
                                            <div className="rating">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star-half"></i>
                                            </div>
                                            <p><span>(4.5)</span> based on 120</p>
                                        </div>
                                        <div className="price">
                                            <span>$135</span>
                                        </div>
                                    </div>
                                    <a href="#" className="border-btn border-btn2">Find out more</a>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="properties properties2 mb-30">
                            <div className="properties__card">
                                <div className="properties__img overlay1">
                                    <a href="#"><img src="assets/img/gallery/featured6.png" alt="" /></a>
                                </div>
                                <div className="properties__caption">
                                    <p>User Experience</p>
                                    <h3><a href="#">Fundamental of UX for Application design</a></h3>
                                    <p>The automated process all your website tasks. Discover tools and techniques to engage effectively with vulnerable children and young people.
                                    </p>
                                    <div className="properties__footer d-flex justify-content-between align-items-center">
                                        <div className="restaurant-name">
                                            <div className="rating">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star-half"></i>
                                            </div>
                                            <p><span>(4.5)</span> based on 120</p>
                                        </div>
                                        <div className="price">
                                            <span>$135</span>
                                        </div>
                                    </div>
                                    <a href="#" className="border-btn border-btn2">Find out more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              
            </div>
        </div>
        
    </main>
    <Footer />
  </>
    )
};

export default Topics;