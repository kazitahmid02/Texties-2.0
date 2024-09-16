
import React, { useRef, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { About, Contact, Steps, Hero, Navbar, Folks, CustomerReviews, WhyChooseUs, Capabilities, RangeFabric, Compliance, Team, FAQSection
  
 } from '../components';
import ProductPage from './Product';
import Footer from '../components/Footer';
import ClothingTypes from '../components/ClothingTypes';

const AppRoutes = () => {
  const videoRef = useRef(null); // Create a ref for the video element

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5; // Set the playback speed to 0.5x (half speed)
    }
  }, []);

  return (
    <div className='relative z-0 bg-black'>
      {/* Video Background with Hero Section */}
      <div 
        className='bg-cover bg-no-repeat bg-center' 
        style={{ 
          position: 'relative', 
          opacity: ''// Optional for dark fade
        }}
      >
        {/* Video Element */}
        <video
          ref={videoRef} // Attach the ref to the video element
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-1"
          style={{ filter: 'brightness(0.3)' }}
        >
          <source src="https://res.cloudinary.com/drvkbxl0q/video/upload/v1726514247/video_mw4lr8.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark Fade Overlay */}
        <div 
          style={{ 
            position: 'absolute', 
            top: 0, 
            left: 0, 
            right: 0, 
            bottom: 0, 
            background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0))', 
            opacity: 2 
          }}
        />

        {/* Navbar and Hero Components */}
        <Navbar />
        <Hero />
</div>

      
      <div className='bg-black text-black'>
      
        <CustomerReviews />
        <div className='bg-fabric3 bg-cover bg-no-repeat bg-center'>
        
        </div>
        <div className='bg-white bg-cover bg-no-repeat bg-center'>
        <Compliance />
        <div className='bg-black bg-cover bg-no-repeat bg-center'>
        <WhyChooseUs/>
        
        </div>
      
       
        </div>

        {/* Components */}
        <div className='bg-black bg-cover bg-no-repeat bg-center'>
        <ClothingTypes />
        <RangeFabric />
        </div>
        <div className='bg-black bg-cover bg-no-repeat bg-center'>
        <Steps />
        <FAQSection/>
       
        </div>
        <div className='bg-white bg-cover bg-no-repeat bg-center'>
        
        <Team />
       
        </div>

        
        
      </div>
      
      {/* Team and About sections */}
      <div className='bg-black text-white'>
        <About />
       
        
      </div>
      
      {/* Contact section with black pattern background */}
      <div className='bg-black-pattern bg-cover bg-no-repeat bg-center'>
        <Contact />
        

      </div>

      <Footer />
    </div>
  );
}

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AppRoutes />} />
        <Route path='/shirt' element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
