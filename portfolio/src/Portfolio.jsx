import React, { useState, useEffect, useCallback, memo, lazy, Suspense } from 'react';
import { Github, Linkedin, Twitter, Mail, ChevronUp, ExternalLink, Moon, Sun, Menu, X } from 'lucide-react';
import { FaPython, FaJava, FaDocker, FaGit } from 'react-icons/fa';
import { SiCplusplus, SiC, SiFastapi, SiSpring, SiLangchain } from 'react-icons/si';
import { VscAzure } from 'react-icons/vsc';
import emailjs from '@emailjs/browser';
import { emailConfig } from './config/emailjs';

const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen bg-white dark:bg-[#094243]">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-yellow-600"></div>
  </div>
);

const skillsData = [
  { name: 'Python', icon: <FaPython size={40} /> },
  { name: 'Java', icon: <FaJava size={40} /> },
  { name: 'C++', icon: <SiCplusplus size={40} /> },
  { name: 'C', icon: <SiC size={40} /> },
  { name: 'FastAPI', icon: <SiFastapi size={40} /> },
  { name: 'Spring', icon: <SiSpring size={40} /> },
  { name: 'Docker', icon: <FaDocker size={40} /> },
  { name: 'Git', icon: <FaGit size={40} /> },
  { name: 'Azure', icon: <VscAzure size={40} /> },
  { name: 'Langchain', icon: <SiLangchain size={40} /> },
];

const projectsData = [
  {
    title: 'Quick Chef',
    description: ' An AI-powered recipe discovery and generation platform that uses RAG and MCP ',
    link: 'https://github.com/tamara-kostova/QuickChef',
    image: '/assets/img/quickchef.png',
  },{
    title: 'ecoGrad',
    description: 'Eco-friendly web app - 3rd Prize at ITLabs and Best Hackaton, December 2023',
    link: 'https://github.com/tamara-kostova/ecoGrad',
    image: '/assets/img/ecoGrad.jpg',
  },
  {
    title: 'Smart Vitals',
    description: 'AI-powered patient monitoring system with real-time analytics.',
    link: 'https://github.com/tamara-kostova/Smart-Vitals',
    image: '/assets/img/smartvitals.png',
  },
  {
    title: 'Hybrid RAG',
    description: 'Graph-enhanced retrieval-augmented generation for medical literature in the field of Alzheimer\'s.',
    link: 'https://github.com/tamara-kostova/HybridRAG',
    image: '/assets/img/hybridrag.png',
  },
  {
    title: 'Hot and Cold',
    description: 'Pygame maze game',
    link: 'https://github.com/tamara-kostova/Hot-and-cold',
    video: '/assets/videos/HotAndCold.mp4',
  },
  {
    title: 'Bitcoin Price Prediction',
    description: 'Time-series forecasting of Bitcoin prices using ML models.',
    link: 'https://github.com/tamara-kostova/BitcoinPrediction-ML',
    image: '/assets/img/bitcoin.png',
  },
  {
    title: 'Super Mario The Plumber, February 2020',
    description: 'A game created in 48 hours - 1st Prize at Global Game Jam, February 2020.',
    link: 'https://github.com/tamara-kostova/supermariotheplumber',
    image: '/assets/img/gamejam.jpg',
  },
  {
    title: 'AI Football',
    description: 'Reinforcement learning-powered AI football agents - 2nd Prize at Robomac, May 2023',
    link: 'https://github.com/tamara-kostova/RoboMac2023_AIFootball',
    image: '/assets/img/robomac.jpg',
  },
  {
    title: 'BlackJack',
    description: 'Windows Forms BlackJack game',
    link: 'https://github.com/tamara-kostova/BlackJack',
    image: '/assets/img/blackjack.png',
  },
];

