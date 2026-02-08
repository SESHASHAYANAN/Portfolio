import { useState } from 'react';
import { motion } from 'framer-motion';
import GlassCard from './ui/GlassCard';
import NeonButton from './ui/NeonButton';
import { socialLinks } from '../data/projects';

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [focusedField, setFocusedField] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });

        setTimeout(() => setSubmitStatus(null), 3000);
    };

    const inputClasses = (field) => `
    w-full px-5 py-4 rounded-xl 
    bg-white/[0.03] border-2 
    ${focusedField === field ? 'border-neon-cyan/50' : 'border-white/10'} 
    text-white placeholder-white/30
    focus:outline-none focus:border-neon-cyan/50
    transition-all duration-300
    backdrop-blur-sm
  `;

    return (
        <section id="contact" className="relative py-24 sm:py-32">
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
                        className="inline-block text-neon-teal/80 text-sm font-medium tracking-widest uppercase mb-4"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        Let's Connect
                    </motion.span>
                    <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
                        Get In <span className="gradient-text">Touch</span>
                    </h2>
                    <p className="text-white/50 max-w-2xl mx-auto text-lg">
                        Have a project in mind or want to collaborate? I'd love to hear from you.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <GlassCard className="p-6 sm:p-8" neonBorder>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Name field */}
                                <div className="relative">
                                    <label htmlFor="name" className="block text-white/60 text-sm mb-2 font-medium">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={formData.name}
                                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                                        onFocus={() => setFocusedField('name')}
                                        onBlur={() => setFocusedField(null)}
                                        className={inputClasses('name')}
                                        placeholder="John Doe"
                                        required
                                    />
                                    {/* Glow effect */}
                                    {focusedField === 'name' && (
                                        <motion.div
                                            className="absolute inset-0 rounded-xl opacity-30 pointer-events-none"
                                            style={{ boxShadow: '0 0 30px rgba(0, 245, 255, 0.3)' }}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 0.3 }}
                                            exit={{ opacity: 0 }}
                                        />
                                    )}
                                </div>

                                {/* Email field */}
                                <div className="relative">
                                    <label htmlFor="email" className="block text-white/60 text-sm mb-2 font-medium">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={formData.email}
                                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                                        onFocus={() => setFocusedField('email')}
                                        onBlur={() => setFocusedField(null)}
                                        className={inputClasses('email')}
                                        placeholder="john@example.com"
                                        required
                                    />
                                    {focusedField === 'email' && (
                                        <motion.div
                                            className="absolute inset-0 rounded-xl opacity-30 pointer-events-none"
                                            style={{ boxShadow: '0 0 30px rgba(0, 245, 255, 0.3)' }}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 0.3 }}
                                        />
                                    )}
                                </div>

                                {/* Message field */}
                                <div className="relative">
                                    <label htmlFor="message" className="block text-white/60 text-sm mb-2 font-medium">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        value={formData.message}
                                        onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                                        onFocus={() => setFocusedField('message')}
                                        onBlur={() => setFocusedField(null)}
                                        className={`${inputClasses('message')} min-h-[150px] resize-none`}
                                        placeholder="Tell me about your project..."
                                        required
                                    />
                                    {focusedField === 'message' && (
                                        <motion.div
                                            className="absolute inset-0 rounded-xl opacity-30 pointer-events-none"
                                            style={{ boxShadow: '0 0 30px rgba(0, 245, 255, 0.3)' }}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 0.3 }}
                                        />
                                    )}
                                </div>

                                {/* Submit button */}
                                <NeonButton
                                    type="submit"
                                    size="lg"
                                    className="w-full"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <span className="flex items-center gap-2">
                                            <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                            </svg>
                                            Sending...
                                        </span>
                                    ) : (
                                        <span className="flex items-center gap-2">
                                            Send Message
                                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </span>
                                    )}
                                </NeonButton>

                                {/* Status message */}
                                {submitStatus === 'success' && (
                                    <motion.p
                                        className="text-neon-teal text-center text-sm"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                    >
                                        ✓ Message sent successfully! I'll get back to you soon.
                                    </motion.p>
                                )}
                            </form>
                        </GlassCard>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        className="space-y-6"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* Info card */}
                        <GlassCard className="p-6 sm:p-8">
                            <h3 className="font-display font-semibold text-xl text-white mb-6">Connect With Me</h3>

                            <div className="space-y-4">
                                {/* LinkedIn */}
                                <motion.a
                                    href={socialLinks.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-neon-cyan/30 transition-all duration-300 group"
                                    whileHover={{ x: 5 }}
                                    aria-label="Visit LinkedIn profile"
                                >
                                    <div className="w-12 h-12 rounded-lg bg-[#0077B5]/20 flex items-center justify-center group-hover:shadow-neon-cyan transition-shadow duration-300">
                                        <svg className="w-6 h-6 text-[#0077B5]" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                        </svg>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-white font-medium">LinkedIn</p>
                                        <p className="text-white/50 text-sm">Let's connect professionally</p>
                                    </div>
                                    <svg className="w-5 h-5 text-white/30 group-hover:text-neon-cyan transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </motion.a>

                                {/* GitHub */}
                                <motion.a
                                    href={socialLinks.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-neon-purple/30 transition-all duration-300 group"
                                    whileHover={{ x: 5 }}
                                    aria-label="Visit GitHub profile"
                                >
                                    <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center group-hover:shadow-neon-purple transition-shadow duration-300">
                                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                        </svg>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-white font-medium">GitHub</p>
                                        <p className="text-white/50 text-sm">Check out my code</p>
                                    </div>
                                    <svg className="w-5 h-5 text-white/30 group-hover:text-neon-purple transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </motion.a>

                                {/* Email */}
                                <motion.a
                                    href={`mailto:${socialLinks.email}`}
                                    className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-neon-teal/30 transition-all duration-300 group"
                                    whileHover={{ x: 5 }}
                                    aria-label="Send an email"
                                >
                                    <div className="w-12 h-12 rounded-lg bg-neon-teal/20 flex items-center justify-center group-hover:shadow-neon-teal transition-shadow duration-300">
                                        <svg className="w-6 h-6 text-neon-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-white font-medium">Email</p>
                                        <p className="text-white/50 text-sm">Drop me a line</p>
                                    </div>
                                    <svg className="w-5 h-5 text-white/30 group-hover:text-neon-teal transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </motion.a>
                            </div>
                        </GlassCard>

                        {/* Location indicator */}
                        <GlassCard className="p-6">
                            <div className="flex items-center gap-3">
                                <div className="relative">
                                    <div className="w-3 h-3 bg-neon-teal rounded-full animate-pulse" />
                                    <div className="absolute inset-0 w-3 h-3 bg-neon-teal rounded-full animate-ping opacity-75" />
                                </div>
                                <span className="text-white/70 text-sm">Available for new opportunities</span>
                            </div>
                        </GlassCard>
                    </motion.div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-20 left-0 w-72 h-72 bg-neon-teal/5 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-40 right-0 w-96 h-96 bg-neon-cyan/5 rounded-full blur-3xl pointer-events-none" />
            </div>
        </section>
    );
}
