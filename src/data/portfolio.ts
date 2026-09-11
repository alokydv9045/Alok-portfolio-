export interface ProfileInfo {
  id: string;
  name: string;
  titles: string[];
  bio: string;
  resumeLink?: string | null;
  githubUrl?: string | null;
  linkedinUrl?: string | null;
  twitterUrl?: string | null;
  emailAddress?: string | null;
  heroImage?: string | null;
}

export interface Stat {
  id: string;
  label: string;
  value: string;
  icon?: string | null;
}

export interface TechSkill {
  id: string;
  name: string;
  category?: string | null;
  iconName?: string | null;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  detailedOverview?: string | null;
  keyFeatures: string[];
  imageUrl?: string | null;
  techStack: string[];
  liveLink?: string | null;
  githubLink?: string | null;
  featured: boolean;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  startDate: string;
  endDate?: string | null;
  description: string;
  current: boolean;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  date: string;
  issuer?: string | null;
  link?: string | null;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  startDate: string;
  endDate?: string | null;
  description?: string | null;
  grade?: string | null;
}

// ─── Profile ────────────────────────────────────────────────────────
export const profileInfo: ProfileInfo = {
  id: "1",
  name: "Alok Yadav",
  titles: ["Full Stack (MERN) Developer", "Startup Builder"],
  bio: "As a Full Stack Developer, I have gained valuable experience in both front-end and back-end technologies. I have worked on end-to-end development processes, designing, developing, and deploying web applications. I have also collaborated closely with cross-functional teams to meet project requirements. I am currently pursuing a Bachelor's degree in Computer Applications at Invertis University, where I am learning the fundamentals of computer science and software engineering. I am passionate about staying updated with the latest trends and technologies in the field, and I am always eager to learn new skills and take on new challenges.",
  resumeLink: "/Alok_Yadav_Resume.pdf",
  githubUrl: "https://github.com/alokydv9045",
  linkedinUrl: "https://www.linkedin.com/in/alokyadav-906920292",
  twitterUrl: "https://twitter.com/alokyadav",
  emailAddress: "ay381891@gmail.com",
  heroImage: "/alok-namecard.jpeg",
};

// ─── Stats ──────────────────────────────────────────────────────────
export const stats: Stat[] = [
  { id: "1", label: "Experience", value: "1+ Yrs", icon: "Layout" },
  { id: "2", label: "Hackathons", value: "5+", icon: "Code" },
  { id: "3", label: "Technologies", value: "15+", icon: "Zap" },
  { id: "4", label: "Startup", value: "5+", icon: "Rocket" },
];

