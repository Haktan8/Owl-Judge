// ForgotPassword.jsx
import React, { useState } from "react";
import InputField from "../components/InputField";

function ForgotPassword() {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle forgot password logic here
        // You can use the state variables (email and username) to initiate the password reset process.
    };

    return (
        <div className="container h-100">
            <div className="row h-100 justify-content-center align-items-center">
                <div className="col-md-6">
                    <div className="text-center">
                    
                        <h2>Forgot Password</h2>
                    </div>
                    <div className="border p-4">
                        <form onSubmit={handleSubmit}>
                            <InputField
                                label="Email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <InputField
                                label="Username"
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <div className="text-center">
                                <button type="submit" className="btn btn-primary">
                                    Reset Password
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ForgotPassword;
