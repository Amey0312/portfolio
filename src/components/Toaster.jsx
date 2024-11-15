// src/Toaster.js
import React, { useState, useEffect } from 'react';

function Toaster({ message, type, duration = 3000, onClose }) {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, duration);
        return () => clearTimeout(timer);
    }, [duration, onClose]);

    if (!message) return null;

    return (
        <div
            className={`fixed top-4 right-4 px-4 py-2 rounded-md shadow-md text-white text-lg ${
                type === 'success' ? 'bg-green-500' : 'bg-red-500'
            }`}
        >
            {message}
        </div>
    );
}

export default Toaster;
