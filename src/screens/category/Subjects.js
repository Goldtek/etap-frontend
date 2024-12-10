import React, { useState } from "react";
import axios from "axios";
import {  DashboardHeader, Footer } from "../../custom";

const Subjects = ()=> {
    const [subjects, SetSubjects] = useState('');
    
    const fetchSubjects = async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/subjects');
            const { data } = response;
            SetSubjects(data)
        } catch (error) {
            alert('Error fetcing Subjects!');
        }
    };

    React.useEffect(() => {
        fetchSubjects();
        window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
    }, []);

    return (
    <>
        
    <main>
       <DashboardHeader title="Subjects" />
       
        <div className="courses-area section-padding40 fix">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-7 col-lg-8">
                        <div className="section-tittle text-center mb-55">
                            <h2>Subjects</h2>
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
                                    <h3><a href="#">Fundamental of UX for Application design</a></h3>
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

export default Subjects;