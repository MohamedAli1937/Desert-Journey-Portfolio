import {
  FaBrain,
  FaBoxOpen,
  FaAmericanSignLanguageInterpreting,
  FaChartLine,
} from 'react-icons/fa';
import { TbBrandCpp } from 'react-icons/tb';
import { LuScanFace } from 'react-icons/lu';
import { MdTheaterComedy } from 'react-icons/md';
import { PiCertificateFill } from 'react-icons/pi';

const projects = [
  {
    icon: <FaChartLine />,
    title: 'TDA Market Risk Analyzer',
    desc: 'Real-time financial risk detection system using Topological Data Analysis to detect market instability before crashes occur.',
    tech: ['Mathematics', 'TDA', 'Python', 'Finance'],
    url: 'https://github.com/MohamedAli1937/TDA-Market-Risk-Analyzer',
  },
  {
    icon: <PiCertificateFill />,
    title: 'Certificate DApp',
    desc: 'A decentralized application for issuing and verifying academic certificates on the Ethereum blockchain with MetaMask integration.',
    tech: ['Solidity', 'Ethereum', 'Hardhat', 'React'],
    url: 'https://github.com/MohamedAli1937/Certificate-DApp',
  },
  {
    icon: <FaBrain />,
    title: "Alzheimer's MRI Prediction",
    desc: "Early detection system for Alzheimer's disease using MRI brain scans, powered by convolutional neural networks.",
    tech: ['TensorFlow', 'Keras', 'CNN', 'Python'],
    url: 'https://github.com/MohamedAli1937/Alzheimer-s-MRI-Prediction-System',
  },
  {
    icon: <FaBoxOpen />,
    title: 'KIBRA Smart Packing',
    desc: 'AI-powered 3D space optimization and packing logistics system, built with Gemini Pro in Google AI Studio.',
    tech: ['TypeScript', 'Gemini Pro', 'AI'],
    url: 'https://github.com/MohamedAli1937/KIBRA-Smart-Packing',
  },
  {
    icon: <FaAmericanSignLanguageInterpreting />,
    title: 'Sign Language Detection',
    desc: 'Real-time computer vision system for tracking and translating sign language gestures using hand landmarks.',
    tech: ['OpenCV', 'MediaPipe', 'Python'],
    url: 'https://github.com/MohamedAli1937/Sign-Language-Detection',
  },
  {
    icon: <LuScanFace />,
    title: 'Face Detection',
    desc: 'High-precision facial recognition system designed to work reliably across diverse lighting environments.',
    tech: ['OpenCV', 'CV Algorithms', 'Python'],
    url: 'https://github.com/MohamedAli1937/Face-Detection',
  },
  {
    icon: <MdTheaterComedy />,
    title: 'Sentiment Analysis',
    desc: 'Real-time NLP web platform that decodes text into emotional coordinates for sentiment understanding.',
    tech: ['NLP', 'Web App', 'Python'],
    url: 'https://github.com/MohamedAli1937/Sentiment-Analysis-Web-App',
  },
  {
    icon: <TbBrandCpp />,
    title: 'Cpp-Shell',
    desc: 'Custom command interpreter demonstrating fundamental operating system concepts and architecture mastery.',
    tech: ['C++', 'Systems Programming'],
    url: 'https://github.com/MohamedAli1937/Cpp-Shell',
  },
];

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="arabesque-divider">
        <span className="arabesque-divider__line" />
        <span className="arabesque-divider__star" />
        <span className="arabesque-divider__line" />
      </div>

      <h2 className="section__title reveal" style={{ textAlign: 'center' }}>
        Featured <span>Projects</span>
      </h2>
      <p
        className="section__subtitle reveal"
        style={{ textAlign: 'center', margin: '0 auto 3.5rem' }}
      >
        A selection of projects spanning Blockchain, Finance, AI, Computer
        Vision, and Systems Programming.
      </p>

      <div className="projects-grid reveal-children">
        {projects.map((p) => (
          <article className="project-card" key={p.title}>
            <span className="project-card__icon">{p.icon}</span>
            <h3 className="project-card__title">{p.title}</h3>
            <p className="project-card__desc">{p.desc}</p>
            <div className="project-card__tech">
              {p.tech.map((t) => (
                <span className="skill-tag" key={t}>
                  {t}
                </span>
              ))}
            </div>
            <a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card__link"
            >
              <GitHubIcon /> View on GitHub →
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
