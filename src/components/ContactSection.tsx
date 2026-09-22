import React, { useState } from 'react';
import {
  Mail,
  Send,
  CheckCircle2,
  Copy,
  ExternalLink,
  MapPin,
  Clock,
  MessageSquare,
  Sparkles,
  AlertCircle
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const validate = () => {
    const errs: { name?: string; email?: string; message?: string } = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name.';
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim() || formData.message.length < 10) {
      errs.message = 'Please provide a message with at least 10 characters.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Trigger direct mailto dispatch
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Hello Areeba,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.open(`mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`, '_blank');

    setSubmitted(true);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="contact"
      className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full select-none"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-cyan-500/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-blue-600/15 blur-[130px] pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-400/30 bg-cyan-950/30 text-cyan-400 font-mono text-xs tracking-widest uppercase mb-4 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
          <MessageSquare className="w-3.5 h-3.5 text-cyan-400" />
          START A CONVERSATION
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white dark:text-white light:text-slate-900 mb-4">
          Let's Build Something
        </h2>
        <p className="text-slate-300 dark:text-slate-300 light:text-slate-600 text-base sm:text-lg">
          Have an idea, project, internship opportunity, or collaboration in mind? Let's connect.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch max-w-6xl mx-auto">
        {/* Left Column: Direct Info & Social Matrix (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between glass-panel p-8 sm:p-10 rounded-3xl border border-cyan-500/25 shadow-[0_0_30px_rgba(6,182,212,0.1)] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-bl-full blur-2xl pointer-events-none" />

          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Get in Touch
            </h3>
            <p className="text-slate-300 dark:text-slate-300 light:text-slate-600 text-xs sm:text-sm leading-relaxed mb-8">
              I am open to software engineering internships, junior developer positions, and academic collaborations.
            </p>

            {/* Email Address with Copy Button */}
            <div className="mb-6 p-4 rounded-2xl bg-slate-900/80 border border-cyan-500/30 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="p-2.5 rounded-xl bg-cyan-500/20 text-cyan-400 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="truncate">
                  <span className="text-[11px] font-mono text-slate-400 block">Direct Email</span>
                  <span className="text-xs sm:text-sm font-mono text-cyan-300 font-semibold truncate block">
                    {PERSONAL_INFO.email}
                  </span>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                id="copy-email-btn"
                title="Copy email to clipboard"
                className="p-2.5 rounded-xl bg-cyan-950/60 hover:bg-cyan-900/80 border border-cyan-400/40 text-cyan-300 hover:text-white transition-all shrink-0"
              >
                {copied ? <CheckCircle2 className="w-4 h-4 text-teal-300" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Location & Timezone info */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 text-xs font-mono text-slate-300">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Lahore, Pakistan (GMT+5)</span>
              </div>
              <div className="flex items-center gap-3 text-xs font-mono text-slate-300">
                <Clock className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Responsive to emails within 24 hours</span>
              </div>
            </div>
          </div>

          {/* Social Links Cards */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-3">
              Professional Profiles:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {/* LinkedIn */}
              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                id="social-linkedin"
                className="flex items-center justify-between p-3 rounded-2xl bg-slate-900/60 border border-cyan-500/20 hover:border-cyan-400/60 hover:bg-cyan-950/40 transition-all text-xs font-mono group"
              >
                <span className="text-white group-hover:text-cyan-300 font-medium">LinkedIn</span>
                <ExternalLink className="w-3.5 h-3.5 text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {/* Fiverr */}
              <a
                href={PERSONAL_INFO.socials.fiverr}
                target="_blank"
                rel="noopener noreferrer"
                id="social-fiverr"
                className="flex items-center justify-between p-3 rounded-2xl bg-slate-900/60 border border-teal-500/20 hover:border-teal-400/60 hover:bg-teal-950/40 transition-all text-xs font-mono group"
              >
                <span className="text-white group-hover:text-teal-300 font-medium">Fiverr</span>
                <ExternalLink className="w-3.5 h-3.5 text-teal-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {/* GitHub */}
              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                id="social-github"
                className="flex items-center justify-between p-3 rounded-2xl bg-slate-900/60 border border-blue-500/20 hover:border-blue-400/60 hover:bg-blue-950/40 transition-all text-xs font-mono group"
              >
                <span className="text-white group-hover:text-blue-300 font-medium">GitHub</span>
                <ExternalLink className="w-3.5 h-3.5 text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Glassmorphic Contact Form (7 cols) */}
        <div className="lg:col-span-7 glass-panel p-8 sm:p-10 rounded-3xl border border-cyan-400/30 shadow-[0_0_30px_rgba(6,182,212,0.1)] relative">
          {submitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-teal-500/20 border border-teal-400/50 flex items-center justify-center text-teal-300 shadow-[0_0_25px_rgba(20,184,166,0.3)]">
                <CheckCircle2 className="w-8 h-8 text-teal-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">Message Prepared!</h3>
              <p className="text-slate-300 text-sm max-w-md leading-relaxed">
                Thank you, {formData.name}. Your email client was prompted with the pre-filled inquiry. You can also directly reach Areeba at{' '}
                <span className="text-cyan-300 font-mono font-semibold">{PERSONAL_INFO.email}</span>.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: '', email: '', message: '' });
                }}
                className="mt-4 px-6 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider text-cyan-300 border border-cyan-500/40 hover:bg-cyan-950/50 transition-colors"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-xs font-mono uppercase tracking-widest text-slate-300 mb-2"
                >
                  Your Name <span className="text-cyan-400">*</span>
                </label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="e.g. Sarah Jenkins"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={`w-full px-4 py-3.5 rounded-2xl bg-slate-900/80 border ${
                    errors.name ? 'border-red-400' : 'border-cyan-500/25'
                  } focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 text-white placeholder-slate-500 text-sm transition-all outline-none shadow-inner`}
                />
                {errors.name && (
                  <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1 font-mono">
                    <AlertCircle className="w-3 h-3" /> {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-xs font-mono uppercase tracking-widest text-slate-300 mb-2"
                >
                  Your Email Address <span className="text-cyan-400">*</span>
                </label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`w-full px-4 py-3.5 rounded-2xl bg-slate-900/80 border ${
                    errors.email ? 'border-red-400' : 'border-cyan-500/25'
                  } focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 text-white placeholder-slate-500 text-sm transition-all outline-none shadow-inner`}
                />
                {errors.email && (
                  <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1 font-mono">
                    <AlertCircle className="w-3 h-3" /> {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-mono uppercase tracking-widest text-slate-300 mb-2"
                >
                  Message / Internship Details <span className="text-cyan-400">*</span>
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  placeholder="Hello Areeba, we came across your software engineering portfolio and would love to connect regarding..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`w-full px-4 py-3.5 rounded-2xl bg-slate-900/80 border ${
                    errors.message ? 'border-red-400' : 'border-cyan-500/25'
                  } focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 text-white placeholder-slate-500 text-sm transition-all outline-none shadow-inner`}
                />
                {errors.message && (
                  <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1 font-mono">
                    <AlertCircle className="w-3 h-3" /> {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                id="contact-submit-btn"
                className="w-full group py-4 px-8 rounded-2xl bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-400 text-white font-mono font-bold text-xs uppercase tracking-widest shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:shadow-[0_0_40px_rgba(6,182,212,0.6)] transition-all duration-300 flex items-center justify-center gap-2.5 hover:scale-[1.01] active:scale-[0.99]"
              >
                <span>Send Message</span>
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <p className="text-[11px] font-mono text-center text-slate-500">
                Direct client dispatch • Verified contact credentials
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
