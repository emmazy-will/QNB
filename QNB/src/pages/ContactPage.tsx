import React, { useState, useEffect } from 'react';
import PageHeader from '../components/PageHeader';
import { MapPin, Phone, Mail, CheckCircle } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    newsletter: false
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  useEffect(() => {
    document.title = 'Contact Us | Q.N.B Transport';
  }, []);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: checked }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after submission
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: '',
        newsletter: false
      });
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <>
      <PageHeader title="Contact Us" />

      {/* Contact Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-8">
                <h2 className="text-3xl font-bold text-center mb-2">Get in Touch</h2>
                <p className="text-gray-600 text-center mb-8">
                  Have questions about our services or need a shipping quote? Fill out the form below and we'll get back to you within 24 hours.
                </p>
                
                {isSubmitted ? (
                  <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded flex items-center mb-6">
                    <CheckCircle className="mr-2" size={20} />
                    <span>Thank you for your message! We'll get back to you soon.</span>
                  </div>
                ) : null}
                
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="firstName" className="block text-gray-700 font-medium mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-gray-700 font-medium mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="company" className="block text-gray-700 font-medium mb-2">
                      Company (Optional)
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    >
                      <option value="" disabled>Select a subject</option>
                      <option value="quote">Request a Quote</option>
                      <option value="tracking">Tracking Inquiry</option>
                      <option value="service">Service Information</option>
                      <option value="account">Account Support</option>
                      <option value="other">Other Inquiry</option>
                    </select>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    ></textarea>
                  </div>
                  
                  <div className="mb-6">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="newsletter"
                        checked={formData.newsletter}
                        onChange={handleCheckboxChange}
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <span className="ml-2 text-gray-700">
                        Subscribe to our newsletter for updates and promotions
                      </span>
                    </label>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-blue-800 hover:bg-blue-900 text-white font-bold py-3 px-4 rounded-lg transition duration-300 flex items-center justify-center"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Offices</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Global network with local expertise
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 text-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg">
              <div className="w-16 h-16 bg-blue-800 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <MapPin size={28} />
              </div>
              <h4 className="text-xl font-semibold mb-3">Headquarters</h4>
              <address className="not-italic text-gray-600">
                #48 OKIGWE ROAD<br />
                Aba Abia State<br />
                Nigeria
              </address>
              <div className="mt-4 text-gray-600">
                <p className="flex items-center justify-center mb-1">
                  <Phone size={16} className="mr-2" />
                  +2349079308579
                </p>
                <p className="flex items-center justify-center">
                  <Mail size={16} className="mr-2" />
                  qnbhelpdesk@yahoo.com
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <MapPin size={28} />
              </div>
              <h4 className="text-xl font-semibold mb-3">Port-Hacourt Office</h4>
              <address className="not-italic text-gray-600">
                #93 ODANI ROAD<br />
                Elelenwo Port-Hacourt<br />
                Nigeria
              </address>
              <div className="mt-4 text-gray-600">
                <p className="flex items-center justify-center mb-1">
                  <Phone size={16} className="mr-2" />
                  +2349029526706
                </p>
                <p className="flex items-center justify-center">
                  <Mail size={16} className="mr-2" />
                  qnbhelpdesk@gmail.com
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <MapPin size={28} />
              </div>
              <h4 className="text-xl font-semibold mb-3">Anambra Office</h4>
              <address className="not-italic text-gray-600">
                ONONENYI AMECHI PLAZA<br />
                #2 Akwa Road<br />
                ONISTHA
              </address>
              <div className="mt-4 text-gray-600">
                <p className="flex items-center justify-center mb-1">
                  <Phone size={16} className="mr-2" />
                  +65 6123 4567
                </p>
                <p className="flex items-center justify-center">
                  <Mail size={16} className="mr-2" />
                  qnbhelpdesk@yahoo.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="aspect-w-16 aspect-h-9">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.803678286902!2d7.358609814758559!3d5.120533896318489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1042993115290d71%3A0x4e64fd7d5a9a6a8a!2sAba%2C%20Abia%20State%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1689872044702!5m2!1sen!2sus" 
                className="w-full h-[500px]"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Q.N.B Transport Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Ship With Us?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get a free quote today and discover how we can streamline your logistics.
          </p>
          <a href="#contact-form" className="inline-block bg-white text-blue-800 hover:bg-gray-100 px-8 py-3 rounded-lg font-bold transition duration-300">
            Get a Free Quote
          </a>
        </div>
      </section>
    </>
  );
};

export default ContactPage;