// ─── Skills ─────────────────────────────────────────────────────────
export const techSkills: TechSkill[] = [
  // ─── Frontend (6 items) ───
  { id: "1", name: "React.js", category: "Frontend" },
  { id: "2", name: "Next.js", category: "Frontend" },
  { id: "3", name: "Tailwind CSS", category: "Frontend" },
  { id: "4", name: "HTML5 & CSS3", category: "Frontend" },
  { id: "5", name: "Redux & Context API", category: "Frontend" },
  { id: "6", name: "Responsive Web Design", category: "Frontend" },

  // ─── Backend & Databases (6 items) ───
  { id: "7", name: "Node.js", category: "Backend" },
  { id: "8", name: "Express.js", category: "Backend" },
  { id: "9", name: "PostgreSQL", category: "Backend" },
  { id: "10", name: "MongoDB", category: "Backend" },
  { id: "11", name: "RESTful APIs", category: "Backend" },
  { id: "12", name: "Socket.IO / WebSockets", category: "Backend" },

  // ─── Languages (6 items) ───
  { id: "13", name: "JavaScript", category: "Languages" },
  { id: "14", name: "TypeScript", category: "Languages" },
  { id: "15", name: "Java", category: "Languages" },
  { id: "16", name: "Python", category: "Languages" },
  { id: "17", name: "SQL", category: "Languages" },
  { id: "18", name: "C++ (DSA)", category: "Languages" },

  // ─── Core & Specialized (6 items) ───
  { id: "19", name: "Data Structures & Algorithms", category: "Core" },
  { id: "20", name: "Object-Oriented Programming", category: "Core" },
  { id: "21", name: "System Design Architecture", category: "Core" },
  { id: "22", name: "Generative AI & LLMs", category: "Core" },
  { id: "23", name: "Data Analytics (Power BI)", category: "Core" },
  { id: "24", name: "Database Management (DBMS)", category: "Core" },

  // ─── DevOps & Tools (6 items) ───
  { id: "25", name: "Git & GitHub", category: "DevOps & Tools" },
  { id: "26", name: "Docker", category: "DevOps & Tools" },
  { id: "27", name: "Postman", category: "DevOps & Tools" },
  { id: "28", name: "Linux / Ubuntu", category: "DevOps & Tools" },
  { id: "29", name: "Vercel / Netlify Deployments", category: "DevOps & Tools" },
  { id: "30", name: "Cloudinary (Media Cloud)", category: "DevOps & Tools" },

  // ─── Soft Skills (6 items) ───
  { id: "31", name: "Technical Presentations", category: "Soft Skills" },
  { id: "32", name: "Computer Application Training", category: "Soft Skills" },
  { id: "33", name: "Critical Problem Solving", category: "Soft Skills" },
  { id: "34", name: "Team Collaboration", category: "Soft Skills" },
  { id: "35", name: "Project Management", category: "Soft Skills" },
  { id: "36", name: "Effective Communication", category: "Soft Skills" },
];

