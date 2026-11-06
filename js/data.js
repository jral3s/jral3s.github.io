/* ─────────────────────────────────────────────────────────────
   SITE CONTENT — edit this file to update projects, photos,
   and experience. No build step needed; just commit & push.
   ───────────────────────────────────────────────────────────── */

const PROJECTS = [
  {
    title: "Example Research Project",
    year: "2025",
    category: "Research",              // used for the filter chips
    description:
      "One or two sentences on the problem, what you did, and the result. Lead with the outcome if you can.",
    tags: ["Python", "PyTorch", "Clinical data"],
    image: "",                          // optional, e.g. "assets/projects/project1.jpg"
    links: [
      { label: "Paper", url: "#" },
      { label: "Code", url: "#" },
    ],
  },
  {
    title: "Example Course Project",
    year: "2023",
    category: "Coursework",
    description:
      "A class project worth showing off. Mention the course, the team size, and your contribution.",
    tags: ["R", "Statistics"],
    image: "",
    links: [{ label: "Report", url: "#" }],
  },
  {
    title: "Example Side Project",
    year: "2024",
    category: "Software",
    description:
      "Something you built on your own — a tool, an app, a script that saved you hours.",
    tags: ["JavaScript", "Web"],
    image: "",
    links: [{ label: "GitHub", url: "#" }],
  },
];

/* PHOTOS
   To add one: drop the original in assets/photos/originals/ (kept out of git),
   run `python3 scripts/resize_photos.py`, then add a line below.
   `file` is the lowercase name of the generated image; w/h are its aspect ratio
   (stops the grid from jumping while images load).
   `col` (optional) pins a photo to a column on desktop: 0 = left, 1 = middle, 2 = right;
   photos stack top-to-bottom in the order listed. Photos without `col` (and every photo
   on phones, which show 2 columns) go into whichever column is shortest. */
const PHOTOS = [
  // Left column (0)
  { file: "img_6092.jpg", w: 2, h: 3, col: 0 },
  { file: "img_1907.jpg", w: 3, h: 2, col: 0 },
  { file: "img_6237-enhanced-nr.jpg", w: 3, h: 2, col: 0 },
  { file: "img_7067.jpg", w: 2, h: 3, col: 0 },
  { file: "img_9349.jpg", w: 9, h: 14.5, col: 0 },
  // Middle column (1)
  { file: "img_6762.jpg", w: 2, h: 3, col: 1 },
  { file: "img_6836.jpg", w: 2, h: 3, col: 1 },
  { file: "img_6385.jpg", w: 2, h: 3, col: 1 },
  { file: "img_7997.jpg", w: 2, h: 3, col: 1 },
  // Right column (2)
  { file: "img_6797.jpg", w: 3, h: 2, col: 2 },
  { file: "img_6117.jpg", w: 3, h: 2, col: 2 },
  { file: "img_7455.jpg", w: 2, h: 3, col: 2 },
  { file: "img_7631.jpg", w: 2, h: 3, col: 2 },
  { file: "img_9456.jpg", w: 2, h: 3, col: 2 },
];

const EXPERIENCE = [
  {
    dates: "Apr 2025 — Present",
    title: "Computational Associate Researcher",
    org: "Icahn School of Medicine at Mount Sinai",
    description: "What you do here, in a sentence or two.",   // TODO: describe your work
    tags: [],
  },
  {
    dates: "2023 — Apr 2025",                 // TODO: confirm start date
    title: "Graduate Researcher",
    org: "MIT SPARK Lab — Sensing, Perception, Autonomy, and Robot Kinetics",
    description: "Research at the cutting edge of robotics and autonomous systems.",  // TODO: add your specific project
    tags: ["Robotics", "Autonomy", "Perception"],
  },
  {
    dates: "2023 — 2024",
    title: "Master of Engineering, Electrical Engineering & Computer Science",  // TODO: confirm degree name
    org: "Massachusetts Institute of Technology",
    description: "Graduate coursework included Advanced Natural Language Processing, Machine Learning for Healthcare, Robotic Manipulation, and Visual Navigation for Autonomous Vehicles.",
    tags: ["NLP", "ML for Healthcare", "Robotics"],
  },
  {
    dates: "2019 — 2023",
    title: "Bachelor of Science, Electrical Engineering & Computer Science",    // TODO: confirm degree name
    org: "Massachusetts Institute of Technology",
    description: "Coursework spanning algorithms, software construction, machine learning, signal processing, power electronics, robotics, and medical device design. Director & Coordinator of Camp Kesem at MIT, raising ~$160k to run a free summer camp for 150+ children affected by a parent's cancer.",
    tags: ["Algorithms", "Machine Learning", "Robotics", "Embedded Systems"],
  },
];
