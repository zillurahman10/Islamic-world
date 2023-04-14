import React from 'react';
import contactImg from '../../assets/contact.gif'

const ContactUs = () => {
    return (
        <div>
            <div class="flex justify-center items-center w-full pt-24">
                <div class="grid h-20 flex-grow card text-center">
                    <p className='text-3xl'>If you're struggling with an issue.
                        <br />
                        Please send us a mail.</p>
                    <p className='text-4xl'>Email: </p>
                </div>
                <div class="grid h-20 flex-grow card  place-items-center">
                    <img style={{ width: '500px' }} src={contactImg} alt=""></img>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;