import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowUpRight, ChevronRight, Trophy, Menu, X } from 'lucide-react';
import { FaPython, FaJava, FaDocker, FaGit, FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiCplusplus, SiC, SiFastapi, SiSpring, SiLangchain, SiPostgresql, SiAmazonwebservices, SiDotnet, SiDjango, SiTensorflow, SiPytorch, SiSupabase } from 'react-icons/si';
import { Brain, Database, Workflow, Cpu, Server, Clock, Flame, Table, Sigma } from 'lucide-react';
import { VscAzure } from 'react-icons/vsc';
import { motion, useScroll, useTransform } from 'framer-motion';

const skillsData = {
  "AI / ML": [
    { name: "RAG Systems", icon: <Database /> },
    { name: "Strands Agents", icon: <Brain /> },
    { name: "LangChain", icon: <SiLangchain /> },
    { name: "LangGraph", icon: <Workflow /> },
    { name: "Transformers", icon: <Cpu /> },
  ],
  "ML Tooling": [
    { name: "PyTorch", icon: <SiPytorch /> },
    { name: "TensorFlow", icon: <SiTensorflow /> },
    { name: "scikit-learn", icon: <Table /> },
    { name: "Pandas", icon: <Flame /> },
    { name: "NumPy", icon: <Sigma /> },
  ],
  "Languages": [
    { name: "Python", icon: <FaPython /> },
    { name: "Java", icon: <FaJava /> },
    { name: "C++", icon: <SiCplusplus /> },
    { name: "C", icon: <SiC /> },
    { name: "SQL", icon: <SiPostgresql /> },
  ],
  "Backend": [
    { name: "FastAPI", icon: <SiFastapi /> },
    { name: ".Net", icon: <SiDotnet /> },
    { name: "Spring Boot", icon: <SiSpring /> },
    { name: "REST APIs", icon: <Server /> },
    { name: "Django", icon: <SiDjango /> },
  ],
  "Data & Infra": [
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "TimescaleDB", icon: <Clock /> },
    { name: "Supabase", icon: <SiSupabase /> },
    { name: "Docker", icon: <FaDocker /> },
    { name: "Azure", icon: <VscAzure /> },
    { name: "AWS", icon: <SiAmazonwebservices /> },
    { name: "Git", icon: <FaGit /> },
  ],
};

