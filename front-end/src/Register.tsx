import { React, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Register() {
    const [values, setValues] = useState({
        nome: '',
        email: '',
        password: ''
    })
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8081/register', values)
        .then(res => {
            if (res.data.Status === "Success") {
                navigate('/login');
            } else {
                alert("Error");
            }
        }) 
        .then(err => console.log(err));
    }
  return (
    <div className="d-flex justify-content-center align-items-center text-bg-primary vh-100">
        <div className="text-bg-primary p-3 rounded w-25">
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name"><strong>Name</strong></label>
                    <input type="text" placeholder="Enter name" name="name" className="form-control rounded-0" onChange={e => setValues({...values, nome: e.target.value})}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="email"><strong>Email</strong></label>
                    <input type="email" placeholder="Enter email" name="email" className="form-control rounded-0" onChange={e => setValues({...values, email: e.target.value})}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="password"><strong>Password</strong></label>
                    <input type="password" placeholder="Enter password" name="password" className="form-control rounded-0" onChange={e => setValues({...values, password: e.target.value})}/>
                </div>
                <button type="submit" className="btn btn-success w-100 rounded-0"> Sign up </button>
                <p>You are agree to aour terms and policies </p>
                <Link to="/login" className="btn btn=default border w-100 bg-light rounded-0 text-decoration-nome">Log in</Link>
            </form>
        </div>
    </div>
  )
}

export default Register