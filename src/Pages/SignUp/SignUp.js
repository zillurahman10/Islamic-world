import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import signUp from '../../assets/signup.gif'
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';

const SignUp = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const handleCreateUser = e => {
        e.preventDefault()
        const email = e.target.email.value
        console.log(email);
    }

    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <img src={signUp} alt=""></img>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={() => handleCreateUser()} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name='password' type="text" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input name='confirm password' type="text" placeholder="Confirm password" className="input input-bordered" />

                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" value="Sign Up" className='btn btn-primary'></input>
                            </div>

                            <p className='text-center'>----------  Or  ----------</p>
                            <button onClick={() => signInWithGoogle()} className='btn btn-neutral'>Sign in with GOOGLE</button>
                            <p className='pt-5 text-center'>Already in Al-Quran? <Link className='reset-btn' to="/login">Login now</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;