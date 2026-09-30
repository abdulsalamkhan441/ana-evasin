import {
  Award,
  Building2,
  Users,
  Clock,
  TrendingUp,
  ShieldCheck,
  BadgeCheck,
  HeartHandshake,
} from "lucide-react";

import type {
  SimpleNavLink,
  HeroSectionConfig,
  DifferenceConfig,
  Agent,
  Property,
  ReviewPageData,
  CTAContentConfig,
  DashboardCardConfig,
  StatBarConfig,
  ValuationConfig,
  FooterConfig,
} from "../types";

/**
 ============================================================
   SITE CONFIG — SINGLE SOURCE OF TRUTH FOR THIS CLIENT
 ============================================================
 * Client: Ana Evasin - CENTURY 21 Energy Realty
 ============================================================
 */

// ----------------------------------------------------------
// Navbar.tsx
// ----------------------------------------------------------

export const navbarLinks: SimpleNavLink[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/aboutus" },
  { name: "Services", href: "/services" },
  { name: "Properties", href: "/#properties" },
  { name: "Insights", href: "/#insights" },
  { name: "Contact", href: "/#contact" },
];

// ----------------------------------------------------------
// HeroSection.tsx
// ----------------------------------------------------------

export const heroConfig: HeroSectionConfig = {
  brand: {
    initials: "AE",
    name: "Ana Evasin",
    title: "CENTURY 21 Energy Realty",
    heroImage: "/3.jpg",
    heroImageAlt: "Prince George Real Estate",
  },
  hero: {
    eyebrow: "CENTURY 21 Energy Realty · Prince George, BC",
    headingMain: "Buy, sell, and invest with",
    headingItalic: "confidence",
    headingEnd: "with Ana Evasin.",
    subheading:
      "My goal is to help you reach your goals. Dedicated to understanding my clients' needs, providing exceptional real estate experiences, and ensuring buying or selling is a positive process.",
    primaryCtaText: "Start a Conversation",
    primaryCtaLink: "/aboutus",
    headerCtaText: "Get In Touch",
    headerCtaLink: "/#contact",
  },
  navLinks: [
    { name: "Home", href: "/", active: true },
    { name: "About", href: "/", active: false },
    { name: "Services", href: "/", active: false },
    { name: "Properties", href: "/#properties", active: false },
    { name: "Insights", href: "/#insights", active: false },
    { name: "Contact", href: "/#contact", active: false },
  ],
  stats: [
    { icon: Award, value: "$15M+", suffix: "", label: "worth of real estate sold" },
    { icon: Building2, value: "15+", suffix: " Yrs", label: "of experience" },
    { icon: Users, value: "96%", suffix: "", label: "client satisfaction" },
    { icon: Clock, value: "400+", suffix: "", label: "clients served" },
  ],
};

// ----------------------------------------------------------
// WhyUsSection.tsx ("The Ana Evasin Difference")
// ----------------------------------------------------------

export const differenceConfig: DifferenceConfig = {
  eyebrow: "/ Why Choose Ana?",
  headingMain: "The Ana Evasin ",
  headingItalic: "Difference",
  subtext:
    "Bringing experience, drive, and devotion to understanding your unique needs across Prince George and surrounding BC communities.",
  callNowText: "Call Cell",
  callNowHref: "tel:2505522577",
  bookConsultationText: "Book a Consultation",
  bookConsultationHref: "#contact",
  features: [
    {
      icon: TrendingUp,
      title: "Proven Track Record",
      description:
        "Over $15M+ in real estate sold with a commitment to maximizing value for buyers, sellers, and investors.",
    },
    {
      icon: ShieldCheck,
      title: "Trusted Local Expertise",
      description:
        "Deep understanding of the Prince George market, established neighborhoods, and ongoing community developments.",
    },
    {
      icon: BadgeCheck,
      title: "Licensed Sales Representative",
      description:
        "Professional guidance backed by the trusted global strength of CENTURY 21 Energy Realty.",
      linkText: "Our services",
      linkHref: "/services",
    },
    {
      icon: HeartHandshake,
      title: "Client-Centered Devotion",
      description:
        "Focused on creating positive, seamless experiences tailored specifically to reaching your goals.",
      linkText: "Learn about Ana",
      linkHref: "/aboutus",
    },
  ],
};

// ----------------------------------------------------------
// AgentSection.tsx
// ----------------------------------------------------------

export const agent: Agent = {
  name: "Ana Evasin",
  role: "Sales Representative | CENTURY 21 Energy Realty",
  bio: "My goal is to help you reach your goals. Whether you are buying or selling a home, I have the experience and drive to help you. I am devoted to understanding my client's needs, providing exceptional real estate experiences, and ensuring the process of buying and selling a home is a positive one.",
  image: "/user1.2.jpg",
  specialties: [
    "Residential Sales & Buyer Representation",
    "First-Time Homebuyers & Equity Building Opportunities",
    "Renovation & Handyman Special Properties",
    "Manufactured & Mobile Homes",
    "Free Home Market Evaluations",
    "Prince George & Surrounding Area Expertise",
  ],
  recentClosings: [
    { address: "Residential Sales & Purchases", neighbourhood: "Prince George & Area", price: "Guidance" },
    { address: "Renovation & Value Opportunities", neighbourhood: "Equity Building Projects", price: "Potential" },
    { address: "Free Market Evaluation", neighbourhood: "Clear Property Insights", price: "Value" },
    { address: "Client Satisfaction Focus", neighbourhood: "400+ Satisfied Clients", price: "Trust" },
  ],
};

