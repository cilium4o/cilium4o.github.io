import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link as ScrollLink, Element } from "react-scroll";
import { XMarkIcon } from '@heroicons/react/24/solid';

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
    title: "Run These Cards, Lose More Games!",
    url: "https://www.youtube.com/shorts/EZvW5JO0IR8",
    ytId: "EZvW5JO0IR8",
  },
  {
    title: "Donating $PDT to Paragons Subscribers!",
    url: "https://www.youtube.com/shorts/KqJalp79Apg",
    ytId: "KqJalp79Apg",
  },
  {
    title: "What To Do With Your PRIME",
    url: "https://www.youtube.com/shorts/hXWZMy2kmKs",
    ytId: "hXWZMy2kmKs",
  },
  {
    title: "5 Things You Missed in the Wayfinder White Paper",
    url: "https://www.youtube.com/shorts/M7Sc9YFZRuE",
    ytId: "M7Sc9YFZRuE",
  },
];

const longform = [
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
    title: "StarHeroes Short",
    url: "https://youtu.be/jKHijZHpV-Q",
    ytId: "jKHijZHpV-Q",
  },
  {
    title: "ChampionsTCG Invitational",
    url: "https://youtu.be/J6evqJw_hm0",
    ytId: "J6evqJw_hm0",
  },
  {
    title: "ChampionsTCG Pro Tour 1",
    url: "https://youtu.be/genEw6KJBFg",
    ytId: "genEw6KJBFg",
  },
  {
    title: "ChampionsTCG IMX Announcement",
    url: "https://youtu.be/e92objYWmRQ",
    ytId: "e92objYWmRQ",
  },
];

const cinematics = [
  {
    title: "ChampionsTCG Beast of Blossom",
    url: "https://www.youtube.com/watch?v=8udyhb5dHKo",
    ytId: "8udyhb5dHKo",
  },
  {
    title: "ChampionsTCG Core Set 2025",
    url: "https://www.youtube.com/watch?v=EncF5TpDRco",
    ytId: "EncF5TpDRco",
  },
  {
    title: "Champions TCG Generation 4",
    url: "https://youtu.be/J6evqJw_hm0",
    ytId: "J6evqJw_hm0",
  },
  {
    title: "ChampionsTCG Honk Town",
    url: "https://youtu.be/JOrpgWx55Hc",
    ytId: "JOrpgWx55Hc",
  },
];

// ----------  COMPONENTS  ---------------------------------------------------
const SectionHeader = ({ children }) => (
  <motion.h2
    className="text-4xl font-bold mb-8 text-center"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    {children}
  </motion.h2>
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
      className="w-full h-48 object-cover"
    />
    <div className="p-4 bg-white dark:bg-gray-900">
      <h3 className="font-semibold text-lg group-hover:text-indigo-500 transition-colors">
        {video.title}
      </h3>
    </div>
  </motion.div>
);

