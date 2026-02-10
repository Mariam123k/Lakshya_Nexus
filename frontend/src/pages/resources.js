import Layout from '@/components/Layout';
import { motion } from 'framer-motion';
import { BookOpen, Video, FileText, Download, ExternalLink, Search } from 'lucide-react';
import Badge from '@/components/Badge';

export default function ResourcesPage() {
  const categories = [
    { name: 'All', count: 45 },
    { name: 'Physics', count: 12 },
    { name: 'Chemistry', count: 15 },
    { name: 'Biology', count: 10 },
    { name: 'Mathematics', count: 8 },
  ];

  const resources = [
    {
      id: 1,
      title: 'NEET Physics Formula Sheet',
      type: 'PDF',
      category: 'Physics',
      size: '2.5 MB',
      downloads: 1234,
      icon: FileText,
    },
    {
      id: 2,
      title: 'Organic Chemistry Video Lectures',
      type: 'Video',
      category: 'Chemistry',
      duration: '12 hours',
      views: 5678,
      icon: Video,
    },
    {
      id: 3,
      title: 'Biology NCERT Summary',
      type: 'PDF',
      category: 'Biology',
      size: '5.8 MB',
      downloads: 3456,
      icon: FileText,
    },
    {
      id: 4,
      title: 'Calculus Practice Problems',
      type: 'PDF',
      category: 'Mathematics',
      size: '3.2 MB',
      downloads: 2345,
      icon: BookOpen,
    },
    {
      id: 5,
      title: 'Thermodynamics Explained',
      type: 'Video',
      category: 'Physics',
      duration: '8 hours',
      views: 4321,
      icon: Video,
    },
    {
      id: 6,
      title: 'Chemical Bonding Notes',
      type: 'PDF',
      category: 'Chemistry',
      size: '1.8 MB',
      downloads: 1890,
      icon: FileText,
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
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text-primary mb-2">Resources</h1>
        <p className="text-sm md:text-base text-text-secondary">
          Access study materials, notes, and video lectures
        </p>
      </motion.div>

      {/* Search Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-6"
      >
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
          <input
            type="text"
            placeholder="Search resources..."
            className="w-full bg-card-dark border border-border-dark/50 rounded-xl px-12 py-4 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-blue/50 transition-all"
          />
        </div>
      </motion.div>

      {/* Categories */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-8"
      >
        <div className="flex flex-wrap gap-3">
          {categories.map((category, index) => (
            <motion.button
              key={category.name}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-xl font-semibold transition-all ${
                index === 0
                  ? 'bg-accent-blue text-white'
                  : 'bg-card-dark text-text-secondary border border-border-dark/50 hover:border-accent-blue/30 hover:text-text-primary'
              }`}
            >
              {category.name} ({category.count})
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-card-dark rounded-2xl p-6 border border-border-dark/50"
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-accent-blue/20 flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-accent-cyan" />
            </div>
            <div>
              <p className="text-sm text-text-muted">Total Resources</p>
              <p className="text-2xl font-bold text-text-primary">45</p>
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
            <div className="w-12 h-12 rounded-xl bg-accent-orange/20 flex items-center justify-center">
              <Download className="w-6 h-6 text-accent-orange" />
            </div>
            <div>
              <p className="text-sm text-text-muted">Downloads</p>
              <p className="text-2xl font-bold text-text-primary">12,345</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-card-dark rounded-2xl p-6 border border-border-dark/50"
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-accent-cyan/20 flex items-center justify-center">
              <Video className="w-6 h-6 text-accent-cyan" />
            </div>
            <div>
              <p className="text-sm text-text-muted">Video Hours</p>
              <p className="text-2xl font-bold text-text-primary">120h</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Resources Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <h2 className="text-xl md:text-2xl font-bold text-text-primary mb-4">All Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {resources.map((resource, index) => {
            const Icon = resource.icon;
            return (
              <motion.div
                key={resource.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="bg-card-dark rounded-2xl p-6 border border-border-dark/50 hover:border-accent-blue/30 transition-all group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-accent-blue/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-accent-cyan" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-text-primary mb-1 group-hover:text-accent-cyan transition-colors">
                      {resource.title}
                    </h3>
                    <Badge variant="default">{resource.category}</Badge>
                  </div>
                </div>

                <div className="flex items-center gap-4 mb-4 text-sm text-text-secondary">
                  {resource.size && <span>{resource.size}</span>}
                  {resource.duration && <span>{resource.duration}</span>}
                  {resource.downloads && (
                    <>
                      <span>•</span>
                      <span>{resource.downloads.toLocaleString()} downloads</span>
                    </>
                  )}
                  {resource.views && (
                    <>
                      <span>•</span>
                      <span>{resource.views.toLocaleString()} views</span>
                    </>
                  )}
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-4 py-3 rounded-xl bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan font-semibold hover:bg-accent-cyan/20 transition-all flex items-center justify-center gap-2"
                >
                  {resource.type === 'Video' ? (
                    <>
                      <ExternalLink className="w-5 h-5" />
                      Watch Now
                    </>
                  ) : (
                    <>
                      <Download className="w-5 h-5" />
                      Download
                    </>
                  )}
                </motion.button>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </Layout>
  );
}
