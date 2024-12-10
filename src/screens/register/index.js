
import React,  { useState } from "react";
import axios from "axios";
import { Header, Footer } from '../../custom'

const Registration = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const Signup = async () => {
        if(name !== '' || (password !=='' && password.length >= 6)  || email !== '') {
            try {
                const response = await axios.post('http://localhost:3000/api/register', { email, password, name }) 
                alert('Registration successful!');
            } catch (error) {
                alert('Registration failed!');
            }
        }
    };

    return (
        <main className="login-body" data-vide-bg="assets/img/login-bg.mp4">
            <form className="form-default" action="login-bg.mp4">
                
                <div className="login-form">
                    <div className="logo-login">
                        <a href="index.html"><img src="assets/img/logo/loder.png" alt="" /></a>
                    </div>
                    <h2>Registration Here</h2>

                    <div className="form-input">
                        <input  type="text" name="name" placeholder="Full name" value={name} onChange={(e) => setName(e.target.value)}  />
                    </div>
                    <div className="form-input">
                        <input type="email" name="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)}  />
                    </div>
                    <div className="form-input">
                        <input type="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}  />
                    </div>
                    
                    <div className="form-input pt-30">
                        <input type="submit" name="submit" value="Registration" onClick={Signup} />
                    </div>
                    <a href="login.html" className="registration">login</a>
                </div>
            </form>
        </main>   
    )
}

export default Registration;