// ----------------------------------------------------------
// PropertiesCarousel.tsx (7 Total Listings — Provided in Center)
// ----------------------------------------------------------

export const properties: Property[] = [
  {
    id: "1",
    number: "01/07",
    title: "Heritage District Residence",
    subtitle: "Established neighborhood property close to local schools and amenities.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    price: "Contact for Price",
    category: "residential",
    status: "Active",
    specs: { size: "1,850 sq ft", beds: "3 Beds", baths: "2 Baths" },
    mls: "MLS® 202610001",
  },
  {
    id: "2",
    number: "02/07",
    title: "College Heights Family Home",
    subtitle: "Spacious layout with modern updates in a quiet, desirable subdivision.",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1200&auto=format&fit=crop",
    price: "Contact for Price",
    category: "residential",
    status: "Active",
    specs: { size: "2,200 sq ft", beds: "4 Beds", baths: "3 Baths" },
    mls: "MLS® 202610002",
  },
  // --- USER LISTING 1 (MIDDLE) ---
  {
    id: "3",
    number: "03/07",
    title: "2275 Webber Crescent",
    subtitle: "Opportunity awaits! 3-bed, 2-bath renovation project ready to build equity. Functional oak kitchen, partial basement, large yard, deck & shop.",
    image: "/listing/listing1.jpg",
    price: "$299,000",
    category: "residential",
    status: "Active",
    specs: { size: "Spacious Lot", beds: "3 Beds", baths: "2 Baths" },
    mls: "42016",
  },
  // --- USER LISTING 2 (MIDDLE) ---
  {
    id: "4",
    number: "04/07",
    title: "92-5130 North Nechako Road",
    subtitle: "Affordable living in Caledonia Mobile Home Park! Quiet dead-end lane, brand-new metal roof, prepped for R24 insulation, split bedroom plan.",
    image: "/listing/listing2.jpg",
    price: "$58,900",
    category: "residential",
    status: "Active",
    specs: { size: "930 sq ft", beds: "2 Beds", baths: "1 Bath" },
    mls: "63626",
  },
  {
    id: "5",
    number: "05/07",
    title: "Foothills Modern Split-Level",
    subtitle: "Bright open concept layout with mountain views and private backyard space.",
    image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=1200&auto=format&fit=crop",
    price: "Contact for Price",
    category: "residential",
    status: "Active",
    specs: { size: "2,100 sq ft", beds: "4 Beds", baths: "2.5 Baths" },
    mls: "MLS® 202610005",
  },
  {
    id: "6",
    number: "06/07",
    title: "Hart Highway Rancher",
    subtitle: "Comfortable single-level living with large workshop and ample vehicle parking.",
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=1200&auto=format&fit=crop",
    price: "Contact for Price",
    category: "portfolio",
    status: "Active",
    specs: { size: "1,600 sq ft", beds: "3 Beds", baths: "2 Baths" },
    mls: "MLS® 202610006",
  },
  {
    id: "7",
    number: "07/07",
    title: "Nechako River View Acreage",
    subtitle: "Scenic property offering privacy, beautiful natural surroundings, and custom potential.",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1200&auto=format&fit=crop",
    price: "Contact for Price",
    category: "portfolio",
    status: "Active",
    specs: { size: "3,100 sq ft", beds: "4 Beds", baths: "3 Baths" },
    mls: "MLS® 202610007",
  },
];

// ----------------------------------------------------------
// ReviewsGlassSection.tsx
// ----------------------------------------------------------

export const reviewPages: ReviewPageData[] = [
  {
    featured: {
      name: "Client Satisfaction First",
      quote: "My goal is to help you reach your goals with devotion and exceptional service.",
      tags: ["Prince George", "96% Client Satisfaction"],
      handle: "Ana Evasin | CENTURY 21",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
      rating: 5,
    },
    quoteBanner: {
      quote: "Devoted to understanding my clients' needs and ensuring buying or selling a home is a positive, rewarding process.",
      name: "Ana Evasin",
      role: "Sales Representative",
      initials: "AE",
      rating: 5,
    },
    wide: {
      name: "Exceptional Service",
      timeAgo: "15+ Years Experience",
      quote: "Over 400+ clients served across Prince George and surrounding areas with honest advice and dedicated drive.",
      rating: 5,
    },
    hero: {
      name: "Ana Evasin",
      role: "Sales Representative | CENTURY 21 Energy Realty",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
      quote: "Experience & Drive",
      body: "Ana brings over 15 years of local real estate experience and a personal commitment to every client's journey.",
      rating: 5,
    },
    badge: { reviewCount: "400+", ratingLabel: "Clients Served", clientsCount: "96% Satisfaction" },
    split: {
      date: "Prince George, BC",
      title: "Your Trusted Local Advisor",
      quote: "Helping families, buyers, and investors navigate the local real estate market with ease.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
    },
    search: { title: "Prince George Real Estate", body: "Comprehensive buying, selling, and evaluation services tailored to your goals." },
    teal: {
      name: "Market Expertise",
      body: "Utilizing deep community knowledge and CENTURY 21's global network to achieve optimal outcomes.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      likes: 0,
      views: "$15M+ Sold",
    },
  },
];

