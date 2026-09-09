/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const outdoors = [
  ['Hiking', "Somewhere in the mountains is where I actually switch off. Macedonia has nature and trails that most people don't know exist and I try to make the most of that."],
  ['Running', "From time to time. Not fast, but it's a reliable way to clear the head before or after a long day of thinking in code."],
  ['Skiing', 'Look forward to it every winter.'],
  ['Rock Climbing', "Tried it and liked it more than expected. It's basically puzzle-solving where your body and mind must work together."],
  ['Camping', "I love being outside properly. No signal, sleeping under stars, waking up cold. It resets something that a weekend at home doesn't."],
  ['Travelling', 'Any excuse to see a new place. Different food, different pace, and enough distance from routine to actually notice things.'],
];

const Copy = ({ children }) => <div className="about-copy">{children}</div>;
const About = () => <div className="about-page">
  <header className="site-header"><div className="about-shell about-nav"><Link to="/">← Back to the index</Link><div><a href="https://github.com/tamara-kostova" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/tamara-kostova/" target="_blank" rel="noreferrer">LinkedIn ↗</a></div></div></header>
  <main className="about-shell">
    <section className="about-hero"><div className="about-hero-text"><h1><span>The longer</span><i>version.</i></h1><p>Software engineer, researcher, and someone who spends a lot of time in the mountains when not in front of a screen.</p></div><figure className="about-portrait"><img src="/assets/img/me-portrait.jpg" width="640" height="800" alt="Tamara Kostova" /><figcaption>Skopje, 2025</figcaption></figure></section>
    <section className="about-section"><h2>The work</h2><Copy>
      <p>I&apos;m a software engineer at ITQuarks in Skopje, where I build AI systems that are meant to run in production — not demos, not notebooks, but things that operate in the background and do something useful. Right now that&apos;s a multi-agent platform for document understanding and compliance automation.</p>
      <p>Before that I built the backend for an AI investing platform: a Strands Agents orchestrator that monitors users&apos; portfolios continuously and sends personalised insights without them having to ask.</p>
      <p>I&apos;ve been here for more than two years now, and there has been something new to learn and figure out every week, and a lot of freedom to do it in the way that makes the most sense to me.</p>
      <p>I also spent time at the Macedonian Academy of Sciences doing research and building a hybrid RAG system for neurology literature that combined keyword search, dense embeddings, and knowledge graphs.</p>
      <p>I&apos;m currently in the MSc Data Science programme at FCSE where I&apos;m doing neuroimaging research: classifying brain tumours, MS lesions, and stroke from MRI/CT scans using a LangGraph pipeline with task-specific CNNs, BiomedCLIP and SAM3 segmentation.</p>
      <p>I finished my BSc with a 9.72/10 GPA, ranked among the top students all four years. Doing that while working and doing research in parallel taught me more about prioritisation than any course could have.</p>
    </Copy></section>
    <section className="about-section"><h2>Outside of work</h2><p className="about-intro">I spend as much time as I can outdoors. Nature recharges me in a way that nothing indoors quite replicates.</p><div className="outdoors">{outdoors.map(([name, text]) => <article key={name}><h3>{name}</h3><p>{text}</p></article>)}</div></section>
    <section className="about-section"><h2>On learning</h2><Copy><p>I enjoy learning. Finding out how something works is enough of a reward on its own for me. That&apos;s probably why I went straight into a master&apos;s while working full time. It&apos;s also why I entered hackathons and competitions throughout primary school, high school, and university: not for the prizes, but because constrained problems force you to learn fast.</p><p>The things I&apos;m most interested in right now are at the intersection of ML and medicine, where the accuracy numbers mean something real. And multi-agent systems, because I think we&apos;re still early in figuring out how to make them reliable.</p></Copy></section>
    <section className="about-section"><h2>Where I&apos;m from</h2><Copy><p>I grew up in Bitola, a city in the south of Macedonia. It&apos;s a small city of culture with Roman ruins in the middle of it, a long main street where everyone seems to know everyone, and a pace of life that&apos;s one of a kind.</p><p>I did my first competitions there: mathematics, physics, and informatics. The teachers who pushed me were from Bitola. The habits that got me through university and are still with me were formed there.</p><p>Pelister National Park is right next to the city. That&apos;s partly why hiking became a thing for me; it was the obvious weekend option growing up. I still go back as often as I can.</p></Copy></section>
    <section className="about-actions"><Link to="/">← Back to the index</Link><a href="mailto:tamarakostova.bt@gmail.com">Email me</a></section>
  </main>
</div>;
export default About;
