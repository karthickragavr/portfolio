import { motion } from 'framer-motion';

const skills = {
    "Cloud & DevOps": ["Azure", "AWS", "GCP", "Docker", "Kubernetes", "Git", "CI/CD Pipelines", "Terraform", "Ansible"],
    "Backend": ["Node.js", "C#", ".NET Core", "Python", "Django", "Java", "SQL", "REST APIs", "GraphQL", "Microservices", "Serverless"],
    "Frontend": ["React", "Angular", "HTML5", "CSS3", "JavaScript", "TypeScript", "Next.js"],
    "Tools": ["Visual Studio", "VS Code", "Vite", "Tailwind CSS", "MSBI (SSIS/SSRS/SSAS)", "Figma"],
    "Soft Skills": ["Communication", "Leadership", "Teamwork", "Adaptability", "Analytical Thinking", "Problem Solving"],
    "Others": ["Project Management", "Agile Methodologies", "Break-Fix", "Debugging", "Troubleshooting", "Performance Tuning", "Security", "Testing", "Deployment", "Monitoring", "Logging"]
};

export function Skills() {
    return (
        <section id="skills" className="py-24 px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-4xl font-heading font-bold text-white mb-16 text-center"
                >
                    Technical <span className="text-gradient">Arsenal</span>
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {Object.entries(skills).map(([category, items], index) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass p-8 rounded-[2rem] relative overflow-hidden group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <h3 className="text-xl font-heading font-bold text-white mb-6 relative z-10">{category}</h3>
                            <div className="flex flex-wrap gap-3 relative z-10">
                                {items.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-4 py-2 rounded-full text-sm font-medium bg-primary-light/50 border border-white/5 text-slate-300 hover:text-white hover:border-accent-purple/50 transition-colors shadow-sm"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
