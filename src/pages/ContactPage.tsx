import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, CheckCircle2 } from 'lucide-react';

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

export default function ContactPage() {
  const [formType, setFormType] = useState<'contact' | 'consultation'>('contact');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-24 bg-dark relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
              Contact Us
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Let's Start a <span className="gradient-text">Conversation</span>
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed">
              Have a project in mind? Need a consultation? We'd love to hear from you. Reach out and let's discuss how we can help transform your business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { icon: MapPin, title: 'Visit Us', info: 'Bagar-1, Pokhara, Nepal', color: 'text-blue-400' },
              { icon: Phone, title: 'Call Us', info: '9856071715', link: 'tel:9856071715', color: 'text-green-400' },
              { icon: Mail, title: 'Email Us', info: 'info@dynamicsoftech.com.np', link: 'mailto:info@dynamicsoftech.com.np', color: 'text-purple-400' },
              { icon: Clock, title: 'Business Hours', info: 'Sun-Fri: 10AM - 6PM', color: 'text-orange-400' },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ delay: i * 0.1 }}
                className="p-5 rounded-xl bg-gray-900/50 border border-gray-800 text-center"
              >
                <item.icon size={24} className={`${item.color} mx-auto mb-3`} />
                <h3 className="text-sm font-semibold text-white mb-1">{item.title}</h3>
                {item.link ? (
                  <a href={item.link} className="text-sm text-gray-400 hover:text-white transition-colors">{item.info}</a>
                ) : (
                  <p className="text-sm text-gray-400">{item.info}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                {/* Tab Switcher */}
                <div className="flex gap-2 mb-8">
                  <button
                    onClick={() => setFormType('contact')}
                    className={`px-6 py-3 text-sm font-medium rounded-lg transition-all ${
                      formType === 'contact' ? 'bg-blue-600 text-white' : 'bg-white/5 text-gray-400 hover:bg-white/10'
                    }`}
                  >
                    Contact Form
                  </button>
                  <button
                    onClick={() => setFormType('consultation')}
                    className={`px-6 py-3 text-sm font-medium rounded-lg transition-all ${
                      formType === 'consultation' ? 'bg-blue-600 text-white' : 'bg-white/5 text-gray-400 hover:bg-white/10'
                    }`}
                  >
                    Request Consultation
                  </button>
                </div>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-12 rounded-2xl bg-green-500/10 border border-green-500/20 text-center"
                  >
                    <CheckCircle2 size={48} className="text-green-400 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">Thank You!</h3>
                    <p className="text-gray-400">We've received your message and will get back to you shortly.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm text-gray-400 mb-1.5">Full Name *</label>
                        <input type="text" required className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors" placeholder="Your full name" />
                      </div>
                      <div>
                        <label className="block text-sm text-gray-400 mb-1.5">Email *</label>
                        <input type="email" required className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors" placeholder="your@email.com" />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm text-gray-400 mb-1.5">Phone *</label>
                        <input type="tel" required className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors" placeholder="98XXXXXXXX" />
                      </div>
                      {formType === 'consultation' && (
                        <div>
                          <label className="block text-sm text-gray-400 mb-1.5">Company *</label>
                          <input type="text" required className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors" placeholder="Company name" />
                        </div>
                      )}
                    </div>
                    {formType === 'consultation' && (
                      <div className="grid md:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm text-gray-400 mb-1.5">Industry</label>
                          <select className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-xl text-sm text-gray-400 focus:outline-none focus:border-blue-500 transition-colors">
                            <option value="">Select industry</option>
                            <option value="retail">Retail</option>
                            <option value="education">Education</option>
                            <option value="healthcare">Healthcare</option>
                            <option value="manufacturing">Manufacturing</option>
                            <option value="logistics">Logistics</option>
                            <option value="government">Government</option>
                            <option value="ngo">NGO/INGO</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm text-gray-400 mb-1.5">Interested Service *</label>
                          <select required className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-xl text-sm text-gray-400 focus:outline-none focus:border-blue-500 transition-colors">
                            <option value="">Select service</option>
                            <option value="erp">ERP Solutions</option>
                            <option value="software">Custom Software</option>
                            <option value="web">Web Development</option>
                            <option value="mobile">Mobile App Development</option>
                            <option value="ai">AI & Automation</option>
                            <option value="ecommerce">E-Commerce</option>
                            <option value="odoo">Odoo Services</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      </div>
                    )}
                    {formType === 'consultation' && (
                      <div className="grid md:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm text-gray-400 mb-1.5">Budget Range</label>
                          <select className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-xl text-sm text-gray-400 focus:outline-none focus:border-blue-500 transition-colors">
                            <option value="">Select budget</option>
                            <option value="small">Under Rs. 1 Lakh</option>
                            <option value="medium">Rs. 1 - 5 Lakhs</option>
                            <option value="large">Rs. 5 - 15 Lakhs</option>
                            <option value="enterprise">Rs. 15 Lakhs+</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm text-gray-400 mb-1.5">Expected Start Date</label>
                          <input type="date" className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-xl text-sm text-gray-400 focus:outline-none focus:border-blue-500 transition-colors" />
                        </div>
                      </div>
                    )}
                    {formType === 'consultation' && (
                      <div>
                        <label className="block text-sm text-gray-400 mb-1.5">Main Problem / Challenge</label>
                        <input type="text" className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors" placeholder="What problem are you trying to solve?" />
                      </div>
                    )}
                    <div>
                      <label className="block text-sm text-gray-400 mb-1.5">
                        {formType === 'consultation' ? 'Project Description' : 'Message'} *
                      </label>
                      <textarea required rows={5} className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors resize-none" placeholder={formType === 'consultation' ? 'Describe your project requirements...' : 'How can we help you?'} />
                    </div>
                    <button type="submit" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-500 hover:to-purple-500 transition-all shadow-lg shadow-blue-500/25 flex items-center gap-2">
                      <Send size={18} />
                      {formType === 'consultation' ? 'Request Consultation' : 'Send Message'}
                    </button>
                  </form>
                )}
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                {/* Map */}
                <div className="rounded-2xl overflow-hidden border border-gray-800 mb-6">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3517.5!2d83.98!3d28.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDEyJzAwLjAiTiA4M8KwNTgnNDguMCJF!5e0!3m2!1sen!2snp!4v1"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="Dynamics of Tech Location"
                    className="bg-gray-900"
                  />
                </div>

                {/* Quick Contact */}
                <div className="p-6 rounded-2xl bg-gray-900/50 border border-gray-800 mb-6">
                  <h3 className="text-lg font-bold text-white mb-4">Quick Contact</h3>
                  <div className="space-y-4">
                    <a href="tel:9856071715" className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                      <Phone size={18} className="text-green-400" />
                      <div>
                        <p className="text-sm text-white font-medium">Call Us</p>
                        <p className="text-xs text-gray-400">9856071715</p>
                      </div>
                    </a>
                    <a href="https://wa.me/9779856071715" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-xl bg-green-500/10 hover:bg-green-500/20 transition-colors border border-green-500/20">
                      <MessageCircle size={18} className="text-green-400" />
                      <div>
                        <p className="text-sm text-white font-medium">WhatsApp</p>
                        <p className="text-xs text-gray-400">Chat with our team</p>
                      </div>
                    </a>
                    <a href="mailto:info@dynamicsoftech.com.np" className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                      <Mail size={18} className="text-blue-400" />
                      <div>
                        <p className="text-sm text-white font-medium">Email</p>
                        <p className="text-xs text-gray-400">info@dynamicsoftech.com.np</p>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="p-6 rounded-2xl bg-gray-900/50 border border-gray-800">
                  <h3 className="text-lg font-bold text-white mb-4">Business Hours</h3>
                  <div className="space-y-2">
                    {[
                      { day: 'Sunday - Friday', hours: '10:00 AM - 6:00 PM' },
                      { day: 'Saturday', hours: 'Closed' },
                    ].map((item) => (
                      <div key={item.day} className="flex justify-between text-sm">
                        <span className="text-gray-400">{item.day}</span>
                        <span className="text-white">{item.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
