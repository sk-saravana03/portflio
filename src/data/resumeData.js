export const resumeData = {
  personalInfo: {
    name: "Saravanakumar M",
    title: "Full Stack MERN Developer",
    subTitle: "Master of Computer Applications (MCA) Candidate @ PSG CAS",
    tagline: "Building high-performance, scalable web applications with MERN stack & modern cloud solutions.",
    email: "saravanakumarmaheswaran03@gmail.com",
    phone: "+91 82484 84845",
    location: "Trichy, Tamil Nadu, India",
    github: "https://github.com/sk-saravana03",
    githubUsername: "sk-saravana03",
    linkedin: "https://linkedin.com/in/saravanakumar",
    linkedinUsername: "saravanakumar",
    hackerrank: "https://www.hackerrank.com/profile/saravanakumarsk2",
    hackerrankUsername: "saravanakumarsk2",
    aboutMe: "Enthusiastic and detail-oriented Full Stack Web Developer specializing in the MERN stack (MongoDB, Express.js, React.js, Node.js). Currently pursuing an MCA at PSG College of Arts & Science with a strong background in Computer Applications (BCA). Proven track record of developing live web application modules, custom VoIP video-sharing platforms, and full-stack RESTful API management systems. Passionate about solving complex algorithmic problems and adopting new web & AI technologies.",
    stats: [
      { label: "MERN Stack Projects", value: "3+", color: "from-cyan-500 to-blue-600" },
      { label: "HackerRank Stars", value: "5 ★", color: "from-amber-400 to-orange-500" },
      { label: "Learnathons Completed", value: "8+", color: "from-emerald-400 to-teal-600" },
      { label: "HSC Academic Score", value: "89%", color: "from-purple-500 to-pink-500" }
    ]
  },

  education: [
    {
      id: "mca",
      degree: "Master of Computer Applications (MCA)",
      institution: "PSG College of Arts & Science",
      location: "Coimbatore, Tamil Nadu",
      period: "May 2027 (Present)",
      grade: "78%*",
      status: "Pursuing",
      description: "Focusing on Advanced Software Engineering, Cloud Computing, Database System Architecture, and Enterprise Web Development.",
      highlights: ["PSG CAS Scholar", "Advanced Web Architecture", "Cloud Integration"]
    },
    {
      id: "bca",
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Dr. N.G.P. Arts & Science College",
      location: "Coimbatore, Tamil Nadu",
      period: "May 2025",
      grade: "71%",
      status: "Graduated",
      description: "Core coursework included Data Structures, Object-Oriented Programming (Java/C++), Relational Databases (SQL), and Web Technologies.",
      highlights: ["MERN Stack Specialization", "Project Lead @ NGPASC"]
    },
    {
      id: "hsc",
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Sowdambikaa Matric. Hr. Sec. School",
      location: "Tamil Nadu",
      period: "May 2022",
      grade: "89%",
      status: "Completed",
      description: "Completed Computer Science stream with distinction in Mathematics and Computer Applications.",
      highlights: ["89% Academic Score", "Computer Science Focus"]
    },
    {
      id: "sslc",
      degree: "Secondary School Leaving Certificate (SSLC)",
      institution: "R.V.B Matric. Hr. Sec. School",
      location: "Tamil Nadu",
      period: "Mar 2020",
      grade: "82%",
      status: "Completed",
      description: "Foundational secondary education with strong analytical and scientific grounding.",
      highlights: ["82% Score", "Science & Mathematics"]
    }
  ],

  experience: [
    {
      id: "nullclass",
      role: "Web Developer Intern",
      company: "NullClass Edtech Private Limited",
      location: "Remote / Edtech Platform",
      period: "Jul 2024 - Aug 2024 (1 Month)",
      type: "Internship",
      description: "Contributed as a Web Developer Intern working directly on live ed-tech web applications.",
      bulletPoints: [
        "Engineered 3 new production-ready modules for a live web application, boosting overall system functionality and user workflow efficiency.",
        "Converted intensive training concepts into production-ready software features, effectively reducing deployment time.",
        "Collaborated with cross-functional teams to debug, refactor, and optimize responsive front-end components."
      ],
      skillsUsed: ["React.js", "JavaScript", "HTML5/CSS3", "Git", "REST APIs"]
    }
  ],

  projects: [
    {
      id: "playhive",
      title: "Playhive",
      subTitle: "Full-Stack Video Sharing & Gaming Platform",
      category: "Full Stack MERN",
      period: "Jan - Mar 2025",
      institution: "NGPASC",
      github: "https://github.com/sk-saravana03/playHive",
      demoUrl: "https://github.com/sk-saravana03/playHive",
      featured: true,
      description: "Created an immersive full-stack video sharing platform featuring a custom HTML5 video player, integrated mini-games arena, and real-time Voice over IP (VoIP) communication capabilities.",
      techStack: ["React.js", "Node.js", "MongoDB", "Express.js", "WebRTC / VoIP", "CSS3"],
      keyFeatures: [
        "Custom high-performance video player with adaptive playback quality controls",
        "Integrated interactive mini-games for enhanced user engagement during video streaming",
        "Real-time VoIP communication channel for seamless user collaboration",
        "Secure User Authentication & Session Management with JWT and MongoDB"
      ],
      colorGradient: "from-violet-600 via-indigo-600 to-cyan-500"
    },
    {
      id: "car-rental",
      title: "Car Rental Management System",
      subTitle: "MERN Stack Vehicle Booking Platform",
      category: "Full Stack MERN",
      period: "Jul - Aug 2024",
      institution: "NGPASC",
      github: "https://github.com/sk-saravana03/car-rental",
      demoUrl: "https://github.com/sk-saravana03/car-rental",
      featured: true,
      description: "Developed a comprehensive car rental management web application built on the MERN stack with robust RESTful APIs for real-time fleet reservation, vehicle scheduling, and customer data management.",
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "Bootstrap/CSS"],
      keyFeatures: [
        "End-to-end CRUD operations for vehicle fleet management and customer reservations",
        "REST API architecture handling complex booking logic, availability checks, and price calculation",
        "Optimized MongoDB queries and front-end state management for lightning-fast page loads",
        "Responsive administrative dashboard for reservation tracking and fleet metrics"
      ],
      colorGradient: "from-cyan-500 via-teal-500 to-emerald-500"
    }
  ],

  skills: {
    programming: [
      { name: "JavaScript (ES6+)", level: 90, stars: "5-Star", category: "Core" },
      { name: "C / C++", level: 85, stars: "5-Star HackerRank", category: "Core" },
      { name: "Python", level: 85, stars: "4-Star HackerRank", category: "Core" },
      { name: "Java", level: 78, stars: null, category: "OOP" }
    ],
    webTech: [
      { name: "React.js", level: 92, status: "Certified", category: "Frontend" },
      { name: "Node.js", level: 88, status: "Active", category: "Backend" },
      { name: "Express.js", level: 86, status: "Active", category: "Backend" },
      { name: "HTML5 & CSS3", level: 95, status: "Certified", category: "Frontend" }
    ],
    databases: [
      { name: "MongoDB", level: 88, status: "Certified AI & Fundamentals", category: "NoSQL" },
      { name: "SQL (MySQL/PostgreSQL)", level: 85, stars: "5-Star HackerRank", category: "Relational" }
    ],
    softSkills: [
      "Problem Solving",
      "Logical Thinking",
      "Critical Thinking",
      "Team Collaboration",
      "Rapid Learning & Adaptability"
    ]
  },

  certifications: [
    {
      id: "hackerrank-react",
      title: "Front-End Developer (React)",
      issuer: "HackerRank",
      badge: "Verified Skill Certificate",
      category: "Frontend Development",
      icon: "Code2",
      description: "Demonstrated advanced proficiency in React hooks, component lifecycle, state management, and props routing."
    },
    {
      id: "hackerrank-python",
      title: "Python (Basic)",
      issuer: "HackerRank",
      badge: "Verified Skill Certificate",
      category: "Programming",
      icon: "Terminal",
      description: "Verified core competencies in Python algorithms, data structures, conditional logic, and functions."
    },
    {
      id: "hackerrank-css",
      title: "CSS (Basic)",
      issuer: "HackerRank",
      badge: "Verified Skill Certificate",
      category: "Styling & Design",
      icon: "Palette",
      description: "Validated skills in responsive layout design, CSS Grid, Flexbox, transitions, and media queries."
    },
    {
      id: "simplilearn-python",
      title: "Advanced Python",
      issuer: "SimpliLearn",
      badge: "Professional Certificate",
      category: "Advanced Programming",
      icon: "Cpu",
      description: "Covered advanced Python topics including object-oriented patterns, decorators, generators, and library mastery."
    },
    {
      id: "mongodb-ai",
      title: "MongoDB and AI Fundamentals",
      issuer: "MongoDB",
      badge: "Official MongoDB Certification",
      category: "Database & AI",
      icon: "Database",
      description: "Specialized certification covering MongoDB document modeling, aggregation pipelines, vector search, and AI integration."
    }
  ],

  achievements: [
    {
      title: "HackerRank 5-Star Badge in C",
      description: "Achieved top 5-star domain rank in C programming through rigorous problem-solving challenges.",
      highlight: "5-Star Gold Badge",
      type: "badge"
    },
    {
      title: "HackerRank 5-Star Badge in SQL",
      description: "Attained 5-star mastery in complex SQL queries, database joins, aggregations, and optimization.",
      highlight: "5-Star Gold Badge",
      type: "badge"
    },
    {
      title: "HackerRank 5-Star Badge in React",
      description: "Recognized with 5-star rating for building robust front-end web apps with React.js.",
      highlight: "5-Star Gold Badge",
      type: "badge"
    },
    {
      title: "HackerRank 4-Star Badge in Python",
      description: "Earned 4-star problem-solving rating in Python algorithm challenges.",
      highlight: "4-Star Silver Badge",
      type: "badge"
    },
    {
      title: "8+ Learnathon Intensive Courses",
      description: "Completed 8+ specialized tech bootcamps mastering advanced MongoDB schema design, cloud services, and full-stack development.",
      highlight: "8+ Certifications",
      type: "learning"
    },
    {
      title: "Google Developer Groups (GDG) Active Member",
      description: "Participated in GDG developer summits and hackathons, implementing cutting-edge web technologies into hands-on projects.",
      highlight: "Community Member",
      type: "community"
    }
  ]
};
