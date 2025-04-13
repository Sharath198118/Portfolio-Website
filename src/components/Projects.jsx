import React from 'react';

function Projects() {
  return (
    <>
    <section id="projects" className="py-12 fade-in container">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Projects</h2>
      
      <div className="space-y-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            Hack-a-thon – Submission to Evaluation
          </h3>
          <p className="text-gray-600 mb-4">Java-Spring Boot, React.js, MySQL</p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Automated the entire Hack-a-thon process by developing a web application that
                streamlined idea submissions and evaluation, reducing manual work by 40% and
                improving event efficiency.</li>
            <li>Developed RESTful APIs for communication between frontend and backend systems,
                ensuring smooth integration and reducing the time to deployment.</li>
            <li>Implemented Google SSO authentication, increasing the security and ease of registration
                during the Hack-a-thon event.</li>
            <li>Automated testing using Selenium, reducing manual testing effort by 50% and ensuring
                higher test coverage and application stability.</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            Crop Prediction using Machine Learning Techniques
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Developed a crop prediction model using Machine Learning techniques like SVM, KNN,
                Decision Tree to recommend suitable crops based on agricultural factors.</li>
            <li>Processed and normalized agricultural data to improve prediction accuracy, making crop
                selection easier and more data-driven.</li>
          </ul>
        </div>
      </div>
    </section>
    <div className="section-divider"></div>
    </>
  );
}

export default Projects