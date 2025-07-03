import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink, Element } from "react-scroll";
import { XMarkIcon, PencilSquareIcon, SparklesIcon, UsersIcon, EnvelopeIcon } from '@heroicons/react/24/solid';

/**
 * Professional Portfolio – single‑page site
 * -------------------------------------------------
 * • Built with TailwindCSS for rapid styling
 * • Framer‑motion handles reveal / hover animations
 * • react‑scroll enables smooth section jumps
 *
 * HOW TO USE
 * 1. Create a `/thumbnails` folder at your public root and drop the high‑res JPEG/PNG
 *    thumbnails there (update filenames below).
 * 2. Tailwind / Framer‑motion / react‑scroll are assumed to be installed; if not, run:
 *      npm install tailwindcss framer-motion react-scroll
 * 3. Replace placeholder text in the ABOUT & EXPERIENCE sections.
 * 4. Add / remove video objects in the category arrays as your portfolio grows.
 */

// ----------  DATA  ---------------------------------------------------------
const shortform = [
  {
    title: "The Worst Cards in Magic: The Gathering",
    url: "https://www.youtube.com/shorts/3dh-Vm48KM4",
    ytId: "3dh-Vm48KM4",
  },
  {
    title: "Card Collectors Worst Nightmare",
    url: "https://www.youtube.com/shorts/Gmtj0VWxmjU",
    ytId: "Gmtj0VWxmjU",
  },
  {
    title: "THE HIGHEST RANK MOBILE PLAYER IN PARALLEL TCG",
    url: "https://www.youtube.com/shorts/KDjI42cuhkw",
    ytId: "KDjI42cuhkw",
  },
];

const longform = [
  {
    title: "Project O: Everything You Need To Know",
    url: "https://www.youtube.com/watch?v=yqUQPsPUw0U",
    ytId: "yqUQPsPUw0U",
  },
  {
    title: "Is Wayfinder the ChatGPT of Crypto?",
    url: "https://www.youtube.com/watch?v=EZUzJVPGvdU",
    ytId: "EZUzJVPGvdU",
  },
  {
    title: "Why Did Shrapnel Fail ?",
    url: "https://www.youtube.com/watch?v=zh1DQBHjFR4",
    ytId: "zh1DQBHjFR4",
  },
];

const ads = [
  {
    title: "BattlePlan APECHAIN explanation",
    url: "https://www.youtube.com/watch?v=dJHf5xEe6eo",
    ytId: "dJHf5xEe6eo",
  },
  {
    title: "Champions TCG Pro Tour 1",
    url: "https://youtu.be/genEw6KJBFg",
    ytId: "genEw6KJBFg",
  },
];

const cinematics = [
  {
    title: "Champions TCG Beast of Blossom",
    url: "https://www.youtube.com/watch?v=8udyhb5dHKo",
    ytId: "8udyhb5dHKo",
  },
  {
    title: "Champions TCG Generation 4",
    url: "https://youtu.be/H444zyqWD20",
    ytId: "H444zyqWD20",
  },
  {
    title: "Champions TCG Honk Town",
    url: "https://youtu.be/JOrpgWx55Hc",
    ytId: "JOrpgWx55Hc",
  },
];

const thumbnails = [
  { title: "Wayfinder 6", filename: "wayfinder-6.jpg" },
  { title: "What To Do With Your PDT", filename: "WhatToDoWithYourPDT1.jpg" },
  { title: "Watch Our Videos Win 100", filename: "WatchOurVideosWin100.jpg" },
  { title: "Shrapnel Colorful", filename: "Shrapnel_Colorful.png" },
  { title: "Ghibli Style", filename: "Ghibli.jpg" },
  { title: "Game Show Triple Your Prime", filename: "GameShowTripleYourPrime.jpg" },
  { title: "Gafar Colorful", filename: "GafarColorful.png" },
  { title: "Even Challenge", filename: "EvenChallenge.jpg" },
  { title: "Arak Coaching Laser", filename: "ArakCoaching-Laser.jpg" },
];

const gamingShorts = [
  {
    title: "Kennii Cambria S3 Highlights", // You might want to update this title
    url: "https://youtu.be/rWbF5H28t7A",
    ytId: "rWbF5H28t7A",
  },
  {
    title: "Champions TCG Hero Showcase",
    url: "https://youtu.be/Fat50qtxLoA",
    ytId: "Fat50qtxLoA",
  },
  {
    title: "StarHeroes Short",
    url: "https://youtu.be/jKHijZHpV-Q",
    ytId: "jKHijZHpV-Q",
  },
];

