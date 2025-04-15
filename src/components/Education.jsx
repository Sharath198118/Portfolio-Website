import React from 'react';

function Education() {
  return (
    <>
    <section id="education" className="py-12 container">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Education</h2>
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-bold text-gray-800">Bachelor of Technology</h3>
            <p className="text-gray-600">Computer Science and Engineering</p>
            <p className="text-gray-600">Sastra University - Thanjavur, Tamil Nadu</p>
          </div>
          <div className="text-right">
            <p className="text-gray-600">2019-2023</p>
            <p className="text-gray-600">CGPA: 8.3</p>
          </div>
        </div>
      </div>
    </section>
    <div className="section-divider"></div>
    </>
  );
}

export default Education