const projectsData = [
  {
    title: 'Quick Chef',
    tag: 'RAG · MCP',
    description: 'AI culinary platform using RAG and MCP to generate personalised recipes based on what you actually have and what you can actually eat. Built to explore MCP in a context where tool-calling makes genuine UX sense - ingredient substitution is a retrieval problem dressed up as cooking advice.',
    link: 'https://github.com/tamara-kostova/QuickChef',
  },
  {
    title: 'LangGraph Helper Agent',
    tag: 'LLM Agent · LangChain',
    description: 'AI coding assistant for LangGraph and LangChain developers. Answers API questions, generates graph boilerplate, and explains constructs - built because the official docs are dense and I kept getting the same questions wrong before I understood the framework well enough.',
    link: 'https://github.com/tamara-kostova/LangGraph-Helper-Agent',
  },
  {
    title: 'Hybrid RAG for Medical Literature',
    tag: 'Research · RAG',
    description: "Built for Alzheimer's research at the Macedonian Academy - combines BM25 keyword search, dense embeddings, and knowledge graphs to retrieve relevant neurology papers. The hybrid approach consistently outperformed any single retrieval method on specialist queries where terminology matters.",
    link: 'https://github.com/tamara-kostova/HybridRAG',
  },
  {
    title: 'Smart Vitals',
    tag: 'Healthcare · ML',
    description: 'Patient monitoring system with real-time analytics and predictive health scoring. Integrates time-series analysis and anomaly detection to flag deteriorating vitals before they become clinical emergencies.',
    link: 'https://github.com/tamara-kostova/Smart-Vitals',
  },
  {
    title: 'Bitcoin Price Prediction',
    tag: 'Time Series · ML',
    description: 'Time-series forecasting on cryptocurrency prices using both classical ML and deep learning. The interesting challenge is feature engineering for a signal with genuine non-stationarity - compared multiple architectures and built evaluation pipelines for high-volatility financial data.',
    link: 'https://github.com/tamara-kostova/BitcoinPrediction-ML',
  },
  {
    title: 'EEG Seizure Prediction',
    tag: 'Neuroscience · ML',
    description: 'ML pipeline for epileptic seizure prediction from EEG signals. Signal processing, feature extraction, and classification to identify pre-ictal brain activity - at the intersection of neuroscience and applied ML.',
    link: 'https://github.com/tamara-kostova/EEG-epilepsy-seizure-prediction',
  },
  {
    title: 'AI Football',
    tag: 'RL · RoboMac 2023',
    description: "Reinforcement learning simulation where agents learn football strategy from scratch. Placed 2nd at RoboMac 2023. The interesting part wasn't the win - it was watching coordination emerge between agents that were only optimising individual reward.",
    link: 'https://github.com/tamara-kostova/RoboMac2023_AIFootball',
  },
  {
    title: 'ecoGrad',
    tag: 'Hackathon · Web',
    description: "Sustainable lifestyle web app built in 48 hours for the ITLabs hackathon. Won 3rd Prize. A good example of what I can ship fast when the problem is well-defined - not every project needs six months.",
    link: 'https://github.com/tamara-kostova/ecoGrad',
  },
  {
    title: 'Super Mario The Plumber',
    tag: 'Game Jam · 1st Prize',
    description: '48-hour game prototype that won 1st Prize at Global Game Jam, February 2020. Fast prototyping, interactive design, and collaborative development under time constraints.',
    link: 'https://github.com/tamara-kostova/supermariotheplumber',
  },
  {
    title: 'Hot and Cold',
    tag: 'Game · Pygame',
    description: 'Algorithmically-driven Pygame maze game demonstrating pathfinding, environment simulation, and dynamic difficulty adjustment using procedural generation.',
    link: 'https://github.com/tamara-kostova/Hot-and-cold',
  },
  {
    title: 'BlackJack',
    tag: 'Desktop · C#',
    description: 'Windows Forms-based BlackJack simulator implementing game logic, probability modeling, and interactive GUI design for a controlled user environment.',
    link: 'https://github.com/tamara-kostova/BlackJack',
  },
];

const experienceData = [
  {
    title: 'Software Engineer',
    company: 'ITQuarks, Skopje',
    date: '10/2024 – Present',
    description: 'Currently building a multi-agent AI platform for document understanding and compliance automation - structured extraction, policy validation, and auditable decision routing through a pipeline I designed end-to-end. Before that, led backend development for an AI investing platform (iOS & Android): a Strands Agents orchestrator that monitors portfolios in the background and sends personalised insights without the user having to ask. Dynamic significance thresholds filter out noise before anything reaches the user.',
  },
  {
    title: 'Machine Learning Intern',
    company: 'ITQuarks, Skopje',
    date: '07/2024 – 09/2024',
    description: 'Built RAG pipelines to process thousands of market analysis articles for automated trading content. Automated multilingual content generation and translation for unique content across dozens of WordPress sites - saving significant manual effort.',
  },
  {
    title: 'Student Researcher',
    company: 'Macedonian Academy of Sciences and Arts',
    date: '09/2024 – 04/2025',
    description: "Developed a hybrid RAG system for deep retrieval over neurology medical papers - combining lexical (BM25), semantic (dense embeddings), and graph-based retrieval because each method alone left gaps the others could fill. This was my first serious exposure to the gap between 'RAG works in a demo' and 'RAG works on specialist literature.'",
  },
  {
    title: 'Software Engineering Intern',
    company: 'MCA.mk, Skopje',
    date: '08/2023 – 10/2023',
    description: 'Built Angular front-end features integrated with .NET backends, using Entity Framework Core for MSSQL database interactions. First real exposure to working in an Agile team on a production codebase.',
  },
];

