"use client";

import { Mail } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // idle, sending, success, error

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setStatus('idle'), 3000);
            } else {
                setStatus('error');
                alert(data.error || 'Something went wrong');
            }
        } catch (error) {
            setStatus('error');
            console.error('Error:', error);
            alert('Failed to connect to the server.');
        }
    };

    return (
        <section id="contact" className="pt-28 pb-12 md:pt-32 md:pb-24 relative bg-[#FAFAFA] overflow-hidden">
            {/* Background Grid Accent */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            </div>

            <div className="container px-4 mx-auto relative z-10">

                {/* Get in Touch Tag */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 bg-black text-white rounded-full mb-12"
                >
                    <Mail size={16} />
                    <span className="text-sm font-medium">Get in touch</span>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-black mb-4">
                            Let's Work <br />
                            <span className="text-purple-600">
                                Together
                            </span>
                        </h2>

                        {/* Purple thick underline */}
                        <div className="w-32 h-2 bg-purple-300 rounded-full mb-10"></div>

                        <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                            Have a project in mind or want to discuss the latest tech?
                            I'm always open to new opportunities and interesting conversations.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                        className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm"
                    >
                        <div className="mb-6">
                            <h3 className="text-2xl font-bold text-black mb-1">Send me a mail.</h3>
                            <p className="text-gray-500 text-sm">Once form is submitted the fields will be reset.</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-black ml-1">Name</label>
                                <input
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    type="text"
                                    className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-black focus:ring-1 focus:ring-black/10 transition-all placeholder:text-gray-400"
                                    placeholder="Enter your name"
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-black ml-1">Email</label>
                                <input
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    type="email"
                                    className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-black focus:ring-1 focus:ring-black/10 transition-all placeholder:text-gray-400"
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-black ml-1">Your Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={4}
                                    className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-black focus:ring-1 focus:ring-black/10 transition-all placeholder:text-gray-400 resize-none"
                                    placeholder="Enter your message"
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'sending'}
                                className="w-full bg-[#0F172A] hover:bg-black text-white font-medium py-4 rounded-full shadow-lg transition-all transform active:scale-[0.98] mt-2 disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center"
                            >
                                {status === 'sending' ? (
                                    <span>Sending...</span>
                                ) : status === 'success' ? (
                                    <span>Sent Successfully!</span>
                                ) : (
                                    <span>Submit</span>
                                )}
                            </button>
                        </form>
                    </motion.div>
                </div>
                <div className="mt-20 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Rishabh. All rights reserved.</p>
                    <p className="mt-2 md:mt-0">Designed & Built with <span className="text-red-500">♥</span></p>
                </div>
            </div>
        </section>
    );
}
