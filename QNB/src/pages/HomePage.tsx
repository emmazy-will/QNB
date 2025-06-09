import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Truck, Plane, Droplet, Building, CheckCircle, Globe, Users, Package } from 'lucide-react';
import video from '../images/video.mp4'; // Adjust the path as necessary
import transit from '../images/transmit.avif'

const HomePage: React.FC = () => {
  useEffect(() => {
    // Set document title
    document.title = 'Q.N.B Transport | Global Shipping Solutions';
    
    // Counter animation
    const animateCounters = () => {
      const counters = document.querySelectorAll('.counter-value');
      
      counters.forEach(counter => {
        const target = +(counter.getAttribute('data-target') || '0');
        const duration = 3000; // 3 seconds
        const startTime = performance.now();
        
        const updateCounter = (currentTime: number) => {
          const elapsedTime = currentTime - startTime;
          const progress = Math.min(elapsedTime / duration, 1);
          const currentValue = Math.floor(progress * target);
          
          if (counter instanceof HTMLElement) {
            counter.innerText = currentValue.toLocaleString();
          }
          
          if (progress < 1) {
            requestAnimationFrame(updateCounter);
          } else {
            if (counter instanceof HTMLElement) {
              counter.innerText = target.toLocaleString();
            }
          }
        };
        
        requestAnimationFrame(updateCounter);
      });
    };
    
    // Intersection Observer to trigger animation when scrolled into view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounters();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    
    const counterSection = document.querySelector('.counter-section');
    if (counterSection) {
      observer.observe(counterSection);
    }
    
    return () => {
      if (counterSection) {
        observer.unobserve(counterSection);
      }
    };
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gray-100 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 order-2 lg:order-1 mt-8 lg:mt-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fadeIn">
                Global Shipping Solutions
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 animate-fadeIn animation-delay-1">
                Reliable, efficient, and cost-effective transportation services tailored to your business needs.
              </p>
              <div className="flex flex-wrap gap-4 animate-fadeIn animation-delay-2">
                <Link to="/services" className="bg-blue-800 hover:bg-blue-900 text-white px-6 py-3 rounded-lg flex items-center shadow-lg transition duration-300">
                  <Truck className="mr-2" size={20} />
                  Our Services
                </Link>
                <Link to="/contact" className="bg-white border-2 border-blue-800 text-blue-800 hover:bg-blue-50 px-6 py-3 rounded-lg flex items-center shadow-sm transition duration-300">
                  <CheckCircle className="mr-2" size={20} />
                  Get a Quote
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2 order-1 lg:order-2 animate-fadeIn">
              <div className="rounded-lg overflow-hidden shadow-xl">
                {/* <video autoPlay muted loop playsInline className="w-full h-auto">
                  <source src="/images/video.mp4" type="video/mp4" />
                  {/* <source src="/images/video.webm" type="video/webm" /> */}
                  {/* Your browser doesn't support HTML5 video. */}
                {/* </video> */}
                  <video src={video} autoPlay loop muted className='w-full'></video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive logistics solutions for all your shipping needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Air Freight */}
            <div className="bg-white rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg p-6">
              <div className="w-16 h-16 bg-blue-800 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <Plane size={28} />
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">Air Freight</h3>
              <p className="text-gray-600 text-center mb-4">
                Fast and reliable air shipping solutions for time-sensitive cargo.
              </p>
              <div className="text-center">
                <Link to="/services#air" className="inline-block border border-blue-800 text-blue-800 hover:bg-blue-800 hover:text-white px-4 py-2 rounded-md transition duration-300">
                  Learn More
                </Link>
              </div>
            </div>

            {/* Ocean Freight */}
            <div className="bg-white rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg p-6">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <Droplet size={28} />
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">Ocean Freight</h3>
              <p className="text-gray-600 text-center mb-4">
                Cost-effective ocean shipping for large volume shipments.
              </p>
              <div className="text-center">
                <Link to="/services#ocean" className="inline-block border border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-4 py-2 rounded-md transition duration-300">
                  Learn More
                </Link>
              </div>
            </div>

            {/* Ground Shipping */}
            <div className="bg-white rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg p-6">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <Truck size={28} />
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">Ground Shipping</h3>
              <p className="text-gray-600 text-center mb-4">
                Reliable domestic transportation with real-time tracking.
              </p>
              <div className="text-center">
                <Link to="/services#ground" className="inline-block border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white px-4 py-2 rounded-md transition duration-300">
                  Learn More
                </Link>
              </div>
            </div>

            {/* Warehousing */}
            <div className="bg-white rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg p-6">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <Building size={28} />
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">Warehousing</h3>
              <p className="text-gray-600 text-center mb-4">
                Secure storage and inventory management solutions.
              </p>
              <div className="text-center">
                <Link to="/services#warehouse" className="inline-block border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-4 py-2 rounded-md transition duration-300">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="inline-block border-2 border-blue-800 text-blue-800 hover:bg-blue-800 hover:text-white px-6 py-3 rounded-lg transition duration-300">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/2">
              <img 
                src={transit} 
                alt="About Q.N.B Transport" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-4">About Q.N.B Transport</h2>
              <p className="text-xl text-gray-600 mb-4">Delivering excellence in logistics since 2003.</p>
              <p className="text-gray-600 mb-6">
                Q.N.B Transport has grown from a regional carrier to a global logistics provider, offering comprehensive shipping solutions to businesses of all sizes. Our commitment to reliability, efficiency, and customer service sets us apart in the industry.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="text-blue-800 mr-2 flex-shrink-0 mt-1" size={20} />
                  <span>ISO 9001 Certified Operations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-blue-800 mr-2 flex-shrink-0 mt-1" size={20} />
                  <span>24/7 Customer Support</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-blue-800 mr-2 flex-shrink-0 mt-1" size={20} />
                  <span>Global Network of Partners</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-blue-800 mr-2 flex-shrink-0 mt-1" size={20} />
                  <span>Real-time Shipment Tracking</span>
                </li>
              </ul>
              <Link to="/about" className="inline-block bg-blue-800 hover:bg-blue-900 text-white px-6 py-3 rounded-lg transition duration-300">
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tracking CTA */}
      <section className="py-10 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h3 className="text-2xl font-bold mb-2">Track Your Shipment</h3>
              <p className="text-gray-300">
                Enter your tracking number to get real-time updates on your shipment's status and location.
              </p>
            </div>
            <div className="w-full md:w-auto">
              <form className="flex">
                <input 
                  type="text" 
                  placeholder="Tracking Number" 
                  className="flex-grow px-4 py-3 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button 
                  type="submit" 
                  className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-r-lg transition duration-300"
                >
                  Track
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Logistics Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Advanced Logistics Features</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Innovative solutions for your supply chain needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Real-Time Tracking */}
            <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
              <div className="text-blue-800 text-5xl mb-6 text-center flex align-center justify-center">
                <Globe size={70} />
              </div>
              <h4 className="text-xl font-semibold mb-4 text-center">Real-Time Tracking</h4>
              <p className="text-gray-600 text-center mb-6">
                Monitor your shipments 24/7 with our advanced GPS tracking system. Get instant updates and predictive arrival times.
              </p>
              <div className="text-center">
                <Link to="#" className="inline-block border border-blue-800 text-blue-800 hover:bg-blue-800 hover:text-white px-4 py-2 rounded-md transition duration-300">
                  Learn More
                </Link>
              </div>
            </div>

            {/* Smart Routing */}
            <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
              <div className="text-blue-800 text-5xl mb-6 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto">
                  <path d="M3 3v18h18"></path>
                  <path d="m19 9-5-5-4 4-3-3"></path>
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-4 text-center">Smart Routing</h4>
              <p className="text-gray-600 text-center mb-6">
                Our AI-powered routing algorithms optimize delivery paths to reduce transit times and fuel consumption.
              </p>
              <div className="text-center">
                <Link to="#" className="inline-block border border-blue-800 text-blue-800 hover:bg-blue-800 hover:text-white px-4 py-2 rounded-md transition duration-300">
                  Learn More
                </Link>
              </div>
            </div>

            {/* Secure Storage */}
            <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
              <div className="text-blue-800 text-5xl mb-6 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto">
                  <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  <circle cx="12" cy="16" r="1"></circle>
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-4 text-center">Secure Storage</h4>
              <p className="text-gray-600 text-center mb-6">
                Climate-controlled warehouses with 24/7 surveillance and biometric access for maximum security.
              </p>
              <div className="text-center">
                <Link to="#" className="inline-block border border-blue-800 text-blue-800 hover:bg-blue-800 hover:text-white px-4 py-2 rounded-md transition duration-300">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact in Numbers */}
      <section className="py-16 bg-gray-50 counter-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Impact in Numbers</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Delivering excellence every day
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg">
              <div className="text-blue-800 text-5xl mb-6">
                <Users className="mx-auto" />
              </div>
              <h3 className="counter-value text-4xl font-bold mb-2" data-target="300">0</h3>
              <p className="text-gray-600">Dedicated Workers</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg">
              <div className="text-blue-800 text-5xl mb-6">
                <Package className="mx-auto" />
              </div>
              <h3 className="counter-value text-4xl font-bold mb-2" data-target="3000">0</h3>
              <p className="text-gray-600">Containers Sorted Monthly</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg">
              <div className="text-blue-800 text-5xl mb-6">
                <Truck className="mx-auto" />
              </div>
              <h3 className="counter-value text-4xl font-bold mb-2" data-target="150">0</h3>
              <p className="text-gray-600">Daily Active Shipments</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Ship With Us?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust Q.N.B Transport for their logistics needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-bold transition duration-300">
              Get a Quote
            </Link>
            <Link to="/contact" className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-lg font-bold transition duration-300">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;