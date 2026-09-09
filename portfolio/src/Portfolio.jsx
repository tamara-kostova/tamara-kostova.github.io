/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTrophy } from 'react-icons/fa';

const projectsData = [
  ['Multi-Agent Medical Classifier', 'Multi Agent · LangGraph · Thesis', 'Three progressively more agentic systems for the same neuroimaging problem: a MedGemma → SAM3 → CNN → BiomedCLIP pipeline, a debate between advocates and a judge, and a forest of specialised agents voting by majority.', 'https://github.com/tamara-kostova/MultiAgentMedClassifier/'],
  ['SAM3 Linear Probing', 'SAM3 · Best Student Paper · DeLTA 2026', 'Linear probing and zero-shot evaluation of SAM-3 for brain tumor segmentation on BraTS, comparing frozen-encoder features, multimodal prompting and MedGemma diagnosis.', 'https://github.com/tamara-kostova/SAM-3-Linear-probing/'],
  ['Hybrid RAG for Medical Literature', 'Research · RAG', 'Hybrid retrieval system developed for Alzheimer\'s research at the Macedonian Academy of Sciences and Arts. Combines BM25, dense embeddings, and knowledge-graph retrieval to find relevant medical literature across different terminology and context.', 'https://github.com/tamara-kostova/HybridRAG'],
  ['Medical PDF Summarization', 'NLP · Transformers', 'FastAPI system for extractive, abstractive and hybrid scientific-PDF summarization, evaluated with ROUGE, BLEU and BERTScore.', 'https://github.com/tamara-kostova/AI-med-summarization'],
  ['Quick Chef', 'RAG · MCP', 'AI recipe platform using retrieval and tool calling around available ingredients and dietary constraints.', 'https://github.com/tamara-kostova/QuickChef'],
  ['LangGraph Helper Agent', 'LLM Agent · LangChain', 'Coding assistant for LangGraph and LangChain developers.', 'https://github.com/tamara-kostova/LangGraph-Helper-Agent'],
];
const moreProjectsData = [
  ['Smart Vitals', 'Time series · Anomaly detection', 'https://github.com/tamara-kostova/Smart-Vitals'],
  ['EEG Seizure Prediction', 'Signal processing · ML', 'https://github.com/tamara-kostova/EEG-epilepsy-seizure-prediction'],
  ['Bitcoin Price Prediction', 'Forecasting · Deep learning', 'https://github.com/tamara-kostova/BitcoinPrediction-ML'],
  ['AI Football', 'RL · Multi-agent', 'https://github.com/tamara-kostova/RoboMac2023_AIFootball'],
  ['ecoGrad', 'Web · Sustainability', 'https://github.com/tamara-kostova/ecoGrad'],
  ['Super Mario The Plumber', 'Game · 48-hour build', 'https://github.com/tamara-kostova/supermariotheplumber'],
  ['Hot and Cold', 'Pygame · Procedural generation', 'https://github.com/tamara-kostova/Hot-and-cold'],
  ['BlackJack', 'Windows Forms · Probability', 'https://github.com/tamara-kostova/BlackJack'],
];
const experienceData = [
  ['Software Engineer', 'ITQuarks, Skopje', '10/2024 – Present', "Right now, I'm building a multi-agent document-understanding and compliance platform: structured extraction, policy validation and auditable decision routing. Also working on an AI-governance certification simulations product. Before that, led backend development for an AI investing platform (iOS & Android) — a Strands Agents orchestrator coordinating market data, financial news and user management agents as callable tools, monitoring portfolios in the background and pushing personalised insights"],
  ['Machine Learning Intern', 'ITQuarks, Skopje', '07/2024 – 09/2024', 'Built RAG pipelines to process thousands of market-analysis articles for automated trading content, and automated multilingual content generation and translation across dozens of WordPress sites — saving significant manual effort.'],
  ['Student Researcher', 'Macedonian Academy of Sciences and Arts', '09/2024 – 04/2025', 'Developed a hybrid RAG system for deep retrieval over neurology papers, combining lexical BM25, dense embeddings and knowledge-graph retrieval.'],
  ['Software Engineering Intern', 'MCA.mk, Skopje', '08/2023 – 10/2023', 'Built Angular front-end features integrated with .NET backends, using Entity Framework Core for MSSQL. First experience working on a production codebase as part of an Agile team.'],
];
const educationData = [
  {
    degree: 'MSc Data Science in Computer Science and Engineering',
    school: 'Faculty of Computer Science & Engineering, Skopje',
    date: '10/2025 – present',
    courses: 'Data Science · Data Engineering · Deep Learning for NLP · Applied Machine Learning · Medical Informatics · Advanced Data Science',
  },
  {
    degree: 'BSc Computer Science and Engineering',
    school: 'Faculty of Computer Science & Engineering, Skopje',
    date: '10/2021 – 06/2025',
    gpa: '9.72 / 10',
    courses: 'Algorithms and Data Structures · Web Programming · Databases · Artificial Intelligence · Machine Learning · Deep Learning · Linear Algebra and its Applications · Probability and Statistics · Bioinformatics',
    awards: ['Top student at FCSE four years running (2022–2025), every year with a GPA above 9.5', '2nd Prize — RoboMac 2023', '3rd Prize — ITLabs Web Development Hackathon 2023', '1st Prize — Global Game Jam 2020'],
  },
  {
    degree: 'High School Diploma',
    school: "Gymnasium 'Josip Broz - Tito', Bitola",
    date: '09/2017 – 06/2021',
    awards: ['Best student in the generation', '10 national and 20 regional prizes in Mathematics, Physics, Informatics and English', '2 bronze medals at the National Mathematics Olympiad'],
  },
];
const publicationsData = [
  ['Evaluating SAM3 and MedGemma for Brain Tumor MRI: Zero-Shot Segmentation, Linear Probing, and Multimodal Diagnosis', 'Accepted & Presented – DeLTA 2026, Porto', 'To appear in DeLTA 2026 Conference Proceedings, Springer CCIS Series', 'https://chatmed-project.eu/wp-content/uploads/2026/08/delta_2026_29_cr.pdf', 'Best Student Paper – DeLTA 2026'],
  ['Optimizing Visual Feature Extraction in Multimodal Transformers for Neuroimaging Classification', 'Accepted & Presented – MIPRO 2026, Opatija', 'Published in MIPRO 2026 Conference Proceedings / IEEE Xplore', 'https://ieeexplore.ieee.org/abstract/document/11591941'],
  ['Application of Large Language Models for Summarization of Medical Papers', 'Accepted & Presented – ICT Innovations 2025, Ohrid', 'To appear in ICT Innovations 2025 Proceedings, Springer CCIS Series', 'https://link.springer.com/book/9783032303202'],
];
const skillGroups = [
  ['AI / ML', ['RAG Systems', 'Strands Agents', 'LangChain', 'LangGraph', 'Transformers']],
  ['ML Tooling', ['PyTorch', 'TensorFlow', 'scikit-learn', 'Pandas', 'NumPy']],
  ['Languages', ['Python', 'Java', 'C++', 'C', 'SQL']],
  ['Backend', ['FastAPI', '.NET', 'Spring Boot', 'REST APIs', 'Django']],
  ['Data & Infra', ['PostgreSQL', 'TimescaleDB', 'Supabase', 'Docker', 'Azure', 'AWS', 'Git']],
];
const navSections = [
  ['systems', 'Current project'], ['work', 'Work'], ['projects', 'Projects'], ['stack', 'Skills'],
  ['research', 'Research'], ['education', 'Education'], ['contact', 'Contact'],
];
const systems = [
  ['A', 'Pipeline', 'A direct, auditable path: MedGemma triage → SAM3 lesion segmentation → task-specific CNN → BiomedCLIP re-ranking.', 'Fixed order, nothing to negotiate'],
  ['B', 'Debate', 'The same specialists become advocates. They make their cases to a judge agent, which weighs their evidence and reaches a diagnosis.', 'Specialists argue, a judge decides'],
  ['C', 'Agent forest', 'Role-specialised MedGemma agents independently assess the scan; a majority vote produces a transparent, robust result.', 'No coordinator, just a majority'],
];

