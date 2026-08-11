import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhoWeAre from './components/WhoWeAre';
import Projects from './components/Projects';
import Gallery from './components/Gallery';
import Services from './components/Services';
import Media from './components/Media';
import Philosophy from './components/Philosophy';
import BeforeAfter from './components/BeforeAfter';
import Process from './components/Process';
import Materials from './components/Materials';
import Testimonials from './components/Testimonials';
import InstagramGrid from './components/InstagramGrid';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import ProjectModal from './components/ProjectModal';

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (window.window && window.lucide) {
      window.lucide.createIcons();
    }
  });

  return (
    <div class="app-root">
      {/* Navbar */}
      <Navbar onOpenBooking={() => setBookingOpen(true)} />

      <main>
        {/* Home */}
        <Hero onOpenBooking={() => setBookingOpen(true)} />

        {/* Our Story */}
        <WhoWeAre />

        {/* Projects */}
        <Projects onSelectProject={(p) => setSelectedProject(p)} />

        {/* Gallery */}
        <Gallery />

        {/* Services */}
        <Services onOpenBooking={() => setBookingOpen(true)} />

        {/* Media */}
        <Media />

        {/* Storytelling & Craft Highlights */}
        <Philosophy />
        <BeforeAfter />
        <Process />
        <Materials />
        <Testimonials />
        <InstagramGrid />
      </main>

      {/* Contact & Footer */}
      <Footer onOpenBooking={() => setBookingOpen(true)} />

      {/* Modals */}
      <BookingModal 
        isOpen={bookingOpen} 
        onClose={() => setBookingOpen(false)} 
      />

      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </div>
  );
}