const trendyBrainrot = [
  {
    title: "Cats Fashion Show",
    url: "https://youtube.com/shorts/Z4jwCUx5KFQ",
    ytId: "Z4jwCUx5KFQ",
  },
  {
    title: "Skibidi Toilet VS Trippi Troppa",
    url: "https://youtube.com/shorts/BENgbzzFDws",
    ytId: "BENgbzzFDws",
  },
];

// ----------  COMPONENTS  ---------------------------------------------------
const SectionButton = ({ children }) => (
  <button
    className="w-full text-2xl font-bold mb-12 text-center py-3 px-6 rounded-lg shadow-md bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
    // Note: This button doesn't have an onClick handler as it's just for visual styling of the section title.
  >
    {children}
  </button>
);

const VideoCard = ({ video, onPlay }) => (
  <motion.div
    onClick={() => onPlay(video.ytId)}
    className="group block rounded-2xl overflow-hidden shadow-lg cursor-pointer"
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    whileHover={{ scale: 1.03 }}
    transition={{ duration: 0.3 }}
    viewport={{ once: true }}
  >
    <img
      src={`https://img.youtube.com/vi/${video.ytId}/hqdefault.jpg`}
      alt={video.title}
      className="w-full h-64 object-cover"
    />
    <div className="p-5 bg-white dark:bg-gray-900">
      <h3 className="font-semibold text-xl group-hover:text-indigo-500 transition-colors">
        {video.title}
      </h3>
    </div>
  </motion.div>
);

const ThumbnailCard = ({ thumbnail }) => (
  <motion.div
    className="group block rounded-2xl overflow-hidden shadow-lg bg-white dark:bg-gray-900"
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    whileHover={{ scale: 1.03 }}
    transition={{ duration: 0.3 }}
    viewport={{ once: true }}
  >
    <a href={`/thumbnails/${thumbnail.filename}`} target="_blank" rel="noopener noreferrer" title={`View full image: ${thumbnail.title}`}>
      <img
        src={`/thumbnails/${thumbnail.filename}`}
        alt={thumbnail.title}
        className="w-full h-auto object-contain"
      />
    </a>
  </motion.div>
);

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

const Nav = () => (
  <nav className="fixed top-0 left-0 w-full backdrop-blur-md bg-white/60 dark:bg-gray-900/60 z-50 shadow-sm">
    <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
      <div className="font-bold text-xl">My Portfolio</div>
      <ul className="flex gap-6 text-sm font-medium">
        <li>
          <RouterLink to="/about" className="cursor-pointer hover:text-indigo-600">
            About
          </RouterLink>
        </li>
        {[
          { to: "shortform", label: "Shorts" },
          { to: "longform", label: "Longform" },
          { to: "cinematics", label: "Cinematics" },
          { to: "thumbnails", label: "Thumbnails" },
          { to: "gamingShorts", label: "Gaming Shorts"},
          { to: "trendyBrainrot", label: "Trendy & Brainrot" },
          { to: "ads", label: "Ads" },
        ].map((item) => (
          <li key={item.to}>
            <ScrollLink
              to={item.to}
              spy={true}
              smooth={true}
              duration={500}
              offset={-80}
              containerId="mainScrollContainer"
              className="cursor-pointer hover:text-indigo-600"
            >
              {item.label}
            </ScrollLink>
          </li>
        ))}
      </ul>
    </div>
  </nav>
);

const Grid = ({ children }) => (
  <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">{children}</div>
);

const VideoModal = ({ videoId, onClose }) => {
  if (!videoId) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[100] p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.8, y: 20 }}
        className="bg-gray-900 rounded-lg shadow-xl overflow-hidden relative w-full max-w-5xl aspect-video"
        onClick={(e) => e.stopPropagation()}
      >
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <button
          onClick={onClose}
          className="absolute top-2 right-2 p-1 bg-black/50 rounded-full text-white hover:bg-black/80 transition-colors z-[110]"
          aria-label="Close video player"
        >
          <XMarkIcon className="h-6 w-6" />
        </button>
      </motion.div>
    </motion.div>
  );
};