const educationData = [
  {
    institution: 'Faculty of Computer Science & Engineering, Skopje',
    degree: 'MSc Data Science in Computer Science and Engineering',
    date: '10/2025 – present',
    achievements: [],
    coursework: ['Data Science', 'Data Engineering', 'Deep Learning for NLP', 'Applied Machine Learning', 'Medical Informatics', 'Advanced Data Science'],
  },
  {
    institution: 'Faculty of Computer Science & Engineering, Skopje',
    degree: 'BSc Computer Science and Engineering',
    date: '10/2021 – 06/2025',
    gpa: '9.72 / 10 - ranked among top students every year from 2022 to 2025',
    achievements: [
      'Top student award at FCSE four years running (2022–2025), all with GPA above 9.5',
      '2nd Prize - RoboMac 2023',
      '3rd Prize - ITLabs Web Development Hackathon 2023',
      '1st Prize - Global Game Jam 2020',
    ],
    coursework: ['Algorithms and Data Structures', 'Web Programming', 'Databases', 'Artificial Intelligence', 'Machine Learning', 'Deep Learning', 'Linear Algebra and its Applications', 'Probability and Statistics', 'Bioinformatics'],
  },
  {
    institution: "Gymnasium 'Josip Broz - Tito', Bitola",
    degree: 'High School Diploma',
    date: '09/2017 – 06/2021',
    achievements: [
      'Best student in the generation',
      '10 National and 20 Regional prizes in Mathematics, Physics, Informatics, and English',
      '2 Bronze medals at the National Mathematics Olympiad',
    ],
    coursework: [],
  },
];

const certificationsData = [
  {
    institution: 'Microsoft Azure AI',
    degree: 'Azure AI Fundamentals (AI-900)',
    date: 'Sept 2025',
    credential: 'https://learn.microsoft.com/api/credentials/share/en-gb/TamaraKostova-0989/1A1288009E6F3DBF?sharingId=BA860F445F708AE9',
  },
];

const publicationsData = [
  {
    title: 'Optimizing Visual Feature Extraction in Multimodal Transformers for Neuroimaging Classification',
    conference: 'Accepted & Presented - MIPRO 2026, Opatija',
    published: 'To appear in MIPRO 2026 Conference Proceedings / IEEE Xplore Digital Library',
  },
  {
    title: 'Application of Large Language Models for Summarization of Medical Papers',
    conference: 'Accepted & Presented - ICT Innovations 2025, Ohrid',
    published: 'To appear in ICT Innovations 2025 Proceedings, Springer CCIS Series',
  },
];

const blogData = [
  {
    title: 'Advisory 2.0: AI Investing Stack That Requests Its Own Tools',
    outlet: 'ITQuarks Blog',
    link: 'https://www.itquarks.com/post/advisory-2-0-ai-investing-stack-that-requests-its-own-tools',
  },
];

const conferencesData = [
  { name: 'MIPRO 2026', fullName: 'MIPRO', location: 'Opatija, Croatia', year: '2026' },
  { name: 'ICT Innovations 2025', fullName: 'ICT Innovations conference', location: 'Ohrid, Macedonia', year: '2025' },
  { name: 'KSER 2024', fullName: 'Kongres Studenata Elektrotehnike i Računarstva', location: 'Zlatibor, Serbia', year: '2024' },
  { name: 'Science@FEIT 2024', fullName: 'Science at Faculty of Electrical Engineering and IT', location: 'Skopje, Macedonia', year: '2024' },
];

const currentProject = {
  title: 'Multi-Agent Neuroimaging Classifier',
  description: 'LangGraph pipeline for automated classification of brain tumour, multiple sclerosis, and stroke from MRI/CT scans - combining a MedGemma triage agent, task-specific CNNs, SAM3 segmentation, and BiomedCLIP zero-shot re-ranking into a single auditable graph.',
  stack: ['LangGraph', 'MedGemma', 'VGG16 / DenseNet / ResNet', 'SAM3', 'BiomedCLIP'],
  link: 'https://github.com/tamara-kostova/MultiAgentMedClassifier',
};

