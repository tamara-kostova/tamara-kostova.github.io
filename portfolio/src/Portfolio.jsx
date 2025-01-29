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
      image: "assets/img/ecoGrad.jpg"
    },
    {
      title: "Smart Vitals",
      description: "AI integrated web app for monitoring patients' vital parameters.",
      link: "https://github.com/tamara-kostova/Smart-Vitals",
      image: "assets/img/smartvitals.png"
    },
    {
      title: "Hybrid RAG",
      description: "Medical Hybrid RAG implementation",
      link: "https://github.com/tamara-kostova/HybridRAG",
      image: "assets/img/project2.jpg"
    },
    {
      title: "Hot and Cold",
      description: "Pygame maze game",
      link: "https://github.com/tamara-kostova/Hot-and-cold",
      image: "assets/img/project3.jpg",
      video: "assets/img/HotAndCold.mp4"
    },
    {
      title: "Bitcoin Price Prediction",
      description: "Bitcoin price prediction with ML",
      link: "https://github.com/tamara-kostova/BitcoinPrediction-ML",
      image: "assets/img/bitcoin.png"
    },
    {
      title: "Super Mario The Plumber, February 2020",
      description: "A game created in 48 hours for Game Jam 2020.",
      link: "https://github.com/tamara-kostova/supermariotheplumber",
      image: "assets/img/gamejam.jpg"
    },
    {
      title: "AI Football",
      description: "Robomac Second Prize, May 2023",
      link: "https://github.com/tamara-kostova/RoboMac2023_AIFootball",
      image: "assets/img/robomac.jpg"
    },
    {
      title: "BlackJack",
      description: "Windows Forms BlackJack game",
      link: "https://github.com/tamara-kostova/BlackJack",
      image: "assets/img/blackjack.png"
    }
  ];

  return (
    <div className={isDarkMode ? 'dark' : ''}>
        <div className="min-h-screen bg-white dark:bg-[#094243] text-gray-900 dark:text-white transition-colors duration-200">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 bg-white dark:bg-[#094243] shadow-md z-50 transition-colors duration-200">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="text-2xl font-bold">Tamara<span className="text-yellow-600">.</span></div>
            <div className="flex space-x-8">
              <a href="#projects" className="hover:text-yellow-600 transition-colors">Projects</a>
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
            <a 
              href="#projects" 
              className="inline-flex items-center px-6 py-3 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors"
            >
              View My Work
            </a>
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
                {/* Conditionally render video or image */}
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

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50 dark:bg-[#094243] transition-colors duration-200">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Contact<span className="text-yellow-600">.</span></h2>
          <div className="max-w-3xl mx-auto">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 rounded-lg border dark:bg-[#073031] dark:border-gray-600"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-2 rounded-lg border dark:bg-[#073031] dark:border-gray-600"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea 
                  className="w-full px-4 py-2 rounded-lg border dark:bg-[#073031] dark:border-gray-600 h-32"
                  placeholder="Let's work together..."
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full px-6 py-3 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors"
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