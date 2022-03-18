import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { auth, sendPasswordResetEmail } from "../firebase/firebase";
import { Button,Input } from 'antd'
import "../App.css"

const Reset = () => {
    const [email, setEmail] = useState("");
    const [user, loading ] = useAuthState(auth);
    const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (user) navigate("/home");
  }, [user, loading,navigate]);

  return (
    <div className="reset">
        <div className="reset-container">
            <Input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E-mail Address"
            />
            <Button
                type="primary"
                onClick={() => sendPasswordResetEmail(email)}
            >
                Send password reset email
            </Button>
            <div>
                Don't have an account? <Link to="/register">Register</Link> now.
            </div>
      </div>
    </div>
  )
}

export default Reset