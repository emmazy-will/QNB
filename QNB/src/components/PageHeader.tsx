import React from 'react';

interface PageHeaderProps {
  title: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title }) => {
  return (
    <section className="relative py-20 bg-gradient-to-r from-[#003366] to-[#1a3a6a] text-white overflow-hidden">
      <div className="absolute inset-0 opacity-50\" style={{
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg\" viewBox="0 0 100 100\" preserveAspectRatio="none"><path d="M0,0 L100,0 L100,100 Q50,80 0,100 Z\" fill="rgba(255,255,255,0.05)"/></svg>')`,
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat'
      }}></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
        </div>
      </div>
    </section>
  );
};

export default PageHeader;