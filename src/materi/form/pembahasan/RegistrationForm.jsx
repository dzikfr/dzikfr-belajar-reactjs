import React, { useState } from 'react';
import Validator from 'validatorjs';

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validateForm = () => {
        let validation = new Validator(formData, {
            username: 'required',
            email: 'required|email',
            password: 'required|min:6'
        });

        if (validation.fails()) {
            setErrors(validation.errors.all());
            return false;
        } else {
            setErrors({});
            return true;
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log('Data:', formData);
            alert('Registrasi Berghasil');
        } else {
            console.log('Masukkan Data yang Benar')
            alert('Masukkan Data yang Benar');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Username:</label>
                <input
                    placeholder='username'
                    type='text'
                    name='username'
                    value={formData.username}
                    onChange={handleChange}
                />
                {errors.username && <p>{errors.username}</p>}
            </div>
            <div>
                <label>Email:</label>
                <input
                    placeholder='email'
                    type='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                />
                {errors.email && <p>{errors.email}</p>}
            </div>
            <div>
                <label>Password:</label>
                <input
                    placeholder='password'
                    type='password'
                    name='password'
                    value={formData.password}
                    onChange={handleChange}
                />
                {errors.password && <p>{errors.password}</p>}
            </div>
            <button type='submit'>Buat Akun</button>
        </form>
    );
};

export default RegistrationForm;