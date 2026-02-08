import { motion } from 'framer-motion';
import { skills, timeline } from '../data/projects';
import GlassCard from './ui/GlassCard';
import SkillChip from './ui/SkillChip';
import Timeline from './about/Timeline';

export default function About() {
    return (
        <section id="about" className="relative py-24 sm:py-32">
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
                        className="inline-block text-neon-purple/80 text-sm font-medium tracking-widest uppercase mb-4"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        Get to Know Me
                    </motion.span>
                    <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
                        About <span className="gradient-text">Me</span>
                    </h2>
                    <p className="text-white/50 max-w-2xl mx-auto text-lg">
                        Innovating at the intersection of AI, Web3, and HealthTech to build solutions that matter.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* Left column - Bio and Skills */}
                    <div className="space-y-8">
                        {/* Bio card */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <GlassCard className="p-6 sm:p-8" neonBorder>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-neon-cyan to-neon-purple flex items-center justify-center">
                                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                    </div>
                                    <h3 className="font-display font-semibold text-xl text-white">Profile</h3>
                                </div>
                                <p className="text-white/70 leading-relaxed mb-4">
                                    I'm a passionate technologist and innovator dedicated to building the future with AI and emerging technologies. With expertise spanning machine learning, blockchain, and healthcare innovation, I create solutions that bridge cutting-edge research with real-world impact.
                                </p>
                                <p className="text-white/70 leading-relaxed">
                                    My journey has taken me from pioneering AI platforms like ORCAAA AI to developing decentralized training infrastructure and mental health solutions. I believe in technology's power to transform lives and am committed to pushing the boundaries of what's possible.
                                </p>
                            </GlassCard>
                        </motion.div>

                        {/* Skills */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <GlassCard className="p-6 sm:p-8">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-neon-teal to-neon-cyan flex items-center justify-center">
                                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                        </svg>
                                    </div>
                                    <h3 className="font-display font-semibold text-xl text-white">Skills & Expertise</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {skills.map((skill, index) => (
                                        <SkillChip key={skill.name} skill={skill} index={index} />
                                    ))}
                                </div>
                            </GlassCard>
                        </motion.div>
                    </div>

                    {/* Right column - Timeline */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <GlassCard className="p-6 sm:p-8 h-full">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-neon-purple to-neon-pink flex items-center justify-center">
                                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <h3 className="font-display font-semibold text-xl text-white">Journey</h3>
                            </div>
                            <Timeline items={timeline} />
                        </GlassCard>
                    </motion.div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-40 right-0 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-20 left-0 w-64 h-64 bg-neon-teal/5 rounded-full blur-3xl pointer-events-none" />
            </div>
        </section>
    );
}
