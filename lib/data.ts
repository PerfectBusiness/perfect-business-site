// Single source of truth for site content.
// Structure mirrors the future CMS collections (Track Record, People, Content, Programming).

export type Vertical = "Hospitality" | "Technology / Marketplaces" | "Food & Beverage";

export interface Company {
  name: string;
  vertical: Vertical;
  oneLiner: string;
  exited?: boolean;
}

export const companies: Company[] = [
  { name: "Ashland Hill", vertical: "Hospitality", oneLiner: "Santa Monica gastropub & event venue" },
  { name: "Golden Bull", vertical: "Hospitality", oneLiner: "Santa Monica steakhouse institution" },
  { name: "Pouring With Heart", vertical: "Hospitality", oneLiner: "LA craft-cocktail hospitality group" },
  { name: "Cole's French Dip", vertical: "Hospitality", oneLiner: "117-year-old DTLA icon, stewarded to new ownership", exited: true },
  { name: "Vyblee", vertical: "Technology / Marketplaces", oneLiner: "Hotel in-room dining & branded-amenities marketplace" },
  { name: "Westside Rentals", vertical: "Technology / Marketplaces", oneLiner: "SoCal rentals marketplace \u2014 acquired by CoStar (Apartments.com)", exited: true },
  { name: "AusNutz", vertical: "Food & Beverage", oneLiner: "Premium Australian macadamia brand \u2014 \u201cThe Original Supernut\u201d" },
];

export const verticals: Vertical[] = ["Hospitality", "Technology / Marketplaces", "Food & Beverage"];

export interface Person {
  name: string;
  role: string;
  initials: string;
  bio: string;
}

// Public bench — advisors & mentors (no owner surfaced).
export const people: Person[] = [
  { name: "Advisor — Hospitality", role: "Operator in Residence", initials: "H", bio: "Multi-venue hospitality operator; scaling restaurants and bars into durable brands." },
  { name: "Advisor — Marketplaces", role: "Growth Mentor", initials: "M", bio: "Built and exited a category-defining online marketplace over two decades." },
  { name: "Advisor — Capital", role: "Investment Mentor", initials: "C", bio: "Guides founders on fundraising readiness, structure, and paths to exit." },
  { name: "Advisor — Brand", role: "Brand & GTM Mentor", initials: "B", bio: "Turns positioning into pipeline for consumer and service businesses." },
];

export interface ContentItem {
  title: string;
  type: "Playbook" | "Interview" | "Story";
  excerpt: string;
  meta: string;
  thumb: "" | "g2" | "g3";
}

export const content: ContentItem[] = [
  { title: "Building for the exit from day one", type: "Playbook", excerpt: "What a 25-year marketplace build teaches about designing a business to be acquired.", meta: "Read \u00b7 8 min", thumb: "" },
  { title: "Hospitality as a growth engine", type: "Interview", excerpt: "How operator discipline turns restaurants and bars into durable, scalable brands.", meta: "Watch \u00b7 22 min", thumb: "g2" },
  { title: "Stewarding a 117-year-old icon", type: "Story", excerpt: "Preserving a legacy brand through a transition \u2014 the case for legacy over liquidation.", meta: "Read \u00b7 6 min", thumb: "g3" },
];

export interface EventItem {
  day: string;
  month: string;
  title: string;
  detail: string;
}

export const programming: EventItem[] = [
  { day: "08", month: "Aug", title: "Fundraising readiness, in practice", detail: "Workshop \u00b7 Santa Monica & livestream" },
  { day: "21", month: "Aug", title: "From one location to a brand", detail: "Panel \u00b7 Operators in hospitality" },
  { day: "04", month: "Sep", title: "Marketplaces that get acquired", detail: "Fireside \u00b7 Building to exit" },
  { day: "18", month: "Sep", title: "Brand as a growth lever", detail: "Workshop \u00b7 Consumer & F&B" },
];
