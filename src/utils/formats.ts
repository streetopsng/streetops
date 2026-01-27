export const formats = [
  {
    id: "quick-hit",
    slug: "quick-hit",
    icon: "🟢",
    title: "Quick Hit",
    subtitle: "Focused Skill Sessions",
    duration: "1 Hour",
    bestFor: [
      "Busy teams needing fast but meaningful learning",
      "Addressing a single, specific skill gap",
      "Reinforcing core workplace behaviors",
    ],
    courseOptions: [
      "Time Management Essentials",
      "Workplace Communication Basics",
      "Handling Feedback & Rejection",
      "Introduction to AI in the Workplace",
    ],
    included: [
      "Instructor-led session",
      "Real-world workplace scenarios",
      "Interactive discussion",
      "Practical frameworks or checklists",
      "Live Q&A",
    ],
    outcome: "Participants leave with one clear, immediately applicable skill.",
  },

  {
    id: "half-day",
    slug: "half-day",
    icon: "🔵",
    title: "Half-Day",
    subtitle: "Skill Deep-Dive Workshops",
    duration: "3-4 Hours",
    bestFor: [
      "Teams that need practice, not just exposure",
      "Building confidence in essential skills",
      "Hands-on learning environments",
    ],
    modules: [
      {
        title: "Workplace Fundamentals",
        topics: [
          "Professional behavior & ethics",
          "Workplace etiquette",
          "Digital professionalism",
        ],
      },
      {
        title: "Time & Task Management",
        topics: [
          "Planning and prioritization",
          "Managing deadlines",
          "Personal productivity systems",
        ],
      },
      {
        title: "Emotional Intelligence at Work",
        topics: [
          "Self-awareness and emotional control",
          "Working with different personalities",
          "Stress and conflict management",
        ],
      },
    ],
    included: [
      "Guided instructions",
      "Practical exercises",
      "Group activities and case studies",
      "Worksheets and tools",
      "Facilitated Q&A",
    ],
    outcome:
      "Participants gain practical, job-ready skills they can confidently apply.",
  },

  {
    id: "full-day",
    slug: "full-day",
    icon: "🟣",
    title: "Full-Day",
    subtitle: "Comprehensive Skill Development",
    duration: "6-8 Hours",
    bestFor: [
      "Professional readiness programs",
      "Team capability building",
      "Deep learning and behavioral shift",
    ],
    modules: [
      {
        title: "Professional Workplace Readiness",
        topics: [
          "Work ethics and accountability",
          "Workplace culture and expectations",
          "Communication standards",
        ],
      },
      {
        title: "Productivity & Performance",
        topics: [
          "Advanced time management",
          "Goal setting and execution",
          "Workload management",
        ],
      },
      {
        title: "Collaboration & Teamwork",
        topics: [
          "Team dynamics",
          "Giving and receiving feedback",
          "Conflict resolution",
        ],
      },
      {
        title: "Digital Skills for the Modern Workplace",
        topics: [
          "Excel fundamentals (including conditional formatting)",
          "Research skills and information evaluation",
          "Introduction to AI and digital tools",
        ],
      },
    ],
    included: [
      "Full instructor-led training",
      "Interactive exercises and simulations",
      "Group discussions and challenges",
      "Practical tools and templates",
      "Reflection and action planning",
    ],
    outcome:
      "Participants experience noticeable improvement in competence, confidence, and performance.",
  },

  {
    id: "multi-session",
    slug: "multi-session",
    icon: "🟠",
    title: "Multi-Session",
    subtitle: "Intensive Skill Building Program",
    duration: "2 Days - 1 Week (2-4 hours per day)",
    bestFor: [
      "Rapid upskilling in a short timeframe",
      "Teams needing focused immersion",
      "Accelerated skill and habit formation",
    ],
    structure: [
      "Delivered over consecutive days or across one week",
      "Daily facilitated sessions",
      "Practice tasks between sessions",
      "Reflection and feedback",
    ],
    modules: [
      {
        title: "Workplace Foundations",
        topics: [
          "Professional conduct and expectations",
          "Workplace ethics and accountability",
          "Growth mindset",
        ],
      },
      {
        title: "Time Management & Productivity",
        topics: [
          "Planning tools and prioritization",
          "Managing competing deadlines",
          "Sustainable work routines",
        ],
      },
      {
        title: "Emotional Intelligence & Communication",
        topics: [
          "Self-awareness and emotional regulation",
          "Collaboration and feedback",
          "Conflict handling",
        ],
      },
      {
        title: "Research & Problem-Solving",
        topics: [
          "Effective research methods",
          "Critical thinking and analysis",
          "Informed decision-making",
        ],
      },
      {
        title: "Digital Skills & AI Basics",
        topics: [
          "Excel fundamentals",
          "Digital workplace tools",
          "AI for productivity",
        ],
      },
    ],
    included: [
      "Structured curriculum",
      "Practical exercises and assignments",
      "Worksheets and tools",
      "Facilitator feedback",
      "Progress tracking",
    ],
    outcome:
      "Participants show clear, measurable growth in skills, confidence, and effectiveness within days.",
  },

  {
    id: "custom",
    slug: "custom",
    icon: "🔴",
    title: "Custom",
    subtitle: "Tailored Learning Solutions",
    duration: "Flexible",
    bestFor: [
      "Unique organizational needs",
      "Specialized teams",
      "Custom skill or culture challenges",
    ],
    mayInclude: [
      "Needs assessment and diagnostics",
      "Customized curriculum design",
      "Flexible delivery (Quick Hit → Multi-Session)",
      "Organization-specific case studies",
    ],
    focusAreas: [
      "Leadership development",
      "Digital transformation",
      "Research and data literacy",
      "Workplace ethics and culture",
      "Team performance",
    ],
    included: [
      "Co-created learning plan",
      "Customized materials",
      "Dedicated facilitation",
      "Evaluation and feedback",
    ],
    outcome: "A bespoke training experience aligned with organizational goals.",
  },
];
