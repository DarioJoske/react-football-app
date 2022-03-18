import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { Button,Input } from 'antd'
import "../App.css"

import {
    auth,
    registerWithEmailAndPassword,
    signInWithGoogle,
  } from "../firebase/firebase";

const Register = () => {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();

    const register = () => {
        if (!name) alert("Please enter name");
        registerWithEmailAndPassword(name, email, password);
      };

    useEffect(() => {
        if (loading) return;
        if (user) navigate.replace("/home");
      }, [user, loading]);


  return (
    <div className="register">
        <div className="register-container">
            <Input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full Name"
            />
            <Input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E-mail Address"
            />
            <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
            />
            <Button onClick={register}>
                Register
            </Button>
            <Button
                type="primary"
                onClick={signInWithGoogle}
            >
                Register with Google
            </Button>
            <div>
                Already have an account? <Link to="/">Login</Link> now.
            </div>
      </div>
    </div>
  )
}

export default Register