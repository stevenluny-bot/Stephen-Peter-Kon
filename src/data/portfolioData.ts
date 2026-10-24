import { ServiceItem, ProjectItem, ExperienceItem, EducationItem } from '../types/portfolio';

export const PERSONAL_INFO = {
  fullName: 'Stephen Peter Kon',
  shortName: 'Stephen Kon',
  monogram: 'SPK',
  title: 'Data Analyst & Learning Facilitator',
  supportingTitles: 'Database Specialist | Technical Educator | Technology Enthusiast',
  location: 'Kakuma, Kenya',
  email: 'stevenluny@gmail.com',
  phone: '+254 768 176 816',
  phoneRaw: '+254768176816',
  linkedInUrl: 'https://linkedin.com/in/stephen-p-kon-211612310',
  heroKicker: 'DATA ANALYST · LEARNING FACILITATOR',
  heroHeadline: 'Turning Data Into Insight. Turning Knowledge Into Impact.',
  heroDescription:
    'I’m Stephen Peter Kon, a data analyst and learning facilitator passionate about PostgreSQL, data analytics, and technology-driven education. I build practical data solutions, simplify complex concepts, and help people make better decisions through knowledge and technology.',
  expertiseStrip: [
    'Database Management',
    'Data Analytics',
    'Data Visualization',
    'Technical Facilitation',
  ],
  philosophyHeadline: 'Fall Forward. Learn Continuously. Build With Purpose.',
  philosophyBody:
    'I believe challenges are part of the learning process. Every problem offers an opportunity to improve a method, deepen understanding, and create something more useful than before.',
  availabilityStatus: 'Available for collaborative projects & technical workshops',
};

