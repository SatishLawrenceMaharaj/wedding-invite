export type Photo = {
  src: string;
  title: string;
  caption: string;
  className?: string;
};

export type ScheduleItem = {
  time: string;
  title: string;
  copy: string;
  icon: "ceremony" | "goldenHour" | "reception";
};

export const invite = {
  groom: "Satish Maharaj",
  bride: "Tyla Ready",
  date: "Date to be announced",
  time: "Time to be announced",
  venue: "Hilstein Manor",
  location: "Trinidad & Tobago",
  receptionStart: "4:00 PM",
  guests: "200 (Tentative)",
  rsvpDate: "RSVP by 2026-12-31",
  hashtag: "#ReadyForForever",
  palette: ["Black Tie", "Ivory Silk", "Champagne Glow", "Old Gold"],
  splineSceneUrl: process.env.NEXT_PUBLIC_SPLINE_SCENE_URL,
} as const;

export const photos: Photo[] = [
  { src: "/photos/01-sunlit-staircase-selfie.jpg", title: "Sunlit smiles", caption: "The kind of joy that looks like home.", className: "wide" },
  { src: "/photos/02-block-wall-closeup.jpg", title: "Always us", caption: "Soft, silly, and completely ourselves.", className: "wide" },
  { src: "/photos/03-night-park-cuddle.jpg", title: "Night air", caption: "A quiet little world with just the two of us.", className: "tall" },
  { src: "/photos/04-christmas-lights-wide.jpg", title: "Lights everywhere", caption: "Tiny figures, giant memories.", className: "wide" },
  { src: "/photos/05-escalator-palms.jpg", title: "Laughing under palms", caption: "The easy kind of love.", className: "tall" },
  { src: "/photos/06-graduation-smiles.jpg", title: "Milestones", caption: "Celebrating every answered prayer together.", className: "tall" },
  { src: "/photos/07-dinner-date-table.jpg", title: "Dinner dates", caption: "Menus, jokes, and choosing each other again.", className: "wide" },
  { src: "/photos/08-dinner-selfie.jpg", title: "Table for two", caption: "A favourite chapter in progress.", className: "wide" },
  { src: "/photos/09-cookie-date.jpg", title: "Cookie date", caption: "Simple days made special.", className: "square" },
  { src: "/photos/10-graduation-sky.jpg", title: "Under the clouds", caption: "Proud moments, bright futures.", className: "wide" },
  { src: "/photos/11-river-adventure.jpg", title: "Adventure days", caption: "Every journey feels lighter together.", className: "wide" },
  { src: "/photos/12-devils-bridge.jpg", title: "Island memories", caption: "Love with sea breeze in the background.", className: "tall" },
  { src: "/photos/13-proposal-under-pink-tree.jpg", title: "The question", caption: "Under pink blossoms, forever began.", className: "tall feature" },
  { src: "/photos/14-proposal-embrace.jpg", title: "The yes", caption: "A hug that said everything.", className: "tall" },
  { src: "/photos/15-proposal-lift.jpg", title: "Pure joy", caption: "She said yes. The world got brighter.", className: "tall" },
  { src: "/photos/16-engagement-ring-tree.jpg", title: "The ring", caption: "A promise beneath the blossoms.", className: "tall" },
  { src: "/photos/17-soft-restaurant-selfie.jpg", title: "Soft evening", caption: "Golden light and familiar smiles.", className: "tall" },
  { src: "/photos/18-christmas-village.jpg", title: "Holiday magic", caption: "A little wonder, a lot of love.", className: "tall" },
];

export const heroPhotos = [photos[0], photos[12], photos[15], photos[5], photos[17]];

export const schedule: ScheduleItem[] = [
  { time: "4:20 PM", title: "Guests Arrive", copy: "Music & light refreshments (non-alcoholic)", icon: "reception" },
  { time: "5:00 PM", title: "Ceremony", copy: "A reverent, joy-filled moment as Satish and Tyla step into forever. (~20 minutes)", icon: "ceremony" },
  { time: "5:20 PM", title: "Photos & Mingle", copy: "Family & friends photos, music & light refreshments (non-alcoholic drinks and appetizers)", icon: "goldenHour" },
  { time: "6:00 PM", title: "Seating & Introductions", copy: "MC introduces parents, wedding parties and bride & groom", icon: "reception" },
  { time: "6:10 PM", title: "First Dance", copy: "A special moment for the newlyweds", icon: "reception" },
  { time: "6:20 PM", title: "Dinner", copy: "A delicious celebration meal", icon: "reception" },
  { time: "7:10 PM", title: "Speeches", copy: "Best Man, Maid of Honor, Parents, Groom, and open stories", icon: "reception" },
  { time: "8:10 PM", title: "Cake Cutting & Toast", copy: "Sweet moments and heartfelt words", icon: "reception" },
  { time: "8:20 PM", title: "Last Dance", copy: "One more dance before the dance floor opens", icon: "reception" },
  { time: "8:30 PM", title: "Dance Floor", copy: "DJ opens the dance floor for everyone", icon: "reception" },
  { time: "9:15 PM", title: "Send Off", copy: "Bid farewell to the newlyweds", icon: "reception" },
];

export const story = [
  { label: "The beginning", title: "A love that felt easy", copy: "From ordinary days to unforgettable adventures, the story kept becoming clearer: this was home.", photo: photos[1] },
  { label: "The becoming", title: "Growing through every season", copy: "Graduations, island trips, dinner dates, quiet laughs, big dreams - every chapter made the bond stronger.", photo: photos[5] },
  { label: "The promise", title: "Under the pink blossoms", copy: "Then came the day beneath the flowering tree: one knee, one ring, one yes, and a lifetime ahead.", photo: photos[12] },
];
