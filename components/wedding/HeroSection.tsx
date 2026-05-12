"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { motion, MotionValue } from "framer-motion";
import { CalendarDays, Camera, ChevronDown, HeartHandshake } from "lucide-react";
import { invite, photos } from "@/data/wedding";

const HeroScene = dynamic(() => import("./HeroScene"), {
  ssr: false,
  loading: () => <div className="three-loading">Preparing the 3D invite…</div>,
});

type HeroSectionProps = {
  y: MotionValue<number>;
  opacity: MotionValue<number>;
};

function HeroCollage() {
  return (
    <motion.div
      className="hero-photo-card"
      initial={{ opacity: 0, y: 42, rotate: -2 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{ delay: 0.65, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="hero-photo-image">
        <Image
          src={photos[12].src}
          alt="Satish proposing to Tyla under a pink flowering tree"
          fill
          priority
          sizes="(max-width: 1040px) 90vw, 19rem"
        />
      </div>
      <div className="hero-photo-caption">
        <span>She said yes</span>
        <strong>Forever began under the blossoms.</strong>
      </div>
    </motion.div>
  );
}

export default function HeroSection({ y, opacity }: HeroSectionProps) {
  return (
    <section className="hero-section" id="top">
      <div className="hero-bg-glow" />
      <motion.div className="hero-3d" style={{ y, opacity }} aria-hidden="true">
        <HeroScene />
      </motion.div>

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 44 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="invite-seal">S & T</div>
        <p className="hero-kicker">With full hearts, families and friends are invited to celebrate</p>
        <h1>
          Satish    
          <span>and</span>
          Tyla
        </h1>
        <p className="hero-copy">
          A cinematic wedding invitation for the love story of <strong>{invite.groom}</strong> and <strong>{invite.bride}</strong> - filled with blossoms, rings, memories, laughter, island light and the promise of forever.
        </p>
        <div className="hero-date-pill">
          <CalendarDays size={18} />
          <span>{invite.date}</span>
        </div>
        <div className="hero-actions">
          <a className="primary-button" href="#rsvp">
            <HeartHandshake size={18} />
            Celebrate with us
          </a>
          <a className="secondary-button" href="#gallery">
            <Camera size={18} />
            View our memories
          </a>
        </div>
      </motion.div>

      <HeroCollage />

      <a className="scroll-cue" href="#details" aria-label="Scroll to wedding details">
        <ChevronDown size={22} />
      </a>
    </section>
  );
}