// ─── Projects ───────────────────────────────────────────────────────
export const projects: Project[] = [
  {
    id: "1",
    title: "SIVI AI",
    description: "AI-Powered Voice & Automation Assistant exploring a conversational interface where users communicate intent using natural language.",
    detailedOverview: "SIVI AI is an AI-powered assistant focused on creating a more natural and intelligent way for users to interact with computers and digital applications. The system follows an intelligent interaction loop: Speak → Understand → Reason → Execute → Respond. It explores the future of human-computer interaction where software becomes more proactive, conversational and capable of executing tasks based on user intent.",
    keyFeatures: [
      "Voice Interaction & Speech Recognition",
      "Natural Language Understanding",
      "AI-Powered Responses & Intent Detection",
      "Task Automation & Workflows",
      "Conversational Interface",
      "Extensible Architecture"
    ],
    imageUrl: "/sivi.jpeg",
    techStack: ["React.js", "Next.js", "Node.js", "LLM APIs", "Speech Recognition"],
    liveLink: null,
    githubLink: null,
    featured: true,
  },
  {
    id: "2",
    title: "TravelDekho",
    description: "Full-Stack Travel Discovery & Booking Platform simplifying destination discovery, travel packages, and booking management.",
    detailedOverview: "TravelDekho is a full-stack travel platform that provides a digital marketplace-style experience. Users can discover travel options and complete booking-related workflows while administrators and service providers manage the underlying data. It creates a unified digital experience for travel discovery while providing the technical foundation to support vendors and operations.",
    keyFeatures: [
      "Destination Discovery & Travel Packages",
      "User Authentication & Booking Management",
      "Vendor / Service Management",
      "Admin Management Dashboard",
      "Cloud Media Management",
      "Responsive Marketplace Design"
    ],
    imageUrl: "/traveldekho.png",
    techStack: ["Next.js", "React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Cloudinary"],
    liveLink: null,
    githubLink: null,
    featured: true,
  },
  {
    id: "3",
    title: "Invertis Bus Saarthi",
    description: "Real-Time Campus Transportation Platform providing users and administrators with real-time transit information.",
    detailedOverview: "Invertis Bus Saarthi connects transportation operations with students and administrators through a centralized real-time platform. It uses WebSockets (Socket.IO) to maintain persistent communication, allowing live transportation changes and location data to be pushed to users as they occur without constant page refreshes.",
    keyFeatures: [
      "Live Bus Tracking via GPS",
      "Route & Bus Management",
      "Real-Time Updates (Event-driven)",
      "Seat / Capacity Information",
      "Transportation Admin Dashboard"
    ],
    imageUrl: "/bus-sarthi.png",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.IO", "REST APIs"],
    liveLink: null,
    githubLink: null,
    featured: true,
  },
  {
    id: "4",
    title: "AI School ERP",
    description: "AI-Powered School Management Platform designed to digitize academic, administrative and operational workflows.",
    detailedOverview: "AI School ERP provides a unified platform where administrators, teachers, and students can access role-relevant information. It centralizes institutional data while introducing automation and AI-assisted analysis for student performance, attendance patterns, and early identification of performance trends to support administrative decisions.",
    keyFeatures: [
      "Student & Teacher Management",
      "Attendance & Fee Management",
      "Academic & Timetable Management",
      "AI Capabilities & Analytics Insights",
      "Role-Based Architecture (RBAC)"
    ],
    imageUrl: "/Erp systems.png",
    techStack: ["Next.js", "React.js", "Node.js", "FastAPI", "MongoDB", "MySQL", "AI APIs"],
    liveLink: null,
    githubLink: null,
    featured: true,
  },
  {
    id: "5",
    title: "Smart Complaint System",
    description: "Digital Complaint & Issue Resolution Platform designed to simplify the process of reporting and resolving organizational issues.",
    detailedOverview: "The Smart Complaint System provides a single platform where users can submit complaints, departments can manage assigned issues, and administrators can monitor the resolution process. It establishes a clear lifecycle: Complaint Submission → Department Assignment → Investigation → Resolution → Verification → Closure.",
    keyFeatures: [
      "Complaint Registration & Categorization",
      "Department Assignment & Routing",
      "Status Tracking Lifecycle",
      "Evidence & Media Uploads",
      "Role-Based Access Control",
      "Admin Monitoring Dashboard"
    ],
    imageUrl: "/feedback.png",
    techStack: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "REST APIs"],
    liveLink: null,
    githubLink: null,
    featured: true,
  },
  {
    id: "6",
    title: "Invertis Innovation & Incubation",
    description: "Digital Platform for Innovation, Entrepreneurship & Startup Ecosystem",
    detailedOverview: "Invertis Innovation & Incubation (III) is an entrepreneurship and innovation ecosystem at Invertis University, Bareilly, created to help students, innovators and early-stage founders transform ideas into viable startups. The platform brings together startup incubation, mentorship, industry interaction, events, funding support and entrepreneurial development into a unified digital experience.",
    keyFeatures: [
      "Startup Incubation & Support Programs",
      "Mentorship & Industry Connect",
      "Event & Workshop Management",
      "Funding Support Gateway",
      "Ecosystem Discovery & Networking",
      "Digital Application & Contact Pathways"
    ],
    imageUrl: "/invertis incubation.png",
    techStack: ["React.js", "Next.js", "Tailwind CSS", "Node.js", "MongoDB"],
    liveLink: null,
    githubLink: null,
    featured: true,
  },
  {
    id: "7",
    title: "Aethravia",
    description: "Premium Body-Care Brand Built on Heritage Ingredients with a Digital-First E-Commerce Experience",
    detailedOverview: "Aethravia is a premium Indian body-care brand inspired by traditional ingredients like Multani Mitti and Reetha, paired with modern formulation practices. The digital platform serves as both a brand storytelling avenue and a fully functional e-commerce storefront, providing customers with a smooth discovery-to-purchase journey.",
    keyFeatures: [
      "Brand Storytelling & Product Discovery",
      "E-Commerce & Secure Checkout",
      "Product Collections (Body Wash, Scrub, Face Wash)",
      "Responsive Digital Storefront",
      "Cart & Buy-Now Flows",
      "Customer Support & Newsletter"
    ],
    imageUrl: "/aetehrvia.png",
    techStack: ["Next.js", "React.js", "Tailwind CSS", "Node.js", "MongoDB", "Payment Integration"],
    liveLink: null,
    githubLink: null,
    featured: true,
  }
];

