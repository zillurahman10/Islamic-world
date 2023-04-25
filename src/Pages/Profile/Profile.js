import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Profile = () => {
    const [user, loading, error] = useAuthState(auth);
    let email = user?.email.slice(0, 1)
    console.log(user);
    return (
        <div className='flex justify-center'>
            <div style={{ width: '500px' }} className="card bg-base-100 shadow-xl bg-gradient-to-r from-gray-500 to-gray-300">
                <figure className="px-10 pt-10">
                    <div className="avatar">
                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={user?.photoURL ? `${user?.photoURL}` : email} alt="" />
                        </div>
                    </div>
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Name: {user?.displayName || email}</h2>
                    <p className='font-bold'>Email: {user?.email}</p>
                </div>
            </div>
        </div>
    );
};

export default Profile;