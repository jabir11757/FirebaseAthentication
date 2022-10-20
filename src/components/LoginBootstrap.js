import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import app from '../firebase/firebase.init';

const auth = getAuth(app);

const LoginBootstrap = () => {
    const [success, setSuccess] = useState(false);
    const [userEmail, setUserEmail] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        setSuccess(false)

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                setSuccess(true)
                console.log(user)
            })
            .catch(error => {
                console.error('error:', error)
            })
    }

    const handleEmailBlur = (event) => {
        const email = event.target.value;
        setUserEmail(email)
        console.log(email)
    }
    const handleForgetPassword = () => {
        sendPasswordResetEmail(auth, userEmail)
            .then(() => {
                alert('Password reset email sent, please check email.')
            })
            .catch(error => {
                console.error('error:', error)
            })
    }
    return (
        <div className='w-50 mx-auto'>
            <h3 className='text-success'>Please Login</h3>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput" className="form-label">Your email</label>
                    <input onBlur={handleEmailBlur} type="email" name='email' className="form-control" id="formGroupExampleInput" placeholder="Your email" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput2" className="form-label">Your Password</label>
                    <input type="password" name='password' className="form-control" id="formGroupExampleInput2" placeholder="Your password" required />
                </div>
                <button className="btn btn-primary" type="submit">Login</button>
            </form>
            {success && <p><small>Successfully logged in to the account.</small></p>}
            <p><small>New to this website ? Please <Link to="/register">Register</Link></small></p>
            <p><small>Forget password ? <button onClick={handleForgetPassword} type="button" className="btn btn-link">Reset Password</button></small></p>
        </div>
    );
};

export default LoginBootstrap;