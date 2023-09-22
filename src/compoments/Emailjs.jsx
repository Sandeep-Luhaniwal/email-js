import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Emailjs = () => {
    const form = useRef();
    

    const sendEmail = (e) => {
        e.preventDefault();

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
                },
                (error) => {
                    console.log(error.text);
                }
            );

    };
    return (
        <div>
            <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" />
            </form>
        </div>
    );
};
export default Emailjs