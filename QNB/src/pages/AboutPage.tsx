import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { Globe, Users, Trees, Battery, Recycle, Sun } from 'lucide-react';
import importt from '../images/import.mp4'
import story from '../images/story.avif'

const AboutPage: React.FC = () => {
  useEffect(() => {
    document.title = 'About Us | Q.N.B Transport';
  }, []);

  return (
    <>
      <PageHeader title="About Q.N.B Transport" />

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <p className="text-xl text-gray-600 mb-4">From humble beginnings to global logistics provider.</p>
              <p className="text-gray-600 mb-4">
                Founded in 2003 as a regional trucking company, Q.N.B Transport has grown into a comprehensive logistics provider with a global network. Our journey has been marked by strategic expansions, technological investments, and an unwavering commitment to customer satisfaction.
              </p>
              <p className="text-gray-600 mb-6">
                Today, we operate in over 50 countries with a fleet of modern vehicles, aircraft partnerships, and ocean freight alliances that allow us to serve clients of all sizes with efficiency and reliability.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="flex items-center">
                  <div className="text-blue-800 mr-4 text-3xl">
                    <Globe />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-0">50+</h3>
                    <p className="text-gray-500">Countries Served</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="text-blue-800 mr-4 text-3xl">
                    <Users />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-0">300+</h3>
                    <p className="text-gray-500">Dedicated Staff</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <img 
                src={story} 
                alt="Our Story" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Mission & Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The foundation of everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-blue-800 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <circle cx="12" cy="12" r="6"></circle>
                  <circle cx="12" cy="12" r="2"></circle>
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-3">Our Mission</h4>
              <p className="text-gray-600">
                To provide reliable, efficient, and innovative logistics solutions that empower businesses to thrive in a global marketplace.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-3">Our Vision</h4>
              <p className="text-gray-600">
                To be the most trusted global logistics partner, recognized for excellence in service, innovation, and sustainability.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-3">Our Values</h4>
              <p className="text-gray-600">
                Integrity, Reliability, Innovation, Customer Focus, and Sustainability guide every decision we make.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Milestones in our growth and development
            </p>
          </div>
          <div className="relative max-w-4xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-800"></div>
            
            {/* Timeline items */}
            <div className="relative z-10">
              {/* 2003 */}
              <div className="mb-8 flex justify-between items-center w-full right-timeline">
                <div className="order-1 w-5/12"></div>
                <div className="z-20 flex items-center order-1 bg-blue-800 shadow-xl w-8 h-8 rounded-full">
                  <h1 className="mx-auto font-semibold text-lg text-white">1</h1>
                </div>
                <div className="order-1 bg-white rounded-lg shadow-md w-5/12 px-6 py-4">
                  <h3 className="font-bold text-gray-800 text-xl">2003</h3>
                  <p className="text-sm text-gray-600">Founded as a regional trucking company with 5 vehicles</p>
                </div>
              </div>

              {/* 2006 */}
              <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                <div className="order-1 w-5/12"></div>
                <div className="z-20 flex items-center order-1 bg-blue-800 shadow-xl w-8 h-8 rounded-full">
                  <h1 className="mx-auto font-semibold text-lg text-white">2</h1>
                </div>
                <div className="order-1 bg-white rounded-lg shadow-md w-5/12 px-6 py-4">
                  <h3 className="font-bold text-gray-800 text-xl">2006</h3>
                  <p className="text-sm text-gray-600">Expanded to nationwide ground shipping services</p>
                </div>
              </div>

              {/* 2010 */}
              <div className="mb-8 flex justify-between items-center w-full right-timeline">
                <div className="order-1 w-5/12"></div>
                <div className="z-20 flex items-center order-1 bg-blue-800 shadow-xl w-8 h-8 rounded-full">
                  <h1 className="mx-auto font-semibold text-lg text-white">3</h1>
                </div>
                <div className="order-1 bg-white rounded-lg shadow-md w-5/12 px-6 py-4">
                  <h3 className="font-bold text-gray-800 text-xl">2010</h3>
                  <p className="text-sm text-gray-600">Launched international air freight services</p>
                </div>
              </div>

              {/* 2013 */}
              <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                <div className="order-1 w-5/12"></div>
                <div className="z-20 flex items-center order-1 bg-blue-800 shadow-xl w-8 h-8 rounded-full">
                  <h1 className="mx-auto font-semibold text-lg text-white">4</h1>
                </div>
                <div className="order-1 bg-white rounded-lg shadow-md w-5/12 px-6 py-4">
                  <h3 className="font-bold text-gray-800 text-xl">2013</h3>
                  <p className="text-sm text-gray-600">Established ocean freight division and warehousing facilities</p>
                </div>
              </div>

              {/* 2019 */}
              <div className="mb-8 flex justify-between items-center w-full right-timeline">
                <div className="order-1 w-5/12"></div>
                <div className="z-20 flex items-center order-1 bg-blue-800 shadow-xl w-8 h-8 rounded-full">
                  <h1 className="mx-auto font-semibold text-lg text-white">5</h1>
                </div>
                <div className="order-1 bg-white rounded-lg shadow-md w-5/12 px-6 py-4">
                  <h3 className="font-bold text-gray-800 text-xl">2019</h3>
                  <p className="text-sm text-gray-600">Implemented real-time tracking technology across all services</p>
                </div>
              </div>

              {/* 2024 */}
              <div className="flex justify-between flex-row-reverse items-center w-full left-timeline">
                <div className="order-1 w-5/12"></div>
                <div className="z-20 flex items-center order-1 bg-blue-800 shadow-xl w-8 h-8 rounded-full">
                  <h1 className="mx-auto font-semibold text-lg text-white">6</h1>
                </div>
                <div className="order-1 bg-white rounded-lg shadow-md w-5/12 px-6 py-4">
                  <h3 className="font-bold text-gray-800 text-xl">2024</h3>
                  <p className="text-sm text-gray-600">Recognized as a top 10 global logistics provider</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Commitment */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Sustainability Commitment</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Building a greener future for logistics
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 text-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg">
              <div className="text-blue-800 text-4xl mb-4">
                <Trees className="mx-auto" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Carbon Neutral by 2030</h4>
              <p className="text-gray-600 mb-4">
                We're committed to achieving net-zero carbon emissions across all our operations by 2030.
              </p>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                <div className="bg-blue-800 h-2.5 rounded-full" style={{ width: '45%' }}></div>
              </div>
              <p className="text-gray-500 text-sm">45% of target achieved</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg">
              <div className="text-blue-800 text-4xl mb-4">
                <Battery className="mx-auto" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Electric Fleet</h4>
              <p className="text-gray-600 mb-4">
                Transitioning our entire ground fleet to electric vehicles by 2028.
              </p>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                <div className="bg-blue-800 h-2.5 rounded-full" style={{ width: '30%' }}></div>
              </div>
              <p className="text-gray-500 text-sm">30% transition completed</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg">
              <div className="text-blue-800 text-4xl mb-4">
                <Recycle className="mx-auto" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Waste Reduction</h4>
              <p className="text-gray-600 mb-4">
                90% reduction in operational waste through recycling and process optimization.
              </p>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                <div className="bg-blue-800 h-2.5 rounded-full" style={{ width: '65%' }}></div>
              </div>
              <p className="text-gray-500 text-sm">65% reduction achieved</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg">
              <div className="text-blue-800 text-4xl mb-4">
                <Sun className="mx-auto" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Renewable Energy</h4>
              <p className="text-gray-600 mb-4">
                Powering all facilities with 100% renewable energy sources by 2025.
              </p>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                <div className="bg-blue-800 h-2.5 rounded-full" style={{ width: '75%' }}></div>
              </div>
              <p className="text-gray-500 text-sm">75% renewable energy usage</p>
            </div>
          </div>
          <div className="text-center mt-10">
            <a href="#" className="inline-block bg-gradient-to-r from-purple-500 via-blue-500 to-blue-400 text-white px-8 py-3 rounded-lg font-bold transition duration-300 hover:shadow-lg">
              Learn More About Our Green Initiatives
            </a>
          </div>
        </div>
      </section>

      {/* Shipping Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Seamless Shipping Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From origin to destination - transparent and efficient
            </p>
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/2">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <video autoPlay muted loop playsInline className="w-full h-auto">
                  <source src={importt} type="video/mp4" />
                  Your browser doesn't support HTML5 video.
                </video>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="space-y-6">
                <div className="flex items-start p-4 border-l-4 border-blue-800 bg-white shadow-md rounded-r-lg">
                  <div className="bg-blue-800 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Documentation & Booking</h4>
                    <p className="text-gray-600">We handle all export/import documentation and secure optimal vessel space.</p>
                  </div>
                </div>
                <div className="flex items-start p-4 border-l-4 border-blue-800 bg-white shadow-md rounded-r-lg">
                  <div className="bg-blue-800 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Cargo Collection</h4>
                    <p className="text-gray-600">Our team collects your goods with full inventory verification.</p>
                  </div>
                </div>
                <div className="flex items-start p-4 border-l-4 border-blue-800 bg-white shadow-md rounded-r-lg">
                  <div className="bg-blue-800 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Customs Clearance</h4>
                    <p className="text-gray-600">Expert handling of all customs procedures at origin port.</p>
                  </div>
                </div>
                <div className="flex items-start p-4 border-l-4 border-blue-800 bg-white shadow-md rounded-r-lg">
                  <div className="bg-blue-800 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Ocean Transport</h4>
                    <p className="text-gray-600">Secure container loading and real-time ocean tracking.</p>
                  </div>
                </div>
                <div className="flex items-start p-4 border-l-4 border-blue-800 bg-white shadow-md rounded-r-lg">
                  <div className="bg-blue-800 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                    5
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Destination Handling</h4>
                    <p className="text-gray-600">Port operations and import customs clearance.</p>
                  </div>
                </div>
                <div className="flex items-start p-4 border-l-4 border-blue-800 bg-white shadow-md rounded-r-lg">
                  <div className="bg-blue-800 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                    6
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Final Delivery</h4>
                    <p className="text-gray-600">Last-mile logistics to your specified location.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-800 via-indigo-700 to-purple-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Growing Network</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Partner with Q.N.B Transport for your logistics needs and experience the difference.
          </p>
          <Link to="/contact" className="inline-block bg-white text-blue-800 hover:bg-gray-100 px-8 py-3 rounded-lg font-bold transition duration-300">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
};

export default AboutPage;