import Layout from '@/components/Layout';
import ExamReadinessCard from '@/components/ExamReadinessCard';
import TodaysTasksCard from '@/components/TodaysTasksCard';
import WeakTopicsCard from '@/components/WeakTopicsCard';
import { motion } from 'framer-motion';

export default function Dashboard() {
  return (
    <Layout>
      {/* Orange Gradient Background Effect */}
      <div className="fixed top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-accent-orange/20 via-accent-yellow/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      
      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-6 md:mb-8 mt-12 lg:mt-0"
      >
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text-primary mb-2">Welcome, Student</h1>
        <p className="text-sm md:text-base text-text-secondary">
          NEET Exam <span className="text-text-primary">•</span> 127 days left{' '}
          <span className="text-text-primary">•</span> 2 hours/day prep
        </p>
      </motion.div>

      {/* Dashboard Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {/* Exam Readiness Card */}
        <div className="lg:col-span-1">
          <ExamReadinessCard />
        </div>

        {/* Today's Tasks Card */}
        <div className="lg:col-span-1">
          <TodaysTasksCard />
        </div>

        {/* Weak Topics Card */}
        <div className="lg:col-span-1">
          <WeakTopicsCard />
        </div>
      </div>

      {/* Additional Info Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        <div className="bg-card-dark rounded-2xl p-6 border border-border-dark/50 hover:border-accent-blue/30 transition-all">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg bg-accent-blue/20 flex items-center justify-center">
              <span className="text-2xl">📚</span>
            </div>
            <div>
              <p className="text-sm text-text-muted">Topics Covered</p>
              <p className="text-2xl font-bold text-accent-cyan">42/60</p>
            </div>
          </div>
          <div className="w-full bg-card-darker rounded-full h-2 mt-4">
            <div className="bg-accent-blue h-2 rounded-full" style={{ width: '70%' }} />
          </div>
        </div>

        <div className="bg-card-dark rounded-2xl p-6 border border-border-dark/50 hover:border-accent-blue/30 transition-all">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg bg-accent-orange/20 flex items-center justify-center">
              <span className="text-2xl">🎯</span>
            </div>
            <div>
              <p className="text-sm text-text-muted">Target Score</p>
              <p className="text-2xl font-bold text-accent-cyan">650/720</p>
            </div>
          </div>
          <div className="w-full bg-card-darker rounded-full h-2 mt-4">
            <div className="bg-accent-orange h-2 rounded-full" style={{ width: '90%' }} />
          </div>
        </div>

        <div className="bg-card-dark rounded-2xl p-6 border border-border-dark/50 hover:border-accent-blue/30 transition-all">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg bg-accent-cyan/20 flex items-center justify-center">
              <span className="text-2xl">⚡</span>
            </div>
            <div>
              <p className="text-sm text-text-muted">Practice Questions</p>
              <p className="text-2xl font-bold text-accent-cyan">1,240</p>
            </div>
          </div>
          <div className="w-full bg-card-darker rounded-full h-2 mt-4">
            <div className="bg-accent-cyan h-2 rounded-full" style={{ width: '85%' }} />
          </div>
        </div>
      </motion.div>
    </Layout>
  );
}
