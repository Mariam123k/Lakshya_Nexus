import { User, LogOut } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-card-dark border-b border-border-dark/50 px-4 md:px-6 lg:px-8 py-4 sticky top-0 z-10 backdrop-blur-sm bg-card-dark/80">
      <div className="flex justify-end items-center gap-2 md:gap-4">
        <Link href="/profile">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-card-darker transition-all"
          >
            <User className="w-5 h-5" />
            <span className="font-medium hidden sm:inline">Profile</span>
          </motion.button>
        </Link>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-all"
        >
          <LogOut className="w-5 h-5" />
          <span className="font-medium hidden sm:inline">Logout</span>
        </motion.button>
      </div>
    </header>
  );
}
