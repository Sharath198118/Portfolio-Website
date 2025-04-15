import React from 'react';
import { FaJava, FaReact, FaNodeJs, FaGithub, FaGitlab, FaAws } from 'react-icons/fa';
import { 
  SiCplusplus, 
  SiJavascript, 
  SiHtml5, 
  SiCss3, 
  SiMysql,
  SiSpringboot, 
  SiMui,
  SiPostgresql, 
  SiMongodb,
  SiJira,
  SiSelenium
} from 'react-icons/si';

function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Java", icon: <FaJava /> },
        { name: "C++", icon: <SiCplusplus /> },
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "HTML", icon: <SiHtml5 /> },
        { name: "CSS", icon: <SiCss3 /> },
        { name: "SQL", icon: <SiMysql /> }
      ]
    },
    {
      title: "Web Development",
      skills: [
        { name: "React.js", icon: <FaReact /> },
        { name: "Spring Boot", icon: <SiSpringboot /> },
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Material UI", icon: <SiMui /> }
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "MySQL", icon: <SiMysql /> },
        { name: "PostgreSQL", icon: <SiPostgresql /> },
        { name: "MongoDB", icon: <SiMongodb /> }
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "AWS", icon: <FaAws /> },
        { name: "GitHub", icon: <FaGithub /> },
        { name: "GitLab", icon: <FaGitlab /> },
        { name: "Jira", icon: <SiJira /> },
        { name: "Selenium", icon: <SiSelenium /> }
      ]
    }
  ];

  return (
    <>
    <section id="skills" className="py-12 section-animate container">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Professional Skills</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {skillCategories.map((category, index) => (
          <div 
            key={category.title} 
            className="glass-effect rounded-lg p-6"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <h3 className="text-xl font-bold text-gray-800 mb-4">{category.title}</h3>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill) => (
                <span
                  key={skill.name}
                  className="skill-tag px-4 py-2 rounded-full text-sm flex items-center gap-2 hover:shadow-lg"
                >
                  {skill.icon}
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
    <div className="section-divider"></div>
    </>
  );
}

export default Skills;