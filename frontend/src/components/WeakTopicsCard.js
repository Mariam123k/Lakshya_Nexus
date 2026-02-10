import { motion } from 'framer-motion';
import { TrendingDown } from 'lucide-react';
import Badge from './Badge';

export default function WeakTopicsCard() {
  const weakTopics = [
    {
      id: 1,
      title: 'Organic Chemistry - Mechanisms',
      marks: -12,
      category: 'conceptual',
    },
    {
      id: 2,
      title: 'Calculus - Integration',
      marks: -8,
      category: 'speed',
    },
    {
      id: 3,
      title: 'Electromagnetism Basics',
      marks: -5,
      category: 'careless',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-card-dark rounded-2xl p-6 border border-border-dark/50 hover:border-accent-blue/30 transition-all"
    >
      <div className="flex items-center gap-2 mb-6">
        <TrendingDown className="w-6 h-6 text-red-400" />
        <h2 className="text-xl font-bold text-text-primary">Weak Topics</h2>
      </div>

      <p className="text-sm text-text-secondary mb-6">Focus on these areas first</p>

      <div className="space-y-4">
        {weakTopics.map((topic, index) => (
          <motion.div
            key={topic.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 + index * 0.1 }}
            className="p-4 rounded-xl bg-card-darker hover:bg-card-darker/70 transition-all cursor-pointer group"
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="font-semibold text-text-primary group-hover:text-accent-cyan transition-colors flex-1">
                {topic.title}
              </h3>
              <span className="text-red-400 font-bold ml-2">{topic.marks}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-text-muted">marks</span>
              <Badge variant={topic.category}>
                {topic.category.charAt(0).toUpperCase() + topic.category.slice(1)}
              </Badge>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full mt-6 px-4 py-3 rounded-xl bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan font-semibold hover:bg-accent-cyan/20 transition-all"
      >
        View Detailed Analysis
      </motion.button>
    </motion.div>
  );
}
