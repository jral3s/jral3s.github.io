/* ─────────────────────────────────────────────────────────────
   SITE CONTENT — edit this file to update projects, photos,
   and experience. No build step needed; just commit & push.
   ───────────────────────────────────────────────────────────── */

const PROJECTS = [
  {
    title: "Lifespan Proteomics of APOE Genotype Across Genetic Ancestries",
    year: "2026",
    category: "Research",
    description:
      "Analyzed neuroimmune (NULISA, 131 analytes; n=707) and unbiased proteomic (Olink, 5,420 analytes; n=170) biomarkers across the adult lifespan in APOE ε3/ε3 vs. ε4/ε4 carriers of African, European, and Hispanic genetic ancestry from the Mount Sinai BioMe cohort. Identified age 44 as the inflection point where brain-derived pTau-217 diverges by genotype, plus ancestry-specific protein and pathway differences. Poster presentation, AAIC 2026.",
    tags: ["Alzheimer's Disease", "Proteomics", "Biostatistics", "Genetic Ancestry"],
    image: "assets/img/projects/aaic.jpg",
    links: [],
  },
  {
    title: "VQA-Driven Event Maps for Low-Vision Navigation",
    year: "2025",
    category: "Research",              // used for the filter chips
    description:
      "Proposed Event Maps, a map representation that tags GPS-located image embeddings with user-defined events (traffic signals, obstacles, anomalies) using pretrained visual question answering models. Evaluated ViLT, BLIP, and BLIP-2 on 1,300+ annotated Barcelona street images, analyzing prompt sensitivity for assistive navigation. Poster at ICRA 2025, with IRI (CSIC-UPC) and Biel Glasses.",
    tags: ["Vision-Language Models", "VQA", "Assistive Tech", "Computer Vision"],
    image: "assets/img/projects/vqa.jpg",
    links: [],                          // e.g. [{ label: "Poster", url: "..." }]
  },
  {
    title: "Enhancing 3D Scene Graph Generation with Multimodal Embeddings",
    year: "2024",
    category: "Research",
    description:
      "M.Eng. thesis in MIT SPARK Lab (advised by Luca Carlone). Added a Viewpoint layer of CLIP embeddings to 3D scene graphs, enabling after-the-fact open-vocabulary queries and zero-shot region segmentation. Improved on ontology-based methods, especially in outdoor and unstructured environments.",
    tags: ["3D Scene Graphs", "CLIP", "Robotics", "Zero-shot"],
    image: "assets/img/projects/thesis.jpg",
    links: [],                          // e.g. [{ label: "Thesis", url: "..." }]
  },
  {
    title: "Triple Pendulum Trapeze Artist",
    year: "2023",
    category: "Course Project",
    description:
      "Built a robotic trapeze artist modeled as a triple pendulum (one passive, two actuated joints) and compared sinusoidal vs. swing-based controllers for building lift from a standstill. The swing-based controller accounted for each swing's starting angle and produced consistent momentum gain. MIT 2.740 Bio-Inspired Robotics, with Ita Futran.",
    tags: ["Controls", "Simulation", "Mechatronics", "PD Control"],
    image: "assets/img/projects/trapeze.jpg",
    links: [],
  },
  {
    title: "Low-Cost Stretcher for Moving Health",
    year: "2023",
    category: "Course Project",
    description:
      "Designed and constructed a low-cost lightweight steel stretcher with fold-out, locking legs for Moving Health's community ambulances in rural Ghana, aiding health workers in accessing and providing care to communities without healthcare or transportation infrastructure. MIT D-Lab, team of four.",
    tags: ["Global Health", "Mechanical Design", "Fabrication", "Prototyping"],
    image: "assets/img/projects/stretcher.jpg",
    links: [{ label: "Moving Health", url: "https://www.moving.health" }],
  },
  {
    title: "Digital Palpation for Thyroid Cancer Diagnosis",
    year: "2023",
    category: "Course Project",
    description:
      "Developed a device to classify thyroid nodule tissue by injecting a precise microliter volume of water and measuring the resulting pressure response. Prototyped and compared a commercial syringe-pump system against a custom \"Bernoulli tube\" design. MIT 2.75 Medical Device Design, team of six.",
    tags: ["Medical Devices", "Sensing", "Motor Control", "Data Acquisition"],
    image: "assets/img/projects/palpation.jpg",
    links: [],
  },
  {
    title: "Magnetic Skee-Ball",
    year: "2022",
    category: "Course Project",
    description:
      "A portable, battery-powered coil gun game: a self-starting boost converter feeds a potentiometer-controlled buck converter that sets the voltage across a two-stage solenoid launcher, firing a magnet at scoring holes. Designed and constructed the power electronics, control circuitry, and laser-cut stage. MIT 6.131 Power Electronics.",
    tags: ["Power Electronics", "Circuit Design", "Embedded Systems"],
    image: "assets/img/projects/skeeball.jpg",
    links: [],
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
    title: "Associate Researcher",
    org: "Elahi Lab, Icahn School of Medicine at Mount Sinai",
    description: "Biostatistical analysis across clinical, proteomic, genomic, transcriptomic, and imaging datasets, including lifespan biomarker studies of APOE genotype and genetic ancestry in Alzheimer's disease.",
    tags: ["Biostatistics", "Proteomics", "Genomics", "Alzheimer's Disease"],
  },
  {
    dates: "Sept 2023 — Apr 2025",  // TODO: confirm start date
    title: "Graduate Student and Associate Researcher",
    org: "MIT SPARK Lab — Sensing, Perception, Autonomy, and Robot Kinetics",
    description: "Research at the cutting edge of robotics and autonomous systems. M.Eng. thesis on enhancing 3D scene graph generation with vision-language model embeddings, advised by Luca Carlone.",
    tags: ["Robotics", "3D Scene Graphs", "Vision-Language Models"],
  },
  {
    dates: "2023 — 2024",
    title: "M.Eng., Electrical Engineering & Computer Science",
    org: "Massachusetts Institute of Technology",
    description: "Thesis: Enhancing 3D Scene Graph Generation with Multimodal Embeddings (SPARK Lab). Graduate coursework included Advanced Natural Language Processing, Machine Learning for Healthcare, Robotic Manipulation, and Visual Navigation for Autonomous Vehicles.",
    tags: ["NLP", "ML for Healthcare", "Robotics"],
  },
  {
    dates: "2019 — 2023",
    title: "S.B., Electrical Engineering & Computer Science",
    org: "Massachusetts Institute of Technology",
    description: "Coursework spanning algorithms, software construction, machine learning, signal processing, power electronics, robotics, and medical device design. Director & Coordinator of Camp Kesem at MIT, raising ~$160k to run a free summer camp for 150+ children affected by a parent's cancer.",
    tags: ["Algorithms", "Machine Learning", "Robotics", "Embedded Systems"],
  },
];
