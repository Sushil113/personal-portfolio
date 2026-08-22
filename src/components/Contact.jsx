import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WORK_TYPES = [
  { id: 'full-time', label: 'Full-Time Position' },
  { id: 'contract', label: 'Contract / Freelance' },
  { id: 'consulting', label: 'Consulting' },
  { id: 'other', label: 'Other Collaboration' },
];

const BUDGET_OPTIONS = [
  { id: 'under-1k', label: 'Under $1k' },
  { id: '1k-5k', label: '$1k – $5k' },
  { id: '5k-10k', label: '$5k – $10k' },
  { id: '10k-plus', label: '$10k+' },
  { id: 'not-applicable', label: 'Not Applicable' },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    workType: 'full-time',
    budget: 'not-applicable',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear validation error when user types
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  }, [errors]);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message details are required';
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus('submitting');

    try {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // LOGGING PAYLOAD: Ready to connect to email or Telegram API.
      // E.g., fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) })
      console.log('Form submission successful. Payload:', formData);

      setStatus('success');
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        workType: 'full-time',
        budget: 'not-applicable',
        message: '',
      });
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className="w-full py-4"
    >
      {/* Signature REST Endpoint Header */}
      <div className="flex items-center space-x-2.5 mb-8 font-mono">
        <span className="px-2 py-0.5 text-xs font-semibold rounded-[4px] bg-accent/10 text-accent border border-accent/20">
          POST
        </span>
        <span className="text-sm text-on-surface font-semibold">/contact</span>
      </div>

      <div className="bg-surface-raised border border-border p-6 rounded-[6px]">
        <AnimatePresence mode="wait">
          {status === 'success' ? (
            <motion.div
              key="success-state"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="py-12 text-center"
            >
              <div className="w-12 h-12 rounded-[6px] bg-primary/10 border border-primary/20 flex items-center justify-center text-primary text-xl font-mono mx-auto mb-4">
                ✓
              </div>
              <h3 className="text-xl font-display font-semibold text-on-surface mb-2">
                Message Received
              </h3>
              <p className="text-sm text-on-surface-muted max-w-sm mx-auto mb-6">
                Thank you for reaching out. I will review your request and get back to you as soon as possible.
              </p>
              <button
                type="button"
                onClick={() => setStatus('idle')}
                className="px-4 py-2 border border-border text-on-surface hover:border-primary hover:text-primary transition-colors text-xs font-mono rounded-[4px]"
              >
                Send Another Message
              </button>
            </motion.div>
          ) : (
            <motion.form
              key="form-state"
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              <div>
                <h3 className="text-base font-display font-semibold text-on-surface mb-1">
                  Let's Work Together
                </h3>
                <p className="text-xs text-on-surface-muted font-mono">
                  Fill out this request form to discuss freelance work, job offers, or collaborations.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="text-[10px] font-mono text-primary uppercase tracking-wider mb-1.5 block">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={status === 'submitting'}
                    placeholder="Enter your name"
                    className={`w-full bg-background border ${
                      errors.name ? 'border-error' : 'border-border'
                    } focus:border-primary/80 focus:ring-1 focus:ring-primary/20 focus:outline-none rounded-[4px] px-3.5 py-2 text-sm text-on-surface placeholder:text-on-surface-muted/30 transition-all font-mono`}
                  />
                  {errors.name && (
                    <span className="text-xs text-error font-mono mt-1 block">{errors.name}</span>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="text-[10px] font-mono text-primary uppercase tracking-wider mb-1.5 block">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={status === 'submitting'}
                    placeholder="name@company.com"
                    className={`w-full bg-background border ${
                      errors.email ? 'border-error' : 'border-border'
                    } focus:border-primary/80 focus:ring-1 focus:ring-primary/20 focus:outline-none rounded-[4px] px-3.5 py-2 text-sm text-on-surface placeholder:text-on-surface-muted/30 transition-all font-mono`}
                  />
                  {errors.email && (
                    <span className="text-xs text-error font-mono mt-1 block">{errors.email}</span>
                  )}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="company" className="text-[10px] font-mono text-primary uppercase tracking-wider mb-1.5 block">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    disabled={status === 'submitting'}
                    placeholder="e.g. WaterFlow Tech"
                    className="w-full bg-background border border-border focus:border-primary/80 focus:ring-1 focus:ring-primary/20 focus:outline-none rounded-[4px] px-3.5 py-2 text-sm text-on-surface placeholder:text-on-surface-muted/30 transition-all font-mono"
                  />
                </div>

                <div>
                  <label htmlFor="workType" className="text-[10px] font-mono text-primary uppercase tracking-wider mb-1.5 block">
                    Work / Request Type
                  </label>
                  <select
                    id="workType"
                    name="workType"
                    value={formData.workType}
                    onChange={handleChange}
                    disabled={status === 'submitting'}
                    className="w-full bg-background border border-border focus:border-primary/80 focus:ring-1 focus:ring-primary/20 focus:outline-none rounded-[4px] px-3.5 py-2.5 text-sm text-on-surface transition-all font-mono appearance-none cursor-pointer"
                  >
                    {WORK_TYPES.map((type) => (
                      <option key={type.id} value={type.id} className="bg-surface-raised">
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="budget" className="text-[10px] font-mono text-primary uppercase tracking-wider mb-1.5 block">
                  Project Budget (Estimate)
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  disabled={status === 'submitting'}
                  className="w-full bg-background border border-border focus:border-primary/80 focus:ring-1 focus:ring-primary/20 focus:outline-none rounded-[4px] px-3.5 py-2.5 text-sm text-on-surface transition-all font-mono appearance-none cursor-pointer"
                >
                  {BUDGET_OPTIONS.map((opt) => (
                    <option key={opt.id} value={opt.id} className="bg-surface-raised">
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="text-[10px] font-mono text-primary uppercase tracking-wider mb-1.5 block">
                  Project Details / Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  disabled={status === 'submitting'}
                  placeholder="Describe your project, role, requirements, or inquiry..."
                  className={`w-full bg-background border ${
                    errors.message ? 'border-error' : 'border-border'
                  } focus:border-primary/80 focus:ring-1 focus:ring-primary/20 focus:outline-none rounded-[4px] px-3.5 py-2 text-sm text-on-surface placeholder:text-on-surface-muted/30 transition-all font-mono resize-none`}
                />
                {errors.message && (
                  <span className="text-xs text-error font-mono mt-1 block">{errors.message}</span>
                )}
              </div>

              <div className="flex items-center justify-between pt-2">
                <span className="text-xs font-mono text-on-surface-muted/60">
                  * Required fields
                </span>
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="px-6 py-2 rounded-[4px] bg-primary text-background font-mono text-xs font-semibold hover:bg-primary/90 transition-colors disabled:opacity-55 disabled:cursor-not-allowed flex items-center space-x-2"
                >
                  {status === 'submitting' ? (
                    <>
                      <span className="w-3.5 h-3.5 border-2 border-background border-t-transparent rounded-full animate-spin"></span>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <span>Submit Request</span>
                  )}
                </button>
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Contact;