// ----------------------------------------------------------
// FinalCTASection.tsx
// ----------------------------------------------------------

export const ctaConfig: CTAContentConfig = {
  headingMain: "Ready to Reach Your",
  headingItalic: "Real Estate Goals?",
  subheading:
    "Connect with Ana Evasin at CENTURY 21 Energy Realty for personalized guidance across Prince George, BC.",
  bulletPoints: [
    "15+ years of real estate experience and over 400+ satisfied clients",
    "Free, no-obligation home evaluations with clear market insights",
    "Devoted, personal support for buying, selling, and equity-building projects",
  ],
  primaryCtaText: "Book Consult",
  primaryCtaLink: "#contact",
  secondaryCtaText: "Call Ana (250) 552-2577",
  secondaryCtaLink: "tel:2505522577",
  agentName: "Ana Evasin",
  agentTitle: "Sales Representative",
};

export const dashboardCardConfig: DashboardCardConfig = {
  title: "Ana Evasin's Commitment",
  subtitle: "Prince George, British Columbia",
  stats: [
    { label: "Satisfaction", value: "96%" },
    { label: "Experience", value: "15+ Years" },
  ],
  marketStatusLabel: "Status",
  marketStatusValue: "Ready to Help",
  badgeName: "CENTURY 21 Energy Realty",
  badgeTagline: "Devoted to Your Real Estate Goals",
};

export const ctaStatBars: StatBarConfig[] = [
  { label: "Experience", value: "15+ Years", color: "bg-accent-champagne", valueColor: "text-accent-champagne" },
  { label: "Satisfaction", value: "96%", color: "bg-emerald-400", valueColor: "text-emerald-400" },
];

// ----------------------------------------------------------
// HomeValuationSection.tsx
// ----------------------------------------------------------

export const valuationConfig: ValuationConfig = {
  sectionTag: "Home Evaluation",
  title: {
    main: "What Is Your Home",
    highlight: "Really Worth?",
  },
  description:
    "Planning to sell or curious about your home's current market value? Request a free, no-obligation evaluation prepared personally by Ana Evasin.",
  contactDetails: {
    phone: { label: "Cell: (250) 552-2577", href: "tel:2505522577" },
    email: { label: "ana.evasin@century21.ca", href: "mailto:ana.evasin@century21.ca" },
    location: "CENTURY 21 Energy Realty, Prince George, BC",
  },
  propertyOptions: [
    { label: "Single Family Home", value: "Single Family Home" },
    { label: "Manufactured / Mobile Home", value: "Mobile Home" },
    { label: "Townhouse / Condo", value: "Townhouse" },
    { label: "Investment / Renovation Project", value: "Investment" },
  ],
};

// ----------------------------------------------------------
// FooterSection.tsx
// ----------------------------------------------------------

export const footerConfig: FooterConfig = {
  headerImage: {
    src: "/7.jpg",
    alt: "CENTURY 21 Energy Realty - Ana Evasin",
  },
  exploreSection: {
    title: "Explore",
    links: [
      { label: "Buy & Sell Real Estate", href: "#services" },
      { label: "Free Home Evaluation", href: "#valuation" },
      { label: "Featured Properties", href: "#properties" },
      { label: "About Ana Evasin", href: "#about" },
    ],
  },
  resourcesSection: {
    title: "Resources",
    links: [
      { label: "First-Time Buyer Guide", href: "#services" },
      { label: "Equity Building Projects", href: "#services" },
      { label: "Client Testimonials", href: "#testimonials" },
      { label: "Get in Touch", href: "#contact" },
    ],
  },
  legalSection: {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#privacy" },
      { label: "Terms of Service", href: "#terms" },
      { label: "BC Real Estate Compliance", href: "#disclaimer" },
    ],
  },
  contactDetails: {
    location: "Prince George, British Columbia",
    phonePrimary: { label: "Cell: (250) 552-2577", href: "tel:2505522577" },
    phoneSecondary: { label: "Office: (250) 564-2100", href: "tel:2505642100" },
    contactLink: { label: "Email: ana.evasin@century21.ca", href: "mailto:ana.evasin@century21.ca" },
  },
  brandBar: {
    brandName: "ANA EVASIN",
    badgeText: "CENTURY 21 Energy Realty",
    footerLinks: [
      { label: "Terms & Conditions", href: "#terms" },
      { label: "Privacy Policy", href: "#privacy" },
      { label: "Sitemap", href: "#sitemap" },
    ],
    copyrightHolder: "Ana Evasin - CENTURY 21 Energy Realty.",
    copyrightRights: "All rights reserved.",
  },
};