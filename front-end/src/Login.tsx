import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

function Login() {
  const [values, setValues] = useState({
    email: '',
    password: ''
})
const navigate = useNavigate();
axios.defaults.withCredentials = true;
const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8081/login', values)
    .then(res => {
        if (res.data.Status === "Success") {
            navigate('/');
        } else {
            alert(res.data.Error);
        }
    }) 
    .then(err => console.log(err));
}

  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
        <h2>Sign-In</h2>
        <form onSubmit={handleSubmit}>
            <div className='mb-3'>
                <label htmlFor="email"><strong>Email</strong></label>
                <input type="text" placeholder='Enter Email' name='email' className='form-control rounded-0' onChange={e=> setValues({...values, email: e.target.value})}/>
            </div>
            <div className='mb-3'>
                <label htmlFor="password"><strong>Password</strong></label>
                <input type="password" name="password"  placeholder='Enter Password' className='form-control rounded-0' onChange={e=> setValues({...values, password: e.target.value})}/>
            </div>
            <button type='submit' className='btn btn-success w-100 rounded-0'> Log in </button>
            <p>You are agree to aour terms and policies</p>
            <Link to="/register" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-nome'>Create Account</Link>
        </form>
    </div>
  )
}

export default Login