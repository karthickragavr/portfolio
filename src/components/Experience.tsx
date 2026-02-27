import { motion } from 'framer-motion';

const experiences = [
    {
        title: 'Software Developer III',
        company: 'Real Estate Council of Ontario',
        period: 'Jun 2023 - Present',
        description: 'Lead the design and management of secure Web and API integrations to ensure seamless real-time data transfers while implementing robust security and data protection protocols. Drive the delivery of high-impact features by mentoring cross-functional teams, writing maintainable code, and authoring advanced technical documentation to bridge the gap between engineering and business needs.',
    },
    {
        title: 'Azure Support Engineer',
        company: 'Collabera Canada Inc (Microsoft)',
        period: 'Nov 2021 - May 2023',
        description: 'Spearheaded advanced troubleshooting and resolution of complex Azure infrastructure challenges for enterprise clients. Architected scalable cloud solutions, developed rapid bug fixes, and translated highly technical concepts into actionable strategies for Microsoft developer customers.',
    },
    {
        title: 'Online Tutor & Lab Assistant',
        company: 'Fanshawe College',
        period: 'Sep 2019 - Aug 2021',
        description: 'Empowered diverse cohorts by providing strategic academic tutoring and real-time lab assistance, translating intricate curriculum requirements into actionable learning outcomes. Directed the delivery of practical lab sessions, mentoring students through complex technical concepts to foster a high-performance learning environment and accelerate individual skill growth.',
    },
    {
        title: 'Technical Advisor',
        company: 'Raagav Industrial Gases Pvt Ltd',
        period: 'Jul 2018 - Aug 2019',
        description: 'Led end-to-end digital transformation initiatives, moving legacy business processes to modern tech stacks. Mentored cross-functional engineering teams to build resilient software systems, designing automated reporting architectures to consistently verify ROI and deployment success.',
    },
    {
        title: 'Application Development Analyst',
        company: 'Accenture',
        period: 'Jan 2015 - Apr 2018',
        description: 'Delivered high-impact technical expertise across critical client projects, ensuring zero-downtime deployments and consistent client satisfaction. Optimized application performance, striking the perfect balance between engineering efficiency and high-quality deliverables.',
    },
    {
        title: 'Application Development Associate',
        company: 'Accenture',
        period: 'July 2014 - Dec 2015',
        description: 'Engineered seamless enterprise data migrations using robust MSBI tooling (SSIS & SSRS) alongside responsive front-end development. Recognized for exceptional engineering rigor, earning the prestigious GEM Award for high-quality project deliverables.',
    }
];

export function Experience() {
    return (
        <section id="experience" className="py-24 px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-4xl font-heading font-bold text-white mb-12 text-center"
                >
                    Professional <span className="text-gradient">Experience</span>
                </motion.h2>

                <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/20 before:to-transparent">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                        >
                            {/* Timeline dot */}
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-primary-light shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-xl">
                                <div className="w-3 h-3 bg-accent-blue rounded-full"></div>
                            </div>

                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] glass-card p-6 md:p-8">
                                <div className="flex flex-col mb-4">
                                    <h3 className="text-xl font-bold text-white font-heading">{exp.title}</h3>
                                    <span className="text-accent-blue font-medium text-sm mt-1">{exp.company}</span>
                                    <span className="text-slate-500 text-xs mt-2 uppercase tracking-wider">{exp.period}</span>
                                </div>
                                <p className="text-slate-400 text-sm leading-relaxed">{exp.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