export default function Portfolio() {
  const [playingVideoId, setPlayingVideoId] = useState(null);

  const handlePlayVideo = (videoId) => {
    setPlayingVideoId(videoId);
  };

  const handleCloseModal = () => {
    setPlayingVideoId(null);
  };

  return (
    <div
      id="mainScrollContainer"
      className="font-sans text-gray-800 dark:text-gray-100 bg-gray-50 dark:bg-gray-950 h-screen overflow-y-scroll scroll-pt-[80px]"
    >
      <Nav />

      {/* HERO */}
      <section className="py-12 flex items-center justify-between bg-gradient-to-br from-purple-700 via-purple-800 to-purple-900 text-white px-16 snap-start relative overflow-hidden">

        {/* Left Images */}
        <motion.div className="hidden md:flex flex-col gap-2"> {/* Hide on small screens, further decreased gap */}
          <motion.img
            src="/images/clm1.jpg"
            alt="Collage Image 1"
            className="w-48 h-auto rounded-lg shadow-xl transform -rotate-12 hover:rotate-0 hover:scale-110 transition-transform duration-300 ease-in-out" // Further reduced width
            initial={{ opacity: 0, x: -80, rotate: -30 }}
            animate={{ opacity: 1, x: 0, rotate: -12 }}
            transition={{ delay: 0.3, duration: 0.8, type: "spring", stiffness: 50 }}
          />
          <motion.img
            src="/images/clm2.jpeg" // Corrected file extension
            alt="Collage Image 2"
            className="w-48 h-auto rounded-lg shadow-xl transform rotate-12 hover:rotate-0 hover:scale-110 transition-transform duration-300 ease-in-out" // Further reduced width
            initial={{ opacity: 0, x: -80, rotate: 30 }}
            animate={{ opacity: 1, x: 0, rotate: 12 }}
            transition={{ delay: 0.5, duration: 0.8, type: "spring", stiffness: 50 }}
          />
        </motion.div>

        {/* Center Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center max-w-3xl z-10 mx-auto" // Use absolute positioning for centering
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-2 drop-shadow-lg"> {/* Reduced margin bottom */}
            Hi, I'm
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold text-yellow-300 mb-4 drop-shadow-lg"> {/* Added h2 for the name */}
            Lachezar 'cilium' Kochev
          </h2>
          <p className="text-xl md:text-2xl font-medium mb-10">
            Video Editor
          </p>
          <ScrollLink
            to="shortform"
            smooth={true}
            duration={1000}
            offset={-80}
            containerId="mainScrollContainer"
            className="inline-block bg-white/90 text-gray-900 font-semibold px-8 py-3 rounded-full shadow-lg backdrop-blur-md hover:bg-yellow-300 transition-colors cursor-pointer"
          >
            Explore my work
          </ScrollLink>
        </motion.div>

        {/* Right Images */}
        <motion.div className="hidden md:flex flex-col gap-4"> {/* Further decreased gap */}
           <motion.img
            src="/images/clm3.jpg"
            alt="Collage Image 3"
            className="w-64 h-auto rounded-lg shadow-xl transform rotate-12 hover:rotate-0 hover:scale-110 transition-transform duration-300 ease-in-out" // Further reduced width
            initial={{ opacity: 0, x: 80, rotate: 30 }}
            animate={{ opacity: 1, x: 0, rotate: 12 }}
            transition={{ delay: 0.4, duration: 0.8, type: "spring", stiffness: 50 }}
           />
           <motion.img
            src="/images/clm4.jpg"
            alt="Collage Image 4"
            className="w-52 h-auto rounded-lg shadow-xl transform -rotate-12 hover:rotate-0 hover:scale-110 transition-transform duration-300 ease-in-out" // Further reduced width
            initial={{ opacity: 0, x: 80, rotate: -30 }}
            animate={{ opacity: 1, x: 0, rotate: -12 }}
            transition={{ delay: 0.6, duration: 0.8, type: "spring", stiffness: 50 }}
           />
        </motion.div>

      </section>

      {/* SHORTFORM */}
      <Element name="shortform" className="section-anchor" />
      <motion.section
        className="max-w-6xl mx-auto py-24 px-4 snap-start flex flex-col"
        initial={{ backgroundColor: 'rgb(249 250 251)' }}
        whileInView={{ backgroundColor: 'rgb(255 255 255)' }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.5 }}
      >
        <SectionButton>Short‑form Edits</SectionButton>
        <Grid>
          {shortform.map((v) => (
            <VideoCard key={v.ytId} video={v} onPlay={handlePlayVideo} />
          ))}
        </Grid>
      </motion.section>

      {/* GAMING SHORTS */}
      <Element name="gamingShorts" className="section-anchor" />
      <motion.section
        className="max-w-6xl mx-auto py-24 px-4 snap-start flex flex-col"
        initial={{ backgroundColor: 'rgb(249 250 251)' }}
        whileInView={{ backgroundColor: 'rgb(255 255 255)' }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.5 }}
      >
        <SectionButton>Gaming Shorts</SectionButton>
        <Grid>
          {gamingShorts.map((v) => (
            <VideoCard key={v.ytId} video={v} onPlay={handlePlayVideo} />
          ))}
        </Grid>
      </motion.section>

      {/* LONGFORM */}
      <Element name="longform" className="section-anchor" />
      <motion.section
        className="py-24 px-4 snap-start flex flex-col"
        initial={{ backgroundColor: 'rgb(243 244 246)' }}
        whileInView={{ backgroundColor: 'rgb(229 231 235)' }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.5 }}
      >
        <div className="max-w-6xl mx-auto w-full">
          <SectionButton>Long‑form Videos</SectionButton>
          <Grid>
            {longform.map((v) => (
              <VideoCard key={v.ytId} video={v} onPlay={handlePlayVideo} />
            ))}
          </Grid>
        </div>
      </motion.section>

      {/* THUMBNAILS */}
      <Element name="thumbnails" className="section-anchor" />
      <motion.section
        className="max-w-6xl mx-auto py-24 px-4 snap-start flex flex-col"
        initial={{ backgroundColor: 'rgb(249 250 251)' }}
        whileInView={{ backgroundColor: 'rgb(255 255 255)' }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.5 }}
      >
        <SectionButton>Thumbnails</SectionButton>
        <Grid>
          {thumbnails.map((t) => (
            <ThumbnailCard key={t.filename} thumbnail={t} />
          ))}
        </Grid>
      </motion.section>

      {/* TRENDY & BRAINROT */}
      <Element name="trendyBrainrot" className="section-anchor" />
      <motion.section
        className="max-w-6xl mx-auto py-24 px-4 snap-start flex flex-col"
        initial={{ backgroundColor: 'rgb(249 250 251)' }}
        whileInView={{ backgroundColor: 'rgb(255 255 255)' }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.5 }}
      >
        <SectionButton>Trendy &amp; Brainrot</SectionButton>
        <Grid>
          {trendyBrainrot.map((v) => (
            <VideoCard key={v.ytId} video={v} onPlay={handlePlayVideo} />
          ))}
        </Grid>
      </motion.section>

      {/* ADS & INFO */}
      <Element name="ads" className="section-anchor" />
      <motion.section
        className="max-w-6xl mx-auto py-24 px-4 snap-start flex flex-col"
        initial={{ backgroundColor: 'rgb(249 250 251)' }}
        whileInView={{ backgroundColor: 'rgb(255 255 255)' }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.5 }}
      >
        <SectionButton>Ads & Informational</SectionButton>
        <Grid>
          {ads.map((v) => (
            <VideoCard key={v.ytId} video={v} onPlay={handlePlayVideo} />
          ))}
        </Grid>
      </motion.section>

      {/* CINEMATICS (Previously Thumbnails) */}
      <Element name="cinematics" className="section-anchor" />
      <motion.section
        className="py-24 px-4 snap-start flex flex-col"
        initial={{ backgroundColor: 'rgb(243 244 246)' }}
        whileInView={{ backgroundColor: 'rgb(229 231 235)' }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.5 }}
      >
        <div className="max-w-6xl mx-auto w-full">
          <SectionButton>Cinematics</SectionButton>
          <Grid>
            {cinematics.map((t) => (
              <VideoCard key={t.ytId} video={t} onPlay={handlePlayVideo} />
            ))}
          </Grid>
        </div>
      </motion.section>

      {/* FOOTER */}
      <footer className="bg-gray-800 text-gray-400 py-12 text-center text-sm snap-start">
        © {new Date().getFullYear()} [Cilium]. All rights reserved.
      </footer>

      <VideoModal videoId={playingVideoId} onClose={handleCloseModal} />
    </div>
  );
}
