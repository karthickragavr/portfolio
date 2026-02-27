import { motion } from 'framer-motion';
import { Award, GraduationCap } from 'lucide-react';

const education = [
    {
        institution: "Fanshawe College",
        degree: "Business Information Systems Architecture",
        type: "Post Graduate Certificate",
        period: "Sep 2019 - Apr 2021",
        grades: "CGPA: 4.11 | Summa Cum Laude",
    },
    {
        institution: "SASTRA University",
        degree: "Computer Science Engineering",
        type: "Bachelor of Technology",
        period: "Jun 2010 - Apr 2014",
        grades: "CGPA: 7.02",
    }
];

const awards = [
    "Microsoft Certified: Azure Fundamentals (AZ-900)",
    "Microsoft Certified: Solutions Developer",
    "GEM (Going the Extra Mile) Award by Accenture",
    "Dean's Honor Roll across all semesters at Fanshawe College",
];

export function Education() {
    return (
        <section id="education" className="py-24 px-4 relative z-10">
            <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-16">

                {/* Education Half */}
                <div className="flex-1">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-3xl font-heading font-bold text-white mb-10 flex items-center gap-4"
                    >
                        <GraduationCap className="text-accent-blue w-8 h-8" />
                        Education
                    </motion.h2>

                    <div className="space-y-6">
                        {education.map((edu, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="glass-card p-6"
                            >
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-lg font-bold text-white">{edu.institution}</h3>
                                    <span className="text-xs text-slate-500 whitespace-nowrap">{edu.period}</span>
                                </div>
                                <div className="text-accent-purple font-medium text-sm mb-3">{edu.type}</div>
                                <p className="text-slate-400 text-sm mb-3">{edu.degree}</p>
                                <div className="inline-block px-3 py-1 rounded-full bg-white/5 text-xs text-slate-300 font-mono">
                                    {edu.grades}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Awards Half */}
                <div className="flex-1">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-3xl font-heading font-bold text-white mb-10 flex items-center gap-4"
                    >
                        <Award className="text-accent-purple w-8 h-8" />
                        Certifications
                    </motion.h2>

                    <div className="space-y-4">
                        {awards.map((award, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-start gap-4 glass p-4 rounded-xl"
                            >
                                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                                    <Award className="w-4 h-4 text-accent-blue" />
                                </div>
                                <p className="text-sm text-slate-300 pt-1 leading-relaxed">{award}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
