"use client"

import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
    return <section id="contact" className="py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-4">Contact Us</h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Get in touch with us for your construction needs.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-2 py-1 block w-full rounded-md bg-gray-900/50 border-gray-700 text-white placeholder-gray-400 focus:border-primary focus:ring-primary"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-2 block py-1 w-full rounded-md bg-gray-900/50 border-gray-700 text-white placeholder-gray-400 focus:border-primary focus:ring-primary"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="mt-2 block w-full rounded-md bg-gray-900/50 border-gray-700 text-white placeholder-gray-400 focus:border-primary focus:ring-primary"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-colors"
            >
              Send Message
            </button>
          </form>
          <div className="mt-8 space-y-4">
            <div className="flex items-center">
              <MapPin className="w-6 h-6 text-primary mr-4" />
              <span className="text-gray-300">123 Construction Ave, Building City, BC 12345</span>
            </div>
            <div className="flex items-center">
              <Phone className="w-6 h-6 text-primary mr-4" />
              <span className="text-gray-300">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center">
              <Mail className="w-6 h-6 text-primary mr-4" />
              <span className="text-gray-300">info@buildcraftpro.com</span>
            </div>
          </div>
        </div>
        <div className="h-[500px] rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937595!2d2.292292615509614!3d48.85837007928754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sEiffel%20Tower!5e0!3m2!1sen!2sus!4v1647969868185!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  </section>
    
}