function Portfolio() {
  const [system, setSystem] = useState(0);
  const [progress, setProgress] = useState(0);
  const [current, setCurrent] = useState('');
  useEffect(() => {
    const section = document.getElementById('systems');
    // the intro scrolls away before the diagram pins, so only the sticky span drives the walkthrough
    let lead = 0;
    let frame = 0;
    const read = () => {
      frame = 0;
      setProgress(window.scrollY / Math.max(1, document.documentElement.scrollHeight - window.innerHeight));
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const span = rect.height - window.innerHeight - lead;
      // below 700px the section is no longer pinned, so the A/B/C buttons drive it instead
      if (span <= 0) return;
      const progressInSection = Math.min(1, Math.max(0, (-rect.top - lead) / span));
      setSystem(progressInSection < 0.34 ? 0 : progressInSection < 0.68 ? 1 : 2);
    };
    const measure = () => { lead = section?.querySelector('.systems-intro')?.offsetHeight ?? 0; read(); };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(read); };
    measure();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', measure);
    return () => { cancelAnimationFrame(frame); window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', measure); };
  }, []);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setCurrent(entry.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    );
    navSections.forEach(([id]) => { const el = document.getElementById(id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);
  const active = systems[system];
  const scrollToSection = (event, id) => {
    event.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  return <div className="portfolio-redesign">
    <div className="ambient ambient-one" /><div className="ambient ambient-two" />
    <div className="scroll-progress" style={{ transform: `scaleX(${progress})` }} />
    <header className="site-header"><div className="shell nav-shell"><a href="#top" onClick={(event) => scrollToSection(event, 'top')} className="brand">Tamara Kostova</a><nav>{navSections.map(([id, label]) => <a key={id} href={`#${id}`} className={current === id ? 'current' : undefined} aria-current={current === id ? 'true' : undefined} onClick={(event) => scrollToSection(event, id)}>{label}</a>)}<Link to="/about">About</Link></nav><div className="nav-socials"><a href="https://github.com/tamara-kostova" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a><a href="https://www.linkedin.com/in/tamara-kostova/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a></div></div></header>
    <main id="top">
      <section className="hero shell"><span className="hero-eyebrow">I build</span><h1><span>AI systems</span><span>that do</span><i>real work</i></h1><div className="hero-bottom"><p>Multi-agent systems, medical AI pipelines and RAG. <br />Research prototypes through to software running in production.<br />Software engineer at ITQuarks, MSc Data Science at FCSE.</p><div className="hero-links"><a href="https://github.com/tamara-kostova" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/tamara-kostova/" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="mailto:tamarakostova.bt@gmail.com">Email ↗</a></div></div></section>
      <section id="systems" className="systems">
        <div className="shell systems-intro">
          <div className="systems-heading"><span className="kicker">Current project</span><span className="kicker">MSc thesis · FCSE Skopje</span></div>
          <h2>One problem,<br /><i>three architectures</i></h2>
          <div className="systems-intro-grid">
            <p>Classify a brain tumour from an MRI scan. Same data, same models with the only thing changing being how much autonomy the arrangement hands the agents: a fixed pipeline, a debate settled by a judge, a forest of independent voters. Building all three is how the thesis measures what agency actually buys you.</p>
            <ol className="systems-legend">{systems.map(([key, name, , gist], i) => <li key={key} className={i === system ? 'current' : ''}><b>{key}</b><span>{name}</span><small>{gist}</small></li>)}</ol>
          </div>
          <span className="systems-cue">Keep scrolling — the diagram builds each one ↓</span><span className="systems-tap">Tap A · B · C below to compare the three</span>
        </div>
        <div className="shell systems-inner">
          <div className="systems-rail"><span>System {active[0]} · {active[1]} · {system + 1} of 3</span><div className="rail-track">{systems.map((item, i) => <i key={item[0]} className={i === system ? 'on' : ''} />)}</div></div>
          <div className="systems-grid"><SystemDiagram index={system} name={active[1]} /><div><div className="system-title"><strong>{active[0]}</strong><h3>{active[1]}</h3></div><p>{active[2]}</p><div className="system-actions">{systems.map((item, i) => <button className={i === system ? 'selected' : ''} onClick={() => setSystem(i)} key={item[0]} aria-pressed={i === system} aria-label={`Show system ${item[0]}: ${item[1]}`}>{item[0]}</button>)}<a className="pill" href="https://github.com/tamara-kostova/MultiAgentMedClassifier" target="_blank" rel="noreferrer">Repository ↗</a></div></div></div>
        </div>
      </section>
      <section id="work" className="shell split-section"><aside><h2>Work</h2><p>Production systems, research, and the internships that led there.</p></aside><div className="list">{experienceData.map(([title, company, date, description]) => <article key={title}><header><h3>{title}</h3><time>{date}</time></header><div className="accent">{company}</div><p>{description}</p></article>)}</div></section>
      <section id="projects" className="shell projects"><div className="section-heading"><h2>Projects</h2><span className="kicker">Selected work first — everything else below</span></div><div className="project-list">{projectsData.map(([title, tag, description, link], i) => <a href={link} target="_blank" rel="noreferrer" key={title}><small>{String(i + 1).padStart(2, '0')}</small><div><h3>{title}</h3><span className="tag">{tag}</span></div><p>{description}</p><b>↗</b></a>)}</div><div className="more-projects"><span className="more-projects-label">Other Projects:</span><div className="more-projects-list">{moreProjectsData.map(([title, tag, link]) => <a href={link} target="_blank" rel="noreferrer" key={title}><span>{title}</span><small>{tag}</small></a>)}</div><a className="more-projects-all" href="https://github.com/tamara-kostova" target="_blank" rel="noreferrer">All on GitHub ↗</a></div></section>
      <section id="stack" className="shell skills-section"><div className="skills-intro"><h2>The tools<br /><i>I reach for.</i></h2><p>Languages, frameworks, infrastructure, and the building blocks behind the systems above.</p></div><div className="skill-groups">{skillGroups.map(([group, items]) => <div className="skill-group" key={group}><h3>{group}</h3><div>{items.map((item) => <span key={item}>{item}</span>)}</div></div>)}</div></section>
      <section id="research" className="shell research"><h2>Research &amp; writing</h2><div className="research-grid"><div className="publication-list">{publicationsData.map(([title, conference, published, link, award]) => <article key={title}>{award && <span className="award">{award}</span>}<h3>{title}</h3><p>{conference}. {published}</p><a href={link} target="_blank" rel="noreferrer">Read the paper ↗</a></article>)}</div><div className="conferences"><span className="conferences-label">Presented at</span>{[['2026','DeLTA','Porto, PT'],['2026','MIPRO','Opatija, HR'],['2025','ICT Innovations','Ohrid, MK'],['2024','KSER','Zlatibor, RS'],['2024','Science@FEIT','Skopje, MK']].map(row => <div key={row[1]}><span>{row[0]}</span><b>{row[1]}</b><small>{row[2]}</small></div>)}<span className="conferences-label">Writing</span><a href="https://www.itquarks.com/post/advisory-2-0-ai-investing-stack-that-requests-its-own-tools" target="_blank" rel="noreferrer">Advisory 2.0: AI Investing Stack That Requests Its Own Tools <span>ITQuarks Blog ↗</span></a></div></div></section>
      <section id="education" className="shell split-section education"><aside><h2>Education</h2><p>Top student at FCSE four years running, all with a GPA above 9.5.</p></aside><div className="list">{educationData.map(({ degree, school, date, gpa, courses, awards }) => <article key={degree}><header><h3>{degree}</h3><time>{date}</time></header><div className="accent">{school}</div>{gpa && <div className="gpa"><b>GPA {gpa}</b></div>}{courses && <p className="courses">{courses}</p>}{awards && <ul className="awards">{awards.map((award) => <li key={award}><FaTrophy /><span>{award}</span></li>)}</ul>}</article>)}<h3 className="certificate-heading">Certifications</h3><a className="certificate" href="https://learn.microsoft.com/api/credentials/share/en-gb/TamaraKostova-0989/1A1288009E6F3DBF?sharingId=BA860F445F708AE9" target="_blank" rel="noreferrer">Azure AI Fundamentals (AI-900) ↗ <span>Microsoft · Sept 2025</span></a></div></section>
      <section id="contact" className="contact"><div className="shell"><figure className="contact-portrait"><img src="/assets/img/me-full.jpg" width="420" height="630" loading="lazy" alt="Tamara Kostova" /><figcaption>Tamara Kostova<span>Skopje, Macedonia</span></figcaption></figure><div className="contact-main"><h2>Have a hard problem?<br /><i>Let&apos;s talk.</i></h2><a className="email" href="mailto:tamarakostova.bt@gmail.com">tamarakostova.bt@gmail.com</a><div className="contact-links"><a href="https://github.com/tamara-kostova" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/tamara-kostova/" target="_blank" rel="noreferrer">LinkedIn ↗</a><Link to="/about">The longer version →</Link></div></div><footer>© 2026 Tamara Kostova · Skopje</footer></div></section>
    </main>
  </div>;
}
export default Portfolio;

const graphLayouts = [
  { nodes: { scan:[7,30], triage:[27,30], seg:[47,30], cls:[67,30], rank:[90,30] }, edges:[['scan','triage'],['triage','seg'],['seg','cls'],['cls','rank']] },
  { nodes: { scan:[7,30], cls:[31,8], rank:[31,52], seg:[50,8], triage:[50,52], judge:[72,30], out:[92,30] }, edges:[['scan','cls'],['scan','rank'],['scan','seg'],['seg','judge'],['triage','judge'],['cls','judge'],['rank','judge'],['judge','out']] },
  { nodes: { scan:[7,30], ag1:[32,6], ag2:[32,22], ag3:[32,38], ag4:[32,54], ag5:[52,14], ag6:[52,46], vote:[74,30], out:[92,30] }, edges:[['scan','ag1'],['scan','ag2'],['scan','ag3'],['scan','ag4'],['scan','ag5'],['scan','ag6'],['ag1','vote'],['ag2','vote'],['ag3','vote'],['ag4','vote'],['ag5','vote'],['ag6','vote'],['vote','out']] },
];
const graphLabels = { scan:'MRI / CT', triage:'MedGemma', seg:'SAM3', cls:'CNN', rank:'BiomedCLIP', judge:'Judge', vote:'Majority', out:'Diagnosis' };

function SystemDiagram({ index, name }) {
  const graph = graphLayouts[index];
  return <svg className="system-diagram" viewBox="0 0 100 60" role="img" aria-label={`Architecture diagram: ${name}`}>
    <g className="graph-edges">{graph.edges.map(([from, to]) => <line key={`${from}-${to}`} x1={graph.nodes[from][0]} y1={graph.nodes[from][1]} x2={graph.nodes[to][0]} y2={graph.nodes[to][1]} />)}</g>
    <g className="graph-nodes">{Object.entries(graph.nodes).map(([id, [x, y]], index) => <g key={id} className={graphLabels[id] ? 'graph-node labeled' : 'graph-node'} style={{ animationDelay: `${index * 70}ms` }}><circle className="graph-halo" cx={x} cy={y} r={graphLabels[id] ? 5.2 : 3.6} /><circle className="graph-dot" cx={x} cy={y} r={graphLabels[id] ? 2.6 : 2.2} />{graphLabels[id] && <text x={x} y={y + 8}>{graphLabels[id]}</text>}</g>)}</g>
  </svg>;
}
