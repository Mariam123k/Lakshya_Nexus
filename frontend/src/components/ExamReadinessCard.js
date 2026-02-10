'use client';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { Info } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ExamReadinessCard() {
  const readinessPercentage = 72;
  const data = [
    { name: 'Ready', value: readinessPercentage },
    { name: 'Remaining', value: 100 - readinessPercentage },
  ];

  const stats = [
    { label: 'Accuracy', value: '85%' },
    { label: 'Speed', value: '78%' },
    { label: 'Consistency', value: '71%' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-card-dark rounded-2xl p-6 border border-border-dark/50 hover:border-accent-blue/30 transition-all"
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-text-primary">Exam Readiness</h2>
        <Info className="w-5 h-5 text-text-muted hover:text-accent-cyan transition-colors cursor-pointer" />
      </div>

      <p className="text-sm text-text-secondary mb-6">Your preparation level</p>

      {/* Circular Progress */}
      <div className="flex justify-center items-center mb-6 relative">
        <ResponsiveContainer width={200} height={200}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={90}
              startAngle={90}
              endAngle={-270}
              dataKey="value"
              strokeWidth={0}
            >
              <Cell fill="#ffa500" />
              <Cell fill="#2d3748" />
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: 'spring' }}
            className="text-5xl font-bold text-accent-cyan"
          >
            {readinessPercentage}%
          </motion.span>
          <span className="text-sm text-text-muted mt-1">Ready</span>
        </div>
      </div>

      {/* Stats */}
      <div className="space-y-3">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + index * 0.1 }}
            className="flex justify-between items-center"
          >
            <span className="text-text-secondary">{stat.label}</span>
            <span className="text-accent-cyan font-bold">{stat.value}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
