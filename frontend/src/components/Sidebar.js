import { BarChart3, Globe, BookOpen, BookMarked, LineChart } from 'lucide-react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Sidebar() {
  const router = useRouter();
  const currentPath = router.pathname;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Dashboard', icon: BarChart3, path: '/' },
    { name: 'Quiz & Mocks', icon: Globe, path: '/quiz' },
    { name: 'Study Planner', icon: BookOpen, path: '/planner' },
    { name: 'Resources', icon: BookMarked, path: '/resources' },
    { name: 'Analysis', icon: LineChart, path: '/analysis' },
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-card-dark border border-border-dark/50 text-text-primary"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          w-72 bg-card-dark border-r border-border-dark/50 flex flex-col h-screen sticky top-0
          max-lg:fixed max-lg:z-50 max-lg:transition-transform max-lg:duration-300
          ${isMobileMenuOpen ? 'max-lg:translate-x-0' : 'max-lg:-translate-x-full'}
        `}
      >
      {/* Logo Section */}
      <div className="p-6 border-b border-border-dark/50">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-blue to-accent-cyan flex items-center justify-center text-xl font-bold">
            LN
          </div>
          <div>
            <h1 className="text-xl font-bold text-text-primary">Lakshya Nexus</h1>
            <p className="text-sm text-text-muted">Dashboard</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <h2 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-4 px-3">
          Navigation
        </h2>
        <ul className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentPath === item.path;
            
            return (
              <li key={item.name}>
                <motion.a
                  href={item.path}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'bg-accent-blue text-white shadow-lg shadow-accent-blue/20'
                      : 'text-text-secondary hover:bg-card-darker hover:text-text-primary'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.name}</span>
                </motion.a>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Quick Stats */}
      <div className="p-4 border-t border-border-dark/50">
        <div className="bg-card-darker rounded-xl p-4">
          <h3 className="text-sm font-semibold text-text-primary mb-3">Quick Stats</h3>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm text-text-secondary">Total Quizzes</span>
              <span className="text-accent-cyan font-bold">24</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-text-secondary">Study Hours</span>
              <span className="text-accent-cyan font-bold">87h</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-text-secondary">Streak</span>
              <span className="text-accent-cyan font-bold">7 days</span>
            </div>
          </div>
        </div>
      </div>
    </aside>
    </>
  );
}
