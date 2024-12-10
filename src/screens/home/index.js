import React from "react";
import { Link } from "react-router-dom";
import { Header, Footer  } from "../../custom";


const Home = () => {

    React.useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
    }, []);
    
    return (
        <>
            <Header />
            <main id="main" >
            
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
   
        <div className="services-area">
            <div className="container">
                <div className="row justify-content-sm-center">
                    <div className="col-lg-4 col-md-6 col-sm-8">
                        <div className="single-services mb-30">
                            <div className="features-icon">
                                <img src="assets/img/icon/icon1.svg" alt="" />
                            </div>
                            <div className="features-caption">
                                <h3>Unbeatable prices</h3>
                                <p> Over 10,000 tutors and 2,500 subjects. </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-8">
                        <div className="single-services mb-30">
                            <div className="features-icon">
                                <img src="assets/img/icon/icon2.svg" alt="" />
                            </div>
                            <div className="features-caption">
                                <h3>Expert instructors</h3>
                                <p> Find Expert tutors online</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-8">
                        <div className="single-services mb-30">
                            <div className="features-icon">
                                <img src="assets/img/icon/icon3.svg" alt="" />
                            </div>
                            <div className="features-caption">
                                <h3>Life time access</h3>
                                <p>100% satisfaction guaranteed</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
      

        <div className="topic-area section-padding40">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-7 col-lg-8">
                        <div className="section-tittle text-center mb-55">
                            <h2>Explore top subjects</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="single-topic text-center mb-30">
                            <div className="topic-img">
                                <img src="assets/img/gallery/topic1.png" alt="" />
                                <div className="topic-content-box">
                                    <div className="topic-content">
                                        <h3><a href="#">Programing</a></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="single-topic text-center mb-30">
                            <div className="topic-img">
                                <img src="assets/img/gallery/topic2.png" alt="" />
                                <div className="topic-content-box">
                                    <div className="topic-content">
                                        <h3><a href="#">Programing</a></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="single-topic text-center mb-30">
                            <div className="topic-img">
                                <img src="assets/img/gallery/topic3.png" alt="" />
                                <div className="topic-content-box">
                                    <div className="topic-content">
                                        <h3><a href="#">Programing</a></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="single-topic text-center mb-30">
                            <div className="topic-img">
                                <img src="assets/img/gallery/topic4.png" alt="" />
                                <div className="topic-content-box">
                                    <div className="topic-content">
                                        <h3><a href="#">Programing</a></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="single-topic text-center mb-30">
                            <div className="topic-img">
                                <img src="assets/img/gallery/topic5.png" alt="" />
                                <div className="topic-content-box">
                                    <div className="topic-content">
                                        <h3><a href="#">Programing</a></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="single-topic text-center mb-30">
                            <div className="topic-img">
                                <img src="assets/img/gallery/topic6.png" alt="" />
                                <div className="topic-content-box">
                                    <div className="topic-content">
                                        <h3><a href="#">Programing</a></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="single-topic text-center mb-30">
                            <div className="topic-img">
                                <img src="assets/img/gallery/topic7.png" alt="" />
                                <div className="topic-content-box">
                                    <div className="topic-content">
                                        <h3><a href="#">Programing</a></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="single-topic text-center mb-30">
                            <div className="topic-img">
                                <img src="assets/img/gallery/topic8.png" alt="" />
                                <div className="topic-content-box">
                                    <div className="topic-content">
                                        <h3><a href="#">Programing</a></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              
            </div>
        </div>
    
        <section className="about-area3 fix">
            <div className="support-wrapper align-items-center">
                <div className="right-content3">
                    <div className="right-img">
                        <img src="assets/img/gallery/about3.png" alt="" />
                    </div>
                </div>
                <div className="left-content3">
                    <div className="section-tittle section-tittle2 mb-20">
                        <div className="front-text">
                            <h2 className="">Learner outcomes on courses you will take</h2>
                        </div>
                    </div>
                    <div className="single-features">
                        <div className="features-icon">
                            <img src="assets/img/icon/right-icon.svg" alt="" />
                        </div>
                        <div className="features-caption">
                            <p>Techniques to engage effectively with vulnerable children and young people.</p>
                        </div>
                    </div>
                    <div className="single-features">
                        <div className="features-icon">
                            <img src="assets/img/icon/right-icon.svg" alt="" />
                        </div>
                        <div className="features-caption">
                            <p>Join millions of people from around the world
                            learning together.</p>
                        </div>
                    </div>
                    <div className="single-features">
                        <div className="features-icon">
                            <img src="assets/img/icon/right-icon.svg" alt="" />
                        </div>
                        <div className="features-caption">
                            <p>Join millions of people from around the world learning together.
                            Online learning is as easy and natural.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
     
       
          
            </main>
            <Footer />
        </>
    )
}

export default Home;