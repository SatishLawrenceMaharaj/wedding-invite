"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import AnimatedPetals from "./AnimatedPetals";
import HeroSection from "./HeroSection";
import {
  CinematicStrip,
  DetailsSection,
  GallerySection,
  ProposalSection,
  RsvpSection,
  ScheduleSection,
  StorySection,
} from "./Sections";

export default function WeddingInvitePage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, restDelta: 0.001 });
  const heroY = useTransform(scrollYProgress, [0, 0.26], [0, 220]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.22], [0.78, 0.12]);

  return (
    <main className="wedding-page">
      <motion.div className="scroll-progress" style={{ scaleX }} />
      <AnimatedPetals />

      <nav className="floating-nav" aria-label="Wedding invite navigation">
        <a href="#details">Details</a>
        <a href="#story">Story</a>
        <a href="#gallery">Gallery</a>
        <a href="#rsvp">RSVP</a>
      </nav>

      <HeroSection y={heroY} opacity={heroOpacity} />
      <CinematicStrip />
      <DetailsSection />
      <StorySection />
      <ProposalSection />
      <ScheduleSection />
      <GallerySection />
      <RsvpSection />
    </main>
  );
}
