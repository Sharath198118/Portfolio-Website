import React from 'react';

function Experience() {
  return (
    <>
    <section id="experience" className="py-12 fade-in container">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Work Experience</h2>
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold text-gray-800">Software Engineer</h3>
            <p className="text-gray-600">Incedo - Chennai, Tamil Nadu</p>
          </div>
          <p className="text-gray-600">Jan 2024 - Present</p>
        </div>
        <p className="text-gray-700 mb-4">
          As a Full Stack Developer, I was responsible for enhancing the user experience and improving
          system performance by designing dynamic UI components, implementing data visualization tools,
          and integrating APIs across the Network Service Portal.
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Enhanced error notification system, improving the user experience by resolving critical
              bugs, which led to a 20% reduction in user-reported issues across the platform.</li>
          <li>Developed a dynamic error component in ReactJS, ensuring seamless reuse across the
              entire Network Service Portal (NSP), boosting consistency and improving maintenance
              efficiency by 30%.</li>
          <li>Designed a new UI for the outage dashboard using ReactJS, resulting in a 15% increase in
              user engagement by making the interface more intuitive and data-driven.</li>
          <li>Integrated APIs between frontend and backend, optimizing the data flow and enhancing
              system performance.</li>
        </ul>
      </div>
    </section>
    <div className="section-divider"></div>
    </>
  );
}

export default Experience