import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Projects } from './components/Projects';
import profileImg from './assets/profile.jpg';

function App() {
    const [activeSection, setActiveSection] = useState('about');

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                // If a significant portion of the section is visible
                const intersectionRatio = entry.intersectionRatio;
                // Using 0.3 as a threshold gives better coverage for tall sections
                if (entry.isIntersecting && intersectionRatio >= 0.3) {
                    setActiveSection(entry.target.id);
                }
            });
        }, { threshold: [0.3, 0.5, 0.8] });

        const sections = document.querySelectorAll('section[id]');
        sections.forEach(section => observer.observe(section));

        return () => sections.forEach(section => observer.unobserve(section));
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Skills', href: '#skills' },
        { name: 'Education', href: '#education' },
    ];

    return (
        <div className="min-h-screen bg-primary font-body text-slate-300 selection:bg-accent-purple/30">

            {/* Navigation Pill */}
            <div className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-[95vw] sm:w-auto flex justify-center">
                <nav className="glass rounded-full px-2 py-2 md:px-6 md:py-3 w-full sm:w-auto overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] flex items-center justify-start sm:justify-center gap-1 sm:gap-4 md:gap-6 shadow-2xl backdrop-blur-xl border-white/20">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={`text-[10px] sm:text-xs uppercase tracking-widest font-semibold whitespace-nowrap px-3 py-2 md:px-4 md:py-2 rounded-full transition-all duration-300 ${activeSection === link.href.substring(1)
                                    ? 'bg-white/10 text-white shadow-[0_0_10px_rgba(255,255,255,0.1)]'
                                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                                }`}
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>
            </div>

            {/* Hero Section */}
            <section id="about" className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
                {/* Background Gradients */}
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent-blue/20 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-accent-purple/10 rounded-full blur-[150px] pointer-events-none" />

                <div className="relative z-10 max-w-4xl mx-auto text-center mt-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden border-2 border-white/10 shadow-2xl"
                    >
                        <img src={profileImg} alt="Profile" className="w-full h-full object-cover" />
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-5xl md:text-7xl font-heading font-extrabold text-white mb-6 tracking-tight"
                    >
                        Karthick Ragav <br className="md:hidden" />
                        <span className="text-gradient">Ramakrishnan</span>
                    </motion.h1>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-xl md:text-2xl text-slate-400 mb-8 font-medium"
                    >
                        Azure Support Engineer & Tech Lead
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="text-lg text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed"
                    >
                        I build robust software products and manage cloud infrastructure. With over 10 years of E2E software lifecycle experience, I thrive on solving complex business challenges and architecting scalable cloud-native applications.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex items-center justify-center gap-6"
                    >
                        <a href="https://github.com/karthickragavr" target="_blank" rel="noreferrer" className="p-3 glass rounded-full hover:bg-white/10 transition-colors text-white hover:text-accent-blue">
                            <Github className="w-6 h-6" />
                        </a>
                        <a href="https://www.linkedin.com/in/karthick-ragav-ramakrishnan/" target="_blank" rel="noreferrer" className="p-3 glass rounded-full hover:bg-white/10 transition-colors text-white hover:text-accent-blue">
                            <Linkedin className="w-6 h-6" />
                        </a>
                        <a href="mailto:karthickragavr@gmail.com" className="p-3 glass rounded-full hover:bg-white/10 transition-colors text-white hover:text-accent-blue">
                            <Mail className="w-6 h-6" />
                        </a>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
                >
                    <ChevronDown className="w-6 h-6 text-slate-500" />
                </motion.div>
            </section>

            {/* Sections */}
            <Experience />
            <Projects />
            <Skills />
            <Education />

            {/* Footer */}
            <footer className="py-8 text-center text-slate-500 text-sm glass mt-24">
                © {new Date().getFullYear()} Karthick Ragav Ramakrishnan. Built with React & Tailwind.
            </footer>
        </div>
    );
}

export default App;
