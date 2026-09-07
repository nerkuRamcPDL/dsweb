import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, DollarSign, Briefcase, ArrowRight, Upload } from 'lucide-react';

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

const jobs = [
  { title: 'Senior Full-Stack Developer', department: 'Engineering', type: 'Full-time', location: 'Pokhara, Nepal', salary: 'Rs. 80,000 - 120,000', desc: 'We are looking for an experienced full-stack developer proficient in React, Node.js, and cloud technologies to lead development projects.' },
  { title: 'ERP Implementation Consultant', department: 'Solutions', type: 'Full-time', location: 'Pokhara, Nepal', salary: 'Rs. 60,000 - 90,000', desc: 'Join our team as an ERP consultant to implement and customize Odoo ERP solutions for clients across Nepal.' },
  { title: 'UI/UX Designer', department: 'Design', type: 'Full-time', location: 'Pokhara, Nepal', salary: 'Rs. 50,000 - 80,000', desc: 'Create beautiful, intuitive interfaces for web and mobile applications. Experience with Figma and design systems required.' },
  { title: 'Mobile App Developer (Flutter)', department: 'Engineering', type: 'Full-time', location: 'Pokhara, Nepal', salary: 'Rs. 60,000 - 100,000', desc: 'Build cross-platform mobile applications using Flutter for our diverse client portfolio across industries.' },
  { title: 'AI/ML Engineer', department: 'AI Lab', type: 'Full-time', location: 'Pokhara, Nepal', salary: 'Rs. 70,000 - 110,000', desc: 'Develop and deploy AI solutions including chatbots, document processing, and business intelligence tools.' },
  { title: 'Digital Marketing Executive', department: 'Marketing', type: 'Full-time', location: 'Pokhara, Nepal', salary: 'Rs. 35,000 - 55,000', desc: 'Manage digital marketing campaigns, social media presence, and lead generation for our technology services.' },
  { title: 'Project Manager', department: 'Management', type: 'Full-time', location: 'Pokhara, Nepal', salary: 'Rs. 70,000 - 100,000', desc: 'Lead software development projects from inception to delivery, managing teams and client relationships.' },
  { title: 'QA Engineer', department: 'Engineering', type: 'Full-time', location: 'Pokhara, Nepal', salary: 'Rs. 40,000 - 65,000', desc: 'Ensure software quality through manual and automated testing. Experience with test frameworks and CI/CD pipelines.' },
];

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<string | null>(null);

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-24 bg-dark relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-20 left-20 w-72 h-72 bg-green-500/10 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-6">
              Join Our Team
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Build the Future <span className="gradient-text">With Us</span>
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed">
              Join a team of passionate technologists building innovative solutions for businesses across Nepal and beyond. We offer exciting projects, growth opportunities, and a collaborative work environment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { emoji: '🚀', title: 'Exciting Projects', desc: 'Work on diverse, challenging projects' },
              { emoji: '📈', title: 'Growth Path', desc: 'Clear career progression and learning' },
              { emoji: '🤝', title: 'Great Culture', desc: 'Collaborative and supportive team' },
              { emoji: '💰', title: 'Competitive Pay', desc: 'Market-leading compensation' },
            ].map((item, i) => (
              <motion.div key={item.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: i * 0.1 }} className="p-5 rounded-xl bg-gray-900/50 border border-gray-800 text-center">
                <span className="text-2xl mb-2 block">{item.emoji}</span>
                <h3 className="text-sm font-semibold text-white mb-1">{item.title}</h3>
                <p className="text-xs text-gray-500">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-16 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Open Positions</h2>
            <p className="text-gray-400">Explore current opportunities and find your next role.</p>
          </motion.div>
          <div className="space-y-4">
            {jobs.map((job, i) => (
              <motion.div
                key={job.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ delay: i * 0.05 }}
                className="p-6 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-blue-500/30 transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-2">{job.title}</h3>
                    <p className="text-sm text-gray-400 mb-3">{job.desc}</p>
                    <div className="flex flex-wrap gap-3">
                      <span className="flex items-center gap-1.5 text-xs text-gray-500">
                        <Briefcase size={12} className="text-blue-400" /> {job.department}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs text-gray-500">
                        <Clock size={12} className="text-green-400" /> {job.type}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs text-gray-500">
                        <MapPin size={12} className="text-purple-400" /> {job.location}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs text-gray-500">
                        <DollarSign size={12} className="text-yellow-400" /> {job.salary}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedJob(selectedJob === job.title ? null : job.title)}
                    className="px-5 py-2.5 bg-blue-600/20 text-blue-400 text-sm font-medium rounded-lg hover:bg-blue-600/30 transition-colors flex items-center gap-2 whitespace-nowrap"
                  >
                    Apply Now <ArrowRight size={14} />
                  </button>
                </div>

                {/* Application Form */}
                {selectedJob === job.title && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="mt-6 pt-6 border-t border-gray-800"
                  >
                    <form className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm text-gray-400 mb-1">Full Name *</label>
                        <input type="text" className="w-full px-4 py-2.5 bg-white/5 border border-gray-700 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500" placeholder="Your full name" />
                      </div>
                      <div>
                        <label className="block text-sm text-gray-400 mb-1">Email *</label>
                        <input type="email" className="w-full px-4 py-2.5 bg-white/5 border border-gray-700 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500" placeholder="your@email.com" />
                      </div>
                      <div>
                        <label className="block text-sm text-gray-400 mb-1">Phone *</label>
                        <input type="tel" className="w-full px-4 py-2.5 bg-white/5 border border-gray-700 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500" placeholder="98XXXXXXXX" />
                      </div>
                      <div>
                        <label className="block text-sm text-gray-400 mb-1">Experience</label>
                        <input type="text" className="w-full px-4 py-2.5 bg-white/5 border border-gray-700 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500" placeholder="e.g., 3 years" />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm text-gray-400 mb-1">Portfolio URL</label>
                        <input type="url" className="w-full px-4 py-2.5 bg-white/5 border border-gray-700 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500" placeholder="https://yourportfolio.com" />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm text-gray-400 mb-1">Cover Letter</label>
                        <textarea rows={4} className="w-full px-4 py-2.5 bg-white/5 border border-gray-700 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 resize-none" placeholder="Tell us why you're a great fit..." />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm text-gray-400 mb-1">Upload CV</label>
                        <div className="flex items-center gap-3 px-4 py-3 bg-white/5 border border-dashed border-gray-700 rounded-lg cursor-pointer hover:border-blue-500/50 transition-colors">
                          <Upload size={18} className="text-gray-500" />
                          <span className="text-sm text-gray-500">Click to upload your CV (PDF, DOC)</span>
                        </div>
                      </div>
                      <div className="md:col-span-2">
                        <button type="button" className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-500 hover:to-purple-500 transition-all">
                          Submit Application
                        </button>
                      </div>
                    </form>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
