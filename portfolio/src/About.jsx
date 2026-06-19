import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Mail, ArrowUpRight } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

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

const Section = ({ num, label, children }) => (
  <section className="py-20 border-t border-bone/10">
    <div className="max-w-3xl mx-auto px-6">
      <div className="flex items-baseline gap-4 mb-10 font-mono text-[10px] uppercase tracking-[0.22em]">
        <span className="text-signal">{num}</span>
        <span className="h-px flex-1 bg-bone/10" />
        <span className="text-subtle">{label}</span>
      </div>
      {children}
    </div>
  </section>
);

const Heading = ({ children }) => (
  <h2 className="font-display text-4xl md:text-5xl mb-8 leading-tight text-bone">{children}</h2>
);

const About = () => (
  <main className="min-h-screen pb-20 bg-ink text-bone">
    <header className="border-b border-bone/10">
      <div className="max-w-3xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/"
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-subtle hover:text-signal transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to index
        </Link>
        <div className="flex gap-1">
          <a href="https://github.com/tamara-kostova" target="_blank" rel="noreferrer" className="p-2 text-subtle hover:text-signal transition-colors"><FaGithub size={16} /></a>
          <a href="https://www.linkedin.com/in/tamara-kostova/" target="_blank" rel="noreferrer" className="p-2 text-subtle hover:text-signal transition-colors"><FaLinkedin size={16} /></a>
          <a href="mailto:tamarakostova.bt@gmail.com" className="p-2 text-subtle hover:text-signal transition-colors"><Mail size={16} /></a>
        </div>
      </div>
    </header>

    <section className="relative pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-signal opacity-[0.06] blur-[100px] pointer-events-none" />
      <div className="relative max-w-3xl mx-auto px-6">
        <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-signal mb-6">
          00 - / about
        </div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="font-display text-6xl md:text-8xl leading-[0.9] text-bone"
        >
          The longer<br />
          <em className="text-signal">version</em>.
        </motion.h1>
        <p className="mt-8 text-xl text-bone/70 max-w-2xl leading-relaxed">
          Software engineer, researcher, and someone who spends a lot of time
          in the mountains when not in front of a screen.
        </p>
      </div>
    </section>

    <Section num="01 -" label="The work">
      <Heading>The work<span className="text-signal">.</span></Heading>
      <div className="space-y-5 text-lg text-bone/80 leading-relaxed">
        <p>I'm a software engineer at ITQuarks in Skopje, where I build AI systems that are meant to run in production - not demos, not notebooks, but things that operate in the background and do something useful. Right now that's a multi-agent platform for document understanding and compliance automation.</p>
        <p>Before that I built the backend for an AI investing platform: a Strands Agents orchestrator that monitors users' portfolios continuously and sends personalised insights without them having to ask.</p>
        <p>I've been here for more than two years now, and there hasn't been a dull moment or project yet. Something new to learn and figure out every week, and a lot of freedom to do it in the way that makes the most sense to me.</p>
        <p>I also spent time at the Macedonian Academy of Sciences doing research and building a hybrid RAG system for neurology literature that combined keyword search, dense embeddings, and knowledge graphs.</p>
        <p>I'm currently in the MSc Data Science programme at FCSE where I'm doing neuroimaging research: classifying brain tumours, MS lesions, and stroke from MRI/CT scans using a LangGraph pipeline with task-specific CNNs, BiomedCLIP and SAM3 segmentation.</p>
        <p>I finished my BSc with a 9.72/10 GPA, ranked among the top students all four years. I mention it not to brag but because doing that while working and doing research in parallel taught me more about prioritisation than any course specifically designed to.</p>
      </div>
    </Section>

    <section className="py-10">
      <div className="max-w-3xl mx-auto px-6">
        <div className="relative p-6 md:p-8 border border-dashed border-signal/40 rounded-sm bg-signal/[0.03]">
          <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-signal mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-signal animate-pulse" />
            currently building
          </div>
          <h3 className="font-display text-2xl md:text-3xl mb-3 text-bone">{currentProject.title}</h3>
          <p className="text-bone/70 leading-relaxed mb-4">{currentProject.description}</p>
          <div className="flex flex-wrap gap-1.5 mb-4">
            {currentProject.stack.map(s => (
              <span key={s} className="font-mono text-[10px] px-2 py-1 border border-bone/10 text-bone/70 rounded-sm">{s}</span>
            ))}
          </div>
          <a href={currentProject.link} target="_blank" rel="noreferrer"
            className="font-mono text-xs uppercase tracking-[0.18em] text-signal hover:underline inline-flex items-center gap-1">
            View on GitHub <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </section>

    <Section num="02 -" label="Outside of work">
      <Heading>Outside of work<span className="text-signal">.</span></Heading>
      <p className="text-bone/65 mb-10 text-lg leading-relaxed">
        I spend as much time as I can outdoors. Nature genuinely recharges me
        in a way that nothing indoors quite replicates.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {outsideItems.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="group p-5 border border-bone/10 rounded-sm hover:border-signal hover:bg-signal/[0.03] transition-all"
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">{item.emoji}</span>
              <h3 className="font-display text-xl text-bone">{item.label}</h3>
            </div>
            <p className="text-sm text-bone/65 leading-relaxed">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </Section>

    <Section num="03 -" label="On learning">
      <Heading>On learning<span className="text-signal">.</span></Heading>
      <div className="space-y-4 text-lg text-bone/80 leading-relaxed">
        <p>I genuinely enjoy learning - not in a LinkedIn-caption way, but in the sense that finding out how something works is its own reward for me. That's probably why getting the Bachelor's degree did not mean the end of the education course for me, alongside having a full-time job. It's also why I entered hackathons and competitions all throughout primary and high school and continued in university: not for the prizes (though winning them brings great satisfaction as well), but because constrained problems force you to learn fast.</p>
        <p>The things I'm most interested in right now are at the intersection of ML and medicine - where the stakes make the accuracy numbers mean something real. And multi-agent systems, because I think we're still in the early innings of figuring out how to make them reliable.</p>
      </div>
    </Section>

    <Section num="04 -" label="Where I'm from">
      <Heading>Where I'm from<span className="text-signal">.</span></Heading>
      <div className="space-y-4 text-lg text-bone/80 leading-relaxed">
        <p>I grew up in Bitola - a city in the south of Macedonia that most people have never heard of but once they visit it, they certainly find it as one of the most beautiful towns they've seen. It's a small city with Roman ruins in the middle of it (Heraclea Lyncestis, if you want to look it up), a long main street where everyone seems to know everyone, and a pace of life that's genuinely one of a kind.</p>
        <p>I did my first competitions there - mathematics, physics, informatics. The teachers who pushed me were from Bitola. The habits that got me through university and are still with me were formed there.</p>
        <p>Pelister National Park is right next to the city. That's partly why hiking became a thing for me - it was the obvious weekend option growing up. I still go back when I can.</p>
      </div>
    </Section>

    <div className="mt-8 max-w-3xl mx-auto px-6">
      <Link to="/"
        className="group inline-flex items-center gap-2 px-5 py-3 border border-bone/10 font-mono text-xs uppercase tracking-[0.18em] text-bone/60 hover:border-signal hover:text-signal transition-colors rounded-sm">
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        Back to index
      </Link>
    </div>
  </main>
);

export default About;