export const BIOGRAPHY = {
  sectionTitle: 'Technology, Data & Education.',
  paragraphs: [
    'Stephen Peter Kon is an educator, technologist, and digital creator based in Kakuma, Kenya. He is pursuing a Bachelor of Arts in General Studies at Saint Louis University through Jesuit Worldwide Learning. His professional work combines technical facilitation, data analysis, database management, and digital platform development.',
    'As a learning facilitator, he helps learners understand Global English and technical subjects through accessible explanations and interactive learning experiences. His technical interests include PostgreSQL, R, Tableau, and Microsoft Excel, with an emphasis on organizing information, extracting insights, and presenting findings clearly.',
    'He also applies his technical knowledge to digital communities through projects such as Elite Gamers Arena. Guided by the philosophy of “falling forward,” he sees challenges as opportunities to learn, improve, and develop better solutions.',
  ],
  principles: [
    {
      title: 'Continuous Learning',
      description:
        'Approaching every challenge with curiosity, viewing hurdles as essential milestones toward mastery and refined solutions.',
    },
    {
      title: 'Evidence-Based Thinking',
      description:
        'Grounding decisions in structured data, rigorous analytical reasoning, and transparent, reproducible methodologies.',
    },
    {
      title: 'Technology That Empowers People',
      description:
        'Designing digital systems and educational experiences that lower barriers and equip learners and organizations to thrive.',
    },
  ],
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'postgresql-management',
    title: 'PostgreSQL & Database Management',
    category: 'Database Architecture',
    description:
      'Structure, query, and organize data to support reliable information management and more efficient analytical workflows.',
    deliverables: [
      'Relational schema design & normalization',
      'Complex SQL query authoring & performance tuning',
      'Data preparation & ETL staging for analysis',
      'Database-backed application data architecture',
    ],
  },
  {
    id: 'data-analytics-r',
    title: 'Data Analytics with R',
    category: 'Statistical Computing',
    description:
      'Turn raw datasets into meaningful findings through data preparation, exploratory analysis, statistical methods, and clear analytical reporting.',
    deliverables: [
      'Data cleaning, transformation & validation',
      'Exploratory data analysis (EDA) & summary statistics',
      'Statistical correlation & regression modeling',
      'Reproducible analytical documentation',
    ],
  },
  {
    id: 'tableau-excel-reporting',
    title: 'Tableau & Excel Reporting',
    category: 'Business Intelligence',
    description:
      'Transform datasets into understandable reports, visual summaries, and interactive dashboards that help communicate trends and support informed decisions.',
    deliverables: [
      'Interactive Tableau visual dashboards',
      'Advanced Excel modeling & formula automation',
      'Calculated fields, KPIs & trend reporting',
      'Executive-ready summary sheets & presentations',
    ],
  },
  {
    id: 'technical-training',
    title: 'Technical Training & Educational Facilitation',
    category: 'Knowledge Transfer',
    description:
      'Make complex concepts accessible through structured lessons, practical examples, interactive workshops, and learner-focused facilitation.',
    deliverables: [
      'Interactive workshops in Global English & data fundamentals',
      'Hands-on SQL and data analytics tutorials',
      'Tailored curriculum design for diverse skill levels',
      'Mentorship and learner progress evaluation',
    ],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'elite-gamers-arena',
    title: 'Elite Gamers Arena',
    category: 'Web Development · Database Management · Gaming Technology',
    tagline: 'Flagship Technology Project: Digital Gaming Platform & Tournament Engine',
    description:
      'Elite Gamers Arena is a digital gaming-platform project focused on organizing competitive gaming activities and supporting tournament operations. The project reflects my interest in combining web technologies, structured data, and digital community management.',
    problem:
      'Esports tournaments often face chaos with registration spreadsheets, delayed score submissions, ambiguous bracket progressions, and unverified standings that frustrate participants and disrupt event timelines.',
    solution:
      'Designed a relational database-backed platform in PostgreSQL with responsive web interfaces to streamline player registration, automate bracket pairings, record verified match scores, and produce live, tamper-resistant leaderboard standings.',
    highlights: [
      'Participant registration and profile verification workflows',
      'Tournament bracket tracking and competition management',
      'Structured PostgreSQL data storage for player stats & match logs',
      'Responsive web interface engineered with clean HTML, CSS, and JavaScript',
      'Administrative dashboard workflows for organizers and match arbiters',
    ],
    technologies: ['PostgreSQL', 'HTML5', 'CSS3', 'JavaScript', 'Relational Modeling'],
    isFeatured: true,
    status: 'active',
  },
  {
    id: 'retail-analytics-dashboard',
    title: 'Retail Performance Analytics Dashboard',
    category: 'Business Intelligence · Tableau · Data Visualization',
    tagline: 'Regional retail sales and operational efficiency analysis',
    description:
      'Tableau-based analysis of regional retail performance exploring sales volume, profit margins, product category trends, and inventory velocity across distinct markets.',
    problem:
      'Fragmented transactional records made it difficult for regional store managers to spot high-margin versus underperforming categories.',
    solution:
      'Created intuitive visual layouts with calculated fields and dynamic filtering to present comparative regional performance at a glance.',
    highlights: [
      'Interactive regional map and category heatmaps',
      'Calculated fields for customer lifetime and margin variance',
      'Demonstration data model structured for reporting clarity',
    ],
    technologies: ['Tableau', 'Data Modeling', 'Calculated Fields', 'Excel'],
    isFeatured: false,
    status: 'in_development',
  },
  {
    id: 'efootball-ke-2026',
    title: 'eFootball KE Tournament 2026',
    category: 'Digital Management · Competition Operations',
    tagline: 'Competitive tournament digital management operations',
    description:
      'Digital operational framework for the upcoming eFootball KE Tournament, coordinating match scheduling, dispute logging, and real-time community engagement.',
    problem:
      'Multi-stage knockout and league competitions require rapid arbiter updates and automated tie-breaker calculations.',
    solution:
      'Building operational workflows and data capture sheets to streamline matchday communication and ensure transparent rules enforcement.',
    highlights: [
      'Match scheduling and arbiter score verification sheets',
      'Automated goal-difference and head-to-head tiebreaker matrices',
      'Participant communication guidelines and match-day logging',
    ],
    technologies: ['Database Management', 'Process Workflow', 'Excel Analytics'],
    isFeatured: false,
    status: 'in_development',
  },
  {
    id: 'eyekon-svg-design',
    title: 'EYEKON SVG Design Projects',
    category: 'Vector Craft · Digital Fabrication',
    tagline: 'Custom mobile phone vinyl-skin vector templates',
    description:
      'Precision vector template engineering for bespoke mobile device vinyl skins and custom device wraps, merging digital art with millimeter-accurate hardware dimensions.',
    problem:
      'Off-the-shelf templates frequently mismatch camera cutouts and curved device edges on diverse regional handset models.',
    solution:
      'Crafted geometric SVG cut-paths calibrated to device dimensions for flawless plotter vinyl cutting.',
    highlights: [
      'Millimeter-precision CAD/SVG vector outlines for mobile handsets',
      'Layered cut-line specifications for commercial vinyl plotters',
      'Custom aesthetic texture templates and geometric skin motifs',
    ],
    technologies: ['SVG Geometry', 'Vector Craft', 'Digital Design'],
    isFeatured: false,
    status: 'in_development',
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'jwl-facilitator',
    role: 'Global English & Data Analysis Facilitator',
    institution: 'Jesuit Worldwide Learning (JWL)',
    period: 'January 2023 – Present',
    location: 'Kakuma, Kenya',
    isOngoing: true,
    responsibilities: [
      'Facilitate interactive learning activities in Global English and foundational data analysis.',
      'Design and deliver engaging curriculum modules that lower technical learning curves.',
      'Guide learners through database querying, structured thinking, and analytical problem-solving.',
      'Provide individualized academic mentorship to support student engagement and retention.',
    ],
  },
  {
    id: 'vision-secondary',
    role: 'Volunteer Teacher',
    institution: 'Vision Secondary School',
    period: 'April – October (Year to be confirmed)',
    location: 'Kakuma, Kenya',
    isOngoing: false,
    responsibilities: [
      'Volunteered instruction and classroom support to secondary school learners.',
      'Assisted students with coursework comprehension, homework reviews, and examination preparation.',
      'Fostered an encouraging, structured learning environment that motivated continuous study.',
    ],
  },
  {
    id: 'peace-primary',
    role: 'Primary School Teacher',
    institution: 'Peace Primary School | Lutheran World Federation (LWF)',
    period: 'Employment dates to be confirmed',
    location: 'Kakuma, Kenya',
    isOngoing: false,
    responsibilities: [
      'Delivered foundational education and literacy instruction to young learners.',
      'Collaborated with fellow educators and LWF community partners on student well-being initiatives.',
      'Maintained consistent classroom routines that promoted curiosity and foundational skills.',
    ],
  },
];

