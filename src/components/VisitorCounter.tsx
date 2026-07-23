"use client";

import { useEffect, useState } from "react";
import { Users } from "lucide-react";
import { motion } from "framer-motion";

export default function VisitorCounter() {
  const [views, setViews] = useState<number | null>(null);

  useEffect(() => {
    async function fetchViews() {
      try {
        const hasViewed = sessionStorage.getItem("viewed");
        
        const method = hasViewed ? "GET" : "POST";
        const res = await fetch("/api/views", { method });
        
        if (res.ok) {
          const data = await res.json();
          if (data.status === "success") {
            setViews(data.count);
            if (!hasViewed) {
              sessionStorage.setItem("viewed", "true");
            }
          }
        }
      } catch (error) {
        console.error("Error fetching views:", error);
      }
    }
    
    fetchViews();
  }, []);

  if (views === null) {
    return (
      <div className="flex items-center gap-2 px-3 py-1.5 rounded-full glass-card border border-white/10 text-xs text-gray-500 min-w-[90px] justify-center">
        <Users className="w-3.5 h-3.5" />
        <div className="h-4 w-8 bg-white/10 rounded animate-pulse"></div>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="flex items-center gap-2 px-3 py-1.5 rounded-full glass-card border border-white/10 text-xs text-gray-400 hover:text-white hover:border-neon-blue/50 transition-colors"
      title="Total Site Views"
    >
      <Users className="w-3.5 h-3.5 text-neon-blue" />
      <span className="font-medium">{new Intl.NumberFormat().format(views)} Views</span>
    </motion.div>
  );
}
