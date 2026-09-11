"use client";

import { Users } from "lucide-react";
import { motion } from "framer-motion";

export default function VisitorCounter() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="flex items-center gap-2 px-3 py-1.5 rounded-full glass-card border border-white/10 text-xs text-gray-400 hover:text-white hover:border-neon-blue/50 transition-colors"
      title="Total Site Views"
    >
      <Users className="w-3.5 h-3.5 text-neon-blue" />
      <span className="font-medium">1,200+ Views</span>
    </motion.div>
  );
}
