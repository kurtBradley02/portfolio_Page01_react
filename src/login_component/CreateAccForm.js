import React, { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAzkb3GrJITeh-tSo0XLl-umeBKkZ7zay4",
    authDomain: "portfoliologin01react.firebaseapp.com",
    projectId: "portfoliologin01react",
    storageBucket: "portfoliologin01react.appspot.com",
    messagingSenderId: "1093894338558",
    appId: "1:1093894338558:web:9ad9e17ad185a546a632af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get the auth instance
const auth = getAuth(app);

export default function CreateAccForm() {

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');


    const submit = async (e) => {
        e.preventDefault();

        // Check if passwords match
        if (password !== confirmPassword) {
            alert("Passwords don't match");
            return;
        }

        try {
            // Create a new user with email and password
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);


            // User registration successful
            alert('User registered successfully. Please check your email for verification.');

            // Clear form fields
            setFullName('');
            setEmail('');
            setPassword('');

            setConfirmPassword('');

        } catch (error) {
            console.error('Error registering user:', error);
            alert('Error registering user. Please try again.');
        }
    };


    return (
        <div>
            <div className='login-card'>
                <h4 class="card-title">Create New Account</h4>
                <h5 class="card-title thin">*Fill up all fields</h5>

                <div class="input-container">
                    <input type="text" id="fullname" class="text-field" required value={fullName}
                        onChange={(e) => setFullName(e.target.value)}></input>
                    <label class="floating-label">Full Name</label>
                </div>

                <div class="input-container">
                    <input type="text" id="email" class="text-field" required value={email}
                        onChange={(e) => setEmail(e.target.value)}></input>
                    <label class="floating-label">Email Address</label>
                </div>

                <div class="input-container">
                    <input type="password" id="password" class="text-field" required value={password}
                        onChange={(e) => setPassword(e.target.value)}></input>
                    <label class="floating-label">Password</label>
                </div>

                <div class="input-container">
                    <input type="password" id="confirmPassword" class="text-field" required value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}></input>
                    <label class="floating-label">Confirm Password</label>
                </div>

                <div class="button-container">
                    <button class="register-button" onClick={submit}>Create Account</button>
                </div>

            </div>
        </div>
    );
}