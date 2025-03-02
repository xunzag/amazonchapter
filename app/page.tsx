"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Clock, MapPin, MessageCircle, Phone, Mail, ImageIcon, Menu, X, Store, Package, ShoppingBag, Video, Laptop, Megaphone, Award, MonitorPlay, Wallet, HeadphonesIcon, TrendingUp, User, Facebook, Instagram, Youtube, Calendar, Users, Sparkles, GraduationCap } from "lucide-react"

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    if (id === "top") {
      document.querySelector("html")?.scrollTo({ top: 0, behavior: "smooth" })
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#0C1C2D] text-white">
        <div className="container mx-auto px-4">
          {/* Top Bar */}
          <div className="hidden md:flex justify-between items-center py-2 border-b border-gray-700 text-sm">
            <div className="flex items-center space-x-4">
              <span className="flex items-center">
                <Clock size={14} className="mr-1 text-[#FF9900]" />
                Mon - Sun: 12 PM - 6 PM
              </span>
              <span className="flex items-center">
                <MapPin size={14} className="mr-1 text-[#FF9900]" />
                98, Block L North Nazimabad Town, Karachi
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <a href="mailto:info@amazonchapter.com" className="flex items-center hover:text-[#FF9900] transition-colors">
                <Mail size={14} className="mr-1" />
                info@amazonchapter.com
              </a>
              <Link
                href="https://wa.me/message/CEG23VO47ZWYI1"
                target="_blank"
                className="flex items-center hover:text-[#FF9900] transition-colors"
              >
                <Phone size={14} className="mr-1" />
                0339 0200999
              </Link>
            </div>
          </div>

          {/* Main Navigation */}
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex items-center">
              <div className="relative w-32 h-16">
                <Image
                  src="/images/logo.png"
                  alt="Amazon Chapter Logo"
                  fill
                  className="object-contain transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="hidden md:block ml-4 pl-4 border-l-2 border-gray-700">
                <h1 className="text-lg font-bold">Amazon Chapter</h1>
                <p className="text-sm text-gray-400">Learn & Succeed in E-Commerce</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {[
                { label: "Home", id: "top" },
                { label: "Courses", id: "courses" },
                { label: "About Us", id: "about" },
                { label: "Gallery", id: "gallery" },
                { label: "Contact", id: "contact" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="relative group"
                >
                  <span className="text-sm font-medium hover:text-[#FF9900] transition-colors duration-300">
                    {item.label}
                  </span>
                  <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-[#FF9900] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </button>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Link
                href="https://wa.me/message/CEG23VO47ZWYI1"
                target="_blank"
                className="bg-[#FF9900] hover:bg-[#ff9900]/90 text-[#0C1C2D] font-semibold px-6 py-2.5 rounded-full inline-flex items-center space-x-2 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <MessageCircle size={18} />
                <span>Start Learning</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white p-2 hover:bg-gray-700 rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#0C1C2D] border-t border-gray-700">
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                {[
                  { label: "Home", id: "top" },
                  { label: "Courses", id: "courses" },
                  { label: "About Us", id: "about" },
                  { label: "Gallery", id: "gallery" },
                  { label: "Contact", id: "contact" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="flex items-center space-x-2 text-left hover:text-[#FF9900] transition-colors duration-300 py-2"
                  >
                    <ChevronRight size={16} />
                    <span>{item.label}</span>
                  </button>
                ))}
                <div className="pt-4 mt-4 border-t border-gray-700">
                  <Link
                    href="https://wa.me/message/CEG23VO47ZWYI1"
                    target="_blank"
                    className="bg-[#FF9900] hover:bg-[#ff9900]/90 text-[#0C1C2D] font-semibold px-6 py-3 rounded-full flex items-center justify-center space-x-2 transition-all duration-300 hover:scale-105 shadow-lg"
                  >
                    <MessageCircle size={18} />
                    <span>Start Learning</span>
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#0C1C2D] to-[#1A3A5F] text-white py-20 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-[#FF9900] rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FF9900] rounded-full translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 animate-slideFromLeft">
              <div className="inline-block px-4 py-2 bg-[#FF9900]/10 rounded-full text-[#FF9900] font-semibold mb-6">
                #1 E-Commerce Training Institute in Karachi
              </div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Master <span className="text-[#FF9900]">Amazon</span>, <span className="text-[#FF9900]">Shopify</span> & 
                <span className="text-[#FF9900]"> TikTok Shop</span> with Expert Training!
              </h1>
              <p className="text-xl mb-8 text-gray-200">
                Hands-on training, expert strategies & real-world experience to grow your online business.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="#contact"
                  className="bg-[#FF9900] hover:bg-[#E68A00] text-[#0C1C2D] font-bold px-8 py-4 rounded-lg inline-flex items-center space-x-2 text-lg transition-transform duration-300 hover:scale-105 shadow-lg"
                >
                  <span>Join Now</span>
                  <ChevronRight size={20} />
                </Link>
                <Link
                  href="#courses"
                  className="border-2 border-white hover:border-[#FF9900] text-white hover:text-[#FF9900] font-bold px-8 py-4 rounded-lg inline-flex items-center space-x-2 text-lg transition-all duration-300"
                >
                  <span>View Courses</span>
                  <ChevronRight size={20} />
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center animate-slideFromRight">
              <div className="relative w-full max-w-md">
                <Image
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2940&auto=format&fit=crop"
                  alt="E-Commerce Training"
                  width={500}
                  height={400}
                  priority
                  className="rounded-lg shadow-2xl"
                />
                <div className="absolute -bottom-5 -right-5 bg-[#FF9900] text-[#0C1C2D] p-4 rounded-lg shadow-lg transform rotate-2">
                  <p className="font-bold">Start Your E-Commerce Journey Today!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Offerings */}
      <section id="courses" className="py-20 bg-gray-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-right-0 w-72 h-72 bg-[#FF9900] rounded-full translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FF9900] rounded-full -translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-[#FF9900]/10 rounded-full text-[#FF9900] font-semibold mb-4">
              Our Programs
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured <span className="text-[#FF9900]">Courses</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose from our comprehensive range of courses designed to help you succeed in the digital marketplace.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Amazon FBA Wholesale",
                description: "Learn how to sell wholesale products on Amazon and make profits.",
                icon: <Store className="w-12 h-12 text-white" />,
                features: ["Product Research", "Account Setup", "Supplier Sourcing", "Inventory Management"],
                color: "from-blue-500/10 via-blue-500/5 to-transparent"
              },
              {
                title: "Amazon Private Label",
                description: "Build your own brand and sell private-label products on Amazon.",
                icon: <Package className="w-12 h-12 text-white" />,
                features: ["Brand Creation", "Product Launch", "PPC Marketing", "Brand Analytics"],
                color: "from-purple-500/10 via-purple-500/5 to-transparent"
              },
              {
                title: "Shopify Store",
                description: "Create your online store and start selling easily.",
                icon: <ShoppingBag className="w-12 h-12 text-white" />,
                features: ["Store Setup", "Theme Customization", "Payment Integration", "Marketing Tools"],
                color: "from-green-500/10 via-green-500/5 to-transparent"
              },
              {
                title: "TikTok Shop",
                description: "Learn to sell products through TikTok and make money.",
                icon: <Video className="w-12 h-12 text-white" />,
                features: ["Content Strategy", "Shop Setup", "Trending Products", "Live Selling"],
                color: "from-pink-500/10 via-pink-500/5 to-transparent"
              },
              {
                title: "Freelancing",
                description: "Become an online freelancer and earn from home.",
                icon: <Laptop className="w-12 h-12 text-white" />,
                features: ["Profile Setup", "Proposal Writing", "Client Management", "Project Delivery"],
                color: "from-yellow-500/10 via-yellow-500/5 to-transparent"
              },
              {
                title: "Digital Marketing",
                description: "Learn social media marketing and grow any business online.",
                icon: <Megaphone className="w-12 h-12 text-white" />,
                features: ["Social Media", "SEO Basics", "Content Marketing", "Analytics"],
                color: "from-red-500/10 via-red-500/5 to-transparent"
              },
            ].map((course, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${course.color} backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:shadow-xl transition-all duration-300 group`}
              >
                <div className="bg-[#0C1C2D] p-4 rounded-xl inline-block mb-6 group-hover:scale-110 transition-transform duration-300">
                  {course.icon}
                </div>
                <h3 className="text-xl font-bold text-[#0C1C2D] mb-3">{course.title}</h3>
                <p className="text-gray-600 mb-6">{course.description}</p>
                <ul className="space-y-2 mb-6">
                  {course.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-600">
                      <ChevronRight size={16} className="text-[#FF9900] mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t border-gray-100">
                  <p className="text-[#FF9900] font-bold text-lg mb-4">Fee: 20,000 PKR</p>
                  <Link
                    href="https://wa.me/message/CEG23VO47ZWYI1"
                    target="_blank"
                    className="bg-[#0C1C2D] text-white px-6 py-3 rounded-lg inline-flex items-center space-x-2 hover:bg-[#1A3A5F] transition-all duration-300 w-full justify-center group-hover:scale-105"
                  >
                    <span>Enroll Now</span>
                    <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timing Section */}
      <section className="py-20 bg-[#0C1C2D] text-white relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-[#FF9900] rounded-full transform -translate-y-1/2" />
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-2 bg-[#FF9900]/10 rounded-full text-[#FF9900] font-semibold mb-4">
                Flexible Schedule
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Training <span className="text-[#FF9900]">Schedule</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Choose the perfect timing that fits your schedule. We offer multiple batches throughout the week to ensure maximum flexibility.
              </p>
            </div>

            {/* Schedule Cards */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {/* Regular Classes Card */}
              <div className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 border border-white/10">
                <div className="flex items-start space-x-6">
                  <div className="bg-[#FF9900] rounded-2xl p-4 text-[#0C1C2D] transform -rotate-6 hover:rotate-0 transition-transform duration-300">
                    <Clock size={32} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-4">
                      <h3 className="text-2xl font-bold">Regular Classes</h3>
                      <span className="ml-3 px-3 py-1 bg-[#FF9900]/20 text-[#FF9900] text-sm rounded-full">
                        Mon-Sat
                      </span>
                    </div>
                    <div className="space-y-4">
                      <div className="bg-white/5 rounded-xl p-4">
                        <div className="flex items-center justify-between mb-2">
                          <p className="font-semibold text-[#FF9900]">Morning Batch</p>
                          <span className="bg-[#FF9900]/10 text-[#FF9900] px-3 py-1 rounded-full text-sm font-medium">
                            12 PM - 2 PM
                          </span>
                        </div>
                        <p className="text-sm text-gray-400">Perfect for early birds and students</p>
                      </div>
                      <div className="bg-white/5 rounded-xl p-4">
                        <div className="flex items-center justify-between mb-2">
                          <p className="font-semibold text-[#FF9900]">Evening Batch</p>
                          <span className="bg-[#FF9900]/10 text-[#FF9900] px-3 py-1 rounded-full text-sm font-medium">
                            4 PM - 6 PM
                          </span>
                        </div>
                        <p className="text-sm text-gray-400">Ideal for working professionals</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Weekend Classes Card */}
              <div className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 border border-white/10">
                <div className="flex items-start space-x-6">
                  <div className="bg-[#FF9900] rounded-2xl p-4 text-[#0C1C2D] transform -rotate-6 hover:rotate-0 transition-transform duration-300">
                    <Calendar size={32} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-4">
                      <h3 className="text-2xl font-bold">Weekend Classes</h3>
                      <span className="ml-3 px-3 py-1 bg-[#FF9900]/20 text-[#FF9900] text-sm rounded-full">
                        Sat-Sun
                      </span>
                    </div>
                    <div className="space-y-4">
                      <div className="bg-white/5 rounded-xl p-4">
                        <div className="flex items-center justify-between mb-2">
                          <p className="font-semibold text-[#FF9900]">Morning Batch</p>
                          <span className="bg-[#FF9900]/10 text-[#FF9900] px-3 py-1 rounded-full text-sm font-medium">
                            10 AM - 2 PM
                          </span>
                        </div>
                        <p className="text-sm text-gray-400">Extended weekend learning sessions</p>
                      </div>
                      <div className="bg-white/5 rounded-xl p-4">
                        <div className="flex items-center justify-between mb-2">
                          <p className="font-semibold text-[#FF9900]">Evening Batch</p>
                          <span className="bg-[#FF9900]/10 text-[#FF9900] px-3 py-1 rounded-full text-sm font-medium">
                            3 PM - 7 PM
                          </span>
                        </div>
                        <p className="text-sm text-gray-400">Intensive weekend training</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[
                {
                  icon: <Users size={24} />,
                  title: "Small Batch Size",
                  desc: "Limited seats for personalized attention",
                  color: "from-blue-500/10 to-transparent"
                },
                {
                  icon: <Sparkles size={24} />,
                  title: "Flexible Timing",
                  desc: "Choose batch timing that suits you",
                  color: "from-purple-500/10 to-transparent"
                },
                {
                  icon: <GraduationCap size={24} />,
                  title: "Expert Instructors",
                  desc: "Learn from industry professionals",
                  color: "from-green-500/10 to-transparent"
                }
              ].map((item, index) => (
                <div 
                  key={index}
                  className={`bg-gradient-to-r ${item.color} backdrop-blur-sm rounded-xl p-6 hover:bg-white/5 transition-all duration-300 border border-white/5`}
                >
                  <div className="bg-[#FF9900]/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <div className="text-[#FF9900]">{item.icon}</div>
                  </div>
                  <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <div className="inline-block bg-gradient-to-r from-[#FF9900]/10 via-[#FF9900]/20 to-[#FF9900]/10 rounded-2xl p-8 backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h3>
                <p className="text-gray-400 mb-6">Join our next batch and transform your career</p>
                <Link
                  href="https://wa.me/message/CEG23VO47ZWYI1"
                  target="_blank"
                  className="inline-flex items-center space-x-2 bg-[#FF9900] text-[#0C1C2D] px-8 py-4 rounded-xl font-bold hover:bg-[#FF9900]/90 transition-all duration-300 hover:scale-105 shadow-lg group"
                >
                  <MessageCircle size={20} className="group-hover:rotate-12 transition-transform duration-300" />
                  <span>Enroll Now</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-[#0C1C2D] text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#FF9900] rounded-full translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FF9900] rounded-full -translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-[#FF9900]/10 rounded-full text-[#FF9900] font-semibold mb-4">
              Why Choose Us
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose <span className="text-[#FF9900]">Amazon Chapter</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Join the leading e-commerce training institute in Karachi and benefit from our comprehensive learning approach.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Award className="w-8 h-8" />,
                title: "Industry Experts",
                description: "Learn from professionals with proven success in e-commerce",
                color: "from-blue-500/20 via-blue-500/10 to-transparent"
              },
              {
                icon: <MonitorPlay className="w-8 h-8" />,
                title: "Practical Training",
                description: "70% practical, hands-on experience with real accounts",
                color: "from-green-500/20 via-green-500/10 to-transparent"
              },
              {
                icon: <Wallet className="w-8 h-8" />,
                title: "Affordable Fees",
                description: "Quality education at competitive prices with flexible payment options",
                color: "from-purple-500/20 via-purple-500/10 to-transparent"
              },
              {
                icon: <HeadphonesIcon className="w-8 h-8" />,
                title: "Lifetime Support",
                description: "Get assistance even after course completion",
                color: "from-red-500/20 via-red-500/10 to-transparent"
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Career Growth",
                description: "Build your own business or start freelancing",
                color: "from-yellow-500/20 via-yellow-500/10 to-transparent"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Community",
                description: "Join our network of successful entrepreneurs",
                color: "from-pink-500/20 via-pink-500/10 to-transparent"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${feature.color} backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:shadow-xl transition-all duration-300 group`}
              >
                <div className="bg-[#FF9900]/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-[#FF9900]">{feature.icon}</div>
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-[#FF9900] rounded-full transform -translate-y-1/2" />
        </div>

        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-[#FF9900]/10 rounded-full text-[#FF9900] font-semibold mb-4">
              Success Stories
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Student <span className="text-[#FF9900]">Achievements</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Real success stories from our graduates who transformed their careers through our training.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Ahmed Khan",
                achievement: "$5,000+",
                subtitle: "Monthly Sales on Amazon",
                testimonial: "Started with zero knowledge, now running a successful Amazon FBA business."
              },
              {
                name: "Fatima Ali",
                achievement: "200+",
                subtitle: "Monthly Orders on Shopify",
                testimonial: "From local business to international e-commerce success."
              },
              {
                name: "Usman Malik",
                achievement: "$2,000+",
                subtitle: "Monthly Freelancing Income",
                testimonial: "Found my passion in digital marketing and never looked back."
              }
            ].map((story, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
              >
                <div className="mb-6 relative">
                  <div className="w-20 h-20 bg-[#0C1C2D] rounded-full mx-auto flex items-center justify-center border-4 border-[#FF9900] group-hover:scale-110 transition-transform duration-300">
                    <User size={32} className="text-white" />
                  </div>
                </div>
                <h3 className="text-[#FF9900] text-3xl font-bold mb-1">{story.achievement}</h3>
                <p className="text-gray-600 text-sm mb-4">{story.subtitle}</p>
                <h4 className="text-[#0C1C2D] font-bold mb-3">{story.name}</h4>
                <p className="text-gray-600 italic text-sm">"{story.testimonial}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-[#FF9900] rounded-full transform -translate-y-1/2" />
        </div>

        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-[#FF9900]/10 rounded-full text-[#FF9900] font-semibold mb-4">
              Our Campus
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Life at <span className="text-[#FF9900]">Amazon Chapter</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Take a glimpse into our modern facilities and vibrant learning environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" id="gallery">
            {[
              {
                title: "Modern Classroom Setup",
                description: "State-of-the-art learning environment",
                image: "/images/1.jpeg",
                category: "Facility"
              },
              {
                title: "Student Workspace",
                description: "Comfortable and productive learning space",
                image: "/images/2.jpeg",
                category: "Workspace"
              },
              {
                title: "Training Session",
                description: "Hands-on learning experience",
                image: "/images/3.jpeg",
                category: "Training"
              },
              {
                title: "Student Success",
                description: "Celebrating our students' achievements",
                image: "/images/4.jpeg",
                category: "Achievement"
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <div className="aspect-w-4 aspect-h-3 relative">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <span className="inline-block px-3 py-1 bg-[#FF9900] text-white text-xs rounded-full mb-2">
                        {item.category}
                      </span>
                      <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-200">{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Contact Section */}
      <section className="py-20 bg-[#0C1C2D] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#FF9900] rounded-full translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FF9900] rounded-full -translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-[#FF9900]/10 rounded-full text-[#FF9900] font-semibold mb-4">
              Get in Touch
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Visit Our <span className="text-[#FF9900]">Campus</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Join us at our state-of-the-art facility where we transform ambitious individuals into successful e-commerce entrepreneurs.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Location Info and Map in grid */}
            <div className="grid md:grid-cols-2 gap-12 items-start mb-12">
              {/* Location Info */}
              <div className="space-y-6">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="bg-[#FF9900] rounded-lg p-3 text-[#0C1C2D]">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Our Location</h3>
                      <p className="text-gray-400">98, Block L North Nazimabad Town, Karachi</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/5 rounded-lg p-4">
                      <Clock size={20} className="text-[#FF9900] mb-2" />
                      <h4 className="font-semibold mb-1">Working Hours</h4>
                      <p className="text-sm text-gray-400">Mon - Sun: 12 PM - 6 PM</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4">
                      <Phone size={20} className="text-[#FF9900] mb-2" />
                      <h4 className="font-semibold mb-1">Contact</h4>
                      <p className="text-sm text-gray-400">0339 0200999</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-[#FF9900]/10 via-[#FF9900]/20 to-[#FF9900]/10 rounded-xl p-6 backdrop-blur-sm">
                  <h3 className="text-xl font-bold mb-4">Getting Here</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-center">
                      <ChevronRight size={16} className="text-[#FF9900] mr-2" />
                      <span>Easily accessible via public transport</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight size={16} className="text-[#FF9900] mr-2" />
                      <span>Ample parking space available</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight size={16} className="text-[#FF9900] mr-2" />
                      <span>Located in a prime area of North Nazimabad</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Map Section */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF9900]/20 to-transparent rounded-xl transform -rotate-1"></div>
                <div className="absolute inset-0 bg-gradient-to-l from-[#FF9900]/20 to-transparent rounded-xl transform rotate-1"></div>
                <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-2 border border-white/10">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d570.4756019811305!2d67.05156347847766!3d24.940510908565095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb3410e45f0660d%3A0x6f3b7f5f496e0a1e!2sAmazon%20Training%20In%20Karachi!5e0!3m2!1sen!2s!4v1740924620629!5m2!1sen!2s"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-[1.01]"
                  ></iframe>
                </div>

                <div className="absolute -bottom-4 -right-4 bg-[#FF9900] text-[#0C1C2D] p-4 rounded-lg shadow-lg transform rotate-2">
                  <div className="flex items-center space-x-2">
                    <MapPin size={20} />
                    <p className="font-bold">Find Us Here</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form - Centered */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold mb-6 text-center">Send Us a Message</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:border-[#FF9900] transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:border-[#FF9900] transition-colors"
                      placeholder="Your phone"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:border-[#FF9900] transition-colors"
                    placeholder="Your email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:border-[#FF9900] transition-colors"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#FF9900] text-[#0C1C2D] py-4 rounded-lg font-bold hover:bg-[#FF9900]/90 transition-all duration-300 flex items-center justify-center space-x-2 group"
                >
                  <span>Send Message</span>
                  <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0C1C2D] mb-16">
            Frequently Asked <span className="text-[#FF9900]">Questions</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                q: "What are the prerequisites for joining the courses?",
                a: "No prior experience needed. Basic computer knowledge and dedication to learn are all you need to get started."
              },
              {
                q: "How long are the courses?",
                a: "Each course duration varies from 1-2 months, with flexible timing options to suit your schedule."
              },
              {
                q: "Do you provide practical training?",
                a: "Yes, our courses are 70% practical and 30% theory, ensuring hands-on experience with real accounts."
              },
              {
                q: "Is there any job placement support?",
                a: "We provide guidance for freelancing and business setup, helping you start your e-commerce journey."
              },
              {
                q: "What's included in the course fee?",
                a: "Course material, practical training, lifetime support, and certification upon completion."
              },
              {
                q: "Do you offer online classes?",
                a: "We focus on in-person training for better learning outcomes, but provide online support when needed."
              }
            ].map((faq, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-lg font-bold text-[#0C1C2D] mb-3 flex items-start">
                  <span className="text-[#FF9900] mr-2">Q.</span>
                  {faq.q}
                </h3>
                <p className="text-gray-600 ml-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0A1622] text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-64 h-64 bg-[#FF9900] rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FF9900] rounded-full translate-x-1/2 translate-y-1/2" />
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <div>
              <div className="flex items-center mb-6">
                <div className="relative w-12 h-12">
                  <Image
                    src="/images/logo.png"
                    alt="Amazon Chapter"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="ml-3">
                  <h2 className="text-xl font-bold">
                    Amazon<span className="text-[#FF9900]">Chapter</span>
                  </h2>
                  <p className="text-sm text-gray-400">Learn & Succeed in E-Commerce</p>
                </div>
              </div>
              <p className="text-gray-400 mb-6">
                Transform your future with expert e-commerce training. Join the leading institute in Karachi.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-[#FF9900] transition-colors">
                  <Facebook size={20} />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-[#FF9900] transition-colors">
                  <Instagram size={20} />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-[#FF9900] transition-colors">
                  <Youtube size={20} />
                </Link>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {['Home', 'Courses', 'About Us', 'Gallery', 'Contact'].map((item) => (
                  <li key={item}>
                    <Link 
                      href={`#${item.toLowerCase().replace(' ', '-')}`}
                      className="text-gray-400 hover:text-[#FF9900] transition-colors flex items-center"
                    >
                      <ChevronRight size={16} className="mr-2" />
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Courses */}
            <div>
              <h3 className="text-lg font-bold mb-6">Our Courses</h3>
              <ul className="space-y-3">
                {[
                  'Amazon FBA Wholesale',
                  'Amazon Private Label',
                  'Shopify Store',
                  'TikTok Shop',
                  'Digital Marketing'
                ].map((course) => (
                  <li key={course}>
                    <Link 
                      href="#courses"
                      className="text-gray-400 hover:text-[#FF9900] transition-colors flex items-center"
                    >
                      <ChevronRight size={16} className="mr-2" />
                      {course}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-bold mb-6">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <MapPin className="text-[#FF9900] mr-3 mt-1" size={20} />
                  <span className="text-gray-400">98, Block L North Nazimabad Town, Karachi</span>
                </li>
                <li className="flex items-start">
                  <Phone className="text-[#FF9900] mr-3 mt-1" size={20} />
                  <Link 
                    href="https://wa.me/message/CEG23VO47ZWYI1"
                    className="text-gray-400 hover:text-[#FF9900] transition-colors"
                  >
                    0339 0200999
                  </Link>
                </li>
                <li className="flex items-start">
                  <Mail className="text-[#FF9900] mr-3 mt-1" size={20} />
                  <a 
                    href="mailto:info@amazonchapter.com"
                    className="text-gray-400 hover:text-[#FF9900] transition-colors"
                  >
                    info@amazonchapter.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                &copy; {new Date().getFullYear()} Amazon Chapter. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <Link href="/privacy-policy" className="text-gray-400 hover:text-[#FF9900] transition-colors text-sm">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-gray-400 hover:text-[#FF9900] transition-colors text-sm">
                  Terms of Service
                </Link>
                <Link href="/cookies" className="text-gray-400 hover:text-[#FF9900] transition-colors text-sm">
                  Cookie Policy
                </Link>
              </div>
            </div>
            <p className="text-center text-gray-500 text-sm mt-6">
              Best institute for amazon course in karachi | amazon courses in karachi | amazon training in karachi |
              freelancing course in karachi
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Link
          href="https://wa.me/message/CEG23VO47ZWYI1"
          target="_blank"
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110"
          aria-label="Contact us on WhatsApp"
        >
          <MessageCircle size={24} />
        </Link>
      </div>
    </div>
  )
}

