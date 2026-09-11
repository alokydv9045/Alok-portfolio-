'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Target, Loader2 } from "lucide-react";
import Link from "next/link";

interface LeetCodeStats {
  totalSolved: number;
  totalQuestions: number;
  easySolved: number;
  totalEasy: number;
  mediumSolved: number;
  totalMedium: number;
  hardSolved: number;
  totalHard: number;
  acceptanceRate: number;
  ranking: number;
}

export default function LeetCodeCard({ username = "alokyadav9045" }: { username?: string }) {
  const [data, setData] = useState<LeetCodeStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch(`/api/leetcode?username=${username}`);
        const json = await res.json();
        if (json.status === "success") {
          setData({
            totalSolved: json.totalSolved,
            totalQuestions: json.totalQuestions,
            easySolved: json.easySolved,
            totalEasy: json.totalEasy,
            mediumSolved: json.mediumSolved,
            totalMedium: json.totalMedium,
            hardSolved: json.hardSolved,
            totalHard: json.totalHard,
            acceptanceRate: json.acceptanceRate,
            ranking: json.ranking,
          });
        }
      } catch (error) {
        console.error("Failed to fetch LeetCode stats:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, [username]);

  return (
    <Link href={`https://leetcode.com/${username}/`} target="_blank" className="block w-full h-full">
      <Card className="glass-card hover:border-orange-500/50 transition-all duration-300 group overflow-hidden relative h-full flex flex-col">
        <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl -mr-10 -mt-10 group-hover:bg-orange-500/20 transition-all" />
        
        <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-2 relative z-10 gap-4 sm:gap-0">
          <div className="flex items-center gap-4 w-full sm:w-auto">
            <div className="flex items-center justify-center shrink-0">
              <img src="/leetcode.png" alt="LeetCode" className="w-16 h-16 sm:w-20 sm:h-20 object-contain bg-white rounded-2xl p-1.5 drop-shadow-[0_0_12px_rgba(255,165,0,0.6)]" />
            </div>
            <div className="min-w-0">
              <CardTitle className="text-lg sm:text-xl text-white flex items-center gap-2 truncate">
                LeetCode Stats
                {!loading && (
                  <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-green-500/10 text-green-400 text-[10px] sm:text-xs font-medium border border-green-500/20 ml-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                    Live
                  </div>
                )}
              </CardTitle>
              <p className="text-xs sm:text-sm text-gray-400 truncate">@{username}</p>
            </div>
          </div>
          {data && (
            <div className="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto bg-white/5 sm:bg-transparent p-2 sm:p-0 rounded-lg sm:rounded-none">
              <div className="text-xs sm:text-sm text-gray-400 flex items-center gap-1">
                <Trophy className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500" /> Rank
              </div>
              <div className="text-sm sm:text-base font-bold text-white tracking-tight">{data.ranking.toLocaleString()}</div>
            </div>
          )}
        </CardHeader>
        
        <CardContent className="relative z-10 pt-4 flex-grow flex flex-col justify-center">
          {loading ? (
             <div className="flex justify-center items-center h-40">
               <Loader2 className="w-8 h-8 text-orange-500 animate-spin opacity-50" />
             </div>
          ) : data ? (
            <>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-6">
                <div className="bg-black/40 rounded-xl p-3 sm:p-4 border border-white/5">
                  <div className="text-gray-400 text-xs sm:text-sm mb-1 flex items-center gap-1 sm:gap-2">
                    <Target className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" /> Solved
                  </div>
                  <div className="text-lg sm:text-2xl font-bold text-white">
                    {data.totalSolved} <span className="text-[10px] sm:text-sm text-gray-500 font-normal">/ {data.totalQuestions}</span>
                  </div>
                </div>
                <div className="bg-black/40 rounded-xl p-3 sm:p-4 border border-white/5">
                  <div className="text-emerald-400 text-xs sm:text-sm mb-1 font-medium">Easy</div>
                  <div className="text-base sm:text-xl font-bold text-white">
                    {data.easySolved} <span className="text-[10px] sm:text-xs text-gray-500 font-normal">/ {data.totalEasy}</span>
                  </div>
                </div>
                <div className="bg-black/40 rounded-xl p-3 sm:p-4 border border-white/5">
                  <div className="text-yellow-400 text-xs sm:text-sm mb-1 font-medium">Medium</div>
                  <div className="text-base sm:text-xl font-bold text-white">
                    {data.mediumSolved} <span className="text-[10px] sm:text-xs text-gray-500 font-normal">/ {data.totalMedium}</span>
                  </div>
                </div>
                <div className="bg-black/40 rounded-xl p-3 sm:p-4 border border-white/5">
                  <div className="text-red-400 text-xs sm:text-sm mb-1 font-medium">Hard</div>
                  <div className="text-base sm:text-xl font-bold text-white">
                    {data.hardSolved} <span className="text-[10px] sm:text-xs text-gray-500 font-normal">/ {data.totalHard}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-400">Acceptance Rate</span>
                    <span className="text-white font-medium">{data.acceptanceRate}%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                    <div 
                      className="bg-orange-500 h-2 rounded-full transition-all duration-1000" 
                      style={{ width: `${data.acceptanceRate}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Badges Section */}
              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="text-gray-400 text-xs font-medium uppercase tracking-wider">Badges</div>
                    <div className="text-white mt-1 text-2xl font-bold">4</div>
                  </div>
                  <div className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" className="h-5 w-5 text-gray-400">
                      <path fillRule="evenodd" d="M18.586 13H3a1 1 0 110-2h15.586L12 4.414A1 1 0 0113.414 3l8.293 8.293a.997.997 0 01-.003 1.417L13.414 21A1 1 0 0112 19.586L18.586 13z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                </div>
                
                <div className="flex items-center justify-center gap-6 mb-4">
                  <div className="h-14 w-14 group-hover:scale-110 transition-transform duration-300">
                    <img 
                      alt="50 Days Badge" 
                      className="h-full w-full object-contain drop-shadow-[0_0_10px_rgba(255,165,0,0.4)]" 
                      src="https://assets.leetcode.com/static_assets/others/50_1080_1080.png" 
                    />
                  </div>
                  <div className="h-20 w-20 group-hover:scale-110 transition-transform duration-300 z-10">
                    <img 
                      alt="100 Days Badge" 
                      className="h-full w-full object-contain drop-shadow-[0_0_15px_rgba(255,165,0,0.6)]" 
                      src="https://assets.leetcode.com/static_assets/others/100_1080_1080.png" 
                    />
                  </div>
                  <div className="h-14 w-14 group-hover:scale-110 transition-transform duration-300">
                    <img 
                      alt="Aug LeetCoding Challenge" 
                      className="h-full w-full object-contain drop-shadow-[0_0_10px_rgba(255,165,0,0.4)]" 
                      src="https://assets.leetcode.com/static_assets/public/images/badges/2024/gif/2024-08.gif" 
                      onError={(e) => { e.currentTarget.src = 'https://assets.leetcode.com/static_assets/public/images/badges/dcc-2023-8.png' }}
                    />
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="text-gray-400 text-xs uppercase tracking-wider">Most Recent Badge</div>
                  <div className="text-orange-400 text-sm font-semibold mt-1">100 Days Badge 2026</div>
                </div>
              </div>
            </>
          ) : (
             <div className="flex justify-center items-center h-40 text-gray-400">
               Could not load LeetCode data.
             </div>
          )}
        </CardContent>
      </Card>
    </Link>
  );
}