const Nav = () => (
  <nav className="fixed top-0 left-0 w-full backdrop-blur-md bg-white/60 dark:bg-gray-900/60 z-50 shadow-sm">
    <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
      <div className="font-bold text-xl">My Portfolio</div>
      <ul className="flex gap-6 text-sm font-medium">
        {[
          { to: "about", label: "About" },
          { to: "experience", label: "Experience" },
          { to: "shortform", label: "Shorts" },
          { to: "longform", label: "Longform" },
          { to: "ads", label: "Ads" },
          { to: "cinematics", label: "Cinematics" },
        ].map((item) => (
          <li key={item.to}>
            <ScrollLink
              to={item.to}
              spy={true}
              smooth={true}
              duration={500}
              offset={-80}
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
        className="bg-gray-900 rounded-lg shadow-xl overflow-hidden relative w-full max-w-3xl aspect-video"
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
    <div className="font-sans text-gray-800 dark:text-gray-100 bg-gray-50 dark:bg-gray-950 scroll-smooth">
      <Nav />

      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">
            Hi, I'm <span className="text-yellow-300">cilium Falco</span>
          </h1>
          <p className="text-xl md:text-2xl font-medium mb-10">
            Video Editor • Motion Designer • Storyteller
          </p>
          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            offset={-80}
            className="inline-block bg-white/90 text-gray-900 font-semibold px-8 py-3 rounded-full shadow-lg backdrop-blur-md hover:bg-yellow-300 transition-colors cursor-pointer"
          >
            Explore my work
          </ScrollLink>
        </motion.div>
      </section>

      {/* ABOUT */}
      <Element name="about" className="section-anchor" />
      <section className="max-w-4xl mx-auto py-24 px-4">
        <SectionHeader>About Me</SectionHeader>
        <motion.p
          className="leading-relaxed text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Replace this paragraph with your own biography */}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a
          pulvinar leo. Pellentesque habitant morbi tristique senectus et netus
          et malesuada fames ac turpis egestas. Integer ac dolor et velit
          imperdiet tempus.
        </motion.p>
      </section>

      {/* EXPERIENCE */}
      <Element name="experience" className="section-anchor" />
      <section className="bg-gray-100 dark:bg-gray-900 py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <SectionHeader>Experience</SectionHeader>
          {/* Replace the list items below with real job history */}
          <motion.ul
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } },
            }}
            viewport={{ once: true }}
          >
            {[
              {
                role: "Senior Video Editor – Acme Studios",
                date: "2023 – Present",
                desc: "Leading post-production for high‑impact marketing campaigns across web3 and gaming verticals.",
              },
              {
                role: "Motion Designer – Freelance",
                date: "2021 – 2023",
                desc: "Crafted short‑form content that amassed 10M+ collective views on TikTok & YouTube Shorts.",
              },
            ].map((job, i) => (
              <motion.li
                key={i}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg p-6 rounded-xl shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-xl font-semibold mb-1">{job.role}</h3>
                <p className="text-sm mb-2 text-gray-600 dark:text-gray-400">
                  {job.date}
                </p>
                <p>{job.desc}</p>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* SHORTFORM */}
      <Element name="shortform" className="section-anchor" />
      <section className="max-w-6xl mx-auto py-24 px-4">
        <SectionHeader>Short‑form Edits</SectionHeader>
        <Grid>
          {shortform.map((v) => (
            <VideoCard key={v.ytId} video={v} onPlay={handlePlayVideo} />
          ))}
        </Grid>
      </section>

      {/* LONGFORM */}
      <Element name="longform" className="section-anchor" />
      <section className="bg-gray-100 dark:bg-gray-900 py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionHeader>Long‑form Videos</SectionHeader>
          <Grid>
            {longform.map((v) => (
              <VideoCard key={v.ytId} video={v} onPlay={handlePlayVideo} />
            ))}
          </Grid>
        </div>
      </section>

      {/* ADS & INFO */}
      <Element name="ads" className="section-anchor" />
      <section className="max-w-6xl mx-auto py-24 px-4">
        <SectionHeader>Ads & Informational</SectionHeader>
        <Grid>
          {ads.map((v) => (
            <VideoCard key={v.ytId} video={v} onPlay={handlePlayVideo} />
          ))}
        </Grid>
      </section>

      {/* CINEMATICS (Previously Thumbnails) */}
      <Element name="cinematics" className="section-anchor" />
      <section className="bg-gray-100 dark:bg-gray-900 py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionHeader>Cinematics</SectionHeader>
          <Grid>
            {cinematics.map((t) => (
              <VideoCard key={t.ytId} video={t} onPlay={handlePlayVideo} />
            ))}
          </Grid>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-800 text-gray-400 py-12 text-center text-sm">
        © {new Date().getFullYear()} [Your Name]. All rights reserved.
      </footer>

      <VideoModal videoId={playingVideoId} onClose={handleCloseModal} />
    </div>
  );
}
