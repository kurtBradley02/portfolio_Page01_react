import React, { useState } from 'react';
import './LoginForm.css';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);

    const navigate = useNavigate();

    const auth = getAuth();

    const login = async (e) => {
        e.preventDefault();

        try {
            // Sign in the user with email and password
            await signInWithEmailAndPassword(auth, email, password);

            // If login is successful, you can perform any desired actions, such as redirecting the user.
            alert('Login successful');

            navigate('/Dashboard')

            // Clear the form fields
            setEmail('');
            setPassword('');



        } catch (error) {
            console.error('Error logging in:', error);
            alert('Error logging in. Please check your email and password and try again.');
        }
    };


    return (
        <div>

            <div className='login-card'>
                <h4 class="card-title">Sign in</h4>
                <h5 class="card-title thin">Use Registered Account</h5>

                <div class="input-container">
                    <input type="text" id="email" class="text-field" required value={email}
                        onChange={(e) => setEmail(e.target.value)}></input>
                    <label for="email" class="floating-label">Email Address</label>
                </div>

                <div class="input-container">
                    <input type="password" id="email" class="text-field" required value={password}
                        onChange={(e) => setPassword(e.target.value)}></input>
                    <label for="email" class="floating-label">Password</label>
                </div>

                <p class="Lorem2-text">Practice login form created with React. See link for source code.
                    <a href="https://github.com/kurtBradleyJocson/portfolio_login01_react" class="learn-more-link">git repo</a></p>

                <div class="button-container">
                    <a href="/Register" class="create-account-link">Create account</a>
                    <button class="login-button" onClick={login}>Login</button>
                </div>

            </div>

        </div>
    );

}