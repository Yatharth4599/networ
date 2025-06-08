"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FaUserFriends, FaVideo, FaMapMarkedAlt, FaBrain, FaRocket, FaBell, FaUserCircle, FaFireAlt } from 'react-icons/fa';

const dashboardLinks = [
  { icon: <FaUserFriends />, label: 'Matches', link: '/matches' },
  { icon: <FaVideo />, label: 'Reels', link: '/reels' },
  { icon: <FaMapMarkedAlt />, label: 'Heatmap + Graph', link: '/heatmap-graph' },
  { icon: <FaBrain />, label: 'AI Chatbot', link: '/chatbot' }
];

const streakLeaderboard = [
  { name: 'Aarav Kumar', streak: 7, avatar: 'https://i.pravatar.cc/40?img=1' },
  { name: 'Lina Ahmed', streak: 6, avatar: 'https://i.pravatar.cc/40?img=2' },
  { name: 'Mohamed Ali', streak: 5, avatar: 'https://i.pravatar.cc/40?img=3' },
];

export default function DashboardPage() {
  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-purple-900 text-white p-6 md:p-12 flex flex-col items-center animate-fadeIn"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="w-full max-w-6xl flex justify-between items-center mb-10">
        <FaUserCircle className="text-4xl text-purple-300" />
        <motion.h1 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-400 to-indigo-500 bg-clip-text text-transparent animate-pulse">
          🚀 NetworkQY Dashboard
        </motion.h1>
        <FaBell className="text-2xl text-purple-300 animate-ping-slow" />
      </div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl mb-12"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {[
          { icon: <FaUserFriends />, label: 'Matches', count: 12 },
          { icon: <FaRocket />, label: 'Views', count: 58 },
          { icon: <FaBrain />, label: 'Requests', count: 9 },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="bg-white/10 rounded-2xl p-6 text-center backdrop-blur-md hover:scale-105 transition-transform duration-300 shadow-lg"
            whileHover={{ scale: 1.05 }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="text-4xl mb-2 text-purple-300 animate-bounce">{item.icon}</div>
            <div className="text-2xl font-bold">{item.count}</div>
            <div className="text-sm text-gray-300">{item.label}</div>
          </motion.div>
        ))}
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl mb-12">
        {dashboardLinks.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="rounded-2xl bg-purple-700/40 text-center p-6 hover:bg-purple-800 transition duration-300 shadow-xl"
          >
            <Link href={item.link} className="flex flex-col items-center">
              <div className="text-3xl mb-2 text-purple-300 animate-spin-slow">{item.icon}</div>
              <div className="font-semibold text-white text-sm">{item.label}</div>
            </Link>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="w-full max-w-3xl bg-white/10 p-6 rounded-2xl shadow-xl backdrop-blur-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-xl font-bold text-pink-400 mb-4 flex items-center">
          <FaFireAlt className="mr-2" /> 🔥 Streak Leaderboard
        </h2>
        <ul className="space-y-4 text-white text-sm">
          {streakLeaderboard.map((user, i) => (
            <motion.li
              key={i}
              className="flex items-center justify-between border-b border-white/10 pb-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              <div className="flex items-center gap-3">
                <Image src={user.avatar} alt={user.name} width={32} height={32} className="rounded-full" />
                <span>{i + 1}. {user.name}</span>
              </div>
            </motion.li>
          ))}
        </ul>
        <div className="mt-4 text-sm text-center text-gray-300">
          You're on a <span className="text-pink-400 font-bold">5-day</span> streak! Keep it going 💪
        </div>
      </motion.div>
    </motion.div>
  );
}
