"use client";
import { Menu, X, Phone, Mail } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [openSubmenu, setOpenSubmenu] = useState(null);

    const navItems = [
        { name: "Home", href: "/" },
        {
            name: "About Us",
            subItems: [
                { name: "About CDC", href: "/about/about-cdc" },
                { name: "Our Treatment Approach", href: "/about/treatment-approach" },
                { name: "Our Clinic Team", href: "/about/clinic-team" },
            ],
        },
        {
            name: "Services",
            subItems: [
                { name: "Speech Therapy", href: "/services/speech-therapy" },
                { name: "Occupational Therapy", href: "/services/occupational-therapy" },
                { name: "Behavioral Therapy", href: "/services/behavioral-therapy" },
                { name: "Special Education", href: "/services/special-education" },
                { name: "Parent Counseling", href: "/services/parent-counseling" },
            ],
        },
        {
            name: "Treatments",
            subItems: [
                { name: "Autism Spectrum Disorder", href: "/treatments/autism-spectrum-disorder" },
                { name: "ADHD", href: "/treatments/adhd" },
                { name: "Development Delay", href: "/treatments/development-delay" },
                { name: "Speech Delay", href: "/treatments/speech-delay" },
                { name: "Sensory Integration", href: "/treatments/sensory-integration" },
                { name: "Learning Disability", href: "/treatments/learning-disabiltiy" },
            ],
        },
        {
            name: "Departments",
            subItems: [
                { name: "Pediatric Neurology", href: "/departments/pediatric-neurology" },
                { name: "Pediatric Psychology", href: "/departments/pediatric-psychology" },
                { name: "Speech & Language Therapy", href: "/departments/speech-language-therapy" },
                { name: "Physiotherapy", href: "/departments/physiotherapy" },
                { name: "Occupational Therapy", href: "/departments/occupational-therapy" },
                { name: "Behavioral Therapy", href: "/departments/behavioral-therapy" },
            ],
        },
        { name: "Gallery", href: "/gallery" },
        { name: "Contact Us", href: "/contact" },
    ];

    return (
        <header className="bg-white text-[#0F416D] sticky top-0 z-50 ">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link href="/" className="relative  w-80 h-52 md:mb-10 sm:mb-0 sm:mt-1 sm:w-72 ">
                        <Image
                            src="/GWlogo.png"
                            alt="GrowthWayz Logo"
                            fill
                            className="object-contain"
                            priority
                            
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav
                        className="hidden md:flex items-center space-x-4 h-full"
                        onMouseLeave={() => setOpenSubmenu(null)}
                    >
                        {navItems.map((item, index) => (
                            <div key={index} className="relative group">
                                {item.href ? (
                                    <Link href={item.href} className="px-3 py-2 hover:text-[#8327B8] font-medium">
                                        {item.name}
                                    </Link>
                                ) : (
                                    <button
                                        className="px-3 py-2 font-medium hover:text-[#8327B8]"
                                        onMouseEnter={() => setOpenSubmenu(item.name)}
                                    >
                                        {item.name}
                                    </button>
                                )}
                                {index < navItems.length - 1 && <span className="text-[#0F416D]">|</span>}

                                {openSubmenu === item.name && item.subItems && (
                                    <div className="absolute top-full left-0 w-64 bg-primary text-white mt-2 rounded-lg shadow-xl p-2 z-50">
                                        {item.subItems.map((sub, i) => (
                                            <Link
                                                key={i}
                                                href={sub.href}
                                                className="block px-4 py-2 rounded hover:bg-white hover:text-[#0F416D] transition"
                                            >
                                                {sub.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-[#0F416D]"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden mt-2 bg-white border-t border-[#0F416D]">
                        {navItems.map((item, index) => (
                            <div key={index}>
                                {item.href ? (
                                    <Link
                                        href={item.href}
                                        className="block px-4 py-3 hover:bg-[#f0f0f0]"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                ) : (
                                    <div>
                                        <button
                                            className="w-full text-left px-4 py-3 font-semibold hover:bg-[#f0f0f0]"
                                            onClick={() => setOpenSubmenu(openSubmenu === item.name ? null : item.name)}
                                        >
                                            {item.name}
                                        </button>
                                        {openSubmenu === item.name &&
                                            item.subItems?.map((sub, i) => (
                                                <Link
                                                    key={i}
                                                    href={sub.href}
                                                    className="block px-6 py-2 text-sm hover:bg-[#e0e0e0]"
                                                    onClick={() => setMobileMenuOpen(false)}
                                                >
                                                    {sub.name}
                                                </Link>
                                            ))}
                                    </div>
                                )}
                            </div>
                        ))}

                        {/* Mobile Buttons */}
                        {/* <div className="p-4 space-y-2">
                            <a
                                href="tel:+919876543210"
                                className="flex items-center justify-center gap-2 bg-[#0F416D] text-white py-2 rounded-full"
                            >
                                <Phone className="w-4 h-4" />
                                +91 98765 43210
                            </a>
                            <a
                                href="mailto:contact@growthwayz.in"
                                className="flex items-center justify-center gap-2 bg-[#0F416D] text-white py-2 rounded-full"
                            >
                                <Mail className="w-4 h-4" />
                                contact@growthwayz.in
                            </a>
                            <button className="w-full bg-[#0F416D] text-white py-2 rounded-full">
                                Book Appointment
                            </button>
                        </div> */}
                    </div>
                )}
            </div>
        </header>
    );
}
