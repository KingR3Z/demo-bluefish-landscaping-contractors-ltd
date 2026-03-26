export const client = {
  // Business Details
  name: "BlueFish Landscaping Contractors Ltd",
  tagline: "Landscaping | Gardens | Patios | Driveways",
  description: "Professional landscaper services in Farnham.",
  category: "Landscaper",
  yearEstablished: "",

  // Contact
  phone: "01252 412449",
  email: "",
  website: "",

  // Location
  address: "Farnham",
  city: "Farnham",
  county: "",
  postcode: "",
  basedIn: "Farnham",

  // People
  founderName: "",
  founderSurname: "",
  founderRole: "Director",

  // Social
  facebook: "",
  instagram: "",
  linkedin: "",
  twitter: "",

  // Reviews
  googleRating: "5",
  reviewCount: "2",

  // Services
  services: [
    { title: "Landscaping", description: "Complete garden transformations with expert hard and soft landscaping.", icon: "tree" },
    { title: "Garden Maintenance", description: "Regular garden care, lawn mowing, hedge trimming and seasonal tidy-ups.", icon: "shovel" },
    { title: "Fencing & Decking", description: "Quality timber fencing, gates, decking and outdoor structures.", icon: "wall" },
    { title: "Paving & Patios", description: "Professional patio and pathway installations in natural stone and block.", icon: "flower" },
  ],

  // DO NOT CHANGE — template defaults (desktop 16:9 + mobile 9:16 frames)
  cinematic: {
    frameCount: 181,
    frameDir: "/frames/",
    framePrefix: "frame_",
    frameExtension: ".jpg",
    framePadding: 4,
    scrollLength: "500vh",
    mobileFrameCount: 181,
    mobileFrameDir: "/frames-mobile/",
    scrubSpeed: 0.5,
    heroStillImage: "/images/hero-still.jpg",
    heroStillImageMobile: "/images/hero-still-mobile.jpg",
  },

  // DO NOT CHANGE — template defaults
  beforeAfter: {
    beforeImage: "/images/before.jpg",
    afterImage: "/images/after.jpg",
    beforeLabel: "Current Garden",
    afterLabel: "Our Vision",
  },

  // DO NOT CHANGE — template defaults
  transformations: [
    { before: "/images/before.jpg", after: "/images/after.jpg", label: "Complete Garden Renovation" },
    { before: "/images/patio-before.jpg", after: "/images/patio-after.jpg", label: "Patio Installation" },
    { before: "/images/front-before.jpg", after: "/images/front-after.jpg", label: "Front Garden" },
    { before: "/images/lawn-before.jpg", after: "/images/lawn-after.jpg", label: "Lawn Restoration" },
    { before: "/images/fence-before.jpg", after: "/images/fence-after.jpg", label: "New Fencing" },
    { before: "/images/deck-before.jpg", after: "/images/deck-after.jpg", label: "Decking & Furniture" },
    { before: "/images/path-before.jpg", after: "/images/path-after.jpg", label: "Garden Path" },
    { before: "/images/border-before.jpg", after: "/images/border-after.jpg", label: "Planting Borders" },
    { before: "/images/drive-before.jpg", after: "/images/drive-after.jpg", label: "Driveway" },
  ] as { before: string; after: string; label: string }[],

  // Reviews — placeholder
  reviews: [
    { name: "Emma Walton", rating: 5, text: "I can fully recommend James and his team from BlueFish.  We had a large landscaping project that included a complex terrace wall and steps.  James was the one contractor who was confident in taking on our plans.  Their communication and quality of workmanship was exemplary - we were keeping it to an Arts & Crafts style that included some more intricate styles and materials. The team were polite and kept a very clean and tidy site. We now have the most beautiful terrace and landscaping that draws many positive comments.  We were delighted with the finished result.", date: "a year ago" },
    { name: "stephanie Edwards", rating: 5, text: "We cant recommend James and the Bluefish team highly enough. From our first meeting with James he explained what he would be doing and when and he delivered on EVERY part of our huge project professionally, precisely and on time! James and the team are a joy to have around the garden - they work hard, efficiently and provided useful and practical guidance for ongoing maintenance . We immediately booked them back in for another project which they delivered as professionally as the first. They have certainly raised the bar  - What a find!", date: "a year ago" },
    { name: "Kimberly Craner", rating: 5, text: "Bluefish did an amazing job! Highly recommend! They were reliable, personable, and meticulous. We won't go any where else!", date: "a year ago" },
    { name: "Paul Gunner", rating: 5, text: "We have used Bluefish for both landscaping and regular maintenance of our garden.  They are a fantastic, hard-working, personable team and I thoroughly recommend them!", date: "a year ago" },
    { name: "Adrian Lajtha", rating: 5, text: "Excellent team.  Completely reliable, knowledgeable and very hard-working - and a pleasure to have around.  Strongly recommend them.", date: "a year ago" },
    { name: "Luke Howard Taylor", rating: 5, text: "BlueFish are exemplary providers of garden maintenance, landscape and building services. I have no hesitation in recommending them to all.", date: "a year ago" },
  ] as { name: string; rating: number; text: string; date: string; badge?: string }[],

  // SEO
  seo: {
    title: "BlueFish Landscaping Contractors Ltd | Landscaper in Farnham",
    description: "Professional landscaper in Farnham. 5.0-star rated on Google. Call for a free quote.",
  },
};
