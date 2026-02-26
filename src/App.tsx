import { useEffect, useState } from 'react';
// 👇 1. Import the animation component
import FadeInUp from './components/FadeInUp';

import { Home } from './components/Home';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Projects } from './components/Projects';
import { Certificates } from './components/Certificates';
import { TechnicalSkills } from './components/TechnicalSkills';
import { Languages } from './components/Languages';
import { Interests } from './components/Interests';
import { Contact } from './components/Contact';

export function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window === 'undefined') return 'light';
    const stored = window.localStorage.getItem('fz-portfolio-theme');
    if (stored === 'light' || stored === 'dark') return stored;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    window.localStorage.setItem('fz-portfolio-theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      // Note: Added 'languages' to this list so it tracks correctly
      const sections = ['home', 'about', 'experience', 'education', 'projects', 'certificates', 'skills', 'languages', 'contact'];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-gray-100 overflow-x-hidden">
      {/* Header - We do NOT animate the header so it stays sticky and stable */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur shadow-sm border-b border-gray-100 dark:border-gray-800">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white font-semibold text-lg">
              FZ
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="text-sm font-semibold tracking-wide">Fatima Zahra Zaha</span>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                Full-Stack & Multiplatform Developer
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <nav className="hidden md:flex items-center gap-5 text-sm">
              {['home', 'about', 'experience', 'education', 'projects', 'certificates', 'skills', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize tracking-wide transition-colors ${
                    activeSection === item
                      ? 'text-indigo-600 dark:text-indigo-400 font-semibold'
                      : 'text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400'
                  }`}
                >
                  {item}
                </button>
              ))}
            </nav>

            {/* Theme toggle */}
            <button
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              className="relative inline-flex h-8 w-14 items-center rounded-full bg-gray-200 dark:bg-gray-700 transition-colors"
              aria-label="Toggle theme"
            >
              <span
                className={`inline-flex h-6 w-6 transform items-center justify-center rounded-full bg-white dark:bg-gray-900 shadow transition-transform duration-200 ${
                  theme === 'dark' ? 'translate-x-6' : 'translate-x-1'
                }`}
              >
                {theme === 'dark' ? (
                  <svg className="w-4 h-4 text-yellow-300" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M21.64 13.65A9 9 0 0110.35 2.36 7 7 0 1019 21.64a9 9 0 002.64-7.99z" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4 text-yellow-500" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 4.5a1 1 0 011 1V7a1 1 0 11-2 0V5.5a1 1 0 011-1zm0 9.5a3 3 0 100-6 3 3 0 000 6zm7-3a1 1 0 011 1v.5a1 1 0 11-2 0V12a1 1 0 011-1zM5 11a1 1 0 011 1v.5a1 1 0 11-2 0V12a1 1 0 011-1zm9.95-4.536l.354-.354a1 1 0 011.414 1.414l-.354.354a1 1 0 11-1.414-1.414zM6.636 15.364l.354-.354a1 1 0 10-1.414-1.414l-.354.354a1 1 0 101.414 1.414zm0-8.728a1 1 0 011.414 0l.354.354A1 1 0 017.05 8.404l-.354-.354a1 1 0 010-1.414zm10.728 8.728a1 1 0 010 1.414l-.354.354a1 1 0 11-1.414-1.414l.354-.354a1 1 0 011.414 0zM12 18a1 1 0 011 1v1.5a1 1 0 11-2 0V19a1 1 0 011-1z" />
                  </svg>
                )}
              </span>
            </button>

            <button
              className="md:hidden text-gray-700 dark:text-gray-200"
              onClick={() => setIsMenuOpen((v) => !v)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden border-t border-gray-100 dark:border-gray-800 bg-white/95 dark:bg-gray-950/95 pb-3">
            <div className="container mx-auto px-4 pt-2 space-y-1">
              {['home', 'about', 'experience', 'education', 'projects', 'certificates', 'skills', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`block w-full text-left py-2 capitalize text-sm ${
                    activeSection === item
                      ? 'text-indigo-600 dark:text-indigo-400 font-semibold'
                      : 'text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </nav>
        )}
      </header>

      {/* 🎬 MAIN SECTIONS WITH ANIMATIONS */}
      {/* Each section is wrapped in FadeInUp */}
      
      <FadeInUp>
        <Home onContactClick={() => scrollToSection('contact')} />
      </FadeInUp>

      <FadeInUp>
        <About />
      </FadeInUp>

      <FadeInUp>
        <Experience />
      </FadeInUp>

      <FadeInUp>
        <Education />
      </FadeInUp>

      <FadeInUp>
        <Projects />
      </FadeInUp>

      <FadeInUp>
        <Certificates />
      </FadeInUp>

      <FadeInUp>
        <TechnicalSkills />
      </FadeInUp>

      {/* Languages & Interests 
          I added a section ID so your scrollspy works for this area too 
      */}
      <section id="languages" className="py-16 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4 flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-center">
          {/* 🎬 Animate Languages first */}
          <FadeInUp className="w-full lg:w-1/2">
            <Languages />
          </FadeInUp>
          
          {/* 🎬 Animate Interests slightly after (staggered delay) */}
          <FadeInUp delay={0.2} className="w-full lg:w-1/2">
            <Interests />
          </FadeInUp>
        </div>
      </section>

      <FadeInUp>
        <Contact />
      </FadeInUp>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 text-xs py-6">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>
            © {new Date().getFullYear()} <span className="text-gray-200">Fatima Zahra Zaha</span>. All rights
            reserved.
          </p>
          <p className="text-[11px]">Built with React, Vite & Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}