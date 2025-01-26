"use client"

import { Handshake } from "lucide-react";

export default function Partner() {
    return  <section id="partners" className="py-20 bg-gray-900/50 backdrop-blur-sm">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-4">Our Partners</h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          We collaborate with industry leaders to deliver exceptional results.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {[1, 2, 3, 4].map((partner) => (
          <div
            key={partner}
            className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-lg flex items-center justify-center"
          >
            <Handshake className="w-16 h-16 text-primary" />
          </div>
        ))}
      </div>
    </div>
  </section>
    
}