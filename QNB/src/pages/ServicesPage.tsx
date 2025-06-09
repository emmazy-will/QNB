import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { Plane, Droplet, Truck, Building, Network, Package, CheckCircle } from 'lucide-react';

const ServicesPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Our Services | Q.N.B Transport';
    
    // Handle anchor links
    const handleAnchorLinks = () => {
      const { hash } = window.location;
      if (hash) {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          setTimeout(() => {
            window.scrollTo({
              top: element.offsetTop - 100,
              behavior: 'smooth'
            });
          }, 100);
        }
      }
    };
    
    handleAnchorLinks();
    window.addEventListener('hashchange', handleAnchorLinks);
    
    return () => {
      window.removeEventListener('hashchange', handleAnchorLinks);
    };
  }, []);

  return (
    <>
      <PageHeader title="Our Services" />

      {/* Services Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Comprehensive Logistics Solutions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Tailored services to meet your shipping needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Air Freight */}
            <div id="air" className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg">
              <div className="p-6">
                <div className="w-16 h-16 bg-blue-800 rounded-full flex items-center justify-center text-white mb-6">
                  <Plane size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Air Freight</h3>
                <p className="text-gray-600 mb-4">
                  Our air freight services provide fast, reliable transportation for time-sensitive shipments. With partnerships with major airlines worldwide, we offer:
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="text-blue-800 mr-2 flex-shrink-0 mt-1" size={18} />
                    <span>Same-day and next-day delivery options</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-blue-800 mr-2 flex-shrink-0 mt-1" size={18} />
                    <span>Temperature-controlled cargo</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-blue-800 mr-2 flex-shrink-0 mt-1" size={18} />
                    <span>Dangerous goods handling</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-blue-800 mr-2 flex-shrink-0 mt-1" size={18} />
                    <span>Customs clearance services</span>
                  </li>
                </ul>
                <Link to="/contact" className="inline-block border-2 border-blue-800 text-blue-800 hover:bg-blue-800 hover:text-white px-6 py-2 rounded-lg transition duration-300">
                  Request Air Quote
                </Link>
              </div>
            </div>

            {/* Ocean Freight */}
            <div id="ocean" className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg">
              <div className="p-6">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white mb-6">
                  <Droplet size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Ocean Freight</h3>
                <p className="text-gray-600 mb-4">
                  Cost-effective shipping solutions for large volume cargo with our comprehensive ocean freight services:
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 flex-shrink-0 mt-1" size={18} />
                    <span>Full container load (FCL)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 flex-shrink-0 mt-1" size={18} />
                    <span>Less than container load (LCL)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 flex-shrink-0 mt-1" size={18} />
                    <span>Refrigerated containers</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 flex-shrink-0 mt-1" size={18} />
                    <span>Breakbulk and project cargo</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 flex-shrink-0 mt-1" size={18} />
                    <span>Port-to-port and door-to-door</span>
                  </li>
                </ul>
                <Link to="/contact" className="inline-block border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-6 py-2 rounded-lg transition duration-300">
                  Request Ocean Quote
                </Link>
              </div>
            </div>

            {/* Ground Shipping */}
            <div id="ground" className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg">
              <div className="p-6">
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center text-white mb-6">
                  <Truck size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Ground Shipping</h3>
                <p className="text-gray-600 mb-4">
                  Reliable domestic transportation with our extensive ground network:
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="text-yellow-500 mr-2 flex-shrink-0 mt-1" size={18} />
                    <span>Full truckload (FTL)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-yellow-500 mr-2 flex-shrink-0 mt-1" size={18} />
                    <span>Less than truckload (LTL)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-yellow-500 mr-2 flex-shrink-0 mt-1" size={18} />
                    <span>Expedited services</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-yellow-500 mr-2 flex-shrink-0 mt-1" size={18} />
                    <span>White glove delivery</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-yellow-500 mr-2 flex-shrink-0 mt-1" size={18} />
                    <span>Real-time tracking</span>
                  </li>
                </ul>
                <Link to="/contact" className="inline-block border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white px-6 py-2 rounded-lg transition duration-300">
                  Request Ground Quote
                </Link>
              </div>
            </div>

            {/* Warehousing */}
            <div id="warehouse" className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg">
              <div className="p-6">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white mb-6">
                  <Building size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Warehousing</h3>
                <p className="text-gray-600 mb-4">
                  Secure storage and distribution solutions with our warehousing services:
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="text-blue-500 mr-2 flex-shrink-0 mt-1" size={18} />
                    <span>Climate-controlled facilities</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-blue-500 mr-2 flex-shrink-0 mt-1" size={18} />
                    <span>Inventory management</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-blue-500 mr-2 flex-shrink-0 mt-1" size={18} />
                    <span>Pick and pack services</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-blue-500 mr-2 flex-shrink-0 mt-1" size={18} />
                    <span>Cross-docking</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-blue-500 mr-2 flex-shrink-0 mt-1" size={18} />
                    <span>24/7 security monitoring</span>
                  </li>
                </ul>
                <Link to="/contact" className="inline-block border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-6 py-2 rounded-lg transition duration-300">
                  Request Warehouse Info
                </Link>
              </div>
            </div>

            {/* Logistics Solutions */}
            <div id="logistics" className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg">
              <div className="p-6">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white mb-6">
                  <Network size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Logistics Solutions</h3>
                <p className="text-gray-600 mb-4">
                  Customized supply chain solutions tailored to your business needs:
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="text-red-600 mr-2 flex-shrink-0 mt-1" size={18} />
                    <span>Third-party logistics (3PL)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-red-600 mr-2 flex-shrink-0 mt-1" size={18} />
                    <span>Fourth-party logistics (4PL)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-red-600 mr-2 flex-shrink-0 mt-1" size={18} />
                    <span>Vendor managed inventory</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-red-600 mr-2 flex-shrink-0 mt-1" size={18} />
                    <span>Supply chain consulting</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-red-600 mr-2 flex-shrink-0 mt-1" size={18} />
                    <span>Reverse logistics</span>
                  </li>
                </ul>
                <Link to="/contact" className="inline-block border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-6 py-2 rounded-lg transition duration-300">
                  Request Consultation
                </Link>
              </div>
            </div>

            {/* Specialized Services */}
            <div id="special" className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg">
              <div className="p-6">
                <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center text-white mb-6">
                  <Package size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Specialized Services</h3>
                <p className="text-gray-600 mb-4">
                  Additional services to meet unique shipping requirements:
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="text-gray-600 mr-2 flex-shrink-0 mt-1" size={18} />
                    <span>Hazardous materials</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-gray-600 mr-2 flex-shrink-0 mt-1" size={18} />
                    <span>Oversized/heavy cargo</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-gray-600 mr-2 flex-shrink-0 mt-1" size={18} />
                    <span>Fine art and antiques</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-gray-600 mr-2 flex-shrink-0 mt-1" size={18} />
                    <span>Perishable goods</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-gray-600 mr-2 flex-shrink-0 mt-1" size={18} />
                    <span>Exhibition and event logistics</span>
                  </li>
                </ul>
                <Link to="/contact" className="inline-block border-2 border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-white px-6 py-2 rounded-lg transition duration-300">
                  Request Special Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Comparison */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Service Comparison</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose the right solution for your needs
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
              <thead className="bg-gray-800 text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Service</th>
                  <th className="px-6 py-4 text-left">Transit Time</th>
                  <th className="px-6 py-4 text-left">Best For</th>
                  <th className="px-6 py-4 text-left">Cost</th>
                  <th className="px-6 py-4 text-left">Tracking</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4">Air Freight</td>
                  <td className="px-6 py-4">1-5 days</td>
                  <td className="px-6 py-4">Time-sensitive, high-value goods</td>
                  <td className="px-6 py-4">$$$</td>
                  <td className="px-6 py-4 flex items-center">
                    <CheckCircle className="text-green-600 mr-2" size={18} />
                    <span>Real-time</span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4">Ocean Freight</td>
                  <td className="px-6 py-4">15-40 days</td>
                  <td className="px-6 py-4">Large volume, non-urgent shipments</td>
                  <td className="px-6 py-4">$</td>
                  <td className="px-6 py-4 flex items-center">
                    <CheckCircle className="text-green-600 mr-2" size={18} />
                    <span>Daily updates</span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4">Ground Shipping</td>
                  <td className="px-6 py-4">1-7 days</td>
                  <td className="px-6 py-4">Domestic, regional deliveries</td>
                  <td className="px-6 py-4">$$</td>
                  <td className="px-6 py-4 flex items-center">
                    <CheckCircle className="text-green-600 mr-2" size={18} />
                    <span>Real-time</span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4">Expedited</td>
                  <td className="px-6 py-4">Same/next day</td>
                  <td className="px-6 py-4">Urgent domestic shipments</td>
                  <td className="px-6 py-4">$$$$</td>
                  <td className="px-6 py-4 flex items-center">
                    <CheckCircle className="text-green-600 mr-2" size={18} />
                    <span>Real-time</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Need Help Choosing a Service?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our logistics experts can recommend the best solution for your specific requirements.
          </p>
          <Link to="/contact" className="inline-block bg-white text-blue-800 hover:bg-gray-100 px-8 py-3 rounded-lg font-bold transition duration-300">
            Get Expert Advice
          </Link>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;