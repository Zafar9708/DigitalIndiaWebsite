"use client";
import { Phone, Mail } from "lucide-react";

export default function Header() {
  return (
    <div className="bg-white text-primary py-2 hidden md:block mt-2">
      <div className="max-w-7xl mx-auto px-4 flex justify-end gap-4">
        <a href="tel:+919876543210" className="flex items-center gap-2 bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
          <Phone className="w-4 h-4" />
          <span> +91 9599086567</span>
        </a>
        <a href="mailto:contact@growthwayz.in" className="flex items-center gap-2 bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
          <Mail className="w-4 h-4" />
          <span>contact@growthwayz.com</span>
        </a>
        <button className="bg-primary text-white px-10 py-2 rounded-full text-sm font-medium">
          Book Appointment
        </button>
      </div>
    </div>
  );
}