export const EDUCATION_ITEMS: EducationItem[] = [
  {
    id: 'slu-ba',
    credential: 'Bachelor of Arts in General Studies',
    institution: 'Saint Louis University (through Jesuit Worldwide Learning)',
    period: 'August 2024 – Present',
    note: 'Undergraduate Degree Program (In Progress)',
    status: 'in_progress',
  },
  {
    id: 'jwl-prof-cert',
    credential: 'Professional Certificate: Learning Facilitator',
    institution: 'Jesuit Worldwide Learning (JWL)',
    period: 'August 2023 – February 2024',
    note: 'Pedagogical design, learner engagement & educational facilitation methods',
    status: 'completed',
  },
  {
    id: 'jwl-pre-stem',
    credential: 'Certificate: Pre-STEM',
    institution: 'Jesuit Worldwide Learning (JWL)',
    period: 'January 2023 – July 2024',
    note: 'Foundations in science, technology, engineering, and analytical reasoning',
    status: 'completed',
  },
  {
    id: 'rai-english',
    credential: 'Certificate: Global English Language',
    institution: 'Resilience Action International',
    period: 'August – December 2022',
    note: 'Professional international communication, reading & written discourse',
    status: 'completed',
  },
];

// Sample datasets strictly for skill demonstration
export const SQL_SAMPLE_DATA = {
  tableName: 'tournaments_leaderboard (Sample Demo Data)',
  queries: [
    {
      id: 'q1',
      title: 'Top Competitor Rankings by Win Rate',
      sql: `SELECT 
    player_id,
    player_tag,
    tier_category,
    matches_played,
    matches_won,
    ROUND((matches_won::NUMERIC / matches_played) * 100, 1) AS win_rate_pct,
    total_points
FROM tournament_participants
WHERE matches_played >= 10
ORDER BY win_rate_pct DESC, total_points DESC
LIMIT 5;`,
      results: [
        { player_id: 'SPK-104', player_tag: 'AeroStrike', tier_category: 'Master', matches_played: 18, matches_won: 15, win_rate_pct: '83.3%', total_points: 450 },
        { player_id: 'SPK-219', player_tag: 'Vanguard99', tier_category: 'Diamond', matches_played: 14, matches_won: 11, win_rate_pct: '78.6%', total_points: 330 },
        { player_id: 'SPK-082', player_tag: 'ApexRaptor', tier_category: 'Diamond', matches_played: 16, matches_won: 12, win_rate_pct: '75.0%', total_points: 360 },
        { player_id: 'SPK-311', player_tag: 'ShadowByte', tier_category: 'Platinum', matches_played: 12, matches_won: 8, win_rate_pct: '66.7%', total_points: 240 },
        { player_id: 'SPK-155', player_tag: 'RiftWalker', tier_category: 'Platinum', matches_played: 15, matches_won: 9, win_rate_pct: '60.0%', total_points: 270 },
      ],
    },
    {
      id: 'q2',
      title: 'Tournament Tier Aggregates & Avg Points',
      sql: `SELECT 
    tier_category,
    COUNT(*) AS total_registered,
    SUM(matches_played) AS total_matches,
    ROUND(AVG(total_points), 0) AS avg_tier_score,
    MAX(total_points) AS highest_score
FROM tournament_participants
GROUP BY tier_category
ORDER BY avg_tier_score DESC;`,
      results: [
        { tier_category: 'Master', total_registered: 8, total_matches: 128, avg_tier_score: 412, highest_score: 450 },
        { tier_category: 'Diamond', total_registered: 16, total_matches: 214, avg_tier_score: 345, highest_score: 380 },
        { tier_category: 'Platinum', total_registered: 24, total_matches: 290, avg_tier_score: 255, highest_score: 290 },
        { tier_category: 'Gold', total_registered: 32, total_matches: 340, avg_tier_score: 180, highest_score: 210 },
      ],
    },
  ],
};

