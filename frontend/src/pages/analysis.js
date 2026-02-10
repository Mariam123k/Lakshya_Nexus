import Layout from '@/components/Layout';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Award, Target } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';

export default function AnalysisPage() {
  const performanceData = [
    { subject: 'Physics', score: 75, target: 85 },
    { subject: 'Chemistry', score: 82, target: 90 },
    { subject: 'Biology', score: 88, target: 95 },
    { subject: 'Mathematics', score: 70, target: 80 },
  ];

  const weeklyProgress = [
    { week: 'Week 1', hours: 15 },
    { week: 'Week 2', hours: 18 },
    { week: 'Week 3', hours: 22 },
    { week: 'Week 4', hours: 20 },
    { week: 'Week 5', hours: 25 },
  ];

  const strengthWeakness = [
    { subject: 'Physics', A: 75, fullMark: 100 },
    { subject: 'Chemistry', A: 82, fullMark: 100 },
    { subject: 'Biology', A: 88, fullMark: 100 },
    { subject: 'Mathematics', A: 70, fullMark: 100 },
  ];

  const insights = [
    {
      id: 1,
      type: 'positive',
      title: 'Strong Performance',
      description: 'Biology scores improved by 12% this month',
      icon: TrendingUp,
    },
    {
      id: 2,
      type: 'negative',
      title: 'Needs Attention',
      description: 'Mathematics problem-solving speed decreased',
      icon: TrendingDown,
    },
    {
      id: 3,
      type: 'positive',
      title: 'Achievement Unlocked',
      description: 'Completed 7-day study streak!',
      icon: Award,
    },
    {
      id: 4,
      type: 'neutral',
      title: 'Target Update',
      description: 'On track to achieve 85% overall score',
      icon: Target,
    },
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
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text-primary mb-2">Performance Analysis</h1>
        <p className="text-sm md:text-base text-text-secondary">
          Track your progress and identify areas for improvement
        </p>
      </motion.div>

      {/* Key Insights */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-8"
      >
        <h2 className="text-xl md:text-2xl font-bold text-text-primary mb-4">Key Insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {insights.map((insight, index) => {
            const Icon = insight.icon;
            return (
              <motion.div
                key={insight.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="bg-card-dark rounded-2xl p-6 border border-border-dark/50 hover:border-accent-blue/30 transition-all"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                  insight.type === 'positive' ? 'bg-green-500/20' :
                  insight.type === 'negative' ? 'bg-red-500/20' :
                  'bg-accent-blue/20'
                }`}>
                  <Icon className={`w-6 h-6 ${
                    insight.type === 'positive' ? 'text-green-400' :
                    insight.type === 'negative' ? 'text-red-400' :
                    'text-accent-cyan'
                  }`} />
                </div>
                <h3 className="font-semibold text-text-primary mb-2">{insight.title}</h3>
                <p className="text-sm text-text-secondary">{insight.description}</p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Subject Performance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-card-dark rounded-2xl p-6 border border-border-dark/50"
        >
          <h2 className="text-xl font-bold text-text-primary mb-6">Subject Performance</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2d3748" />
              <XAxis dataKey="subject" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1a1f2e',
                  border: '1px solid #2d3748',
                  borderRadius: '8px',
                  color: '#ffffff',
                }}
              />
              <Bar dataKey="score" fill="#00d9ff" radius={[8, 8, 0, 0]} />
              <Bar dataKey="target" fill="#ffa500" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
          <div className="flex items-center justify-center gap-6 mt-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-accent-cyan" />
              <span className="text-sm text-text-secondary">Current Score</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-accent-orange" />
              <span className="text-sm text-text-secondary">Target Score</span>
            </div>
          </div>
        </motion.div>

        {/* Weekly Study Hours */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-card-dark rounded-2xl p-6 border border-border-dark/50"
        >
          <h2 className="text-xl font-bold text-text-primary mb-6">Weekly Study Hours</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={weeklyProgress}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2d3748" />
              <XAxis dataKey="week" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1a1f2e',
                  border: '1px solid #2d3748',
                  borderRadius: '8px',
                  color: '#ffffff',
                }}
              />
              <Line
                type="monotone"
                dataKey="hours"
                stroke="#0066ff"
                strokeWidth={3}
                dot={{ fill: '#00d9ff', r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      {/* Strength & Weakness Radar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-card-dark rounded-2xl p-6 border border-border-dark/50"
      >
        <h2 className="text-xl font-bold text-text-primary mb-6">Overall Strength Analysis</h2>
        <div className="flex justify-center">
          <ResponsiveContainer width="100%" height={400}>
            <RadarChart data={strengthWeakness}>
              <PolarGrid stroke="#2d3748" />
              <PolarAngleAxis dataKey="subject" stroke="#94a3b8" />
              <PolarRadiusAxis stroke="#94a3b8" />
              <Radar
                name="Performance"
                dataKey="A"
                stroke="#00d9ff"
                fill="#00d9ff"
                fillOpacity={0.6}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </motion.div>
    </Layout>
  );
}
