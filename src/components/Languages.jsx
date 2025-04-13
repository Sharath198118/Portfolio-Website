import React from 'react';

function Languages() {
  const languages = [
    {
      language: "Telugu",
      level: "Native"
    },
    {
      language: "English",
      level: "Fluent (Speaking, Reading, Writing)"
    },
    {
      language: "Hindi",
      level: "Intermediate (Speaking, Reading); Basic (Writing)"
    }
  ];

  return (
    <section id="languages" className="py-12 fade-in container">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Language Competencies</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {languages.map((lang, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2">{lang.language}</h3>
            <p className="text-gray-600">{lang.level}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Languages