const experienceData = [
  {
    title: 'Software Engineer',
    company: 'ITQuarks, Skopje',
    date: '01/10/2024 – CURRENT',
    description:
      'Developed an advanced Retrieval-Augmented Generation solution for extracting demographic and specific clinical data from medical documents using Large Language Models. Implemented a chatbot interface for interactive information access. Contributed to scalable backend services using FastAPI and Python integrating ML models for real-time inference and data processing. Currently developing a mobile app built with Python and React Native, providing AI-driven stock analysis and personal portfolio predictions. Integrated chatbot functionality and MCP server connections to deliver predictive insights via APIs and real-time database pipelines.',
  },
  {
    title: 'Machine Learning Intern',
    company: 'ITQuarks, Skopje',
    date: '01/07/2024 – 30/09/2024',
    description:
      'Developed a Retrieval-Augmented Generation system for trading analysis based on forex signals. Created an automated system for translating WordPress websites using Large Language Models.',
  },
  {
    title: 'Student Researcher',
    company: 'Macedonian Academy of Sciences and Art',
    date: '15/09/2024 – 30/04/2025',
    description:
      'Developed a hybrid RAG system combining lexical, semantic, and graph-based retrieval methods for deep analysis of neurology medical papers. Enhanced retrieval accuracy and response relevance through domain-specific model tuning.',
  },
  {
    title: 'Software Engineering Intern',
    company: 'MCA.mk, Skopje',
    date: '01/08/2023 – 30/10/2023',
    description:
      'Developed front-end features using Angular and seamlessly integrated them with .NET back-end functionalities. Applied Entity Core framework for efficient MSSQL database interactions, ensuring optimal data management. Collaborated on feature implementation, thriving in a dynamic, Agile-driven team environment.',
  }
];

const educationData = [
  {
    institution: 'Faculty of Computer Science & Engineering, Skopje',
    degree: 'Computer Science Engineer',
    date: '01/10/2021 – 25/06/2025',
    gpa: 'GPA: 9.72/10',
    achievements: [
      'Awarded among the top students at FCSE with GPA above 9.5 (9.72/10.0), 2025',
      'Awarded among the top students at FCSE with GPA above 9.5 (9.65/10.0), 2024',
      'Awarded among the top students at FCSE with GPA above 9.5 (9.7/10.0), 2023',
      'Second Prize at Robomac 2023, May',
      'Third Prize at ITLabs Web Development Hackathon 2023, December',
      'First Prize at GlobalGameJam 2020, February',
    ],
    coursework: [
      'Structural Programming',
      'Object-Oriented Programming',
      'Algorithms and Data Structures',
      'Visual Programming',
      'Web Programming',
      'Databases',
      'Internet Technologies',
      'Artificial Intelligence',
      'Machine Learning',
      'Deep Learning',
      'Linear Algebra and its Applications',
      'Probability and Statistics',
      'Bioinformatics',
    ],
  },
  {
    institution: "Gymnasium 'Josip Broz - Tito', Bitola",
    degree: 'High School Diploma',
    date: '01/09/2017 – 10/06/2021',
    achievements: [
      'Awarded best student in the generation at Josip Broz - Tito',
      '10 National and 20 Regional 1st, 2nd, and 3rd Prizes in Mathematics, Physics, Informatics, and English',
    ],
  },
  {
    institution: "Primary School 'Goce Delcev', Bitola",
    degree: 'Primary School Diploma',
    date: '01/09/2008 – 10/06/2017',
    achievements: [
      'Awarded best student in the generation at Goce Delcev',
      '2 Bronze medals at the National Mathematics Olympiad',
    ],
  },
];


const certificationsData = [
  {
    institution: 'Microsoft Azure AI',
    degree: 'Azure AI Fundamentals (AI-900)',
    date: 'Sept 2025',
    credential: 'https://learn.microsoft.com/api/credentials/share/en-gb/TamaraKostova-0989/1A1288009E6F3DBF?sharingId=BA860F445F708AE9'
  }]

const PublicationsData = [
  {
    title: 'Application of Large Language Models for Summarization of Medical Papers ',
    conference: 'ICT Innovation International Conference 2025',
    published: 'full paper will be included in the ICT Innovations 2025 Proceedings published by Springer in Communications in Computer and Information Science Series (CCIS)'
  }
]

