import Layout from '@/components/Layout';
import { motion } from 'framer-motion';
import { User, Mail, Phone, Calendar, Target, Award, Edit2, Save } from 'lucide-react';
import { useState } from 'react';

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'Student Name',
    email: 'student@example.com',
    phone: '+91 9876543210',
    examDate: '2026-05-05',
    targetScore: '650',
    currentScore: '520',
  });

  const achievements = [
    { id: 1, title: '7-Day Streak', icon: '🔥', date: '2026-02-10' },
    { id: 2, title: 'Quiz Master', icon: '🏆', date: '2026-02-08' },
    { id: 3, title: 'Early Bird', icon: '🌅', date: '2026-02-05' },
    { id: 4, title: 'Perfect Score', icon: '💯', date: '2026-02-01' },
  ];

  const stats = [
    { label: 'Total Study Hours', value: '87h', color: 'text-accent-cyan' },
    { label: 'Quizzes Completed', value: '24', color: 'text-accent-orange' },
    { label: 'Mock Tests', value: '5', color: 'text-accent-blue' },
    { label: 'Current Streak', value: '7 days', color: 'text-purple-400' },
  ];

  const handleSave = () => {
    setIsEditing(false);
    // Add save logic here
  };

  return (
    <Layout>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-6 md:mb-8 mt-12 lg:mt-0"
      >
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text-primary mb-2">Profile</h1>
        <p className="text-sm md:text-base text-text-secondary">
          Manage your account and track your achievements
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Info */}
        <div className="lg:col-span-2 space-y-6">
          {/* Basic Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-card-dark rounded-2xl p-6 border border-border-dark/50"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-text-primary">Personal Information</h2>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => isEditing ? handleSave() : setIsEditing(true)}
                className="px-4 py-2 rounded-lg bg-accent-blue text-white text-sm font-semibold hover:bg-accent-blue/80 transition-all flex items-center gap-2"
              >
                {isEditing ? (
                  <>
                    <Save className="w-4 h-4" />
                    Save Changes
                  </>
                ) : (
                  <>
                    <Edit2 className="w-4 h-4" />
                    Edit Profile
                  </>
                )}
              </motion.button>
            </div>

            <div className="flex items-center gap-6 mb-8">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-accent-blue to-accent-cyan flex items-center justify-center text-4xl font-bold text-white">
                {profileData.name.charAt(0)}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-text-primary mb-1">{profileData.name}</h3>
                <p className="text-text-secondary">NEET Aspirant 2026</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-text-muted mb-2 flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={profileData.name}
                    onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
                    disabled={!isEditing}
                    className="w-full bg-card-darker border border-border-dark/50 rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:border-accent-blue/50 transition-all disabled:opacity-50"
                  />
                </div>
                <div>
                  <label className="text-sm text-text-muted mb-2 flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={profileData.email}
                    onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                    disabled={!isEditing}
                    className="w-full bg-card-darker border border-border-dark/50 rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:border-accent-blue/50 transition-all disabled:opacity-50"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-text-muted mb-2 flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={profileData.phone}
                    onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
                    disabled={!isEditing}
                    className="w-full bg-card-darker border border-border-dark/50 rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:border-accent-blue/50 transition-all disabled:opacity-50"
                  />
                </div>
                <div>
                  <label className="text-sm text-text-muted mb-2 flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Exam Date
                  </label>
                  <input
                    type="date"
                    value={profileData.examDate}
                    onChange={(e) => setProfileData({ ...profileData, examDate: e.target.value })}
                    disabled={!isEditing}
                    className="w-full bg-card-darker border border-border-dark/50 rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:border-accent-blue/50 transition-all disabled:opacity-50"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-text-muted mb-2 flex items-center gap-2">
                    <Target className="w-4 h-4" />
                    Target Score
                  </label>
                  <input
                    type="number"
                    value={profileData.targetScore}
                    onChange={(e) => setProfileData({ ...profileData, targetScore: e.target.value })}
                    disabled={!isEditing}
                    className="w-full bg-card-darker border border-border-dark/50 rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:border-accent-blue/50 transition-all disabled:opacity-50"
                  />
                </div>
                <div>
                  <label className="text-sm text-text-muted mb-2 flex items-center gap-2">
                    <Award className="w-4 h-4" />
                    Current Score
                  </label>
                  <input
                    type="number"
                    value={profileData.currentScore}
                    onChange={(e) => setProfileData({ ...profileData, currentScore: e.target.value })}
                    disabled={!isEditing}
                    className="w-full bg-card-darker border border-border-dark/50 rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:border-accent-blue/50 transition-all disabled:opacity-50"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Study Statistics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-card-dark rounded-2xl p-6 border border-border-dark/50"
          >
            <h2 className="text-xl font-bold text-text-primary mb-6">Study Statistics</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="text-center"
                >
                  <p className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.value}</p>
                  <p className="text-sm text-text-muted">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Achievements Sidebar */}
        <div className="lg:col-span-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-card-dark rounded-2xl p-6 border border-border-dark/50"
          >
            <h2 className="text-xl font-bold text-text-primary mb-6">Achievements</h2>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="bg-card-darker rounded-xl p-4 hover:bg-card-darker/70 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-accent-blue/20 flex items-center justify-center text-2xl">
                      {achievement.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-text-primary">{achievement.title}</h3>
                      <p className="text-xs text-text-muted">{achievement.date}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full mt-6 px-4 py-3 rounded-xl bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan font-semibold hover:bg-accent-cyan/20 transition-all"
            >
              View All Achievements
            </motion.button>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}