// ─── Experience ─────────────────────────────────────────────────────
export const experiences: Experience[] = [
  {
    id: "1",
    role: "Full Stack developer",
    company: "TravelDekho Services Private Limited",
    startDate: "July 2026",
    endDate: "Present",
    description: "Working as a Full Stack Developer.",
    current: true,
  },
  {
    id: "2",
    role: "Technical Associate",
    company: "Invertis Innovation and Incubation",
    startDate: "September 2025",
    endDate: "July 2026",
    description: "Technical Associate role.",
    current: false,
  },
  {
    id: "3",
    role: "Full-stack Developer",
    company: "Arctic Innovage Private Limited",
    startDate: "January 2025",
    endDate: "February 2026",
    description: "Full-stack development responsibilities.",
    current: false,
  },
  {
    id: "4",
    role: "Google Cloud Arcade Facilitator '25",
    company: "Google Cloud Arcade Facilitator Program",
    startDate: "April 2025",
    endDate: "June 2025",
    description: "Facilitated Google Cloud Arcade program.",
    current: false,
  },
  {
    id: "5",
    role: "Full-stack Developer",
    company: "NullClass",
    startDate: "January 2025",
    endDate: "March 2025",
    description: "Full-stack development.",
    current: false,
  },

];

// ─── Achievements ───────────────────────────────────────────────────
export const achievements: Achievement[] = [
  {
    id: "1",
    title: "Certificate of Participation in Nexus AI Quiz Ignite 2026",
    description: "Participated in Nexus AI Quiz Ignite 2026.",
    date: "Jul 2026",
    issuer: "Unstop",
    link: "https://unstop.com/certificate-preview/ec939fe2-6816-4cb9-a4f1-c1230a44787c",
  },
  {
    id: "2",
    title: "Certificate of Participation in 3SVK SEASON: 2 - Evaluation Round of National Cloud",
    description: "Participated in the Evaluation Round of National Cloud 3SVK Season 2.",
    date: "Aug 2026",
    issuer: "Unstop",
    link: "https://unstop.com/certificate-preview/e0472cbe-fb7b-4157-876d-b2f63727e057",
  },
  {
    id: "3",
    title: "Certificate of Participation in Placement Prep Quiz 2026",
    description: "Participated in Placement Prep Quiz 2026.",
    date: "Jul 2026",
    issuer: "Unstop",
    link: "https://unstop.com/certificate-preview/efba90c2-cf8a-40d8-a916-d741ec8cfbcc",
  },
  {
    id: "4",
    title: "Capture The Flag of Pragyan'25",
    description: "Certificate of Participation in Capture The Flag of Pragyan'25.",
    date: "Feb 2025",
    issuer: "Unstop",
    link: "https://unstop.com/certificate-preview/0e608f34-e494-4d97-a5dc-e015663d2431",
  },
  {
    id: "5",
    title: "SQL and Relational Databases 101",
    description: "Completed SQL and Relational Databases 101.",
    date: "Feb 2025",
    issuer: "Cognitive Class",
    link: "https://courses.cognitiveclass.ai/certificates/82871d7011b24b38bbe2a18bb6e8cb3a",
  },
  {
    id: "6",
    title: "Python for Data Science",
    description: "Completed Python for Data Science certification.",
    date: "Feb 2025",
    issuer: "IBM",
    link: "https://www.credly.com/badges/2e3f616f-a019-430d-9f36-ba6d60c332cb/linked_in_profile",
  },
  {
    id: "7",
    title: "Python 101 for Data Science",
    description: "Completed Python 101 for Data Science.",
    date: "Feb 2025",
    issuer: "United Latino Students Association",
    link: "https://courses.cognitiveclass.ai/certificates/75e472e44d194a02afd3ed1c8c75b8e6",
  },
  {
    id: "8",
    title: "Certificate of Participation in Weekly Coding Challenge 10",
    description: "Participated in Weekly Coding Challenge 10.",
    date: "Jan 2025",
    issuer: "Unstop",
    link: "https://unstop.com/certificate-preview/cf3a253e-dd87-4524-b3aa-26989f3f5d65",
  },
  {
    id: "9",
    title: "Full Stack Development",
    description: "Certification in Full Stack Development (MERN).",
    date: "Dec 2024",
    issuer: "Codec Technologies India",
    link: "https://codectechnologies.in/intern-certificate-2?cert_hash=3b9042bc27c1ce10",
  },
  {
    id: "10",
    title: "Certificate of Participation in Idea Submission Round of Void Hacks() 6.0",
    description: "Participated in the Idea Submission Round for Void Hacks() 6.0.",
    date: "Dec 2024",
    issuer: "Unstop",
    link: "https://unstop.com/certificate-preview/335a33a1-15de-4081-b166-45f5f1467098",
  },
  {
    id: "11",
    title: "Node (Basic) Certification",
    description: "Certified in basic Node.js concepts.",
    date: "Jul 2024",
    issuer: "HackerRank",
    link: null,
  },
  {
    id: "12",
    title: "Data Visualization With Power BI course",
    description: "Completed Data Visualization With Power BI.",
    date: "Aug 2024",
    issuer: "Great Learning",
    link: null,
  },
  {
    id: "13",
    title: "Power BI Micro Course",
    description: "Completed Power BI Micro Course.",
    date: "Sep 2024",
    issuer: "coursepe",
    link: null,
  },
  {
    id: "14",
    title: "AI Fundamentals for Data Professionals",
    description: "Completed AI Fundamentals for Data Professionals.",
    date: "Jan 2024",
    issuer: "LinkedIn",
    link: "https://www.linkedin.com/learning/certificates/d01ffccf9cf02eec0ef1b21872b8d5ae8797037556a8ddf3a2f3842c5fedbcef/",
  },
  {
    id: "15",
    title: "Learning Word Desktop (Microsoft 365)",
    description: "Completed Learning Word Desktop.",
    date: "Jan 2024",
    issuer: "LinkedIn",
    link: "https://www.linkedin.com/learning/certificates/38adab4e3a0f309b0ccbd1765734fe1d10f9949eb27a6d34600a15d0204c5022/",
  },
  {
    id: "16",
    title: "Learning Excel Desktop (Microsoft 365)",
    description: "Completed Learning Excel Desktop.",
    date: "Jan 2024",
    issuer: "LinkedIn",
    link: "https://www.linkedin.com/learning/certificates/92b8bf7d166650d5b29eb680ae1be1dc623d1a9d4bdd39c07b9e9d9c4b473b54/",
  },
];

// ─── Education ──────────────────────────────────────────────────────
export const educations: Education[] = [
  {
    id: "1",
    degree: "Bachelor's of Computer Applications",
    institution: "Invertis University",
    startDate: "2023",
    endDate: "2026",
    description: "Pursuing Bachelor's of Computer Applications.",
    grade: null,
  },
  {
    id: "2",
    degree: "Intermediate",
    institution: "Baba International School, Badaun",
    startDate: "2022",
    endDate: "2023",
    description: "Completed intermediate education.",
    grade: null,
  },
  {
    id: "3",
    degree: "Highschool",
    institution: "Baba International School",
    startDate: "2020",
    endDate: "2021",
    description: "Completed high school education.",
    grade: null,
  },
];
