import React from 'react';
import zillur from '../../assets/zillur.jpg'
import ReviewForm from './ReviewForm';

const Reviews = () => {
    return (
        <>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-12 p-12'>
                <div className="card bg-base-100 shadow-xl bg-gradient-to-r from-gray-500 to-gray-300">
                    <figure className="px-10 pt-10">
                        <div className="avatar">
                            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={zillur} alt="" />
                            </div>
                        </div>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Md. Zillur Rahman</h2>
                        <p>It is a great website where people can read Quran and Hadith easily</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl bg-gradient-to-r from-gray-500 to-gray-300">
                    <figure className="px-10 pt-10">
                        <div className="avatar">
                            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={zillur} alt="" />
                            </div>
                        </div>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Md. Zillur Rahman</h2>
                        <p>It is a great website where people can read Quran and Hadith easily</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl bg-gradient-to-r from-gray-500 to-gray-300">
                    <figure className="px-10 pt-10">
                        <div className="avatar">
                            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={zillur} alt="" />
                            </div>
                        </div>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Md. Zillur Rahman</h2>
                        <p>It is a great website where people can read Quran and Hadith easily</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl bg-gradient-to-r from-gray-500 to-gray-300">
                    <figure className="px-10 pt-10">
                        <div className="avatar">
                            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={zillur} alt="" />
                            </div>
                        </div>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Md. Zillur Rahman</h2>
                        <p>It is a great website where people can read Quran and Hadith easily</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl bg-gradient-to-r from-gray-500 to-gray-300">
                    <figure className="px-10 pt-10">
                        <div className="avatar">
                            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={zillur} alt="" />
                            </div>
                        </div>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Md. Zillur Rahman</h2>
                        <p>It is a great website where people can read Quran and Hadith easily</p>
                    </div>
                </div>
            </div>
            <ReviewForm></ReviewForm>
        </>

    );
};

export default Reviews;