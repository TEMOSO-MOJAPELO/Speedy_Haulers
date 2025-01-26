"use client"

import { Building2, Users, Wrench } from "lucide-react";

export default function About() {
    return (<section id="about" className="py-20 bg-gray-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">About Us</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              With decades of experience and a commitment to excellence, we've established
              ourselves as industry leaders in construction and infrastructure development.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="w-12 h-12 text-primary mb-4" />,
                title: "Expert Team",
                description: "Our team of professionals brings years of expertise and dedication to every project."
              },
              {
                icon: <Building2 className="w-12 h-12 text-primary mb-4" />,
                title: "Quality Work",
                description: "We maintain the highest standards of quality in all our construction projects."
              },
              {
                icon: <Wrench className="w-12 h-12 text-primary mb-4" />,
                title: "Modern Equipment",
                description: "Using state-of-the-art technology and equipment for optimal results."
              }
            ].map((item, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-lg">
                {item.icon}
                <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
}