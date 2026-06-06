import React, { useState, useCallback, memo } from 'react';
import { Mail, Moon, Sun, Menu, X } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = memo(({ isDarkMode, toggleTheme, isMobileMenuOpen, toggleMobileMenu }) => (
    <nav className="fixed top-0 left-0 right-0 bg-white dark:bg-[#094243] shadow-md z-50 transition-colors duration-200">
        <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
                <Link to="/" className="text-2xl md:text-4xl font-bold dark:text-gray-200 hover:text-yellow-600 transition-colors">
                    Tamara<span className="text-yellow-600">.</span>
                </Link>

                {/* Desktop nav */}
                <div className="hidden md:flex items-center gap-8">
                    <Link to="/" className="text-gray-700 dark:text-gray-200 hover:text-yellow-600 dark:hover:text-yellow-600 transition-colors">
                        Home
                    </Link>
                    <Link to="/about" className="text-yellow-600 dark:text-yellow-400 font-semibold transition-colors">
                        About
                    </Link>
                    <button onClick={toggleTheme} className="text-gray-700 dark:text-gray-200 hover:text-yellow-600 transition-colors">
                        {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
                    </button>
                </div>

                {/* Desktop social */}
                <div className="hidden md:flex space-x-6">
                    <a href="https://github.com/tamara-kostova" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-200 hover:text-yellow-600 transition-colors"><FaGithub size={24} /></a>
                    <a href="https://www.linkedin.com/in/tamara-kostova/" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-200 hover:text-yellow-600 transition-colors"><FaLinkedin size={24} /></a>
                    <a href="mailto:tamarakostova.bt@gmail.com" className="text-gray-700 dark:text-gray-200 hover:text-yellow-600 transition-colors"><Mail size={24} /></a>
                </div>

                <button onClick={toggleMobileMenu} className="md:hidden p-2 text-gray-700 dark:text-gray-200 hover:text-yellow-600 transition-colors">
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile menu */}
            <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden mt-6 pb-4 border-t border-gray-200 dark:border-gray-700 pt-6`}>
                <div className="flex flex-col space-y-4">
                    <Link to="/" className="text-lg py-2 px-4 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" onClick={toggleMobileMenu}>
                        Home
                    </Link>
                    <Link to="/about" className="text-lg py-2 px-4 rounded-lg text-yellow-600 dark:text-yellow-400 font-semibold" onClick={toggleMobileMenu}>
                        About
                    </Link>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700 flex items-center justify-between">
                    <button onClick={toggleTheme} className="p-2 text-gray-700 dark:text-gray-200 hover:text-yellow-600 transition-colors">
                        {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
                    </button>
                    <div className="flex space-x-4">
                        <a href="https://github.com/tamara-kostova" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-200 hover:text-yellow-600 transition-colors"><FaGithub size={20} /></a>
                        <a href="https://www.linkedin.com/in/tamara-kostova/" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-200 hover:text-yellow-600 transition-colors"><FaLinkedin size={20} /></a>
                        <a href="mailto:tamarakostova.bt@gmail.com" className="text-gray-700 dark:text-gray-200 hover:text-yellow-600 transition-colors"><Mail size={20} /></a>
                    </div>
                </div>
            </div>
        </div>
    </nav>
));

const outsideItems = [
    {
        emoji: '⛰️',
        label: 'Hiking',
        description: "Somewhere in the mountains is where I actually decompress. Macedonia has nature and trails that most people don't know exist - I try to make the most of that.",
    },
    {
        emoji: '🏃',
        label: 'Running',
        description: 'From time to time. Not fast - just a reliable way to clear the head before or after a long day of thinking in code.',
    },
    {
        emoji: '⛷️',
        label: 'Skiing',
        description: 'Look forward to it every winter.',
    },
    {
        emoji: '🧗',
        label: 'Rock Climbing',
        description: "Tried it and liked it more than expected. It's basically puzzle-solving where your body and mind must work together.",
    },
    {
        emoji: '🏕️',
        label: 'Camping',
        description: "I love being outside properly - no signal, sleeping under stars, waking up cold. It resets something that a weekend at home doesn't.",
    },
];

const currentProject = {
    title: 'Multi-Agent Neuroimaging Classifier',
    description: 'LangGraph pipeline for automated classification of brain tumour, multiple sclerosis, and stroke from MRI/CT scans - combining a MedGemma triage agent, task-specific CNNs, SAM3 segmentation, and BiomedCLIP zero-shot re-ranking into a single auditable graph.',
    stack: ['LangGraph', 'MedGemma', 'VGG16 / DenseNet / ResNet', 'SAM3', 'BiomedCLIP'],
    link: 'https://github.com/tamara-kostova/MultiAgentMedClassifier',
};

const CurrentlyBuildingSection = memo(() => (
    <section className="py-6 bg-white dark:bg-[#094243]">
        <div className="container mx-auto px-4 max-w-3xl">
            <div className="p-6 rounded-2xl border border-dashed border-yellow-400 dark:border-yellow-600 bg-yellow-50/40 dark:bg-yellow-900/10">
                <div className="flex flex-col sm:flex-row sm:items-start gap-5">
                    <div className="flex-shrink-0">
                        <span className="text-xs font-bold uppercase tracking-widest text-yellow-600 dark:text-yellow-500">Currently building</span>
                    </div>
                    <div className="flex-1">
                        <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-1">{currentProject.title}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{currentProject.description}</p>
                        <div className="flex flex-wrap gap-2">
                            {currentProject.stack.map((s, i) => (
                                <span key={i} className="px-3 py-1 text-xs font-semibold rounded-full bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 border border-yellow-200 dark:border-yellow-700">
                                    {s}
                                </span>
                            ))}
                        </div>
                    </div>
                    {currentProject.link && (
                        <a href={currentProject.link} target="_blank" rel="noopener noreferrer" className="text-yellow-600 hover:text-yellow-700 dark:text-yellow-400 dark:hover:text-yellow-300 font-medium transition-colors whitespace-nowrap">
                            View on GitHub
                        </a>
                    )}
                </div>
            </div>
        </div>
    </section>
));

const About = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        if (typeof window !== 'undefined') return localStorage.getItem('darkMode') === 'true';
        return false;
    });
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleTheme = useCallback(() => {
        setIsDarkMode(prev => {
            const next = !prev;
            if (typeof window !== 'undefined') localStorage.setItem('darkMode', next.toString());
            return next;
        });
    }, []);

    const toggleMobileMenu = useCallback(() => setIsMobileMenuOpen(prev => !prev), []);

    const customStyles = `
        @keyframes fade-in-up {
            from { opacity: 0; transform: translateY(24px); }
            to   { opacity: 1; transform: translateY(0); }
        }
        .fade-up { animation: fade-in-up 0.7s ease-out both; }
        .delay-1 { animation-delay: 0.1s; }
        .delay-2 { animation-delay: 0.2s; }
        .hover-lift { transition: all 0.3s ease; }
        .hover-lift:hover { transform: translateY(-4px); box-shadow: 0 10px 25px rgba(0,0,0,0.12); }
        .dark .hover-lift:hover { box-shadow: 0 10px 25px rgba(0,0,0,0.3); }
    `;

    return (
        <div className={isDarkMode ? 'dark' : ''}>
            <style>{customStyles}</style>
            <div className="min-h-screen bg-white dark:bg-[#094243] text-gray-900 dark:text-white transition-colors duration-200">
                <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} isMobileMenuOpen={isMobileMenuOpen} toggleMobileMenu={toggleMobileMenu} />

                {/* Header */}
                <div className="pt-32 pb-16 bg-gradient-to-br from-gray-50 via-blue-50 to-yellow-50 dark:from-[#094243] dark:via-[#0a4748] dark:to-[#0b4a4c]">
                    <div className="container mx-auto px-4 max-w-3xl">
                        <p className="text-yellow-600 dark:text-yellow-400 font-semibold tracking-widest text-sm uppercase mb-4 fade-up">The full picture</p>
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 fade-up delay-1">
                            About Me<span className="text-yellow-600">.</span>
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed fade-up delay-2">
                            Software engineer, researcher, and someone who spends a lot of time in the mountains when not in front of a screen.
                        </p>
                    </div>
                </div>

                {/* The work */}
                <section className="py-16 border-b border-gray-100 dark:border-gray-800">
                    <div className="container mx-auto px-4 max-w-3xl">
                        <h2 className="text-3xl font-bold mb-8 fade-up">The work<span className="text-yellow-600">.</span></h2>
                        <div className="space-y-5 text-lg text-gray-700 dark:text-gray-300 leading-relaxed fade-up delay-1">
                            <p>I'm a software engineer at ITQuarks in Skopje, where I build AI systems that are meant to run in production - not demos, not notebooks, but things that operate in the background and do something useful. Right now that's a multi-agent platform for document understanding and compliance automation.</p>
                            <p>Before that I built the backend for an AI investing platform: a Strands Agents orchestrator that monitors users' portfolios continuously and sends personalised insights without them having to ask.</p>
                            <p>I've been here for more than two years now, and there hasn't been a dull moment or project yet. Something new to learn and figure out every week, and a lot of freedom to do it in the way that makes the most sense to me.</p>
                            <p>I also spent time at the Macedonian Academy of Sciences doing research and building a hybrid RAG system for neurology literature that combined keyword search, dense embeddings, and knowledge graphs.</p>
                            <p>I'm currently in the MSc Data Science programme at FCSE where I'm doing neuroimaging research: classifying brain tumours, MS lesions, and stroke from MRI/CT scans using a LangGraph pipeline with task-specific CNNs, BiomedCLIP and SAM3 segmentation.</p>
                            <p>I finished my BSc with a 9.72/10 GPA, ranked among the top students all four years. I mention it not to brag but because doing that while working and doing research in parallel taught me more about prioritisation than any course specifically designed to.</p>
                        </div>
                    </div>
                </section>

                <CurrentlyBuildingSection />

                {/* Outside of work */}
                <section className="py-16 border-b border-gray-100 dark:border-gray-800">
                    <div className="container mx-auto px-4 max-w-3xl">
                        <h2 className="text-3xl font-bold mb-4 fade-up">Outside of work<span className="text-yellow-600">.</span></h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-10 text-lg fade-up delay-1">
                            I spend as much time as I can outdoors. Nature genuinely recharges me in a way that nothing indoors quite replicates.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {outsideItems.map((item, i) => (
                                <div
                                    key={i}
                                    className="p-6 bg-white dark:bg-[#073031] rounded-xl shadow-sm hover-lift border border-transparent hover:border-yellow-400 dark:hover:border-yellow-600 transition-all duration-300 fade-up"
                                    style={{ animationDelay: `${0.1 * (i + 1)}s` }}
                                >
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="text-3xl">{item.emoji}</span>
                                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">{item.label}</h3>
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* On learning */}
                <section className="py-16 border-b border-gray-100 dark:border-gray-800">
                    <div className="container mx-auto px-4 max-w-3xl">
                        <h2 className="text-3xl font-bold mb-6 fade-up">On learning<span className="text-yellow-600">.</span></h2>
                        <div className="space-y-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed fade-up delay-1">
                            <p>I genuinely enjoy learning - not in a LinkedIn-caption way, but in the sense that finding out how something works is its own reward for me. That's probably why getting the Bachelor's degree did not mean the end of the education course for me, alongside having a full-time job. It's also why I entered hackathons and competitions all throughout primary and high school and continued in university: not for the prizes (though winning them brings great satisfaction as well), but because constrained problems force you to learn fast.</p>
                            <p>The things I'm most interested in right now are at the intersection of ML and medicine - where the stakes make the accuracy numbers mean something real. And multi-agent systems, because I think we're still in the early innings of figuring out how to make them reliable.</p>
                        </div>
                    </div>
                </section>

                {/* Where I'm from */}
                <section className="py-16">
                    <div className="container mx-auto px-4 max-w-3xl">
                        <h2 className="text-3xl font-bold mb-6 fade-up">Where I'm from<span className="text-yellow-600">.</span></h2>
                        <div className="p-8 bg-white dark:bg-[#073031] rounded-2xl shadow-sm">
                            <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                                <p>I grew up in Bitola - a city in the south of Macedonia that most people have never heard of but once they visit it, they certainly find it as one of the most beautiful towns they've seen. It's a small city with Roman ruins in the middle of it (Heraclea Lyncestis, if you want to look it up), a long main street where everyone seems to know everyone, and a pace of life that's genuinely one of a kind.</p>
                                <p>I did my first competitions there - mathematics, physics, informatics. The teachers who pushed me were from Bitola. The habits that got me through university and are still with me were formed there.</p>
                                <p>Pelister National Park is right next to the city. That's partly why hiking became a thing for me - it was the obvious weekend option growing up. I still go back when I can.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <footer className="bg-gray-900 dark:bg-[#073031] text-white py-12 transition-colors duration-200">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col md:flex-row justify-between items-center">
                            <div className="text-2xl font-bold mb-4 md:mb-0">Tamara<span className="text-yellow-600">.</span></div>
                            <div className="flex space-x-6">
                                <a href="https://github.com/tamara-kostova" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-600 dark:text-gray-200 transition-colors"><FaGithub size={24} /></a>
                                <a href="https://www.linkedin.com/in/tamara-kostova/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-600 dark:text-gray-200 transition-colors"><FaLinkedin size={24} /></a>
                                <a href="mailto:tamarakostova.bt@gmail.com" className="hover:text-yellow-600 dark:text-gray-200 transition-colors"><Mail size={24} /></a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default About;