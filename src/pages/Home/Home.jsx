import React from 'react';
import Hero from "./components/Hero/Hero";
import WeekSpecials from "./components/WeekSpecials/WeekSpecials";
import Testimonials from "./components/Testimonials/Testimonials";
import OurStory from './components/OurStory/OurStory'

function Home() {
  return (
    <>
      <Hero />
      <WeekSpecials />
      <Testimonials />
      <OurStory />
    </>
  );
}

export default Home;