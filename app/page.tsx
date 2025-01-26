"use client";


import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import { Building2, Mail, Phone, MapPin } from "lucide-react";
import Services from "@/components/sections/services";
import Partner from "@/components/sections/partner";
import Contact from "@/components/sections/contact";
import Navbar from "@/components/sections/navbar";


export default function Home() {

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Services Section */}
      <Services />

      {/* Partners Section */}
      <Partner />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Building2 className="h-8 w-8 text-primary" />
                <span className="ml-2 font-bold text-xl">Speedy Haulers</span>
              </div>
              <p className="text-gray-400">
                Building excellence through innovation and dedication.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {["Home", "About", "Services", "Partners", "Contact"].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Commercial Construction
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Residential Projects
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Infrastructure Development
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  123 Construction Ave
                </li>
                <li className="flex items-center">
                  <Phone className="w-5 h-5 mr-2" />
                  +1 (555) 123-4567
                </li>
                <li className="flex items-center">
                  <Mail className="w-5 h-5 mr-2" />
                  info@buildcraftpro.com
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Speedy Haulers. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}