import { useState } from 'react';
import AppLayout from "../AppLayout";
import { trans } from "../../utils/translation";

export default function ContactPage({ lang, setLang }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const setEmailHandler = (e) => {
        setEmail(e.target.value);
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const contact = {
            name,
            email,
            phone,
            message
        };
        console.log(contact);
    }

    const title = trans('page.contactUs.title', lang);

    return (
        <AppLayout setLang={setLang} title={title} shortDec="Have questions? I have answers.">
            <div className="col-md-10 col-lg-8 col-xl-7">
                <p>Want to get in touch? Fill out the form below to send me a message and I will get back to you as soon as possible!</p>
                <div className="my-5">
                    <form onSubmit={onSubmitHandler}>
                        <div className="form-floating">
                            <input value={name} onChange={(e) => setName(e.target.value)} className="form-control"  type="text" placeholder="Enter your name..." />
                            <label for="name">Name</label>
                            <div className="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                        </div>
                        <div className="form-floating">
                            <input value={email} onChange={setEmailHandler} className="form-control" type="email" placeholder="Enter your email..."  />
                            <label for="email">Email address</label>
                            <div className="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                            <div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                        </div>
                        <div className="form-floating">
                            <input value={phone} onChange={(e) => setPhone(e.target.value)} className="form-control" type="tel" placeholder="Enter your phone number..."/>
                            <label for="phone">Phone Number</label>
                            <div className="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
                        </div>
                        <div className="form-floating">
                            <textarea onChange={(e) => setMessage(e.target.value)} className="form-control" placeholder="Enter your message here...">{message}</textarea>
                            <label for="message">Message</label>
                            <div className="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
                        </div>
                        <br />
                        <div className="d-none" id="submitSuccessMessage">
                            <div className="text-center mb-3">
                                <div className="fw-bolder">Form submission successful!</div>
                                To activate this form, sign up at
                                <br />
                                <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                            </div>
                        </div>
                        <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3">Error sending message!</div></div>
                        <button className="btn btn-primary text-uppercase" type="submit">Send</button>
                    </form>
                </div>
            </div>
        </AppLayout>
    );
};