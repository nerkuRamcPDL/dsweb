import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Linkedin, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">D</span>
              </div>
              <div>
                <span className="text-white font-bold text-lg">Dynamics</span>
                <span className="text-blue-400 font-bold text-lg"> of Tech</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-md">
              Technology & Digital Transformation Company delivering innovative software, ERP, AI, web, mobile, automation solutions for businesses in Nepal and worldwide.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <MapPin size={16} className="text-blue-400 flex-shrink-0" />
                <span>Bagar-1, Pokhara, Nepal</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <Phone size={16} className="text-blue-400 flex-shrink-0" />
                <a href="tel:9856071715" className="hover:text-white transition-colors">9856071715</a>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <Mail size={16} className="text-blue-400 flex-shrink-0" />
                <a href="mailto:info@dynamicsoftech.com.np" className="hover:text-white transition-colors">info@dynamicsoftech.com.np</a>
              </div>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-white font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2.5">
              {['ERP Software', 'CRM Software', 'POS System', 'Accounting', 'School Management', 'Hospital Management', 'E-Commerce', 'AI Solutions'].map((item) => (
                <li key={item}>
                  <Link to="/solutions" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2.5">
              {['Software Development', 'Web Development', 'Mobile Apps', 'ERP Implementation', 'UI/UX Design', 'Cloud & DevOps', 'Cybersecurity', 'Odoo Services'].map((item) => (
                <li key={item}>
                  <Link to="/services" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'About Us', path: '/about' },
                { label: 'Projects', path: '/projects' },
                { label: 'Insights', path: '/insights' },
                { label: 'Careers', path: '/careers' },
                { label: 'Contact', path: '/contact' },
              ].map((item) => (
                <li key={item.label}>
                  <Link to={item.path} className="text-sm text-gray-400 hover:text-blue-400 transition-colors">{item.label}</Link>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-3 mt-6">
              <a href="#" className="w-9 h-9 rounded-lg bg-gray-800 flex items-center justify-center text-gray-400 hover:text-blue-400 hover:bg-gray-700 transition-all">
                <Facebook size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-gray-800 flex items-center justify-center text-gray-400 hover:text-blue-400 hover:bg-gray-700 transition-all">
                <Linkedin size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-gray-800 flex items-center justify-center text-gray-400 hover:text-blue-400 hover:bg-gray-700 transition-all">
                <Twitter size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-gray-800 flex items-center justify-center text-gray-400 hover:text-blue-400 hover:bg-gray-700 transition-all">
                <Instagram size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Dynamics SofTech Computer Solution Pvt Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
