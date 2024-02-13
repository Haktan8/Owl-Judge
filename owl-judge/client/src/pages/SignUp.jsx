// SignUp.jsx
import React, { useState } from "react";
import InputField from "../components/InputField.jsx";
import { signUp } from "../index.js";
import { useNavigate } from 'react-router-dom';
import './SignUp.css'




function SignUp() {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [dob, setDob] = useState("");
    const [password, setPassword] = useState("");
    const [passwordErrors, setPasswordErrors] = useState({
        length: false,
        startWithLetter: false,
        containsLetter: false,
        containsNumber: false,
        containsSpecial: false
    });

    const validatePassword = (pass) => {
        setPasswordErrors({
            length: pass.length >= 8,
            startWithLetter: /^[a-zA-Z]/.test(pass),
            containsLetter: /[a-zA-Z]/.test(pass),
            containsNumber: /\d/.test(pass),
            containsSpecial: /[!@#$%^&*(),.?":{}|<>]/.test(pass)
        });
    };
    
    const isPasswordValid = () => {
        return Object.values(passwordErrors).every(val => val === true);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if(!isPasswordValid()) {
            alert("Please ensure your password meets all the requirements.")
            return;
        }

        // Call the signUp function with the form data
        await signUp(email, password, firstName, lastName, dob);

        // Redirect back to sign in page
        navigate('../SignIn');
    };

    return (
        <div className="container h-100">
            <div className="row h-100 justify-content-center align-items-center">
                <div className="col-md-6">
                    <div className="text-center">
                    

                        <h2>New User Account</h2>
                    </div>
                    <div className="border p-4">
                        <form onSubmit={handleSubmit}>
                            <InputField
                                label="First Name"
                                type="text"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                            <InputField
                                label="Last Name"
                                type="text"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                            <InputField
                                label="Date of Birth"
                                type="date"
                                value={dob}
                                onChange={(e) => setDob(e.target.value)}
                            />
                            <InputField
                                label="Email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <InputField
                                label="Password"
                                type="password"
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                    validatePassword(e.target.value);
                                }}
                            />
                            <div className="password-requirements">
                                <p>Password must meet the following requirements:</p>
                                <ul>
                                    <li className={passwordErrors.length ? 'valid': ''}>At least 8 characters.</li>
                                    <li className={passwordErrors.startWithLetter ? 'valid': ''}>Start with a letter.</li>
                                    <li className={passwordErrors.containsLetter ? 'valid': ''}>Contain at least one letter.</li>
                                    <li className={passwordErrors.containsNumber ? 'valid': ''}>Contain at least one number.</li>
                                    <li className={passwordErrors.containsSpecial ? 'valid': ''}>Contain at least one special character.</li>
                                </ul>
                            </div>
                            <div className="text-center">
                                <button type="submit" className="btn btn-primary">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;