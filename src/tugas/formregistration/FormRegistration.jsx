import React, {useState} from "react";
import Validator from "validatorjs";

const FormRegistration = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
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
            password: 'required|min:6',
            confirmPassword: 'required|same:password'
        });

        if (validation.fails()) {
            setErrors(validation.errors.all());
            return false;
        } else {
            setErrors({});
            return true;
        }
    };

    const submitHandle = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log('Data:', formData);
            alert(`Registrasi Berhasil, Selamat Datang ${formData.username}`);
            setFormData({
                username: '',
                email: '',
                password: '',
                confirmPassword: ''
            });
        } else {
            alert('Masukkan Data dengan Benar');
            console.log('ada kesalahan', errors)
        }
    };

    return(
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                        <h3 className="text-center">Tugas Form Registrasi & Validasi</h3>
                        <form onSubmit={submitHandle}>
                        <label className="form-label">Username</label>
                        <input 
                            type="text" 
                            placeholder="Masukkan Username"
                            name="username"
                            className="form-control"
                            value={formData.username}
                            onChange={handleChange}
                        />
                        <br/>
                        <label className="form-label">Email</label>
                        <input
                            type="email"
                            placeholder="Masukkan Email"
                            name="email"
                            className="form-control"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <br/>
                        <label className="form-label">Password</label>
                        <input
                            type="password"
                            placeholder="Buat Password"
                            name="password"
                            className="form-control"
                            value={formData.password}
                            onChange={handleChange}
                        />
                        <br/>
                        <label className="form-label">Konfirmasi Password</label>
                        <input
                            type="password"
                            placeholder="Konfirmasi Password"
                            name="confirmPassword"
                            className="form-control"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                        />
                        <br/>
                        <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormRegistration