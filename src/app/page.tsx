import Link from 'next/link';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-6">
      <div className="text-center mb-10">

        <h1 className="text-4xl font-bold text-left text-white">Alex Wallis</h1>
        <p className="text-gray-300 mt-16 max-w-2xl text-left">
          Data Engineer with expertise in building scalable data pipelines, crafting efficient data
          architectures, and delivering actionable insights. Passionate about blending technical
          proficiency with strategic impact to drive data-driven decision-making.
        </p>
        <div className="text-left">
          <footer className="min-h-screen flex flex-col items-left justify-left">
            <nav className='flex space-x-6 items-left justify-left'>
              <Link href="https://linkedin.com/in/alexlwallis" legacyBehavior>
                <a
                  className="flex items-center text-center text-blue-400 hover:text-blue-500 text-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="mr-2" /> LinkedIn
                </a>
              </Link>
              <Link href="https://github.com/alexlwallis" legacyBehavior>
                <a
                  className="flex items-center text-center text-blue-400 hover:text-blue-500 text-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="mr-2" /> GitHub
                </a>
              </Link>
              <Link href="mailto:awallis@cs.cmu.edu" legacyBehavior>
                <a className="flex items-center text-center text-blue-400 hover:text-blue-500 text-lg">
                  <FaEnvelope className="mr-2" /> Email
                </a>
              </Link>
            </nav>
          </footer>

      </div>

       
        </div>
    </div>
  );
}
