import background from "../assets/background1.jpg";

export default function ContactUs() {
    return (
        <section id="contact" className="w-full relative">
            {/* Hero (image only with centered heading) */}
            <div
                className="w-full h-[500px] bg-cover bg-center flex flex-col justify-between text-white relative"
                style={{ backgroundImage: `url(${background})` }}
            >
                {/* Heading moved to top, below navbar */}
                <div className="text-center pt-28">
                    <h2 className="text-4xl md:text-5xl font-semibold">Contact us !</h2>
                    <p className="mt-3 text-lg md:text-xl text-gray-100">
                        Get your free expert quote today.
                    </p>
                </div>
            </div>

            {/* Contact info section */}
            <div className="bg-[#0a0a0a] text-gray-200 pt-1 pb-10 px-6 md:px-20">
                <div className="max-w-6xl mx-auto text-center">
                    {/* Smaller text column */}
                    <div className="max-w-md mx-auto text-sm leading-relaxed">
                        <p className="mb-2 italic">
                            Email us at:{" "}
                            <a
                                href="mailto:info@scale100million.com"
                                className="text-white underline hover:text-purple-400"
                            >
                                info@scale100million.com
                            </a>
                        </p>
                        <p className="mb-6 italic">
                            Call us on:{" "}
                            <a
                                href="tel:+919325847844"
                                className="text-white underline hover:text-purple-400"
                            >
                                +91 9325847844
                            </a>
                        </p>
                        <p>
                            Or fill out the form below. <br />
                            <span className="text-gray-400">
                                We will get back to you ASAP!
                            </span>
                        </p>
                    </div>

                    {/* Fine line */}
                    <hr className="border-t border-gray-600 mt-4 mb-6 w-full" />

                    {/* Contact Form (centered) */}
                    <form className="max-w-md mx-auto space-y-4 text-gray-200 text-sm">
                        {/* Name */}
                        <div>
                            <label className="block mb-1 text-left">
                                <span className="text-red-500">*</span> Name
                            </label>
                            <input
                                type="text"
                                className="w-full px-3 py-2 rounded-md bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block mb-1 text-left">
                                <span className="text-red-500">*</span> Email
                            </label>
                            <input
                                type="email"
                                className="w-full px-3 py-2 rounded-md bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                            />
                        </div>

                        {/* Message */}
                        <div>
                            <label className="block mb-1 text-left">
                                <span className="text-red-500">*</span> Message
                            </label>
                            <textarea
                                rows="4"
                                className="w-full px-3 py-2 rounded-md bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                            />
                        </div>

                        {/* Button */}
                        <button
                            type="submit"
                            className="px-5 py-2 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-medium text-sm transition"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
