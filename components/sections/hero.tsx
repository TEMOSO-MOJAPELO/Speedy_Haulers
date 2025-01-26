"use client"


import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";


export default function Hero() {
    const router = useRouter();

    return <section id="home" className="relative h-screen">
    <Image
      src="https://images.unsplash.com/photo-1541976590-713941681591"
      alt="Construction Site"
      fill
      className="object-cover opacity-30"
      priority
    />
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="text-center px-4 max-w-3xl mx-auto">
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
          Building Tomorrow's World Today
        </h1>
        <p className="text-base sm:text-lg md:text-xl mb-6 text-gray-300 max-w-xl mx-auto">
          Excellence in construction with over 25 years of experience in delivering
          world-class infrastructure projects.
        </p>
        <Link
          href="#contact"
          className="inline-block bg-primary text-white px-6 py-2 text-sm sm:text-base rounded-md hover:bg-primary/90 transition-colors"
        >
          Get Started
        </Link>
      </div>
    </div>
    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
      <ChevronDown className="w-6 h-6 text-white" onClick={() => router.push('#about')} />
    </div>
  </section>
}