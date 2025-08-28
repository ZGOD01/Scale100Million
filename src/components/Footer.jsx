import React, { useEffect, useState } from "react";
import { FaInstagram, FaYoutube, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import logo from "../assets/logo first.png";
import AnimatedGradientLine from "../components/AnimatedGradientLine";


export default function Footer() {
  const [showLine, setShowLine] = useState(false);

  useEffect(() => {
    const benefitsSection = document.getElementById("benefits");
    if (!benefitsSection) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShowLine(true);
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(benefitsSection);
    return () => observer.disconnect();
  }, []);

  return (
    <footer className="bg-black text-gray-300 pt-10 pb-6">
      {/* Top gradient line */}
      {/* <div
        className={`h-[2px] w-full mb-6 transition-opacity duration-700 
        bg-gradient-to-r from-transparent via-cyan-400 to-transparent 
        ${showLine ? "opacity-100" : "opacity-0"}`}
      /> */}

        <AnimatedGradientLine />
      

      <div className="container mx-auto px-6 md:px-12">
        {/* Logo + Brand (left aligned) */}
        <div className="flex items-center mb-10">
          <img src={logo} alt="Logo" className="w-15 h-12 object-contain mr-3" />
          <h1 className="text-2xl font-semibold">SCALE100MILLION</h1>
        </div>

        {/* Middle: Left Nav - Right Social */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 border-b border-gray-700 pb-10">
          {/* Left: Navigation with scroll + link */}
          <ul className="space-y-3 text-sm">
            <li>
              <a href="#home" className="hover:text-white cursor-pointer">Home</a>
            </li>
            <li>
              <a href="#services" className="hover:text-white cursor-pointer">Services</a>
            </li>
            <li>
              <a href="#features" className="hover:text-white cursor-pointer">Features</a>
            </li>
            <li>
              <Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
            </li>
          </ul>

          {/* Right: Social Links */}
          <div className="flex flex-col items-start md:items-end text-sm">
            <p className="mb-4">Follow us on</p>
            <div className="flex gap-4 text-2xl">
              <a href="https://www.instagram.com/scale100million/" className="hover:text-white"><FaInstagram /></a>
              <a href="#" className="hover:text-white"><FaXTwitter /></a>
              <a href="https://www.youtube.com/@abhaylagad620" className="hover:text-white"><FaYoutube /></a>
            </div>
          </div>
        </div>

        {/* Bottom: Copyright */}
        <div className="text-center text-xs text-gray-500 pt-6">
          © {new Date().getFullYear()} SCALE100MILLION. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
