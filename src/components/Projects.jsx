import { useState } from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import ProjectCard from './projects/ProjectCard';
import ProjectModal from './projects/ProjectModal';

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section id="projects" className="relative py-24 sm:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.span
                        className="inline-block text-neon-cyan/80 text-sm font-medium tracking-widest uppercase mb-4"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        Featured Work
                    </motion.span>
                    <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
                        Projects & <span className="gradient-text">Innovations</span>
                    </h2>
                    <p className="text-white/50 max-w-2xl mx-auto text-lg">
                        A collection of AI, Web3, and HealthTech projects that push the boundaries of technology.
                    </p>
                </motion.div>

                {/* Projects grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            index={index}
                            onClick={() => setSelectedProject(project)}
                        />
                    ))}
                </div>

                {/* Decorative elements */}
                <div className="absolute top-20 left-0 w-64 h-64 bg-neon-cyan/5 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-20 right-0 w-80 h-80 bg-neon-purple/5 rounded-full blur-3xl pointer-events-none" />
            </div>

            {/* Project Modal */}
            <ProjectModal
                project={selectedProject}
                isOpen={!!selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </section>
    );
}
