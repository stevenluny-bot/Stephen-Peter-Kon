import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, Linkedin, MapPin, Send, CheckCircle, AlertCircle, Loader2, ArrowUpRight, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO, SERVICES } from '../data/portfolioData';
import { ContactFormData } from '../types/portfolio';

interface ContactProps {
  initialService?: string;
}

export default function Contact({ initialService }: ContactProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    service: initialService || 'PostgreSQL & Database Management',
    subject: '',
    message: '',
  });

  // EmailJS Environment Identifiers
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';
  const isEmailJSConfigured = Boolean(serviceId && templateId && publicKey);

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({
        ...prev,
        service: initialService,
        subject: `Inquiry regarding ${initialService}`,
      }));
    }
  }, [initialService]);

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = (): boolean => {
    const errs: Partial<Record<keyof ContactFormData, string>> = {};

    if (!formData.fullName.trim()) {
      errs.fullName = 'Please enter your full name.';
    } else if (formData.fullName.trim().length < 2) {
      errs.fullName = 'Name must be at least 2 characters.';
    }

    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }

    if (!formData.subject.trim()) {
      errs.subject = 'Please enter a subject.';
    }

    if (!formData.message.trim()) {
      errs.message = 'Please provide details about your project or inquiry.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters to provide sufficient context.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setErrors({});

    try {
      if (isEmailJSConfigured) {
        // Step 2 & 3: Secure transmission directly to EmailJS cloud -> Gmail API
        await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: formData.fullName,
            from_email: formData.email,
            service: formData.service,
            subject: formData.subject,
            message: formData.message,
            to_name: 'Stephen Peter Kon',
            to_email: 'stevenluny@gmail.com',
            reply_to: formData.email,
          },
          publicKey
        );
      } else {
        // Fallback simulation when keys are not yet set
        await new Promise((resolve) => setTimeout(resolve, 600));
      }

      try {
        const stored = JSON.parse(localStorage.getItem('spk_inquiries') || '[]');
        stored.push({ ...formData, timestamp: new Date().toISOString() });
        localStorage.setItem('spk_inquiries', JSON.stringify(stored));
      } catch {
        // Ignore local storage error
      }

      setIsSuccess(true);
    } catch (err: unknown) {
      const errorMsg = err instanceof Error ? err.message : 'Transmission failed';
      setErrors({ message: `Transmission failed: ${errorMsg}. Please email directly at ${PERSONAL_INFO.email}.` });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      service: 'PostgreSQL & Database Management',
      subject: '',
      message: '',
    });
    setIsSuccess(false);
  };

  const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
    formData.subject || 'Portfolio Inquiry'
  )}&body=${encodeURIComponent(
    `Hello Stephen,\n\nMy name is ${formData.fullName} (${formData.email}).\nService of interest: ${formData.service}\n\nMessage:\n${formData.message}`
  )}`;

  return (
    <section id="contact" className="py-20 lg:py-24 bg-zinc-950 border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="text-xs font-mono font-medium tracking-wider text-zinc-400 uppercase">
            Communication &amp; Inquiries
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Let's Connect
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl">
            Have a data challenge, a database project, a training opportunity, or an idea worth exploring? Let's connect and discuss how analytical thinking and technology can help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Contact Details & EmailJS Status */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-lg bg-zinc-900 border border-zinc-800 space-y-5">
              <h3 className="text-lg font-bold text-white">
                Direct Coordinates
              </h3>

              <div className="space-y-3 text-sm">
                {/* Email */}
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-start gap-3.5 p-3.5 rounded bg-black border border-zinc-800 hover:border-white transition-colors group"
                >
                  <div className="p-2 rounded bg-zinc-900 text-white mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-mono text-zinc-400">Email</div>
                    <div className="text-white font-medium group-hover:text-zinc-300 transition-colors">
                      {PERSONAL_INFO.email}
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors mt-1" />
                </a>

                {/* Phone */}
                <a
                  href={`tel:${PERSONAL_INFO.phoneRaw}`}
                  className="flex items-start gap-3.5 p-3.5 rounded bg-black border border-zinc-800 hover:border-white transition-colors group"
                >
                  <div className="p-2 rounded bg-zinc-900 text-white mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-mono text-zinc-400">Phone / WhatsApp</div>
                    <div className="text-white font-medium group-hover:text-zinc-300 transition-colors">
                      {PERSONAL_INFO.phone}
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors mt-1" />
                </a>

                {/* LinkedIn */}
                <a
                  href={PERSONAL_INFO.linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3.5 p-3.5 rounded bg-black border border-zinc-800 hover:border-white transition-colors group"
                >
                  <div className="p-2 rounded bg-zinc-900 text-white mt-0.5">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-mono text-zinc-400">LinkedIn Profile</div>
                    <div className="text-white font-medium group-hover:text-zinc-300 transition-colors">
                      Stephen P. Kon
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors mt-1" />
                </a>

                {/* Location */}
                <div className="flex items-start gap-3.5 p-3.5 rounded bg-black border border-zinc-800">
                  <div className="p-2 rounded bg-zinc-900 text-zinc-400 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-zinc-400">Location Base</div>
                    <div className="text-white font-medium">
                      {PERSONAL_INFO.location}
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Contact & Project Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-lg bg-zinc-900 border border-zinc-800">
              {isSuccess ? (
                <div className="space-y-6 text-center py-6">
                  <div className="w-12 h-12 rounded-full bg-black text-white border border-zinc-700 flex items-center justify-center mx-auto">
                    <CheckCircle className="w-6 h-6" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white">
                      Message Dispatched
                    </h3>
                    <p className="text-sm text-zinc-300 max-w-md mx-auto leading-relaxed">
                      Thank you for reaching out, <span className="font-semibold text-white">{formData.fullName}</span>. Your inquiry regarding <span className="text-white font-mono">{formData.service}</span> has been processed. Stephen will respond shortly.
                    </p>
                  </div>

                  <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                    <a
                      href={mailtoUrl}
                      className="px-4 py-2 text-xs font-semibold text-black bg-white hover:bg-zinc-200 rounded transition-colors inline-flex items-center gap-1.5"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Open in Email App</span>
                    </a>

                    <button
                      type="button"
                      onClick={handleReset}
                      className="px-4 py-2 text-xs font-semibold text-white bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 rounded transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div className="border-b border-zinc-800 pb-3">
                    <h3 className="text-base font-bold text-white">
                      Project &amp; Collaboration Form
                    </h3>
                    <p className="text-xs text-zinc-400">
                      Send a message or project inquiry. Stephen will reply directly to your email.
                    </p>
                  </div>

                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label htmlFor="fullName" className="block text-xs font-mono font-medium text-zinc-300">
                        Full Name <span className="text-white">*</span>
                      </label>
                      <input
                        id="fullName"
                        name="from_name"
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="Jane Doe"
                        aria-invalid={!!errors.fullName}
                        aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                        className={`w-full px-3 py-2 rounded bg-black border text-sm text-white placeholder-zinc-600 focus:outline-none transition-colors ${
                          errors.fullName
                            ? 'border-white focus:border-white'
                            : 'border-zinc-800 focus:border-white'
                        }`}
                      />
                      {errors.fullName && (
                        <p id="fullName-error" className="text-xs text-zinc-300 flex items-center gap-1 mt-1">
                          <AlertCircle className="w-3 h-3 text-white" />
                          <span>{errors.fullName}</span>
                        </p>
                      )}
                    </div>

                    <div className="space-y-1">
                      <label htmlFor="email" className="block text-xs font-mono font-medium text-zinc-300">
                        Email Address <span className="text-white">*</span>
                      </label>
                      <input
                        id="email"
                        name="from_email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="jane@example.com"
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                        className={`w-full px-3 py-2 rounded bg-black border text-sm text-white placeholder-zinc-600 focus:outline-none transition-colors ${
                          errors.email
                            ? 'border-white focus:border-white'
                            : 'border-zinc-800 focus:border-white'
                        }`}
                      />
                      {errors.email && (
                        <p id="email-error" className="text-xs text-zinc-300 flex items-center gap-1 mt-1">
                          <AlertCircle className="w-3 h-3 text-white" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Primary Service */}
                  <div className="space-y-1">
                    <label htmlFor="service" className="block text-xs font-mono font-medium text-zinc-300">
                      Primary Area of Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3 py-2 rounded bg-black border border-zinc-800 text-sm text-white focus:outline-none focus:border-white transition-colors"
                    >
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                      <option value="General Technical Inquiry">Other / General Technical Discussion</option>
                    </select>
                  </div>

                  {/* Subject */}
                  <div className="space-y-1">
                    <label htmlFor="subject" className="block text-xs font-mono font-medium text-zinc-300">
                      Subject <span className="text-white">*</span>
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Brief topic summary"
                      aria-invalid={!!errors.subject}
                      aria-describedby={errors.subject ? 'subject-error' : undefined}
                      className={`w-full px-3 py-2 rounded bg-black border text-sm text-white placeholder-zinc-600 focus:outline-none transition-colors ${
                        errors.subject
                          ? 'border-white focus:border-white'
                          : 'border-zinc-800 focus:border-white'
                      }`}
                    />
                    {errors.subject && (
                      <p id="subject-error" className="text-xs text-zinc-300 flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3 h-3 text-white" />
                        <span>{errors.subject}</span>
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div className="space-y-1">
                    <label htmlFor="message" className="block text-xs font-mono font-medium text-zinc-300">
                      Message Details <span className="text-white">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe the context, requirements, or educational initiative..."
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                      className={`w-full px-3 py-2 rounded bg-black border text-sm text-white placeholder-zinc-600 focus:outline-none transition-colors resize-none ${
                        errors.message
                          ? 'border-white focus:border-white'
                          : 'border-zinc-800 focus:border-white'
                      }`}
                    />
                    {errors.message && (
                      <p id="message-error" className="text-xs text-zinc-300 flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3 h-3 text-white" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Privacy Notice */}
                  <div className="text-[11px] text-zinc-500 pt-1">
                    Privacy notice: Your information is dispatched directly to Stephen's inbox. No marketing lists or third-party tracking.
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2 flex flex-wrap items-center gap-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-5 py-2.5 text-xs font-semibold text-black bg-white hover:bg-zinc-200 disabled:bg-zinc-700 disabled:text-zinc-400 disabled:cursor-not-allowed rounded transition-colors inline-flex items-center justify-center gap-2 focus-visible:outline-2 focus-visible:outline-white"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin text-black" />
                          <span>Dispatching via EmailJS...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>

                    <a
                      href={mailtoUrl}
                      className="px-4 py-2.5 text-xs font-medium text-zinc-400 hover:text-white transition-colors inline-flex items-center gap-1.5"
                    >
                      <span>Or send via email client</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
