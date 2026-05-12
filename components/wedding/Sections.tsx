"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  CalendarDays,
  Diamond,
  Flower2,
  Gem,
  HeartHandshake,
  Mail,
  MapPin,
  Music4,
  Sparkles as SparklesIcon,
  Timer,
  Wine,
} from "lucide-react";
import {
  invite,
  photos,
  schedule,
  story,
  type Photo,
  type ScheduleItem,
} from "@/data/wedding";
import type { LucideIcon } from "lucide-react";
import { GlassCard, SectionTitle } from "./Shared";

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
  loading: () => <div className="spline-loading">Loading Spline scene…</div>,
});

const scheduleIcons: Record<ScheduleItem["icon"], LucideIcon> = {
  ceremony: Flower2,
  goldenHour: Wine,
  reception: Music4,
};

export function CinematicStrip() {
  const strip = [
    ...photos.slice(0, 6),
    ...photos.slice(12, 16),
    ...photos.slice(6, 12),
  ];

  return (
    <div className="cinematic-strip" aria-label="Animated photo strip">
      <div className="strip-track">
        {[...strip, ...strip].map((photo, index) => (
          <Image
            key={`${photo.src}-${index}`}
            src={photo.src}
            alt={photo.title}
            width={240}
            height={160}
            sizes="12rem"
          />
        ))}
      </div>
    </div>
  );
}

export function DetailsSection() {
  return (
    <section className="details-section" id="details">
      <SectionTitle
        eyebrow="The invitation"
        title="Two hearts. One promise."
        copy="Save this space for the final date, venue and RSVP link. Update the details once everything is confirmed."
      />
      <div className="details-grid">
        <GlassCard>
          <Gem className="card-icon" />
          <p className="card-label">Couple</p>
          <h3>{invite.groom}</h3>
          <span>&</span>
          <h3>{invite.bride}</h3>
        </GlassCard>
        <GlassCard delay={0.08}>
          <CalendarDays className="card-icon" />
          <p className="card-label">Date & Time</p>
          <h3>{invite.date}</h3>
          <span>{invite.time}</span>
        </GlassCard>
        <GlassCard delay={0.16}>
          <MapPin className="card-icon" />
          <p className="card-label">Venue</p>
          <h3>{invite.venue}</h3>
          <span>{invite.location}</span>
        </GlassCard>
      </div>
      <div className="palette-row">
        {invite.palette.map((color) => (
          <span key={color}>{color}</span>
        ))}
      </div>
    </section>
  );
}