const navLinks = [
  { href: '#work', text: 'Work' },
  { href: '#projects', text: 'Projects' },
  { href: '#stack', text: 'Stack' },
  { href: '#education', text: 'Education' },
  { href: '#research', text: 'Research' },
  { href: '#contact', text: 'Contact' },
];

function useClock() {
  const [t, setT] = useState(null);
  useEffect(() => {
    setT(new Date());
    const i = setInterval(() => setT(new Date()), 1000);
    return () => clearInterval(i);
  }, []);
  return t ? t.toLocaleTimeString('en-GB', { hour12: false, timeZone: 'Europe/Skopje' }) : '--:--:--';
}

function scrollTo(href) {
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
}

const SectionLabel = ({ index, label }) => (
  <div className="flex items-baseline gap-4 mb-12">
    <span className="font-mono text-xs text-signal">{index}</span>
    <span className="h-px flex-1 bg-bone/10" />
    <span className="font-mono text-xs uppercase tracking-[0.22em] text-subtle">{label}</span>
  </div>
);

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? 'backdrop-blur-xl bg-ink/70 border-b border-bone/10' : 'bg-transparent'}`}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-2 group">
          <span className="w-2 h-2 rounded-full bg-signal shadow-[0_0_12px_#F3A712]" />
          <span className="font-mono text-xs uppercase tracking-[0.18em] text-bone">tamara.kostova</span>
        </button>

        <nav className="hidden md:flex items-center gap-7 font-mono text-xs uppercase tracking-[0.18em]">
          {navLinks.map(({ href, text }) => (
            <a key={href} href={href}
              onClick={e => { e.preventDefault(); scrollTo(href); }}
              className="text-subtle hover:text-signal transition-colors">
              {text}
            </a>
          ))}
          <Link to="/about" className="text-subtle hover:text-signal transition-colors">About</Link>
        </nav>

        <div className="hidden md:flex items-center gap-1">
          <a href="https://github.com/tamara-kostova" target="_blank" rel="noreferrer" className="p-2 text-subtle hover:text-signal transition-colors"><FaGithub size={16} /></a>
          <a href="https://www.linkedin.com/in/tamara-kostova/" target="_blank" rel="noreferrer" className="p-2 text-subtle hover:text-signal transition-colors"><FaLinkedin size={16} /></a>
        </div>

        <button onClick={() => setMobileOpen(p => !p)} className="md:hidden p-2 text-subtle hover:text-signal transition-colors">
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-bone/10 bg-ink/95 backdrop-blur-xl px-6 py-6">
          <div className="space-y-1">
            {navLinks.map(({ href, text }) => (
              <a key={href} href={href}
                onClick={e => { e.preventDefault(); scrollTo(href); setMobileOpen(false); }}
                className="block font-mono text-xs uppercase tracking-[0.18em] text-subtle hover:text-signal transition-colors py-3 border-b border-bone/10">
                {text}
              </a>
            ))}
            <Link to="/about"
              className="block font-mono text-xs uppercase tracking-[0.18em] text-subtle hover:text-signal transition-colors py-3 border-b border-bone/10"
              onClick={() => setMobileOpen(false)}>
              About
            </Link>
          </div>
          <div className="flex gap-2 pt-6">
            <a href="https://github.com/tamara-kostova" target="_blank" rel="noreferrer" className="p-2 text-subtle hover:text-signal transition-colors"><FaGithub size={16} /></a>
            <a href="https://www.linkedin.com/in/tamara-kostova/" target="_blank" rel="noreferrer" className="p-2 text-subtle hover:text-signal transition-colors"><FaLinkedin size={16} /></a>
            <a href="mailto:tamarakostova.bt@gmail.com" className="p-2 text-subtle hover:text-signal transition-colors"><Mail size={16} /></a>
          </div>
        </div>
      )}
    </header>
  );
};

const HeroSection = () => {
  const clock = useClock();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 120]);

  return (
    <section id="top" className="relative min-h-screen pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-60 pointer-events-none" />
      <motion.div
        style={{ y }}
        className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-signal opacity-[0.05] blur-[120px] pointer-events-none"
      />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 font-mono text-[10px] uppercase tracking-[0.2em] text-subtle mb-20 md:mb-32">
          <div>
            <div className="text-bone/40 mb-1">/ status</div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-signal animate-pulse" />
              shipping
            </div>
          </div>
          <div>
            <div className="text-bone/40 mb-1">/ location</div>
            <div>Skopje · 41.99°N</div>
          </div>
          <div>
            <div className="text-bone/40 mb-1">/ local time</div>
            <div>{clock}</div>
          </div>
          <div>
            <div className="text-bone/40 mb-1">/ role</div>
            <div>SE @ ITQuarks</div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-9">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-[clamp(3rem,9vw,9rem)] leading-[0.92] text-bone"
            >
              I build <em className="text-signal not-italic">AI systems</em>
              <br />
              that do <span className="italic">real work</span>
              <span className="cursor-blink text-signal">_</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="mt-10 max-w-2xl text-lg md:text-xl text-bone/70 leading-relaxed"
            >
              Multi-agent platforms in production, neuroimaging pipelines, and RAG
              systems that actually retrieve the right thing. I work at the intersection
              of{' '}
              <span className="text-bone underline decoration-signal underline-offset-4 decoration-2">medical AI</span>
              {' '}and{' '}
              <span className="text-bone underline decoration-signal underline-offset-4 decoration-2">intelligent automation</span>
              .
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-12 flex flex-wrap gap-3"
            >
              <a href="#projects"
                onClick={e => { e.preventDefault(); scrollTo('#projects'); }}
                className="group inline-flex items-center gap-2 px-5 py-3 bg-signal text-ink font-mono text-xs uppercase tracking-[0.18em] rounded-sm hover:bg-bone transition-colors">
                View selected work
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a href="#contact"
                onClick={e => { e.preventDefault(); scrollTo('#contact'); }}
                className="group inline-flex items-center gap-2 px-5 py-3 border border-bone/10 text-bone font-mono text-xs uppercase tracking-[0.18em] rounded-sm hover:border-signal hover:text-signal transition-colors">
                Get in touch
                <Mail className="w-4 h-4" />
              </a>
            </motion.div>
          </div>

          <div className="col-span-12 lg:col-span-3 lg:pl-6 lg:border-l lg:border-bone/10 mt-12 lg:mt-0">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-signal mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-signal animate-pulse" />
              now building
            </div>
            <h3 className="font-display text-2xl leading-tight mb-3 text-bone">{currentProject.title}</h3>
            <p className="text-sm text-bone/60 leading-relaxed mb-4">{currentProject.description}</p>
            <div className="flex flex-wrap gap-1.5 mb-4">
              {currentProject.stack.map(s => (
                <span key={s} className="font-mono text-[10px] px-2 py-1 border border-bone/10 text-bone/70 rounded-sm">{s}</span>
              ))}
            </div>
            <a href={currentProject.link} target="_blank" rel="noreferrer"
              className="font-mono text-xs uppercase tracking-[0.18em] text-signal hover:underline inline-flex items-center gap-1">
              View graph <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      <div className="relative mt-24 md:mt-32 border-y border-bone/10 py-5 overflow-hidden">
        <div className="ticker flex gap-12 whitespace-nowrap font-display text-3xl md:text-4xl">
          {Array.from({ length: 2 }).map((_, dup) => (
            <div key={dup} className="flex gap-12 items-center shrink-0">
              {['Multi-agent orchestration', '★', 'Hybrid RAG', '★', 'Neuroimaging classification', '★', 'LangGraph pipelines', '★', 'Production ML inference', '★', 'Auditable AI', '★'].map((w, i) => (
                <span key={i} className={i % 2 ? 'text-signal' : 'italic text-bone/80'}>{w}</span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ExperienceSection = () => (
  <section id="work" className="relative py-32 px-6 lg:px-10">
    <div className="max-w-[1400px] mx-auto">
      <SectionLabel index="01 -" label="Experience / Log" />
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-4 mb-10 md:mb-0">
          <h2 className="font-display text-5xl md:text-6xl leading-[0.95] text-bone">
            Work<em className="text-signal">.</em>
          </h2>
          <p className="mt-6 text-bone/60 max-w-xs">
            Roles where I built things that ended up in production - and a couple of stops along the way.
          </p>
        </div>
        <div className="col-span-12 md:col-span-8 md:border-l md:border-bone/10 md:pl-10">
          <div className="space-y-12">
            {experienceData.map((exp, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="group relative pl-6 border-l border-bone/10 hover:border-signal transition-colors"
              >
                <span className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-ink border border-bone/10 group-hover:bg-signal group-hover:border-signal group-hover:shadow-[0_0_12px_#F3A712] transition-all" />
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-subtle mb-2">{exp.date}</div>
                <h3 className="font-display text-3xl mb-1 text-bone">{exp.title}</h3>
                <div className="text-signal font-mono text-sm mb-4">→ {exp.company}</div>
                <p className="text-bone/70 leading-relaxed max-w-3xl">{exp.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ProjectsSection = () => (
  <section id="projects" className="relative py-32 px-6 lg:px-10 border-t border-bone/10">
    <div className="max-w-[1400px] mx-auto">
      <SectionLabel index="02 -" label="Selected projects" />
      <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
        <h2 className="font-display text-5xl md:text-7xl leading-[0.95] max-w-2xl text-bone">
          Things I've <em className="text-signal">built</em>,<br />
          (broken :)) and<br />rebuilt.
        </h2>
        <div className="font-mono text-xs uppercase tracking-[0.22em] text-subtle">
          {String(projectsData.length).padStart(2, '0')} entries · v1.0
        </div>
      </div>

      <div className="border-t border-bone/10">
        {projectsData.map((p, i) => (
          <motion.a
            key={p.title}
            href={p.link}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="group relative grid grid-cols-12 gap-4 items-start py-8 border-b border-bone/10 hover:bg-bone/[0.02] transition-colors px-2 -mx-2"
          >
            <div className="col-span-1 font-mono text-xs text-subtle pt-2">
              {String(i + 1).padStart(2, '0')}
            </div>
            <div className="col-span-11 md:col-span-4">
              <h3 className="font-display text-3xl md:text-4xl leading-tight text-bone group-hover:text-signal transition-colors">
                {p.title}
              </h3>
              {p.tag && (
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-signal/70 mt-2">{p.tag}</div>
              )}
            </div>
            <div className="col-span-12 md:col-span-6 text-bone/65 leading-relaxed">
              {p.description}
            </div>
            <div className="col-span-12 md:col-span-1 flex md:justify-end">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-bone/10 group-hover:border-signal group-hover:bg-signal group-hover:text-ink text-bone/60 transition-all shrink-0">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

const StackSection = () => (
  <section id="stack" className="relative py-32 px-6 lg:px-10 border-t border-bone/10">
    <div className="max-w-[1400px] mx-auto">
      <SectionLabel index="03 -" label="Stack / Tooling" />
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-4">
          <h2 className="font-display text-5xl md:text-6xl leading-[0.95] text-bone">
            The <em className="text-signal">tools</em><br />
            I reach for.
          </h2>
          <p className="mt-6 text-bone/60 max-w-xs">
            Languages, frameworks, infrastructure. Grouped by where they live in the stack.
          </p>
        </div>
        <div className="col-span-12 md:col-span-8 space-y-10">
          {Object.entries(skillsData).map(([cat, items]) => (
            <div key={cat} className="grid grid-cols-12 gap-4 items-start pb-8 border-b border-bone/10 last:border-0">
              <div className="col-span-12 md:col-span-3">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-signal">{cat}</div>
              </div>
              <div className="col-span-12 md:col-span-9 flex flex-wrap gap-2">
                {items.map(s => (
                  <div key={s.name} className="group inline-flex items-center gap-2 px-3 py-2 border border-bone/10 rounded-sm hover:border-signal hover:bg-signal/5 transition-all">
                    <span className="w-4 h-4 text-signal flex items-center justify-center text-sm shrink-0">{s.icon}</span>
                    <span className="font-mono text-xs text-bone/90">{s.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const EducationSection = () => (
  <section id="education" className="relative py-32 px-6 lg:px-10 border-t border-bone/10">
    <div className="max-w-[1400px] mx-auto">
      <SectionLabel index="04 -" label="Education & Awards" />
      <div className="grid grid-cols-12 gap-6 mb-16">
        <h2 className="col-span-12 md:col-span-8 font-display text-5xl md:text-7xl leading-[0.95] text-bone">
          Where I <em className="text-signal">learned</em><br />
          how to learn and ask better questions.
        </h2>
      </div>
      <div className="space-y-6">
        {educationData.map((edu, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-12 gap-4 p-6 md:p-8 border border-bone/10 rounded-sm hover:border-signal/50 transition-colors"
          >
            <div className="col-span-12 md:col-span-3 font-mono text-[10px] uppercase tracking-[0.22em] text-subtle">{edu.date}</div>
            <div className="col-span-12 md:col-span-9">
              <h3 className="font-display text-2xl md:text-3xl mb-1 text-bone">{edu.institution}</h3>
              <p className="text-signal font-mono text-sm mb-4">→ {edu.degree}</p>
              {edu.gpa && <p className="text-bone/80 mb-4">{edu.gpa}</p>}
              {edu.achievements.length > 0 && (
                <ul className="space-y-2 mb-6">
                  {edu.achievements.map((a, j) => (
                    <li key={j} className="flex items-start gap-2 text-bone/75">
                      <Trophy className="w-3.5 h-3.5 text-signal flex-shrink-0 mt-1.5" />
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
              )}
              {edu.coursework && edu.coursework.length > 0 && (
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-subtle mb-3">coursework</div>
                  <div className="flex flex-wrap gap-1.5">
                    {edu.coursework.map(c => (
                      <span key={c} className="px-2.5 py-1 font-mono text-[11px] border border-bone/10 text-bone/80 rounded-sm">{c}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-16">
        <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-signal mb-6">Certifications</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {certificationsData.map((cert, i) => (
            <a key={i} href={cert.credential} target="_blank" rel="noreferrer"
              className="group block p-6 border border-bone/10 rounded-sm hover:border-signal transition-colors">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-subtle mb-2">{cert.date}</div>
              <h4 className="font-display text-xl mb-1 text-bone group-hover:text-signal transition-colors">{cert.degree}</h4>
              <p className="text-sm text-bone/60">{cert.institution}</p>
              <div className="mt-4 font-mono text-xs text-signal inline-flex items-center gap-1">
                verify <ArrowUpRight className="w-3 h-3" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const ResearchSection = () => (
  <section id="research" className="relative py-32 px-6 lg:px-10 border-t border-bone/10">
    <div className="max-w-[1400px] mx-auto">
      <SectionLabel index="05 -" label="Research / Writing" />
      <h2 className="font-display text-5xl md:text-7xl leading-[0.95] mb-16 max-w-3xl text-bone">
        Papers, posts, and <em className="text-signal">places</em> I've spoken and listened.
      </h2>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-7 space-y-4">
          <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-signal mb-4">Publications</div>
          {publicationsData.map((pub, i) => (
            <article key={i} className="p-6 border border-bone/10 rounded-sm hover:border-signal/50 transition-colors">
              <h3 className="font-display text-xl md:text-2xl leading-tight mb-3 text-bone">"{pub.title}"</h3>
              <p className="text-signal font-mono text-xs mb-2">→ {pub.conference}</p>
              <p className="text-sm text-bone/55 font-mono">{pub.published}</p>
            </article>
          ))}

          <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-signal mt-10 mb-4">Writing</div>
          {blogData.map((post, i) => (
            <a key={i} href={post.link} target="_blank" rel="noreferrer"
              className="group block p-6 border border-bone/10 rounded-sm hover:border-signal transition-colors">
              <h3 className="font-display text-xl leading-tight mb-2 text-bone group-hover:text-signal transition-colors">{post.title}</h3>
              <p className="font-mono text-xs text-subtle inline-flex items-center gap-1">
                {post.outlet} <ArrowUpRight className="w-3 h-3" />
              </p>
            </a>
          ))}
        </div>

        <div className="col-span-12 md:col-span-5">
          <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-signal mb-4">Conferences attended</div>
          <div className="border-t border-bone/10">
            {conferencesData.map((conf, i) => (
              <div key={i} className="grid grid-cols-12 gap-2 py-4 border-b border-bone/10 items-baseline">
                <div className="col-span-2 font-mono text-signal text-sm">{conf.year}</div>
                <div className="col-span-7">
                  <div className="font-display text-lg leading-tight text-bone">{conf.name}</div>
                  <div className="text-xs text-bone/50 font-mono mt-0.5">{conf.fullName}</div>
                </div>
                <div className="col-span-3 text-right font-mono text-[10px] uppercase tracking-[0.18em] text-subtle">{conf.location}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ContactSection = () => (
  <section id="contact" className="relative py-32 px-6 lg:px-10 border-t border-bone/10 overflow-hidden">
    <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
    <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-signal opacity-[0.08] blur-[120px] pointer-events-none" />

    <div className="relative max-w-[1400px] mx-auto">
      <SectionLabel index="06 -" label="Contact / End of file" />

      <div className="grid grid-cols-12 gap-8 items-end">
        <div className="col-span-12 md:col-span-8">
          <h2 className="font-display text-6xl md:text-8xl leading-[0.9] text-bone">
            Have a hard<br />
            <em className="text-signal">problem</em>?<br />
            Let's talk.
          </h2>
        </div>
        <div className="col-span-12 md:col-span-4 md:text-right">
          <p className="text-bone/60 mb-6">I'd lvoe to get in touch. Feel free to reach out!</p>
          <a href="mailto:tamarakostova.bt@gmail.com"
            className="font-display italic text-3xl md:text-4xl text-signal hover:underline underline-offset-4 break-all">
            tamarakostova.bt<br />@gmail.com
          </a>
        </div>
      </div>

      <div className="mt-20 flex flex-wrap items-center justify-between gap-6 pt-8 border-t border-bone/10">
        <div className="flex gap-3">
          {[
            { href: 'https://github.com/tamara-kostova', Icon: FaGithub, label: 'GitHub' },
            { href: 'https://www.linkedin.com/in/tamara-kostova/', Icon: FaLinkedin, label: 'LinkedIn' },
            { href: 'mailto:tamarakostova.bt@gmail.com', Icon: Mail, label: 'Email' },
          ].map(({ href, Icon, label }) => (
            <a key={label} href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noreferrer"
              className="group inline-flex items-center gap-2 px-4 py-2.5 border border-bone/10 rounded-sm hover:border-signal hover:text-signal transition-colors font-mono text-xs uppercase tracking-[0.18em] text-bone/60">
              <Icon size={14} />
              {label}
              <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          ))}
        </div>
        <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-subtle">
          © 2026 Tamara Kostova
        </div>
      </div>
    </div>
  </section>
);

const Portfolio = () => (
  <main className="min-h-screen text-bone bg-ink">
    <Nav />
    <HeroSection />
    <ExperienceSection />
    <ProjectsSection />
    <StackSection />
    <EducationSection />
    <ResearchSection />
    <ContactSection />
  </main>
);

export default Portfolio;
