import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  PencilSquareIcon,
  SparklesIcon,
  UsersIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/solid";

const DiscordIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 127.14 96.36"
    aria-label="Discord"
    role="img"
    {...props}
  >
    <path
      fill="currentColor"
      d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83a72.37,72.37,0,0,0-3.36-6.83A105.15,105.15,0,0,0,19.43,8.09C-3.24,32.66-5.12,57.21,5.1,82.23A109,109,0,0,0,29.7,96.36a83.65,83.65,0,0,0,18.56-10.33,73.23,73.23,0,0,1-10-9.94,65.38,65.38,0,0,1-3.62-5.16A86.4,86.4,0,0,0,53.29,81a74.48,74.48,0,0,0,18.9-5.17,87.6,87.6,0,0,0,14.08,5.17,74.49,74.49,0,0,0,18.9,5.17,86.4,86.4,0,0,0,18.53-10.25,65.38,65.38,0,0,1-3.62,5.16,73.23,73.23,0,0,1-10,9.94,83.65,83.65,0,0,0,18.56,10.33A109,109,0,0,0,122.04,82.23C132.25,57.21,130.37,32.66,107.7,8.07ZM42.45,65.69C36.67,65.69,32,60.32,32,53.54s4.67-12.15,10.45-12.15,10.45,5.37,10.45,12.15S48.23,65.69,42.45,65.69Zm42.24,0C78.91,65.69,74.24,60.32,74.24,53.54s4.67-12.15,10.45-12.15,10.45,5.37,10.45,12.15S90.91,65.69,84.69,65.69Z"
    />
  </svg>
);

const SectionButton = ({ children }) => (
    <button
      className="w-full text-2xl font-bold mb-12 text-center py-3 px-6 rounded-lg shadow-md bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
    >
      {children}
    </button>
  );

export default function About() {
  return (
    <div className="font-sans text-gray-800 dark:text-gray-100 bg-gray-50 dark:bg-gray-950 min-h-screen">
       <nav className="fixed top-0 left-0 w-full backdrop-blur-md bg-white/60 dark:bg-gray-900/60 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
          <Link to="/" className="font-bold text-xl hover:text-indigo-600">My Portfolio</Link>
          <ul className="flex gap-6 text-sm font-medium">
             <li>
                <Link to="/" className="cursor-pointer hover:text-indigo-600">Back to Home</Link>
             </li>
          </ul>
        </div>
      </nav>
      <motion.section
        className="max-w-6xl mx-auto py-24 px-4 flex flex-col pt-32"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <SectionButton>About Me</SectionButton>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="mb-4 leading-relaxed text-lg flex items-start">
            <PencilSquareIcon className="h-6 w-6 mr-3 text-indigo-600 flex-shrink-0" />
            <span>
              <strong>What I do:</strong> Edit short-form and long-form gaming
              content, including highlights, reviews, ads, trailers, promos, and
              make eye-catching thumbnails.
            </span>
          </p>
          <p className="mb-4 leading-relaxed text-lg flex items-start">
            <SparklesIcon className="h-6 w-6 mr-3 text-yellow-500 flex-shrink-0" />
            <span>
              <strong>Strengths:</strong> Fast turnaround; strong storytelling;
              keeping up-to-date with trends; engaging, on-brand visuals.
              Well-versed in internet culture.
            </span>
          </p>
          <p className="mb-4 leading-relaxed text-lg flex items-start">
            <UsersIcon className="h-6 w-6 mr-3 text-green-500 flex-shrink-0" />
            <span>
              <strong>Clients & collaborations:</strong> Paragons DAO, Champions
              TCG, Chosen Ones, Cambria, particularly proud of our recent work at
              Paragons DAO, where we've delivered high-quality, informative, and
              entertaining content—above all, with integrity.
            </span>
          </p>
          <p className="leading-relaxed text-lg pl-9">
            Created standout content entries and showcase videos for community
            competitions hosted by StarHeroes, Rumble Arcade, BattlePlan, Jokers
            of Neon, Gangsters Arena, and others.
          </p>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
              Contact Me
            </h3>
            <div className="flex justify-center items-center flex-wrap gap-x-8 gap-y-4">
              <a
                href="mailto:lnkochev2@gmail.com"
                className="flex items-center gap-2 font-medium text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                <EnvelopeIcon className="h-5 w-5" />
                lnkochev2@gmail.com
              </a>
              <a
                href="https://x.com/thecilium"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-medium text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                <span className="font-bold text-lg">X</span>
                @thecilium
              </a>
              <div className="flex items-center gap-2 font-medium text-gray-600 dark:text-gray-300">
                <DiscordIcon className="h-5 w-5" />
                ciliumcho
              </div>
            </div>
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
} 