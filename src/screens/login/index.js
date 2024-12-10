import React, { useState } from "react";
import axios from "axios";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        if (password !=='' || email !== '') {
            try {
                const response = await axios.post('http://localhost:3000/api/login', { email, password });
                localStorage.setItem('token', response.data.token); 
                alert('Login successful!');
            } catch (error) {
                alert('Login failed!');
            }
        }
    };

    return (
        <>
         <main className="login-body" data-vide-bg="assets/img/login-bg.mp4">
   
        <form className="form-default" action="login-bg.mp4" >
            
            <div className="login-form">
                <div className="logo-login">
                    <a href="index.html"><img src="assets/img/logo/loder.png" alt="" /></a>
                </div>
                <h2>Login Here</h2>
                <div className="form-input">
                    <label for="name">Email</label>
                    <input  type="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="form-input">
                    <label for="name">Password</label>
                    <input type="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="form-input pt-30">
                    <input type="submit" name="submit" value="login" onClick={handleLogin} />
                </div>
                
                
                <a href="#" className="forget">Forget Password</a>
             
                <a href="register.html" className="registration">Registration</a>
            </div>
        </form>
    </main>
        </>   
    )
}

export default Login;