const navLinks = [
  { href: '#experience', text: 'Experience' },
  { href: '#projects', text: 'Projects' },
  { href: '#skills', text: 'Skills' },
  { href: '#education', text: 'Education' },
  { href: '#certifications', text: 'Certifications' },
  { href: '#publications', text: 'Publications' },
  { href: '#contact', text: 'Contact' },
];

const TagCloud = ({ coursework }) => {
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

  return (
    <div>
      <style>{tagCloudStyles}</style>
      <div className="tag-cloud">
        {coursework.map((course, i) => (
          <div key={i} className="tag">
            {course}
          </div>
        ))}
      </div>
    </div>
  );
};

const Navbar = memo(({ isDarkMode, toggleTheme, isMobileMenuOpen, toggleMobileMenu, activeSection }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white dark:bg-[#094243] shadow-md z-50 transition-colors duration-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <a href="#top" className="text-2xl md:text-4xl font-bold dark:text-gray-200 hover:text-yellow-600 transition-colors">
            Tamara<span className="text-yellow-600">.</span>
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(({ href, text }) => (
              <a
                key={text}
                href={href}
                className={`transition-colors ${
                  activeSection === href.slice(1) ? 'text-yellow-600 dark:text-yellow-600' : 'text-gray-700 dark:text-gray-200 hover:text-yellow-600 dark:hover:text-yellow-600'
                }`}
              >
                {text}
              </a>
            ))}
            <button onClick={toggleTheme} className="text-gray-700 dark:text-gray-200 hover:text-yellow-600 dark:hover:text-yellow-600 transition-colors">
              {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
            </button>
          </div>
          
          {/* Desktop Social Links */}
          <div className="hidden md:flex space-x-6">
            <a href="https://github.com/tamara-kostova" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-200 hover:text-yellow-600 dark:hover:text-yellow-600 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/tamara-kostova/" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-200 hover:text-yellow-600 dark:hover:text-yellow-600 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:tamarakostova.bt@gmail.com" className="text-gray-700 dark:text-gray-200 hover:text-yellow-600 dark:hover:text-yellow-600 transition-colors">
              <Mail size={24} />
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <button onClick={toggleMobileMenu} className="md:hidden p-2 text-gray-700 dark:text-gray-200 hover:text-yellow-600 dark:hover:text-yellow-600 transition-colors">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation Menu */}
        <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden mt-6 pb-4 border-t border-gray-200 dark:border-gray-700 pt-6`}>
          <div className="flex flex-col space-y-4">
            {navLinks.map(({ href, text }) => (
              <a
                key={text}
                href={href}
                className={`text-lg py-2 px-4 rounded-lg transition-colors ${
                  activeSection === href.slice(1) 
                    ? 'bg-yellow-100 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400' 
                    : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {text}
              </a>
            ))}
          </div>
          
          {/* Mobile Theme Toggle and Social Links */}
          <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700 flex items-center justify-between">
            <button onClick={toggleTheme} className="p-2 text-gray-700 dark:text-gray-200 hover:text-yellow-600 dark:hover:text-yellow-600 transition-colors">
              {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
            </button>
            <div className="flex space-x-4">
              <a href="https://github.com/tamara-kostova" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-200 hover:text-yellow-600 dark:hover:text-yellow-600 transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/tamara-kostova/" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-200 hover:text-yellow-600 dark:hover:text-yellow-600 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:tamarakostova.bt@gmail.com" className="text-gray-700 dark:text-gray-200 hover:text-yellow-600 dark:hover:text-yellow-600 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
});

