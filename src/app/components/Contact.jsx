"use client"
import { Mail } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
    const [result, setResult] = useState("");
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending...");

        const formDataToSend = new FormData();
        formDataToSend.append("access_key", "dae51535-761a-47c4-a10f-400daaf489d3");
        formDataToSend.append("name", formData.name);
        formDataToSend.append("email", formData.email);
        formDataToSend.append("message", formData.message);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formDataToSend,
            });

            const data = await response.json();
            if (data.success) {
                setResult("Form Submitted Successfully");
                setFormData({ name: '', email: '', message: '' }); // Clear input fields
            } else {
                setResult(data.message || "Error submitting the form");
            }
        } catch (error) {
            setResult("An error occurred. Please try again.");
        }

        setTimeout(() => {
            setResult("");
        }, 3000);
    };

    return (
        <section className="mb-20 flex flex-wrap-reverse justify-center items-center gap-8" id="contact">
            <div className='max-w-[600px] lg:w-[550px]'>
                <form name="contact-form" onSubmit={onSubmit} className="m-5">
                    <h2 className="text-2xl mb-5 font-medium">Let's Get in Touch!</h2>
                    <div className="grid gap-6">
                        <div className="relative z-0 w-full mb-5 group">
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="block py-2.5 w-full text-sm bg-transparent border-b border-indigo-800 focus:outline-none focus:border-violet-600 peer"
                                placeholder=" "
                                required
                            />
                            <label
                                htmlFor="name"
                                className="absolute text-sm transform -translate-y-6 scale-75 top-3 peer-focus:text-violet-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Name
                            </label>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="block py-2.5 w-full text-sm bg-transparent border-b border-indigo-800 focus:outline-none focus:border-violet-600 peer"
                                placeholder=" "
                                required
                            />
                            <label
                                htmlFor="email"
                                className="absolute text-sm transform -translate-y-6 scale-75 top-3 peer-focus:text-violet-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Email address
                            </label>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <textarea
                                name="message"
                                id="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="block py-2.5 w-full text-sm bg-transparent border-b border-indigo-800 focus:outline-none focus:border-violet-600 peer"
                                placeholder=" "
                                required
                            ></textarea>
                            <label
                                htmlFor="message"
                                className="absolute text-sm transform -translate-y-6 scale-75 top-3 peer-focus:text-violet-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Message
                            </label>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="bg-gradient-to-r from-violet-500 via-indigo-600 to-blue-800 py-2 px-3 rounded-lg text-white"
                    >
                        Send
                    </button>
                    {result && <div className="mt-4 text-sm">{result}</div>}
                    <div className='mt-8 border-t pt-4 flex flex-col gap-6'>
                        <p className='text-sm font-extralight'>Fill out the form above or reach out via Email <br></br>( Information will be provided to owner)</p>
                        <div className='flex gap-8'>
                            <p className='flex font-light items-center'>
                                <Mail size="26px" className='mr-2' /> my.surajpandit@gmail.com
                            </p>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;
