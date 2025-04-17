import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { UsersIcon } from "@heroicons/react/24/solid";
import { LinkIcon } from '@heroicons/react/24/outline';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons';
import CountUp from 'react-countup';
import RotatingTypingText from '../component/Typingtext';



import Logo from '../assets/apnaClgLogo.png';
import HeroImage from '../assets/hero-img.jpg';

import AmazonLogo from '../assets/amazon_logo.jpg';
import GoogleLogo from '../assets/google_logo.webp';
import MicrosoftLogo from '../assets/microsoft_logo.avif';
import HitachiLogo from '../assets/hitachi_logo.jpg';
import KPMGLogo from '../assets/kpmg.png';
import SamsungLogo from '../assets/samsung_logo.jpg';
import SalesforceLogo from '../assets/salesforce_logo.png';
import NetappLogo from '../assets/netapp_logo.png';
import PaypalLogo from '../assets/paypal_logo.png';
import JPMorganLogo from '../assets/jpmorgan.png';
import IBMLogo from '../assets/ibm.png';
import DellLogo from '../assets/dell.png';

const companies = [
  { name: "Amazon", src: AmazonLogo },
  { name: "Google", src: GoogleLogo },
  { name: "Microsoft", src: MicrosoftLogo },
  { name: "Hitachi", src: HitachiLogo },
  { name: "KPMG", src: KPMGLogo },
  { name: "Samsung", src: SamsungLogo },
  { name: "Salesforce", src: SalesforceLogo },
  { name: "NetApp", src: NetappLogo },
  { name: "PayPal", src: PaypalLogo },
  { name: "JP Morgan", src: JPMorganLogo },
  { name: "IBM", src: IBMLogo },
  { name: "Dell", src: DellLogo },
  
];

const HomePage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="font-sans">
      {/* Header text-gray-900*/}
      <header className="fixed top-0 w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 py-1 flex justify-between items-center">
          <img src={Logo} alt="Apna College Logo" className="h-20 w-auto" />
          <nav className="hidden md:flex gap-6 items-center text-sm font-medium  relative">
            <button className="hover:bg-indigo-200 cursor-pointer bg-indigo-400 text-white-500 px-4 py-2 rounded">New Sigma 7.0</button>
            <a href="#" className="hover:text-black">DSA Sheet</a>
            <div className="relative">
              <button onClick={() => setDropdownOpen(!dropdownOpen)} className="flex items-center gap-1 hover:text-black">
                New Courses <ChevronDown size={16} />
              </button>
              {dropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-md rounded border z-10">
                  <ul className="text-sm text-gray-800 py-2">
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">NEW Sigma 7.0 (Complete Placement Prep)</li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">NEW Alpha Plus 5.0 (Complete DSA)</li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Sigma 6.0 (Complete Placement Prep)</li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Delta (Web Development)</li>
                  </ul>
                </div>
              )}
            </div>
            <Link to="/login" className="hover:text-black">Log in</Link>
            <Link to="/signup" className="border border-indigo-600 text-indigo-600 px-4 py-1 rounded hover:bg-indigo-100">
              Sign up
            </Link>
          </nav>
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-white shadow px-4 py-4 space-y-3 text-gray-700 font-medium">
            <button className="block w-full text-left bg-indigo-100 text-indigo-600 px-3 py-2 rounded">New Sigma 7.0</button>
            <a href="#" className="block">DSA Sheet</a>
            <details className="block">
              <summary className="cursor-pointer py-2">New Courses</summary>
              <ul className="pl-4 space-y-1 text-sm mt-1">
                <li>NEW Sigma 7.0 (Complete Placement Prep)</li>
                <li>NEW Alpha Plus 5.0 (Complete DSA)</li>
                <li>Sigma 6.0 (Complete Placement Prep)</li>
                <li>Delta (Web Development)</li>
              </ul>
            </details>
            <a href="#" className="block">Log in</a>
            <button className="block w-full text-left border border-indigo-600 text-indigo-600 px-4 py-2 rounded hover:bg-indigo-100">Sign up</button>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="mt-32 md:mt-23 px-6 md:px-20 py-10 flex flex-col-reverse md:flex-row items-center justify-between bg-[#f8f8fb]">
        <div className="max-w-xl text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-semibold text-black mb-4">
            Learn & become the <span className="text-blue-600 font-bold">Top 1% software developer</span>
          </h2>
          <RotatingTypingText
  texts={[
    "Delta - Web Development",
    "Sigma - DSA + Web Development",
    "Alpha - DSA ",
    "C++ DSA",
  ]}