export const R_SAMPLE_DATA = {
  scriptTitle: 'Student Assessment Analysis (R Demo Script)',
  code: `# Exploratory Data Analysis & Student Score Distribution
library(dplyr)
library(ggplot2)

# Load sample cohort assessment scores
assessment_data <- read.csv("jwl_cohort_scores_demo.csv")

# Data preparation and summary metrics
performance_summary <- assessment_data %>%
  group_by(module_name) %>%
  summarise(
    learner_count = n(),
    mean_score    = mean(assessment_score, na.rm = TRUE),
    median_score  = median(assessment_score, na.rm = TRUE),
    std_dev       = sd(assessment_score, na.rm = TRUE)
  ) %>%
  arrange(desc(mean_score))

print(performance_summary)`,
  cohortData: [
    { module: 'Global English Literacy', learners: 42, mean: 84.6, median: 86.0, sd: 5.4 },
    { module: 'Database Concepts (SQL)', learners: 38, mean: 79.2, median: 80.5, sd: 6.8 },
    { module: 'Data Visualization & Charts', learners: 35, mean: 82.1, median: 83.0, sd: 5.9 },
    { module: 'Spreadsheet Analytics', learners: 40, mean: 87.4, median: 88.0, sd: 4.2 },
  ],
};

export const TABLEAU_SAMPLE_METRICS = [
  { region: 'Rift Valley / North', revenue: 48200, orders: 1240, growth: '+14.2%', returnRate: '1.8%' },
  { region: 'Central Nairobi', revenue: 72400, orders: 1980, growth: '+18.6%', returnRate: '2.1%' },
  { region: 'Coastal Region', revenue: 39100, orders: 960, growth: '+9.4%', returnRate: '1.4%' },
  { region: 'Western Kenya', revenue: 34500, orders: 890, growth: '+11.8%', returnRate: '1.6%' },
];

export const EXCEL_SAMPLE_ROWS = [
  { itemCode: 'DAT-101', category: 'SQL Querying', hours: 24, completedTasks: 22, efficiencyPct: '91.7%', status: 'Validated' },
  { itemCode: 'DAT-102', category: 'Data Modeling', hours: 18, completedTasks: 17, efficiencyPct: '94.4%', status: 'Validated' },
  { itemCode: 'DAT-103', category: 'R Exploratory EDA', hours: 30, completedTasks: 27, efficiencyPct: '90.0%', status: 'Validated' },
  { itemCode: 'DAT-104', category: 'Tableau Dashboards', hours: 20, completedTasks: 19, efficiencyPct: '95.0%', status: 'Validated' },
  { itemCode: 'DAT-105', category: 'Excel Pivot Modeling', hours: 16, completedTasks: 16, efficiencyPct: '100.0%', status: 'Validated' },
];
