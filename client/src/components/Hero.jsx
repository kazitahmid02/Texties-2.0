import { useRef } from 'react';
import { ScrollParallax } from 'react-just-parallax';
import { styles } from '../styles';

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <section
      className="relative w-full h-screen mx-auto flex justify-start items-center"
      style={{ overflow: 'hidden' }}
    >
      {/* Transparent background */}
      <div
        className="absolute inset-0 bg-black opacity-85 z-0"
        style={{ zIndex: -1 }}
      ></div>

      {/* Text and logos fading in on the left */}
      <div
        className="absolute flex flex-col items-center justify-center"
        style={{
          top: '57%',
          left: '500px',
          transform: 'translateY(-50%)',
          width: '100%',
          height: 'auto',
          zIndex: 10,
        }}
      >
        <div
          className="backdrop-blur-2xl"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            animation: 'fadeIn 1s forwards',
            textAlign: 'left',
            padding: '55px',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            width: '750px'
            
          
          }}
        >
          <p
            style={{
              fontSize: '1.6rem',
              color: 'white',
              marginBottom: '1rem',
              fontWeight: 'bold',
              textAlign: 'left'
            }}
          >
            BRANDS WE HAVE WORKED WITH:
          </p>

          {/* Logos container with grid arrangement */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1.5rem',
            }}
          >
            <div
              style={{
                backgroundColor: 'white',
                borderRadius: '3rem',
                padding: '1.5rem',
                boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <img
                src="https://res.cloudinary.com/drvkbxl0q/image/upload/v1726199953/28_iip7mr.png"
                alt="Logo 1"
                style={{ width: '150', height: '70px' }}
              />
            </div>

            <div
              style={{
                backgroundColor: 'white',
                borderRadius: '3rem',
                padding: '1.5rem',
                boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <img
                src="https://res.cloudinary.com/drvkbxl0q/image/upload/v1726200154/26_tlelfo.png"
                alt="Logo 2"
                style={{ width: '150px', height: '150px' }}
              />
            </div>

            <div
              style={{
                backgroundColor: 'white',
                borderRadius: '3rem',
                padding: '1.5rem',
                boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <img
                src="https://res.cloudinary.com/drvkbxl0q/image/upload/v1726200155/27_wzkli6.png"
                alt="Logo 3"
                style={{ width: '150px', height: '150px' }}
              />
            </div>

            <div
              style={{
                backgroundColor: 'white',
                borderRadius: '3rem',
                padding: '1.5rem',
                boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <img
                src="https://res.cloudinary.com/drvkbxl0q/image/upload/v1726200154/31_ipazvz.png"
                alt="Logo 4"
                style={{ width: '100px', height: '100px' }}
              />
            </div>

            <div
              style={{
                backgroundColor: 'white',
                borderRadius: '3rem',
                padding: '1.5rem',
                boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <img
                src="https://res.cloudinary.com/drvkbxl0q/image/upload/v1726200153/29_p0bbip.png"
                alt="Logo 5"
                style={{width: '125px', height: '125px' }}
              />
            </div>

            <div
              style={{
                backgroundColor: 'white',
                borderRadius: '3rem',
                padding: '1.5rem',
                boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <img
                src="https://res.cloudinary.com/drvkbxl0q/image/upload/v1726200154/32_ngulqu.png"
                alt="Logo 6"
                style={{width: '150px', height: '150px' }}
              />
            </div>

            <div
              style={{
                backgroundColor: 'white',
                borderRadius: '3rem',
                padding: '1.5rem',
                boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <img
                src="https://res.cloudinary.com/drvkbxl0q/image/upload/v1726200154/30_ac9ogk.png"
                alt="Logo 7"
                style={{ width: '150px', height: '150px' }}
              />
            </div>

            <div
              style={{
                backgroundColor: 'white',
                borderRadius: '3rem',
                padding: '1.5rem',
                boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <img
                src="https://res.cloudinary.com/drvkbxl0q/image/upload/v1726200154/33_n3xwuj.png"
                alt="Logo 8"
                style={{ width: '150px', height: '150px' }}
              />
            </div>

            <div
              style={{
                backgroundColor: 'white',
                borderRadius: '3rem',
                padding: '1.5rem',
                boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <img
                src="https://res.cloudinary.com/drvkbxl0q/image/upload/v1726200154/34_jqtcnf.png"
                alt="Logo 9"
                style={{ width: '150px', height: '150px' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Parallax effect card container on the right */}
      <ScrollParallax
        isAbsolutelyPositioned
        className="absolute top-1/4 right-0 flex justify-start items-center pl-12 lg:pl-32"
        ref={parallaxRef}
      >
        <div
          className="bg-black shadow-lg bg-opacity-85 rounded  md:w-3/4 lg:w-1/3 p-11"
          style={{ position: 'relative',  marginTop: '140px', marginLeft: '120px',width: '500px'  }}
        >
          {/* Hero image */}
          <h1
            style={{
              color: 'white',
              fontSize: '2.5rem',
              textAlign: 'center',
              fontWeight: 'bold',
            }}
          >
            TEXTIES
          </h1>
          {/* Centered text */}
          <div className="text-center mt-6">
            <p className={`${styles.heroSubText} text-3xl lg:text-base text-white-100 font-bold`}>
              FASHION SOURCING CO.
            </p>
            <p className="text-sm mt-6 text-white-100 font-bold">
              LONDON - NEW YORK - LOS ANGELES - DHAKA
            </p>
          </div>
        </div>
        
      </ScrollParallax>
       {/* Slogan statement below the floating div */}
       
       <div
        className="absolute"
        style={{
          top: '50%',
          left: '120px',
          width: '750px',
          zIndex: 11,
        }}
      >
        <p
          style={{
            color: 'white',
            fontSize: '2rem',
            textAlign: 'left',
            fontWeight: 'bold',
           
            
          }}
        >
          Connecting your brand with vast network of sustainable and ethical manufacturers.
        </p>

       

        {/* Schedule button */}
        <div className="flex justify-left mt-4">
  <button
    onClick={() => window.open('https://calendly.com/tahmiddshahriar/interview-with-texties?month=2024-09', '_blank')}
    style={{
      backgroundColor: 'black',
      color: 'white',
      padding: '0.75rem 1.5rem', // Adjust padding as needed
      textAlign: 'center',
      border: '3px solid white', // Outer border
      borderRadius: '0.375rem', // Adjust border radius as needed
      position: 'relative',
      overflow: 'hidden',
      fontWeight: 'bold',
      fontSize: '1rem', // Adjust font size as needed
      transition: 'all 0.3s ease',
      cursor: 'pointer'
    }}
    onMouseOver={(e) => {
      e.currentTarget.style.backgroundColor = 'white';
      e.currentTarget.style.color = 'black';
      e.currentTarget.style.border = '3px solid black'; // Change border color on hover
    }}
    onMouseOut={(e) => {
      e.currentTarget.style.backgroundColor = 'black';
      e.currentTarget.style.color = 'white';
      e.currentTarget.style.border = '3px solid white'; // Revert border color on mouse out
    }}
  >
    Schedule a Free Consultation
  </button>
</div>


        </div>

       
    </section>
  );
};

export default Hero;