const HeroSection = memo(() => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Hi, I'm Tamara.";
  
  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-blue-50 to-yellow-50 dark:from-[#094243] dark:via-[#0a4748] dark:to-[#0b4a4c] transition-all duration-500 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10 dark:opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-yellow-400 rounded-full animate-pulse animation-delay-0"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-blue-400 rounded-full animate-bounce animation-delay-1000"></div>
        <div className="absolute bottom-32 left-32 w-20 h-20 bg-green-400 rounded-full animate-ping animation-delay-2000"></div>
        <div className="absolute bottom-40 right-20 w-28 h-28 bg-purple-400 rounded-full animate-pulse animation-delay-3000"></div>
      </div>
      
      <div className="text-center z-10 animate-fade-in-up">
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-yellow-600 to-gray-900 dark:from-white dark:via-yellow-400 dark:to-white bg-clip-text text-transparent leading-tight">
            {displayText}<span className="animate-pulse">|</span>
          </h1>
          <div className="h-2 w-32 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto rounded-full animate-pulse"></div>
        </div>
        
        <p className="text-xl md:text-2xl mb-6 font-medium text-gray-700 dark:text-gray-200 animate-fade-in-up animation-delay-1000">
          I build things for the web and beyond.
        </p>
        
        <p className="text-lg md:text-xl dark:text-gray-300 text-gray-600 mt-4 mb-12 max-w-2xl mx-auto px-4 animate-fade-in-up animation-delay-1500">
          Passionate about <span className="text-yellow-600 font-semibold">AI</span>, <span className="text-yellow-600 font-semibold">Machine Learning</span>, and creating innovative software solutions that make a difference.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-2000">
          <a 
            href="#projects" 
            className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white rounded-full hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg font-medium text-lg"
          >
            <span className="mr-2">View My Work</span>
            <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          
          <a 
            href="#contact" 
            className="group inline-flex items-center px-8 py-4 border-2 border-yellow-600 text-yellow-600 dark:text-yellow-400 rounded-full hover:bg-yellow-600 hover:text-white dark:hover:bg-yellow-600 dark:hover:text-white transition-all duration-300 transform hover:scale-105 font-medium text-lg"
          >
            <span className="mr-2">Get In Touch</span>
            <svg className="w-5 h-5 transition-transform group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </a>
        </div>
        
        <div className="mt-20 animate-bounce animation-delay-3000">
          <a href="#experience" className="inline-block text-gray-400 hover:text-yellow-600 transition-all duration-300 hover:scale-110">
            <div className="flex flex-col items-center">
              <span className="text-sm mb-2 opacity-75">Scroll to explore</span>
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
});

