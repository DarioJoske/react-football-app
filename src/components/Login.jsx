import React, { useState,useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { auth, signInWithEmailAndPassword, signInWithGoogle } from "../firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Spin,Button,Input } from 'antd';
import "../App.css"

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (loading) {
            <Spin />
          return;
        }
        if (user) navigate("/home");
      }, [user, loading]);


  return (
    <div className='login'>
      <div className="login-container">
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
        <Button
            onClick={() => signInWithEmailAndPassword(email, password)}
        >
            Login
        </Button>
        <Button type='primary' onClick={signInWithGoogle}>
            Login with Google
        </Button>
        <div>
            <Link to="/reset">Forgot Password</Link>
        </div>
        <div>
            Don't have an account? <Link to="/register">Register</Link> now.
        </div>
      </div>  
    </div>
  );
}

export default Login