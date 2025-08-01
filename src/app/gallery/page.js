'use client'
import React, { useState } from 'react'
import Head from 'next/head'
import { FaSearch, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all')
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const galleryCategories = [
    { id: 'all', name: 'All Photos' },
    { id: 'facility', name: 'Our Facility' },
    { id: 'therapy', name: 'Therapy Sessions' },
    { id: 'team', name: 'Our Team' },
    { id: 'events', name: 'Community Events' }
  ]

  const galleryImages = [
    { id: 1, src: '/images/gallery1.jpg', category: 'facility', alt: 'Clinic reception area' },
    { id: 2, src: '/images/gallery2.jpg', category: 'therapy', alt: 'Child in speech therapy session' },
    { id: 3, src: '/images/gallery3.jpg', category: 'team', alt: 'Our clinical team' },
    { id: 4, src: '/images/gallery4.jpg', category: 'events', alt: 'Family fun day event' },
    { id: 5, src: '/images/gallery5.jpg', category: 'facility', alt: 'Sensory gym' },
    { id: 6, src: '/images/gallery6.jpg', category: 'therapy', alt: 'Occupational therapy session' },
    { id: 7, src: '/images/gallery7.jpg', category: 'team', alt: 'Therapist working with child' },
    { id: 8, src: '/images/gallery8.jpg', category: 'events', alt: 'Parent workshop' },
    // { id: 9, src: '/images/gallery1.jpg', category: 'facility', alt: 'Therapy room' },
    // { id: 10, src: '/images/gallery1.jpg', category: 'therapy', alt: 'Physical therapy session' },
    // { id: 11, src: '/images/gallery1.jpg', category: 'team', alt: 'Team training session' },
    // { id: 12, src: '/images/gallery1.jpg', category: 'events', alt: 'Community awareness day' }
  ]

  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory)

  const openLightbox = (index) => {
    setCurrentImageIndex(index)
    setLightboxOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    document.body.style.overflow = 'auto'
  }

  const navigateLightbox = (direction) => {
    if (direction === 'prev') {
      setCurrentImageIndex(prev => (prev === 0 ? filteredImages.length - 1 : prev - 1))
    } else {
      setCurrentImageIndex(prev => (prev === filteredImages.length - 1 ? 0 : prev + 1))
    }
  }

  return (
    <>
      <Head>
        <title>Gallery | GrowthWayz CDC</title>
        <meta name="description" content="View photos of our facility, team, and therapy sessions at GrowthWayz Child Development Center" />
      </Head>

      {/* Hero Section */}
      <div className="relative min-h-[300px] flex items-center justify-center text-center bg-[#0F416D]">
        <div className="absolute inset-0 opacity-20 bg-[url('/images/gallery-hero.jpg')] bg-cover bg-center"></div>
        <div className="relative z-10 max-w-5xl px-6 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            GrowthWayz <span className="text-white/90">Gallery</span>
          </h1>
          <p className="text-xl text-white/85 max-w-3xl mx-auto">
            A visual journey through our center and therapeutic approach
          </p>
        </div>
      </div>

      {/* Gallery Navigation */}
      <div className="sticky top-0 z-20 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex overflow-x-auto py-4 gap-2 scrollbar-hide">
            {galleryCategories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 whitespace-nowrap rounded-full font-medium transition-colors ${activeCategory === category.id ? 'bg-[#0F416D] text-white' : 'bg-gray-100 text-[#0F416D] hover:bg-gray-200'}`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredImages.map((image, index) => (
              <div 
                key={image.id}
                className="relative group aspect-square overflow-hidden rounded-lg cursor-pointer hover:shadow-lg transition-all"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[#0F416D] opacity-0 group-hover:opacity-20 transition-opacity"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <FaSearch className="text-white text-2xl" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4">
          <button 
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white text-2xl p-2"
          >
            <FaTimes />
          </button>
          
          <button 
            onClick={() => navigateLightbox('prev')}
            className="absolute left-4 text-white text-2xl p-2 md:left-8"
          >
            <FaChevronLeft size={32} />
          </button>
          
          <div className="max-w-4xl w-full">
            <img
              src={filteredImages[currentImageIndex].src}
              alt={filteredImages[currentImageIndex].alt}
              className="max-h-[80vh] w-full object-contain"
            />
            <p className="text-white text-center mt-4">
              {filteredImages[currentImageIndex].alt}
            </p>
          </div>
          
          <button 
            onClick={() => navigateLightbox('next')}
            className="absolute right-4 text-white text-2xl p-2 md:right-8"
          >
            <FaChevronRight size={32} />
          </button>
        </div>
      )}

      {/* CTA */}
      <section className="py-20 text-center" style={{ backgroundColor: 'rgba(15,65,109,0.05)' }}>
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#0F416D' }}>
            See Our Center in Person
          </h2>
          <p className="mb-8 max-w-2xl mx-auto" style={{ color: '#0F416D' }}>
            Schedule a tour to experience our facility and meet our team
          </p>
          <button 
            className="px-8 py-3 bg-[#0F416D] text-white font-medium rounded-lg hover:bg-[#0F416D]/90 transition shadow-lg"
          >
            Book a Tour
          </button>
        </div>
      </section>
    </>
  )
}

export default Gallery