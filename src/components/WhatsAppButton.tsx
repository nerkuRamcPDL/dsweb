import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = '9856071715';
  const defaultMessage = 'Hello! I would like to learn more about Dynamics of Tech services.';

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="absolute bottom-16 right-0 w-72 bg-white rounded-2xl shadow-2xl overflow-hidden"
          >
            <div className="bg-green-500 p-4 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-sm">Chat with us</h4>
                  <p className="text-green-100 text-xs mt-0.5">We typically reply within minutes</p>
                </div>
                <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-green-600 rounded-full transition-colors">
                  <X size={16} />
                </button>
              </div>
            </div>
            <div className="p-4">
              <div className="bg-gray-100 rounded-lg p-3 mb-3">
                <p className="text-sm text-gray-700">
                  👋 Hi there! How can we help you today? Feel free to ask about our services, pricing, or anything else.
                </p>
              </div>
              <a
                href={`https://wa.me/977${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 w-full px-4 py-2.5 bg-green-500 text-white text-sm font-medium rounded-lg hover:bg-green-600 transition-colors"
              >
                <Send size={14} />
                Start Conversation
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 hover:bg-green-600 transition-colors pulse-glow"
        style={{ boxShadow: '0 0 20px rgba(34, 197, 94, 0.4)' }}
      >
        {isOpen ? <X size={24} className="text-white" /> : <MessageCircle size={24} className="text-white" />}
      </motion.button>
    </div>
  );
}
