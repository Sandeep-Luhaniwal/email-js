import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Submittwo = () => {
    const form = useRef();
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const [errors, setErrors] = useState({})

    const handleChange = (e) => {
        e.preventDefault()
        const { name, value } = e.target;
        setFormData({
            ...formData, [name]: value
        })

    }

    const sendEmail = (e) => {
        e.preventDefault()
        const validationErrors = {}
        if (!formData.username.trim()) {
            validationErrors.username = "username is required"
        }

        if (!formData.email.trim()) {
            validationErrors.email = "email is required"
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            validationErrors.email = "email is not valid"
        }

        if (!formData.password.trim()) {
            validationErrors.password = "password is required"
        } else if (formData.password.length < 6) {
            validationErrors.password = "password should be at least 6 char"
        }

        if (formData.confirmPassword !== formData.password) {
            validationErrors.confirmPassword = "password not matched"
        }

        setErrors(validationErrors)

        if (Object.keys(validationErrors).length === 0) {
            emailjs
                .sendForm(
                    "service_j35diur",
                    "template_unv2gas",
                    form.current,
                    "RD5_7T5hu6SDQxhiW"
                )
                .then(
                    (result) => {
                        console.log(result.text);
                        form.current.reset();
                    },
                    (error) => {
                        console.log(error.text);
                        form.current.reset();
                    }
                );
            alert("Form Submitted successfully")
            e.target.reset();
        }



    }


    return (
        <>
            <div className='container'>
                <form ref={form} onSubmit={sendEmail}>
                    <div>
                        <label>UserName:</label><br />
                        <input type="text"
                            name='username'
                            placeholder='username'
                            autoComplete='off'
                            onChange={handleChange}
                        />
                        {errors.username && <span>{errors.username}</span>}
                    </div>
                    <div>
                        <label>Email:</label><br />
                        <input type="email"
                            name='email'
                            placeholder='examle.@gmail.com'
                            autoComplete='off'
                            onChange={handleChange}
                        />
                        {errors.email && <span>{errors.email}</span>}
                    </div>
                    <div>
                        <label>Password</label><br />
                        <input type="password"
                            name='password'
                            placeholder='******'
                            onChange={handleChange}
                        />
                        {errors.password && <span>{errors.password}</span>}
                    </div>
                    <div>
                        <label>Confirm Password</label><br />
                        <input type="password"
                            name='confirmPassword'
                            placeholder='******'
                            onChange={handleChange}
                        />
                        {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
                    </div>
                    <button type='submit'>submit</button>
                </form>
                <div id="datas">
                    <div className="popup">
                        <p>Submit</p>
                        <p className="text">Thanku You</p>
                        <div>
                            <button>Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Submittwo