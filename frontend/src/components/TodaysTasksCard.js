import { motion } from 'framer-motion';
import { Zap, BookOpen, BarChart3 } from 'lucide-react';
import Badge from './Badge';

export default function TodaysTasksCard() {
  const tasks = [
    {
      id: 1,
      title: 'Daily Quiz - Organic Chem',
      icon: Zap,
      iconColor: 'text-blue-400',
      duration: '15 min',
      priority: 'High',
      completed: false,
    },
    {
      id: 2,
      title: 'Revision - Integration Methods',
      icon: BookOpen,
      iconColor: 'text-purple-400',
      duration: '30 min',
      priority: 'High',
      completed: false,
    },
    {
      id: 3,
      title: 'Weekly Mock Exam',
      icon: BarChart3,
      iconColor: 'text-blue-400',
      duration: '3 hours',
      priority: 'Medium',
      completed: false,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="bg-card-dark rounded-2xl p-6 border border-border-dark/50 hover:border-accent-blue/30 transition-all"
    >
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold text-text-primary">
            Today's Tasks <span className="text-text-muted text-base">0/3</span>
          </h2>
          <p className="text-sm text-text-secondary mt-1">Stay on track with your prep</p>
        </div>
      </div>

      <div className="space-y-4">
        {tasks.map((task, index) => {
          const Icon = task.icon;
          return (
            <motion.div
              key={task.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="flex items-start gap-4 p-4 rounded-xl bg-card-darker hover:bg-card-darker/70 transition-all cursor-pointer group"
            >
              <input
                type="checkbox"
                className="mt-1 w-5 h-5 rounded border-2 border-text-muted bg-transparent checked:bg-accent-blue checked:border-accent-blue cursor-pointer transition-all"
              />
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-text-primary group-hover:text-accent-cyan transition-colors">
                      {task.title}
                    </h3>
                    {task.priority === 'High' && <Badge variant="high">High</Badge>}
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Icon className={`w-4 h-4 ${task.iconColor}`} />
                  <span className="text-text-secondary">{task.duration}</span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
