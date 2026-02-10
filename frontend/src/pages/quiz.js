import Layout from '@/components/Layout';
import { motion } from 'framer-motion';
import { Clock, Trophy, Target, Play, CheckCircle } from 'lucide-react';
import Badge from '@/components/Badge';

export default function QuizPage() {
  const quizzes = [
    {
      id: 1,
      title: 'Daily Quiz - Organic Chemistry',
      difficulty: 'Medium',
      questions: 15,
      duration: '15 min',
      completed: false,
      category: 'Chemistry',
    },
    {
      id: 2,
      title: 'Physics - Mechanics Basics',
      difficulty: 'Easy',
      questions: 20,
      duration: '20 min',
      completed: true,
      category: 'Physics',
    },
    {
      id: 3,
      title: 'Mathematics - Calculus',
      difficulty: 'Hard',
      questions: 25,
      duration: '30 min',
      completed: false,
      category: 'Mathematics',
    },
  ];

  const mockExams = [
    {
      id: 1,
      title: 'NEET Full Mock Test - 1',
      questions: 180,
      duration: '3 hours',
      attempted: false,
    },
    {
      id: 2,
      title: 'NEET Chapter-wise Mock - Biology',
      questions: 90,
      duration: '90 min',
      attempted: true,
      score: '85%',
    },
    {
      id: 3,
      title: 'NEET Previous Year 2023',
      questions: 180,
      duration: '3 hours',
      attempted: false,
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
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text-primary mb-2">Quiz & Mocks</h1>
        <p className="text-sm md:text-base text-text-secondary">
          Practice with daily quizzes and full-length mock tests
        </p>
      </motion.div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-card-dark rounded-2xl p-6 border border-border-dark/50"
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-accent-blue/20 flex items-center justify-center">
              <Trophy className="w-6 h-6 text-accent-cyan" />
            </div>
            <div>
              <p className="text-sm text-text-muted">Quizzes Completed</p>
              <p className="text-2xl font-bold text-text-primary">24</p>
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
            <div className="w-12 h-12 rounded-xl bg-accent-orange/20 flex items-center justify-center">
              <Target className="w-6 h-6 text-accent-orange" />
            </div>
            <div>
              <p className="text-sm text-text-muted">Average Score</p>
              <p className="text-2xl font-bold text-text-primary">82%</p>
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
            <div className="w-12 h-12 rounded-xl bg-accent-cyan/20 flex items-center justify-center">
              <Clock className="w-6 h-6 text-accent-cyan" />
            </div>
            <div>
              <p className="text-sm text-text-muted">Time Spent</p>
              <p className="text-2xl font-bold text-text-primary">45h</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Daily Quizzes Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mb-8"
      >
        <h2 className="text-xl md:text-2xl font-bold text-text-primary mb-4">Daily Quizzes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {quizzes.map((quiz, index) => (
            <motion.div
              key={quiz.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="bg-card-dark rounded-2xl p-6 border border-border-dark/50 hover:border-accent-blue/30 transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-semibold text-text-primary text-lg">{quiz.title}</h3>
                {quiz.completed && (
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                )}
              </div>
              <p className="text-sm text-text-muted mb-4">{quiz.category}</p>
              <div className="flex items-center gap-4 mb-4 text-sm text-text-secondary">
                <span>{quiz.questions} questions</span>
                <span>•</span>
                <span>{quiz.duration}</span>
              </div>
              <Badge variant={quiz.difficulty === 'Hard' ? 'high' : quiz.difficulty === 'Medium' ? 'speed' : 'default'}>
                {quiz.difficulty}
              </Badge>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full mt-4 px-4 py-3 rounded-xl bg-accent-blue text-white font-semibold hover:bg-accent-blue/80 transition-all flex items-center justify-center gap-2"
              >
                <Play className="w-5 h-5" />
                {quiz.completed ? 'Retake Quiz' : 'Start Quiz'}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Mock Exams Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
      >
        <h2 className="text-xl md:text-2xl font-bold text-text-primary mb-4">Mock Exams</h2>
        <div className="space-y-4">
          {mockExams.map((exam, index) => (
            <motion.div
              key={exam.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 + index * 0.1 }}
              className="bg-card-dark rounded-2xl p-6 border border-border-dark/50 hover:border-accent-blue/30 transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1">
                  <h3 className="font-semibold text-text-primary text-lg mb-2">{exam.title}</h3>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-text-secondary">
                    <span>{exam.questions} questions</span>
                    <span>•</span>
                    <span>{exam.duration}</span>
                    {exam.attempted && exam.score && (
                      <>
                        <span>•</span>
                        <span className="text-accent-cyan font-semibold">Score: {exam.score}</span>
                      </>
                    )}
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-3 rounded-xl bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan font-semibold hover:bg-accent-cyan/20 transition-all flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  <Play className="w-5 h-5" />
                  {exam.attempted ? 'Reattempt' : 'Start Exam'}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Layout>
  );
}
