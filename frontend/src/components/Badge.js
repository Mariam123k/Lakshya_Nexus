export default function Badge({ children, variant = 'default' }) {
  const variants = {
    high: 'bg-red-500/20 text-red-400 border border-red-500/30',
    conceptual: 'bg-pink-500/20 text-pink-400 border border-pink-500/30',
    speed: 'bg-orange-500/20 text-orange-400 border border-orange-500/30',
    careless: 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30',
    default: 'bg-gray-500/20 text-gray-400 border border-gray-500/30',
  };

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-medium ${variants[variant] || variants.default}`}>
      {children}
    </span>
  );
}
