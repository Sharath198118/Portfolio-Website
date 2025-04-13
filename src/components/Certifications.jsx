import React from 'react';

function Certifications() {
  const certifications = [
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "AWS",
      date: "Nov 2023 - Nov 2026",
      filePath: "/src/assets/AWS Cloud Practitioner Certificate.pdf"
    },
    {
      title: "Certificate of Accomplishment",
      description: "Awarded for demonstrating exceptional commitment and skill acquisition as an Incedo Learning Champion",
      filePath: "/src/assets/Incedo Learning-Champion.pdf"
    },
    {
      title: "Databricks Accredited Generative AI Fundamental",
      issuer: "Databricks Academy",
      date: "Nov 2023",
      filePath: "/src/assets/Databricks GenAI Certificate.pdf"
    },
    {
      title: "Develop Your Communication Skills and Interpersonal Influence",
      issuer: "LinkedIn Learning",
      filePath: "/src/assets/LinkedIn Develop Your Communication Skills and Interpersonal Influence.pdf"
    }
  ];

  return (
      <>
      <section id="certifications" className="py-12 fade-in container">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Certifications</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300 cursor-pointer"
              onClick={() => cert.filePath && window.open(cert.filePath, '_blank')}
            >
              <h3 className="text-xl font-bold text-gray-800 mb-2 flex items-center">
                {cert.title}
                {cert.filePath && (
                  <svg 
                    className="w-5 h-5 ml-2 text-indigo-600" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                    />
                  </svg>
                )}
              </h3>
              {cert.issuer && <p className="text-gray-600">{cert.issuer}</p>}
              {cert.date && <p className="text-gray-600">{cert.date}</p>}
              {cert.description && <p className="text-gray-700 mt-2">{cert.description}</p>}
            </div>
          ))}
        </div>
      </section>
      <div className="section-divider"></div>
      </>
  );
}

export default Certifications