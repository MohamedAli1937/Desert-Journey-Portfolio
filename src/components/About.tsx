import { FaRobot, FaBitcoin, FaLock } from 'react-icons/fa';
import { IoTerminal } from 'react-icons/io5';
import { PiSigmaBold } from 'react-icons/pi';
import { BiAtom } from 'react-icons/bi';

const disciplines = [
  {
    icon: <PiSigmaBold />,
    title: 'Mathematics',
    skills: [
      'Linear Algebra',
      'Calculus',
      'Statistics',
      'Probability Theory',
      'Topology',
    ],
    variant: 'gold' as const,
  },
  {
    icon: <BiAtom />,
    title: 'Physics',
    skills: [
      'Quantum Mechanics',
      'Signal Processing',
      'Computational Physics',
      'Astrophysics',
    ],
    variant: 'teal' as const,
  },
  {
    icon: <FaRobot />,
    title: 'AI & Machine Learning',
    skills: [
      'Deep Learning',
      'Computer Vision',
      'NLP',
      'Neural Networks',
      'TensorFlow & PyTorch',
    ],
    variant: 'gold' as const,
  },
  {
    icon: <IoTerminal />,
    title: 'Systems & Dev',
    skills: [
      'C++ Programming',
      'Shell Development',
      'Algorithms',
      'Data Structures',
    ],
    variant: 'teal' as const,
  },
  {
    icon: <FaBitcoin />,
    title: 'Blockchain',
    skills: [
      'Cryptocurrency',
      'Smart Contracts',
      'Bitcoin',
      'Ethereum',
      'Web3',
      'Solidity',
    ],
    variant: 'gold' as const,
  },
];

export default function About() {
  return (
    <section className="section" id="about">
      <div className="about__content">
        <div className="arabesque-divider">
          <span className="arabesque-divider__line" />
          <span className="arabesque-divider__star" />
          <span className="arabesque-divider__line" />
        </div>

        <h2 className="section__title reveal" style={{ textAlign: 'center' }}>
          About <span>Me</span>
        </h2>

        <p className="about__bio reveal">
          I’m Mohamed Ali, a Tunisian{' '}
          <strong>Software Engineering student at INSAT</strong> with strong
          interests in <strong>AI and Machine Learning</strong>. I also enjoy{' '}
          <strong>Mathematics and Physics</strong> and have recently started
          exploring <strong>Blockchain</strong>.
        </p>

        <div className="disciplines reveal-children">
          {disciplines.map((d) => (
            <div className="discipline-card" key={d.title}>
              <span className="discipline-card__icon">{d.icon}</span>
              <h3 className="discipline-card__title">{d.title}</h3>
              <div className="discipline-card__skills">
                {d.skills.map((s) => (
                  <span
                    key={s}
                    className={`skill-tag${d.variant === 'teal' ? ' skill-tag--teal' : ''}`}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}

          <div className="discipline-card discipline-card--locked">
            <div className="locked-card__chains">
              <div className="chain chain-1"></div>
              <div className="chain chain-2"></div>
            </div>
            <span className="discipline-card__icon locked-card__icon">
              <FaLock />
            </span>
            <h3
              className="discipline-card__title"
              style={{ marginTop: '160px' }}
            >
              Unlocking...
            </h3>
            <div
              className="discipline-card__skills"
              style={{ justifyContent: 'center' }}
            >
              <span className="skill-tag skill-tag--locked">
                Skill Loading...
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
