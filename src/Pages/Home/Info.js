import React, { useEffect, useState } from 'react';
import quran from '../../assets/al-quran.png'
import hadis from '../../assets/hadis.png'
import { Link } from 'react-router-dom';

const Info = () => {


    return (
        <>
            <h1 className='text-4xl font-bold text-center mt-12'>Make Swab</h1>
            <div className='grid lg:grid-cols-3 gap-16 px-12 sm:grid-cols-1 pt-10'>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={quran} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Full Al-Quran</h2>
                        <p></p>
                        <div className="card-actions">
                            <Link to="/quran"><button className="btn btn-primary">Read</button></Link>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={hadis} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Read Hadis</h2>
                        <p></p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Read</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={quran} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Full Al-Quran</h2>
                        <p></p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Read</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={quran} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Full Al-Quran</h2>
                        <p></p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Read</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={quran} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Full Al-Quran</h2>
                        <p></p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Read</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Info;