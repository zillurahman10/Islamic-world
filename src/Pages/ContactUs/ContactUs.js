import React from 'react';
import contactImg from '../../assets/contact.gif'

const ContactUs = () => {
    return (
        <div className='flex justify-center mx-12 mt-12'>
            <div className='grid lg:grid-cols-2 sm:grid-cols-1'>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <p className='text-3xl'>If you're struggling with an issue.
                            <br />
                            Please send us a mail.</p>
                        <p className='text-4xl'>Email: </p>
                    </div>
                </div>
                <div class="grid h-20 flex-grow card  place-items-center">
                    <img style={{ width: '500px' }} src={contactImg} alt=""></img>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;