"use client"

import Image from "next/image";

export default function Services() {
    return  <section id="services" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                  We offer comprehensive construction solutions tailored to meet your specific needs.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "Commercial Construction",
                    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
                  },
                  {
                    title: "Residential Projects",
                    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
                  },
                  {
                    title: "Infrastructure Development",
                    image: "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d",
                  },
                ].map((service) => (
                  <div key={service.title} className="group relative overflow-hidden rounded-lg">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover transition-transform group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
                      <h3 className="text-white text-xl font-semibold">{service.title}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
    
}