function StoryStep({
  item,
  index,
}: {
  item: (typeof story)[number];
  index: number;
}) {
  return (
    <motion.article
      className="story-step"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-140px" }}
      transition={{
        duration: 0.8,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <div className="story-step-media">
        <Image
          src={item.photo.src}
          alt={item.photo.title}
          fill
          sizes="(max-width: 720px) 100vw, 36rem"
        />
      </div>
      <div className="story-step-copy">
        <span>{item.label}</span>
        <h3>{item.title}</h3>
        <p>{item.copy}</p>
      </div>
    </motion.article>
  );
}

export function StorySection() {
  return (
    <section className="story-section" id="story">
      <div className="story-sticky">
        <p className="mini-eyebrow">Our story</p>
        <h2>Every photo was already a vow.</h2>
        <p>
          Relive our love story with us. From the park, the dinner dates, the
          graduation smiles, the adventures, the Christmas lights, and the
          proposal beneath the pink flowers. Every memory became part of the
          invitation to our forever.
        </p>
      </div>
      <div className="story-steps">
        {story.map((item, index) => (
          <StoryStep key={item.title} item={item} index={index} />
        ))}
      </div>
    </section>
  );
}

export function ProposalSection() {
  return (
    <section className="proposal-section" aria-label="Proposal feature">
      <motion.div
        className="proposal-bg"
        initial={{ scale: 1.08, opacity: 0.8 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <Image
          src={photos[14].src}
          alt="Satish lifting Tyla after the proposal under the pink flowering tree"
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
            objectPosition: "center 55%",
          }}
        />
      </motion.div>
      <motion.div
        className="proposal-copy"
        initial={{ opacity: 0, y: 34 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.8, delay: 0.15 }}
      >
        <Diamond />
        <p>The yes that changed everything</p>
        <h2>Under the blossoms, forever became real.</h2>
      </motion.div>
    </section>
  );
}

export function ScheduleSection() {
  return (
    <section className="schedule-section" id="schedule">
      <SectionTitle
        eyebrow="The celebration"
        title="An evening made for memories."
        copy="A sample celebration flow is included so the page feels complete. Update these cards once the official programme is set."
      />
      <div className="schedule-grid">
        {schedule.map((item, index) => {
          const Icon = scheduleIcons[item.icon];
          return (
            <GlassCard key={item.title} delay={index * 0.09}>
              <Icon className="card-icon" />
              <p className="card-label">{item.time}</p>
              <h3>{item.title}</h3>
              <span>{item.copy}</span>
            </GlassCard>
          );
        })}
      </div>
    </section>
  );
}

function PhotoTile({ photo, index }: { photo: Photo; index: number }) {
  return (
    <motion.figure
      className={`photo-tile ${photo.className ?? ""}`}
      initial={{ opacity: 0, y: 42, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.65,
        delay: Math.min(index * 0.035, 0.28),
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <Image
        src={photo.src}
        alt={`${photo.title}: ${photo.caption}`}
        fill
        loading={index < 2 ? "eager" : "lazy"}
        sizes="(max-width: 720px) 100vw, (max-width: 1040px) 50vw, 25vw"
      />
      <figcaption>
        <span>{String(index + 1).padStart(2, "0")}</span>
        <div>
          <strong>{photo.title}</strong>
          <p>{photo.caption}</p>
        </div>
      </figcaption>
    </motion.figure>
  );
}

export function GallerySection() {
  return (
    <section className="gallery-section" id="gallery">
      <SectionTitle
        eyebrow="Memory gallery"
        title="The moments that made the invitation."
        copy="All uploaded images are centralized under public/photos and rendered through Next Image for lazy loading and responsive sizing."
      />
      <div className="gallery-grid">
        {photos.map((photo, index) => (
          <PhotoTile key={photo.src} photo={photo} index={index} />
        ))}
      </div>
    </section>
  );
}

function RSVPButton() {
  const [copied, setCopied] = useState(false);

  const shareInvite = async () => {
    const text = `${invite.groom} and ${invite.bride} are getting married. ${invite.hashtag}`;
    try {
      if (navigator.share) {
        await navigator.share({
          title: "Wedding Invitation",
          text,
          url: window.location.href,
        });
        return;
      }

      await navigator.clipboard.writeText(`${text} ${window.location.href}`);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      await navigator.clipboard.writeText(`${text} ${window.location.href}`);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    }
  };

  return (
    <button type="button" className="primary-button" onClick={shareInvite}>
      <Mail size={18} />
      {copied ? "Invite copied" : "Share the invite"}
    </button>
  );
}

export function RsvpSection() {
  return (
    <section className="rsvp-section" id="rsvp">
      <motion.div
        className="rsvp-card"
        initial={{ opacity: 0, y: 44, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.82, ease: [0.16, 1, 0.3, 1] }}
      >
        <SparklesIcon className="rsvp-sparkle" />
        <p className="mini-eyebrow">Formal invitation</p>
        <h2>Kindly join us as we begin forever.</h2>
        <p>
          With love and joy, the families of <strong>{invite.groom}</strong> and{" "}
          <strong>{invite.bride}</strong> invite you to celebrate their wedding.
          Kindly RSVP by clicking the button below.
        </p>
        <div className="rsvp-meta">
          <span>
            <Timer size={16} /> {invite.rsvpDate}
          </span>
          <span>
            <SparklesIcon size={16} /> {invite.hashtag}
          </span>
        </div>
        <div className="rsvp-actions">
          <button type="button" className="primary-button">
            <HeartHandshake size={18} />
            RSVP Now
          </button>
          <RSVPButton />
          <a className="secondary-button" href="#top">
            Back to top
          </a>
        </div>
      </motion.div>
    </section>
  );
}
