// src/FormComponent.js
import React, { useState } from 'react';
import axios from 'axios';
import Toaster from '../Toaster.jsx';

//Icons
import { FaGithubAlt } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaDiscord } from "react-icons/fa";

 

export const FormComponent= () => {
    const initialFormData = {
        firstName: '',
        lastName: '',
        email: '',
        mobileNumber: '',
        message: ''
    };
    const [formData, setFormData] = useState(initialFormData);
    const [toast, setToast] = useState({ message: '', type: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

   
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/submit-form', formData);
            if (response.status === 201) {
                setToast({ message: 'Form submitted successfully', type: 'success' });
                setFormData(initialFormData);
            } else {
                setToast({ message: 'Error submitting form', type: 'error' });
            }
        } catch (error) {
            console.error('Error submitting form', error);
            setToast({ message: 'Error submitting form', type: 'error' });
        }
    };

    return (
        <div className='h-[23.5rem] w-[40rem] md:w-auto grid grid-cols-6 grid-rows-6 gap-4 p-4'>
            <div className='col-start-1 col-end-5 row-start-1 row-end-7 rounded-3xl'>

                <form onSubmit={handleSubmit} className="grid grid-cols-2 grid-row-7 h-[19.5rem] gap-4">
                    
                    <input
                        type="text"
                        name="firstName"
                        placeholder="firstname"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="col-span-1 row-span-1 rounded-3xl font-Concert text-2xl text-white bg-gradient-to-tr from-cyan-400 to-violet-500"
                    />
                    <input
                        type="text"
                        name="lastName"
                        placeholder="last name"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="col-start-2 col-span-1 row-span-1 rounded-3xl font-Concert text-2xl bg-gradient-to-tr from-cyan-400 to-violet-500"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="email.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="rounded-3xl row-span-1 font-Concert text-2xl bg-gradient-to-tr from-cyan-400 to-violet-500"
                    />
                    <input
                        type="text"
                        name="mobileNumber"
                        placeholder="mobile number"
                        
                        value={formData.mobileNumber}
                        onChange={handleChange}
                        className="rounded-3xl row-span-1 font-Concert text-2xl bg-gradient-to-tr from-cyan-400 to-violet-500"
                    />
                    <input
                        type="text"
                        name="message"
                        placeholder="Let`s Talk !"
                        value={formData.message}
                        onChange={handleChange}
                        className="col-span-2 row-span-3 rounded-3xl font-Concert text-2xl text-wrap bg-gradient-to-tr from-cyan-400 to-violet-500"
                    />
                    <button
                        type="submit"
                        className="col-span-2 row-span-1 rounded-3xl font-Concert text-2xl bg-gradient-to-tr from-cyan-400 to-violet-500"
                    >
                        Submit
                    </button>
                </form>


            {/* Toaster Notification */}
            {toast.message && (
                <Toaster
                    message={toast.message}
                    type={toast.type}
                    onClose={() => setToast({ message: '', type: '' })}
                />
            )}
            </div>

            <div className='hidden md:grid gap-4'>
            <div className='col-start-5 col-span-1 row-start-1 row-span-2 rounded-3xl bg-gradient-to-tr from-cyan-400 to-violet-500'><a href="/discord"><FaDiscord size={110} color='white' /></a></div>
            <div className='col-start-6 col-span-1 row-span-2  rounded-3xl bg-gradient-to-tr from-cyan-400 to-violet-500'><a href="https://github.com/Amey0312" target="_blank" rel="noopener noreferrer" ><FaGithubAlt size={110} color='white' /></a></div>
            <div className='col-start-5 col-span-1 row-span-2  rounded-3xl bg-gradient-to-tr from-cyan-400 to-violet-500'><a href="www.linkedin.com/in/amey-nitore" target="_blank" rel="noopener noreferrer" ><FaLinkedinIn size={110} color='white' /></a></div>
            <div className='col-start-6 col-span-1 row-start-3 row-span-2 rounded-3xl bg-gradient-to-tr from-cyan-400 to-violet-500'><a href="/gmail.com"><BiLogoGmail size={110} color='white' /></a></div>
            <div className='col-start-5 col-span-2 row-span-2  h-[10rem] rounded-3xl overflow-hidden'>
                <img src="../../img3.webp" alt="" className='mx-[0rem] my-[-4rem]' />
            </div>
            </div>
        </div>
    )

}

