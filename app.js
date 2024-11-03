// App.js
import React from 'react';
import StickyHeader from './StickyHeader';
import AboutSection from './AboutSection';
import Carousel from './Carousel';
import Testimonials from './Testimonials';
import ContactForm from './ContactForm';

const App = () => {
  return (
    <div>
      <StickyHeader />
      <AboutSection />
      <Carousel />
      <Testimonials />
      <ContactForm />
    </div>
  );
};

export default App;
