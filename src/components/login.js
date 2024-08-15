import React from "react";
import "./login.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link, Navigate, useNavigate } from "react-router-dom";


const Login=()=>{
    return(
        <div className="d-flex justify-content-center allign-items-center vh-100 bg-light">
            <div className="card" style={{width:'350px'}}>
            <h1 className="text-center mb-4">Login</h1>
            <form>
                <div className="mb-3">
                <label for="email" className="form-label"></label>
                <input type="email" className="form-control" id="email" placeholder="Email"/>
                </div>
                <div className="input-group">
                    <label for="password" className="form-label"></label>
                    <input type="password" className="form-control" id="password" placeholder="Password"/>
                    <button className="btn btn outline-secondary" type="button">
                        <i className="bi bi-eye-slash"></i>
                    </button>
                </div>
                <div className="mb-3 text-center">
                    <a href="#" className="link-primary">Forgot password?</a>
                </div>
                <Link to="Page">
                <div className="d-grid">
                    <button type="submit" className="btn btn-primary">Login</button>
                </div>
                </Link>
                
            </form>
        </div>
        </div>
    )
}
export default Login;