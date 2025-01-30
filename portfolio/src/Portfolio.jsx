import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Twitter, ChevronUp, ExternalLink, Moon, Sun } from 'lucide-react';
import { FaPython, FaJava, FaDocker, FaGit } from 'react-icons/fa';
import { SiCplusplus, SiC, SiFastapi, SiSpring, SiLangchain } from 'react-icons/si';
import { VscAzure } from "react-icons/vsc";

const Portfolio = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 560);

      document.querySelectorAll('[data-animate]').forEach(element => {
        const rect = element.getBoundingClientRect();
        const isElementVisible = rect.top < window.innerHeight - 100;
        setIsVisible(prev => ({
          ...prev,
          [element.dataset.animate]: isElementVisible
        }));
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const tagCloudStyles = `
    .tag-cloud {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      justify-content: center;
    }
    .tag {
      padding: 8px 16px;
      background-color: #f3f4f6;
      color: #1f2937;
      border-radius: 20px;
      font-size: 14px;
      font-weight: 500;
      transition: all 0.3s ease;
    }
    .tag:hover {
      background-color: #f59e0b;
      color: white;
      transform: scale(1.1);
    }
    .dark .tag {
      background-color: #374151;
      color: #f3f4f6;
    }
    .dark .tag:hover {
      background-color: #f59e0b;
      color: white;
    }
  `;

  // Skills data with icons
  const skills = [
    { name: "Python", icon: <FaPython size={40} /> },
    { name: "Java", icon: <FaJava size={40} /> },
    { name: "C++", icon: <SiCplusplus size={40} /> },
    { name: "C", icon: <SiC size={40} /> },
    { name: "FastAPI", icon: <SiFastapi size={40} /> },
    { name: "Spring", icon: <SiSpring size={40} /> },
    { name: "Docker", icon: <FaDocker size={40} /> },
    { name: "Git", icon: <FaGit size={40} /> },
    { name: "Azure", icon: <VscAzure size={40} /> },
    { name: "Langchain", icon: <SiLangchain size={40} /> },
  ];

  // Projects data
  const projects = [
    {
      title: "ecoGrad",
      description: "ITLabs and Best Hackaton, December 2023",
      link: "https://github.com/tamara-kostova/ecoGrad",
      image: "/assets/img/ecoGrad.jpg"
    },
    {
      title: "Smart Vitals",
      description: "AI-powered patient monitoring system with real-time analytics.",
      link: "https://github.com/tamara-kostova/Smart-Vitals",
      image: "/assets/img/smartvitals.png"
    },
    {
      title: "Hybrid RAG",
      description: "Graph-enhanced retrieval-augmented generation for medical literature search.",
      link: "https://github.com/tamara-kostova/HybridRAG",
      image: "/assets/img/project2.jpg"
    },
    {
      title: "Hot and Cold",
      description: "Pygame maze game",
      link: "https://github.com/tamara-kostova/Hot-and-cold",
      video: "/assets/videos/HotAndCold.mp4"
    },
    {
      title: "Bitcoin Price Prediction",
      description: "Time-series forecasting of Bitcoin prices using ML models.",
      link: "https://github.com/tamara-kostova/BitcoinPrediction-ML",
      image: "/assets/img/bitcoin.png"
    },
    {
      title: "Super Mario The Plumber, February 2020",
      description: "A game created in 48 hours for Game Jam 2020.",
      link: "https://github.com/tamara-kostova/supermariotheplumber",
      image: "/assets/img/gamejam.jpg"
    },
    {
      title: "AI Football",
      description: "Reinforcement learning-powered AI soccer agents (Robomac 2023). Robomac Second Prize, May 2023",
      link: "https://github.com/tamara-kostova/RoboMac2023_AIFootball",
      image: "/assets/img/robomac.jpg"
    },
    {
      title: "BlackJack",
      description: "Windows Forms BlackJack game",
      link: "https://github.com/tamara-kostova/BlackJack",
      image: "/assets/img/blackjack.png"
    }
  ];

  // Experience data
  const experience = [
    {
      title: "Software Engineer",
      company: "ITQuarks, Skopje",
      date: "01/10/2024 – CURRENT",
      description: "Developed an advanced Retrieval-Augmented Generation solution for extracting demographic and specific clinical data from medical documents using Large Language Models. Implemented a chatbot interface for interactive information access."
    },
    {
      title: "Machine Learning Intern",
      company: "ITQuarks, Skopje",
      date: "01/07/2024 – 30/09/2024",
      description: "Developed a Retrieval-Augmented Generation system for trading analysis based on forex signals. Created an automated system for translating WordPress websites using Large Language Models."
    },
    {
      title: "Student Researcher",
      company: "Macedonian Academy of Sciences and Art",
      date: "15/09/2024 – CURRENT",
      description: "Developing a Hybrid Retrieval-Augmented Generation (RAG) system integrating lexical, semantic, and graph-based retrieval methods to analyze medical documents in the field of neurology."
    },
    {
      title: "Software Engineering Intern",
      company: "MCA.mk, Skopje",
      date: "01/08/2023 – 30/10/2023",
      description: "Developed front-end features using Angular and integrated them with .NET back-end functionalities. Applied Entity Core framework for efficient MSSQL database interactions."
    },
    {
      title: "Bartender",
      company: "B6 Beer Bar, Bitola",
      date: "01/05/2021 – 01/09/2021",
      description: "Worked as a bartender, gaining experience in customer service and team collaboration."
    },
    {
      title: "Volunteer",
      company: "YMCA, American Corner, Forum16, Bitola",
      date: "01/09/2017 – 30/05/2021",
      description: "Volunteered in various community and educational programs, developing communication and organizational skills."
    }
  ];

  const education = [
    {
      institution: "Faculty of Computer Science & Engineering, Skopje",
      degree: "Computer Science Engineer",
      date: "01/10/2021 – CURRENT",
      gpa: "GPA: 9.65/10",
      achievements: [
        "Awarded among the top students at FCSE with GPA above 9.5 (9.7/10.0), 2023",
        "Awarded among the top students at FCSE with GPA above 9.5 (9.65/10.0), 2024",
        "Second Prize at Robomac 2023, May",
        "Third Prize at ITLabs Web Development Hackathon 2023, December",
      ],
      coursework:[
        "Structural Programming",
        "Object-Oriented Programming",
        "Algorithms and Data Structures",
        "Visual Programming",
        "Web Programming",
        "Databases",
        "Internet Technologies",
        "Artificial Intelligence",
        "Machine Learning",
        "Deep Learning",
        "Linear Algebra and its Applications",
        "Probability and Statistics",
        "Bioinformatics"
      ]
    },
    {
      institution: "Gymnasium 'Josip Broz - Tito', Bitola",
      degree: "High School Diploma",
      date: "01/09/2017 – 10/06/2021",
      achievements: [
        "Awarded best student in the generation at 'Josip Broz - Tito'",
        "10 National and 20 Regional 1st, 2nd, and 3rd Prizes in Mathematics, Physics, Informatics, and English"
      ]
    },
    {
      institution: "Primary School 'Goce Deleev', Bitola",
      degree: "Primary School Diploma",
      date: "01/09/2008 – 10/06/2017",
      achievements: [
        "Awarded best student in the generation at 'Goce Delcev'",
        "2 Bronze medals at the National Mathematics Olympiad",
      ]
    }
  ];

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-[#094243] text-gray-900 dark:text-white transition-colors duration-200">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 bg-white dark:bg-[#094243] shadow-md z-50 transition-colors duration-200">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#top" className="text-4xl font-bold hover:text-yellow-600 transition-colors">Tamara<span className="text-yellow-600">.</span></a>
            <div className="flex space-x-8">
              <a href="#experience" className="hover:text-yellow-600 transition-colors">Experience</a>
              <a href="#projects" className="hover:text-yellow-600 transition-colors">Projects</a>
              <a href="#education" className="hover:text-yellow-600 transition-colors">Education</a>
              <a href="#skills" className="hover:text-yellow-600 transition-colors">Skills</a>
              <a href="#contact" className="hover:text-yellow-600 transition-colors">Contact</a>
              <button onClick={toggleTheme} className="hover:text-yellow-600 transition-colors">
                {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
              </button>
            </div>
            <div className="flex space-x-6">
              <a 
                href="https://github.com/tamara-kostova" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-yellow-600 transition-colors"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/tamara-kostova/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-yellow-600 transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="https://x.com/tamarakostova" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-yellow-600 transition-colors"
              >
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="h-screen flex items-center justify-center bg-gray-50 dark:bg-[#094243] transition-colors duration-200">
          <div className="text-center">
            <h1 className="text-6xl font-bold mb-4">Hi, I'm Tamara<span className="text-yellow-600">.</span></h1>
            <p className="text-xl mb-6">I build things for the web and beyond.</p>
            <p className="text-lg text-gray-600 mt-4 mb-16">I specialize in AI, Machine Learning, and software development.</p>
            <a 
              href="#projects" 
              className="inline-flex items-center px-6 py-3 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors"
            >
              View My Work
            </a>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 bg-gray-50 dark:bg-[#094243] transition-colors duration-200">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16">Experience<span className="text-yellow-600">.</span></h2>
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <div
                  key={index}
                  data-animate={`experience-${index}`}
                  className={`p-6 bg-white dark:bg-[#073031] rounded-lg shadow-lg transition-all duration-500 ${
                    isVisible[`experience-${index}`] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                  }`}
                >
                  <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-2">{exp.company}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{exp.date}</p>
                  <p className="text-gray-700 dark:text-gray-200">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-gray-50 dark:bg-[#094243] transition-colors duration-200">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16">My Projects<span className="text-yellow-600">.</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div 
                  key={index}
                  data-animate={`project-${index}`}
                  className={`group relative overflow-hidden rounded-lg transition-all duration-500 ${
                    isVisible[`project-${index}`] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                  }`}
                >
                  {project.video ? (
                    <video 
                      controls 
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    >
                      <source src={project.video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  )}
                  <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center text-white p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-center mb-4">{project.description}</p>
                    {project.link && (
                      <a 
                        href={project.link}
                        target="_blank"
                        className="inline-flex items-center text-yellow-400 hover:text-yellow-300"
                      >
                        View on GitHub <ExternalLink className="ml-2" size={16} />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-white dark:bg-[#094243] transition-colors duration-200">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16">Skills<span className="text-yellow-600">.</span></h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center p-6 bg-white dark:bg-[#073031] rounded-lg shadow-lg"
                >
                  <div className="text-4xl mb-4 text-yellow-600">{skill.icon}</div>
                  <h3 className="text-xl font-bold text-center">{skill.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="education" className="py-20 bg-white dark:bg-[#094243] transition-colors duration-200">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16">Education<span className="text-yellow-600">.</span></h2>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div
                  key={index}
                  data-animate={`education-${index}`}
                  className={`p-6 bg-white dark:bg-[#073031] rounded-lg shadow-lg transition-all duration-500 ${
                    isVisible[`education-${index}`] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                  }`}
                >
                  <h3 className="text-2xl font-bold mb-2">{edu.institution}</h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-2">{edu.degree}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{edu.date}</p>
                  {edu.gpa && <p className="text-gray-700 dark:text-gray-200 mb-4">{edu.gpa}</p>}
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-200">
                    {edu.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                  {edu.coursework && (
                    <div>
                      <h4 className="text-xl font-bold mb-4">Relevant Coursework</h4>
                      <style>{tagCloudStyles}</style>
                      <div className="tag-cloud">
                        {edu.coursework.map((course, i) => (
                          <div key={i} className="tag">{course}</div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-white dark:bg-[#094243] transition-colors duration-200">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16">Contact<span className="text-yellow-600">.</span></h2>
            <div className="max-w-2xl mx-auto bg-white dark:bg-[#073031] p-8 rounded-2xl shadow-xl">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium mb-2 dark:text-gray-200">Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 
                                focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent
                                dark:bg-[#094243] dark:text-white placeholder-gray-400"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium mb-2 dark:text-gray-200">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 
                                focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent
                                dark:bg-[#094243] dark:text-white placeholder-gray-400"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium mb-2 dark:text-gray-200">Subject</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 
                              focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent
                              dark:bg-[#094243] dark:text-white placeholder-gray-400"
                    placeholder="What's this about?"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium mb-2 dark:text-gray-200">Message</label>
                  <textarea 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 
                              focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent
                              dark:bg-[#094243] dark:text-white placeholder-gray-400 h-32 resize-none"
                    placeholder="Let's discuss your project..."
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full px-6 py-3 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 
                            transition-colors duration-300 transform hover:scale-[1.02] font-medium
                            focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2
                            shadow-lg"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 dark:bg-[#073031] text-white py-12 transition-colors duration-200">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-2xl font-bold mb-4 md:mb-0">Tamara<span className="text-yellow-600">.</span></div>
              <div className="flex space-x-6">
                <a 
                  href="https://github.com/tamara-kostova" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-yellow-600 transition-colors"
                >
                  <Github size={24} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/tamara-kostova/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-yellow-600 transition-colors"
                >
                  <Linkedin size={24} />
                </a>
                <a 
                  href="https://x.com/tamarakostova" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-yellow-600 transition-colors"
                >
                  <Twitter size={24} />
                </a>
              </div>
            </div>
          </div>
        </footer>

        {/* Scroll to Top Button */}
        {showScrollTop && (
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-8 right-8 p-3 bg-yellow-600 text-white rounded-full shadow-lg hover:bg-yellow-700 transition-colors"
          >
            <ChevronUp size={24} />
          </button>
        )}
      </div>
    </div>
  );
};

export default Portfolio;