/>

          <a
            href="https://www.apnacollege.in/course/sigma-7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white font-semibold text-sm px-6 py-3 rounded hover:bg-blue-700 transition"
          >
            <span className="text-yellow-400 font-bold">Ultimate</span> Placement Solution →
          </a>
        </div>
        <div className="mb-10 md:mb-0">
          <img src={HeroImage} alt="Instructor" className="rounded-tl-[60px] rounded-tr-[60px] w-[300px] md:w-[400px] lg:w-[450px] shadow-lg" />
        </div>
      </section>

      {/* Community Stats Banner */}
      <section className="bg-indigo-600 text-white py-10 text-center">
  <h2 className="text-xl md:text-2xl font-semibold mb-6">INDIA'S MOST LOVED CODING COMMUNITY ❤️</h2>
  <div className="flex flex-col md:flex-row justify-center gap-10 text-sm font-medium">
    
    <div className="flex items-center gap-2 justify-center">
      <UsersIcon className="w-8 h-8 text-white" />
      <div>
        <p className="text-lg font-bold">
          <CountUp end={6000000} duration={3} separator="," />+
        </p>
        <p className="uppercase text-xs">Happy Learners</p>
      </div>
    </div>

    <div className="flex items-center gap-2 justify-center">
      <FontAwesomeIcon icon={faHandHoldingHeart} className="text-white text-3xl" />
      <div>
        <p className="text-lg font-bold">
          <CountUp end={20000000} duration={3} separator="," />+
        </p>
        <p className="uppercase text-xs">Monthly Views</p>
      </div>
    </div>

    <div className="flex items-center gap-2 justify-center">
      <LinkIcon className="w-8 h-8 text-white" />
      <div>
        <p className="text-lg font-bold">
          <CountUp end={100000} duration={3} separator="," />+
        </p>
        <p className="uppercase text-xs">New Monthly Subscribers</p>
      </div>
    </div>

  </div>
</section>


      {/* Sigma 7.0 Promotion Section */}
      <section className="text-center py-20 bg-white px-4">
        <p className="text-indigo-600 font-semibold mb-2 text-sm tracking-wide">NEW PLACEMENT PREP BATCH 🔥</p>
        <h3 className="text-xl md:text-2xl font-bold mb-4">SIGMA 7.0 : DSA + DEVELOPMENT + APTITUDE</h3>
        <p className="text-gray-600 mb-6">Start your placement preparation today!</p>
        <a
          href="https://www.apnacollege.in/course/sigma-7"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded shadow-md hover:bg-blue-700 transition"
        >
          Explore →
        </a>
      </section>

      {/* Dream Companies Banner */}
      <section className="bg-[#f8f8fb] py-12 px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-medium text-gray-800 mb-10">
          Thousands of students achieved their <span className="text-[#3F51B5] font-semibold">dream job at</span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 items-center justify-center max-w-15xl mx-auto">
          {companies.map((company) => (
            <img
              key={company.name}
              src={company.src}
              alt={company.name}
              className="h-20 mx-auto object-contain transition"
            />
          ))}
        </div>
        <p className="text-gray-500 mt-8 text-sm">+ many more</p>
      </section>
    </div>
  );
};

export default HomePage;
