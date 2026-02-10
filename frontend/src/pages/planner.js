import Layout from '@/components/Layout';
import { motion } from 'framer-motion';
import { Calendar, Clock, BookOpen, Target, Plus } from 'lucide-react';
import Badge from '@/components/Badge';

export default function PlannerPage() {
  const weekSchedule = [
    { day: 'Monday', tasks: [
      { time: '09:00 AM', subject: 'Physics', topic: 'Mechanics', duration: '2h' },
      { time: '02:00 PM', subject: 'Chemistry', topic: 'Organic Reactions', duration: '2h' },
    ]},
    { day: 'Tuesday', tasks: [
      { time: '10:00 AM', subject: 'Mathematics', topic: 'Calculus', duration: '2h' },
      { time: '03:00 PM', subject: 'Biology', topic: 'Cell Biology', duration: '2h' },
    ]},
    { day: 'Wednesday', tasks: [
      { time: '09:00 AM', subject: 'Physics', topic: 'Thermodynamics', duration: '2h' },
      { time: '02:00 PM', subject: 'Chemistry', topic: 'Physical Chemistry', duration: '2h' },
    ]},
  ];

  const goals = [
    { id: 1, title: 'Complete Organic Chemistry Revision', progress: 75, deadline: '2 days left' },
    { id: 2, title: 'Solve 100 Physics Problems', progress: 60, deadline: '5 days left' },
    { id: 3, title: 'Memorize Biology Diagrams', progress: 40, deadline: '7 days left' },
  ];

  return (
    <Layout>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-6 md:mb-8 mt-12 lg:mt-0"
      >
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text-primary mb-2">Study Planner</h1>
        <p className="text-sm md:text-base text-text-secondary">
          Organize your study schedule and track your goals
        </p>
      </motion.div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-card-dark rounded-2xl p-6 border border-border-dark/50"
        >
          <div className="flex items-center gap-3">
            <Calendar className="w-8 h-8 text-accent-cyan" />
            <div>
              <p className="text-sm text-text-muted">This Week</p>
              <p className="text-xl font-bold text-text-primary">18 hrs</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-card-dark rounded-2xl p-6 border border-border-dark/50"
        >
          <div className="flex items-center gap-3">
            <Clock className="w-8 h-8 text-accent-orange" />
            <div>
              <p className="text-sm text-text-muted">Today</p>
              <p className="text-xl font-bold text-text-primary">4 hrs</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-card-dark rounded-2xl p-6 border border-border-dark/50"
        >
          <div className="flex items-center gap-3">
            <Target className="w-8 h-8 text-accent-blue" />
            <div>
              <p className="text-sm text-text-muted">Goals</p>
              <p className="text-xl font-bold text-text-primary">3/5</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-card-dark rounded-2xl p-6 border border-border-dark/50"
        >
          <div className="flex items-center gap-3">
            <BookOpen className="w-8 h-8 text-purple-400" />
            <div>
              <p className="text-sm text-text-muted">Topics</p>
              <p className="text-xl font-bold text-text-primary">42/60</p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Weekly Schedule */}
        <div className="lg:col-span-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-card-dark rounded-2xl p-6 border border-border-dark/50"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-text-primary">Weekly Schedule</h2>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 rounded-lg bg-accent-blue text-white text-sm font-semibold hover:bg-accent-blue/80 transition-all flex items-center gap-2"
              >
                <Plus className="w-4 h-4" />
                Add Task
              </motion.button>
            </div>

            <div className="space-y-6">
              {weekSchedule.map((day, dayIndex) => (
                <motion.div
                  key={day.day}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + dayIndex * 0.1 }}
                >
                  <h3 className="text-lg font-semibold text-text-primary mb-3">{day.day}</h3>
                  <div className="space-y-3">
                    {day.tasks.map((task, taskIndex) => (
                      <div
                        key={taskIndex}
                        className="bg-card-darker rounded-xl p-4 hover:bg-card-darker/70 transition-all"
                      >
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-accent-blue/20 flex items-center justify-center text-accent-cyan text-sm font-semibold">
                              {task.time.split(' ')[0]}
                            </div>
                            <div>
                              <p className="font-semibold text-text-primary">{task.subject}</p>
                              <p className="text-sm text-text-secondary">{task.topic}</p>
                            </div>
                          </div>
                          <Badge variant="default">{task.duration}</Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Goals */}
        <div className="lg:col-span-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-card-dark rounded-2xl p-6 border border-border-dark/50"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-text-primary">Study Goals</h2>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-lg bg-accent-cyan/10 text-accent-cyan hover:bg-accent-cyan/20 transition-all"
              >
                <Plus className="w-5 h-5" />
              </motion.button>
            </div>

            <div className="space-y-4">
              {goals.map((goal, index) => (
                <motion.div
                  key={goal.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="bg-card-darker rounded-xl p-4"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-semibold text-text-primary text-sm">{goal.title}</h3>
                    <span className="text-xs text-accent-orange">{goal.deadline}</span>
                  </div>
                  <div className="w-full bg-border-dark rounded-full h-2 mb-2">
                    <div
                      className="bg-accent-cyan h-2 rounded-full transition-all"
                      style={{ width: `${goal.progress}%` }}
                    />
                  </div>
                  <p className="text-xs text-text-muted">{goal.progress}% Complete</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}
