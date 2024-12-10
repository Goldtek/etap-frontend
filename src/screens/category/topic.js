import React from "react";
import { DashboardHeader, Footer } from "../../custom";

const Topic = ()=> {

    React.useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
    }, []);

    return (
    <>
        <DashboardHeader title="Topic" />
        <section className="blog_area single-post-area section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 posts-list">
                        <div className="single-post">
                        <div className="feature-img">
                            <img className="img-fluid" src="assets/img/blog/single_blog_1.png" alt="" />
                        </div>
                        <div className="blog_details">
                            <h2 style={{color: '#2d2d2d' }}>Second divided from form fish beast made every of seas
                                all gathered us saying he our
                            </h2>
                           
                            <p className="excert">
                                MCSE boot camps have its supporters and its detractors. Some people do not understand why you
                                should have to spend money on boot camp when you can get the MCSE study materials yourself at a
                                fraction of the camp price. However, who has the willpower
                            </p>
                            <p>
                                MCSE boot camps have its supporters and its detractors. Some people do not understand why you
                                should have to spend money on boot camp when you can get the MCSE study materials yourself at a
                                fraction of the camp price. However, who has the willpower to actually sit through a
                                self-imposed MCSE training. who has the willpower to actually
                            </p>
                            
                    
                        </div>
                        </div>
                    
            
            </div>

            </div>
            </div>
        </section>
    <Footer />
  </>
    )
};

export default Topic;