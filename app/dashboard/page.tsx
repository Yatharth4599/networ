'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import {
  FaUserFriends,
  FaVideo,
  FaMapMarkedAlt,
  FaBrain,
  FaBell,
  FaUserCircle,
  FaFireAlt,
  FaMoon,
  FaSun,
} from 'react-icons/fa';

const dashboardLinks = [
  { icon: <FaUserFriends />, label: 'Matches', link: '/matches' },
  { icon: <FaVideo />, label: 'Reels', link: '/reels' },
  { icon: <FaMapMarkedAlt />, label: 'Heatmap + Graph', link: '/heatmap-graph' },
  { icon: <FaBrain />, label: 'AI Chatbot', link: '/chatbot' },
];

const initialLeaderboard = [
  { name: 'Aarav Kumar', streak: 7, avatar: 'https://i.pravatar.cc/40?img=1' },
  { name: 'Lina Ahmed', streak: 6, avatar: 'https://i.pravatar.cc/40?img=2' },
  { name: 'Mohamed Ali', streak: 5, avatar: 'https://i.pravatar.cc/40?img=3' },
];

export default function DashboardPage() {
  const [darkMode, setDarkMode] = useState(true);
  const [streakLeaderboard, setStreakLeaderboard] = useState(initialLeaderboard);

  useEffect(() => {
    const interval = setInterval(() => {
      setStreakLeaderboard((prev) =>
        prev.map((user) => ({
          ...user,
          streak: user.streak + Math.floor(Math.random() * 2),
        }))
      );
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const bgClass = darkMode
    ? 'from-purple-950 via-black to-purple-950 text-white'
    : 'from-white via-gray-100 to-white text-black';

  return (
    <motion.div
      className={`min-h-screen bg-gradient-to-br ${bgClass} px-4 py-8 md:px-16 transition-colors duration-300`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-8 max-w-6xl mx-auto">
        <FaUserCircle className="text-4xl text-purple-300" />
        <h1 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-pink-500 via-purple-400 to-indigo-500 bg-clip-text text-transparent">
          🚀 NetworkQY Dashboard
        </h1>
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <FaSun className="text-2xl" /> : <FaMoon className="text-2xl" />}
        </button>
      </div>

      {/* Welcome Message */}
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h2 className="text-2xl font-semibold text-pink-400">Hey Aarav 👋</h2>
        <p className="text-gray-400 mt-2 text-sm">Let’s build your network and boost your streak 🔥</p>
      </div>

      {/* Hero Strip */}
      <motion.div
        className="bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-500 py-4 px-6 rounded-2xl text-center text-white shadow-lg animate-pulse mb-10 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        💡 Tip of the Day: Send 1 message today and double your chances of a meaningful connection 💌
      </motion.div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-6xl mx-auto mb-14">
        {[
          { label: 'Matches', count: 12 },
          { label: 'Views', count: 58 },
          { label: 'Requests', count: 9 },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="bg-gradient-to-tr from-purple-700 via-pink-600 to-indigo-600 rounded-2xl p-6 text-center shadow-2xl hover:scale-105 transition-transform duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-4xl font-bold text-white mb-2">{item.count}</div>
            <div className="text-sm text-gray-200">{item.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Navigation */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 max-w-6xl mx-auto mb-14">
        {dashboardLinks.map((item, index) => (
          <Link href={item.link} key={index}>
            <motion.div
              className="rounded-xl bg-white/10 text-center p-5 hover:bg-purple-700 transition duration-300 shadow-md flex flex-col items-center"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="text-3xl mb-2 text-purple-200"
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 4 }}
              >
                {item.icon}
              </motion.div>
              <div className="text-sm font-medium">{item.label}</div>
            </motion.div>
          </Link>
        ))}
      </div>

      {/* Streak Leaderboard */}
      <motion.div
        className="max-w-4xl mx-auto bg-purple-800/40 p-6 rounded-2xl shadow-xl backdrop-blur-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-xl font-semibold text-pink-300 mb-5 flex items-center">
          <FaFireAlt className="mr-2" /> 🔥 Streak Leaderboard
        </h2>
        <ul className="space-y-4">
          {streakLeaderboard.map((user, i) => (
            <motion.li
              key={i}
              className="flex items-center justify-between border-b border-white/10 pb-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              <div className="flex items-center gap-3">
                <Image src={user.avatar} alt={user.name} width={36} height={36} className="rounded-full" />
                <span>{i + 1}. {user.name}</span>
              </div>
              <span className="text-pink-400 font-bold">{user.streak} 🔥</span>
            </motion.li>
          ))}
        </ul>
        <div className="mt-4 text-sm text-center text-gray-300">
          You're on a <span className="text-pink-400 font-bold">5-day</span> streak! Keep going 💪
        </div>
      </motion.div>
    </motion.div>
  );
}
