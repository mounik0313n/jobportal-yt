import React from 'react';

const partners = [
  { name: 'HCL', logo: 'https://logo.clearbit.com/hcltech.com' },
  { name: 'Deloitte', logo: 'https://logo.clearbit.com/deloitte.com' },
  { name: 'Google', logo: 'https://logo.clearbit.com/google.com' },
  { name: 'Amazon', logo: 'https://logo.clearbit.com/amazon.com' },
  { name: 'Mphasis', logo: 'https://logo.clearbit.com/mphasis.com' },
  { name: 'Accenture', logo: 'https://logo.clearbit.com/accenture.com' },
  { name: 'IBM', logo: 'https://logo.clearbit.com/ibm.com' },
  { name: 'Qualcomm', logo: 'https://logo.clearbit.com/qualcomm.com' },
  { name: 'Infosys', logo: 'https://logo.clearbit.com/infosys.com' },
  { name: 'Cognizant', logo: 'https://logo.clearbit.com/cognizant.com' },
];

const TrustedPartners = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-white via-gray-50 to-white">
      <h2 className="text-3xl font-extrabold text-center mb-8 tracking-tight text-gray-800">
        Trusted Partners
      </h2>
      <div className="overflow-hidden relative">
        <div className="flex animate-scroll-slow gap-12 items-center">
          {partners.concat(partners).map((partner, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center min-w-[120px] mx-4 opacity-80 hover:opacity-100 transition-opacity duration-300"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-16 w-auto object-contain drop-shadow-lg rounded-lg bg-white p-2 border border-gray-200"
                loading="lazy"
              />
              <span className="mt-2 text-sm font-semibold text-gray-600">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes scroll-slow {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-slow {
          animation: scroll-slow 40s linear infinite;
          width: max-content;
        }
      `}</style>
    </section>
  );
};

export default TrustedPartners; 