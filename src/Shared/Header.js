import React from 'react';
import { Link } from 'react-router-dom';
import auth from '../firebase.init';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';

const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    const [signOut, outLoading, outError] = useSignOut(auth);


    let email = user?.email.slice(0, 1)



    const menuItems = <>
        <li className='font-bold'><Link to="/">Home</Link></li>
        <li className='font-bold'><Link to="/reviews">Reviews</Link></li>
        <li className='font-bold'><Link to="/about">About Us</Link></li>
        <li className='font-bold'><Link to="/contact">Contact Us</Link></li>
        {
            user ?
                <div class="dropdown dropdown-end">
                    <label tabindex="0" class="btn m-1">{user?.displayName ? `${user?.displayName}` : `${email}`}</label>
                    <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to="/profile" className='font-bold'>Profile</Link></li>
                        <li><button onClick={() => signOut()} className='font-bold'>Sign Out</button></li>
                    </ul>
                </div>
                :
                <li className='font-bold'><Link to="/login">Login</Link></li>
        }

    </>
    return (
        <div className='px-12'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Islamic World دار الإسْلامِ</a>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {menuItems}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;