const ExperienceSection = memo(({ isVisible }) => {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-[#094243] transition-colors duration-200">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          Experience<span className="text-yellow-600">.</span>
        </h2>
        <div className="space-y-8">
          {experienceData.map((exp, index) => (
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
  );
});

const ProjectsSection = memo(({ isVisible }) => {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-[#094243] transition-colors duration-200">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">
          My Projects<span className="text-yellow-600">.</span>
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-16 max-w-2xl mx-auto">
          A collection of projects showcasing my passion for innovative solutions and cutting-edge technology.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div
              key={index}
              data-animate={`project-${index}`}
              className={`group relative overflow-hidden rounded-xl bg-white dark:bg-[#073031] shadow-lg hover-lift transition-all duration-500 ${
                isVisible[`project-${index}`] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
            >
              <div className="relative overflow-hidden rounded-t-xl">
                {project.video ? (
                  <div className="relative">
                    <video className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110">
                      <source src={project.video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.currentTarget.previousElementSibling.play();
                      }}
                      className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    >
                      <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center animate-pulse">
                        <svg className="w-8 h-8 text-white ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M14.752 11.168l-6.44-4.96a1 1 0 00-1.56.82v9.92a1 1 0 001.56.82l6.44-4.96a1 1 0 000-1.64z"
                          />
                        </svg>
                      </div>
                    </button>
                  </div>
                ) : (
                  <img src={project.image} alt={project.title} className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                {project.link && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-yellow-600 hover:text-yellow-700 dark:text-yellow-400 dark:hover:text-yellow-300 font-medium transition-colors group/link"
                  >
                    <span className="mr-2">View on GitHub</span>
                    <ExternalLink className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

const SkillsSection = memo(() => {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-[#094243] transition-colors duration-200">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">
          Skills<span className="text-yellow-600">.</span>
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-16 max-w-2xl mx-auto">
          Technologies and tools I use to bring ideas to life.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {skillsData.map((skill, index) => (
            <div 
              key={index} 
              className="group flex flex-col items-center justify-center p-6 bg-white dark:bg-[#073031] rounded-xl shadow-lg hover-lift transition-all duration-300 hover:shadow-xl animate-float"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-5xl mb-4 text-yellow-600 group-hover:scale-110 transition-transform duration-300 animate-glow">
                {skill.icon}
              </div>
              <h3 className="text-lg font-bold text-center text-gray-900 dark:text-white group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

const EducationSection = memo(({ isVisible }) => {
  return (
    <section id="education" className="py-20 bg-white dark:bg-[#094243] transition-colors duration-200">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          Education<span className="text-yellow-600">.</span>
        </h2>
        <div className="space-y-8">
          {educationData.map((edu, index) => (
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
                  <TagCloud coursework={edu.coursework} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});


const CerticatesSection = memo(({ isVisible }) => {
  return (
    <section id="certifications" className="py-20 bg-white dark:bg-[#094243] transition-colors duration-200">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          Certifications<span className="text-yellow-600">.</span>
        </h2>
        <div className="space-y-8">
          {certificationsData.map((cert, index) => (
            <div
              key={index}
              data-animate={`certifications-${index}`}
              className={`p-6 bg-white dark:bg-[#073031] rounded-lg shadow-lg transition-all duration-500 ${
                isVisible[`certifications-${index}`] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
            >
              <h3 className="text-2xl font-bold mb-2">{cert.institution}</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-2">{cert.degree}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{cert.date}</p>
              <a href={cert.credential} className="text-yellow-600 font-semibold">Credential</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});


const PublicationsSection = memo(({ isVisible }) => {
  return (
    <section id="publications" className="py-20 bg-white dark:bg-[#094243] transition-colors duration-200">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          Publications<span className="text-yellow-600">.</span>
        </h2>
        <div className="space-y-8">
          {PublicationsData.map((pub, index) => (
            <div
              key={index}
              data-animate={`publications-${index}`}
              className={`p-6 bg-white dark:bg-[#073031] rounded-lg shadow-lg transition-all duration-500 ${
                isVisible[`publications-${index}`] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
            >
              <h3 className="text-2xl font-bold mb-2">{pub.title}</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-2">{pub.conference}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{pub.published}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

const CallToActionSection = memo(() => {
  return (
    <section className="py-20 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 animate-fade-in-up">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90 animate-fade-in-up animation-delay-500">
            I'm always excited to work on innovative projects that push the boundaries of technology. 
            Let's collaborate and create something extraordinary together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-1000">
            <a 
              href="#contact" 
              className="inline-flex items-center px-8 py-4 bg-white text-yellow-600 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 font-semibold text-lg shadow-lg hover:shadow-xl"
            >
              <span className="mr-2">Start a Project</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a 
              href="https://github.com/tamara-kostova" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-full hover:bg-white hover:text-yellow-600 transition-all duration-300 transform hover:scale-105 font-semibold text-lg"
            >
              <span className="mr-2">View GitHub</span>
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
});

const ContactSection = memo(() => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null
  
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters long';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      // Create template parameters for EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'tamarakostova.bt@gmail.com',
      };
      
      // Send email using EmailJS
      await emailjs.send(
        emailConfig.serviceID, 
        emailConfig.templateID, 
        templateParams, 
        emailConfig.publicKey
      );
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section id="contact" className="py-20 bg-white dark:bg-[#094243] transition-colors duration-200">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">
          Get In Touch<span className="text-yellow-600">.</span>
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-16 max-w-2xl mx-auto">
          Have a project in mind or just want to chat? I'd love to hear from you.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Let's Connect</h3>
            <div className="space-y-6">
              <a href="mailto:tamarakostova.bt@gmail.com" className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-[#073031] rounded-xl hover-lift transition-all duration-300">
                <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Email</h4>
                  <p className="text-gray-600 dark:text-gray-300">tamarakostova.bt@gmail.com</p>
                </div>
              </a>
              
              <a href="https://www.linkedin.com/in/tamara-kostova/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-[#073031] rounded-xl hover-lift transition-all duration-300">
                <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center">
                  <Linkedin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">LinkedIn</h4>
                  <p className="text-gray-600 dark:text-gray-300">linkedin.com/in/tamara-kostova</p>
                </div>
              </a>
              
              <a href="https://github.com/tamara-kostova" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-[#073031] rounded-xl hover-lift transition-all duration-300">
                <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center">
                  <Github className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">GitHub</h4>
                  <p className="text-gray-600 dark:text-gray-300">github.com/tamara-kostova</p>
                </div>
              </a>
            </div>
          </div>
          
          <div className="bg-white dark:bg-[#073031] p-8 rounded-2xl shadow-xl hover-lift">
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-100 dark:bg-green-900 border border-green-400 dark:border-green-600 rounded-lg">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-600 dark:text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-green-700 dark:text-green-300 font-medium">Message sent successfully! I'll get back to you soon.</p>
                </div>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-100 dark:bg-red-900 border border-red-400 dark:border-red-600 rounded-lg">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-red-600 dark:text-red-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <p className="text-red-700 dark:text-red-300 font-medium">Failed to send message. Please try again or contact me directly via email.</p>
                </div>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium mb-2 dark:text-gray-200">Name *</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.name 
                        ? 'border-red-500 focus:ring-red-500' 
                        : 'border-gray-300 dark:border-gray-600 focus:ring-yellow-500'
                    } focus:outline-none focus:ring-2 focus:border-transparent dark:bg-[#094243] dark:text-white placeholder-gray-400 transition-all duration-300`}
                    placeholder="Your Name"
                    disabled={isSubmitting}
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium mb-2 dark:text-gray-200">Email *</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.email 
                        ? 'border-red-500 focus:ring-red-500' 
                        : 'border-gray-300 dark:border-gray-600 focus:ring-yellow-500'
                    } focus:outline-none focus:ring-2 focus:border-transparent dark:bg-[#094243] dark:text-white placeholder-gray-400 transition-all duration-300`}
                    placeholder="your.email@example.com"
                    disabled={isSubmitting}
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="block text-sm font-medium mb-2 dark:text-gray-200">Subject *</label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.subject 
                      ? 'border-red-500 focus:ring-red-500' 
                      : 'border-gray-300 dark:border-gray-600 focus:ring-yellow-500'
                  } focus:outline-none focus:ring-2 focus:border-transparent dark:bg-[#094243] dark:text-white placeholder-gray-400 transition-all duration-300`}
                  placeholder="What's this about?"
                  disabled={isSubmitting}
                />
                {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium mb-2 dark:text-gray-200">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.message 
                      ? 'border-red-500 focus:ring-red-500' 
                      : 'border-gray-300 dark:border-gray-600 focus:ring-yellow-500'
                  } focus:outline-none focus:ring-2 focus:border-transparent dark:bg-[#094243] dark:text-white placeholder-gray-400 h-32 resize-none transition-all duration-300`}
                  placeholder="Let's discuss your project..."
                  disabled={isSubmitting}
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-6 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white rounded-lg hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 transform hover:scale-[1.02] font-semibold focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </div>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
});

const Footer = memo(() => {
  return (
    <footer className="bg-gray-900 dark:bg-[#073031] text-white py-12 transition-colors duration-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-2xl font-bold mb-4 md:mb-0">
            Tamara<span className="text-yellow-600">.</span>
          </div>
          <div className="flex space-x-6">
            <a href="https://github.com/tamara-kostova" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-600 dark:text-gray-200 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/tamara-kostova/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-600 dark:text-gray-200 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:tamarakostova.bt@gmail.com" className="hover:text-yellow-600 dark:text-gray-200 transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
});

const Portfolio = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('darkMode') === 'true';
    }
    return false;
  });
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isVisible, setIsVisible] = useState({});
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  
  // Custom styles for animations
  const customStyles = `
    @keyframes fade-in-up {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    @keyframes float {
      0%, 100% {
        transform: translateY(0px);
      }
      50% {
        transform: translateY(-10px);
      }
    }
    
    @keyframes glow {
      0%, 100% {
        box-shadow: 0 0 5px rgba(245, 158, 11, 0.5);
      }
      50% {
        box-shadow: 0 0 20px rgba(245, 158, 11, 0.8), 0 0 30px rgba(245, 158, 11, 0.6);
      }
    }
    
    .animate-fade-in-up {
      animation: fade-in-up 0.8s ease-out;
    }
    
    .animate-float {
      animation: float 3s ease-in-out infinite;
    }
    
    .animate-glow {
      animation: glow 2s ease-in-out infinite;
    }
    
    .animation-delay-0 { animation-delay: 0s; }
    .animation-delay-1000 { animation-delay: 1s; }
    .animation-delay-1500 { animation-delay: 1.5s; }
    .animation-delay-2000 { animation-delay: 2s; }
    .animation-delay-3000 { animation-delay: 3s; }
    
    .hover-lift {
      transition: all 0.3s ease;
    }
    
    .hover-lift:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
    }
    
    .dark .hover-lift:hover {
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
    }
    
    .gradient-text {
      background: linear-gradient(135deg, #f59e0b, #d97706, #92400e);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    
    .dark .gradient-text {
      background: linear-gradient(135deg, #fbbf24, #f59e0b, #d97706);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    
    .shake {
      animation: shake 0.5s ease-in-out;
    }
    
    @keyframes shake {
      0%, 100% { transform: translateX(0); }
      25% { transform: translateX(-5px); }
      75% { transform: translateX(5px); }
    }
  `;

  const handleScroll = useCallback(() => {
    setShowScrollTop(window.scrollY > 560);

    document.querySelectorAll('[data-animate]').forEach((element) => {
      const rect = element.getBoundingClientRect();
      const isElementVisible = rect.top < window.innerHeight - 100;
      setIsVisible((prev) => ({
        ...prev,
        [element.dataset.animate]: isElementVisible,
      }));
    });

    const sections = ['experience', 'projects', 'skills', 'education', 'certifications', 'publications','contact'];
    let currentSection = '';

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          currentSection = section;
        }
      }
    });

    if (window.scrollY < 100) {
      currentSection = 'home';
    }

    setActiveSection(currentSection);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const toggleTheme = useCallback(() => {
    setIsDarkMode((prev) => {
      const newValue = !prev;
      if (typeof window !== 'undefined') {
        localStorage.setItem('darkMode', newValue.toString());
      }
      return newValue;
    });
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <style>{customStyles}</style>
      <div className="min-h-screen bg-white dark:bg-[#094243] text-gray-900 dark:text-white transition-colors duration-200">
        <Suspense fallback={<LoadingSpinner />}>
          <Navbar
            isDarkMode={isDarkMode}
            toggleTheme={toggleTheme}
            isMobileMenuOpen={isMobileMenuOpen}
            toggleMobileMenu={toggleMobileMenu}
            activeSection={activeSection}
          />
          <HeroSection />
          <ExperienceSection isVisible={isVisible} />
          <ProjectsSection isVisible={isVisible} />
          <SkillsSection />
          <EducationSection isVisible={isVisible} />
          <CerticatesSection isVisible={isVisible} />
          <PublicationsSection isVisible={isVisible} />
          <CallToActionSection />
          <ContactSection />
          <Footer />
          {showScrollTop && (
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
              className="fixed bottom-8 right-8 p-3 bg-yellow-600 text-white rounded-full shadow-lg hover:bg-yellow-700 transition-all duration-300 transform hover:scale-110 animate-glow"
              aria-label="Scroll to top"
            >
              <ChevronUp size={24} />
            </button>
          )}
        </Suspense>
      </div>
    </div>
  );
};

export default Portfolio;
