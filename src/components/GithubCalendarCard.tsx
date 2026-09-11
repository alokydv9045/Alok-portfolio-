'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
const GitHubCalendar = dynamic(() => import('react-github-calendar').then(mod => mod.GitHubCalendar), { ssr: false });
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GitBranch, Loader2 } from "lucide-react";
import Link from "next/link";

export default function GithubCalendarCard({ username = "alokydv9045" }: { username?: string }) {
  const [mounted, setMounted] = useState(false);
  const [blockSize, setBlockSize] = useState(12);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      if (width < 400) {
        setBlockSize(8);
      } else if (width < 600) {
        setBlockSize(10);
      } else if (width < 768) {
        setBlockSize(11);
      } else {
        setBlockSize(12);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const selectLastFiveMonths = (contributions: any[]) => {
    const today = new Date();
    const fiveMonthsAgo = new Date();
    fiveMonthsAgo.setMonth(today.getMonth() - 5);
    
    return contributions.filter(day => {
      const date = new Date(day.date);
      return date >= fiveMonthsAgo;
    });
  };

  return (
    <Link href={`https://github.com/${username}`} target="_blank" className="block w-full h-full">
      <Card className="glass-card hover:border-neon-blue/50 transition-all duration-300 group overflow-hidden relative h-full flex flex-col justify-center">
        <div className="absolute top-0 right-0 w-32 h-32 bg-neon-blue/10 rounded-full blur-3xl -mr-10 -mt-10 group-hover:bg-neon-blue/20 transition-all" />
        
        <CardHeader className="flex flex-row items-center justify-between pb-2 relative z-10">
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center shrink-0">
              <img src="/github.jpg" alt="GitHub" className="w-16 h-16 sm:w-20 sm:h-20 object-contain rounded-full drop-shadow-[0_0_12px_rgba(255,255,255,0.4)] mix-blend-screen invert" />
            </div>
            <div>
              <CardTitle className="text-lg sm:text-xl text-white flex items-center gap-2">
                GitHub Contributions
                {mounted && (
                  <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-green-500/10 text-green-400 text-[10px] sm:text-xs font-medium border border-green-500/20 ml-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                    Live
                  </div>
                )}
              </CardTitle>
              <p className="text-xs sm:text-sm text-gray-400">@{username}</p>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="relative z-10 pt-4 pb-8 w-full overflow-hidden flex flex-col items-center justify-center min-h-[160px]">
          {!mounted ? (
            <Loader2 className="w-8 h-8 text-neon-blue animate-spin opacity-50" />
          ) : (
            <div className="w-full flex justify-center overflow-hidden">
              <div className="max-w-full overflow-x-auto no-scrollbar">
                <GitHubCalendar 
                  username={username}
                  colorScheme="dark"
                  transformData={selectLastFiveMonths}
                  theme={{
                    light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
                    dark: ['rgba(255,255,255,0.1)', 'rgba(161, 32, 235, 0.4)', 'rgba(161, 32, 235, 0.6)', 'rgba(161, 32, 235, 0.8)', '#a120eb'],
                  }}
                  fontSize={isMobile ? 12 : 14}
                  blockSize={blockSize}
                  blockMargin={isMobile ? 3 : 4}
                />
              </div>
            </div>
          )}

          {/* Achievements Section */}
          <div className="mt-6 pt-6 border-t border-white/10 w-full">
            <div className="flex items-start justify-between mb-6">
              <div>
                <div className="text-gray-400 text-xs font-medium uppercase tracking-wider">Achievements</div>
                <div className="text-white mt-1 text-2xl font-bold">2</div>
              </div>
              <div className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" className="h-5 w-5 text-gray-400">
                  <path fillRule="evenodd" d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" clipRule="evenodd"></path>
                </svg>
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-8 mb-4">
              <div className="h-20 w-20 group-hover:scale-110 transition-transform duration-300 z-10">
                <img 
                  alt="Pull Shark" 
                  className="h-full w-full object-contain drop-shadow-[0_0_15px_rgba(161,32,235,0.5)]" 
                  src="https://github.githubassets.com/assets/pull-shark-default-498c279a747d.png" 
                />
              </div>
              <div className="h-20 w-20 group-hover:scale-110 transition-transform duration-300 z-10">
                <img 
                  alt="YOLO" 
                  className="h-full w-full object-contain drop-shadow-[0_0_15px_rgba(161,32,235,0.5)]" 
                  src="https://github.githubassets.com/assets/yolo-default-be0bbff04951.png" 
                />
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-gray-400 text-xs uppercase tracking-wider">Most Recent</div>
              <div className="text-neon-blue text-sm font-semibold mt-1">Pull Shark</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
