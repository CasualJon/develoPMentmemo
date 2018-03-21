const memoGroup = {
  PSYCHOLOGY: "Psychology",
  PM_BASICS: "Project Management Basics",
  ENVIRONMENT: "Environment",
  QUALITY: "Quality",
  COMMUNICATION: "Communication",
  TT: "Tools & Techniques",
  MEETINGS: "Meetings",
  TIME: "Time & Schedule",
  PEOPLE: "Managing People & Teams",
};

var dmIndx = [
  {
    num: 0,
    title: "Being Called Expert",
    category: memoGroup.PSYCHOLOGY,
    keywords: "EXPERT EXPERTISE KNOWLEDGE SKILL PSYCHOLOGY",
    path: "./assets/js/dm0.js",
  },
  {
    num: 1,
    title: "Progressive Elaboration",
    category: memoGroup.PM_BASICS,
    keywords: "PROGRESSIVE ELABORATION UNCERTAINTY PMBOK PMP",
    path: "./assets/js/dm1.js",
  },
  {
    num: 2,
    title: "Triple Constraint",
    category: memoGroup.PM_BASICS,
    keywords: "TRIPLE CONSTRAINTS TRIANGLE COST SCOPE SCHEDULE QUALITYPMBOK PMP",
    path: "./assets/js/dm2.js",
  },
  {
    num: 3,
    title: "Organizational Structures",
    category: memoGroup.ENVIRONMENT,
    keywords: "ORGANIZATIONAL STRUCTURE FUNCTIONAL PROJECTIZED MATRIX WEAK BALANCED STRONG PMBOK PMP",
    path: "./assets/js/dm3.js",
  },
  {
    num: 4,
    title: "Work Breakdown Structure",
    category: memoGroup.PM_BASICS,
    keywords: "WORK BREAKDOWN STRUCTURE WBS DRAGON DILBERT DOGBERT PMBOK PMP",
    path: "./assets/js/dm4.js",
  },
  {
    num: 5,
    title: "PM Knowledge Areas",
    category: memoGroup.PM_BASICS,
    keywords: "KNOWLEDGE AREAS PMBOK PROCESS GROUPS PMP",
    path: "./assets/js/dm5.js",
  },
  {
    num: 6,
    title: "Expert Judgment",
    category: memoGroup.PM_BASICS,
    keywords: "EXPERT JUDGMENT TOOLS TECHNIQUES PMBOK PMP",
    path: "./assets/js/dm6.js",
  },
  {
    num: 7,
    title: "Change Management",
    category: memoGroup.PM_BASICS,
    keywords: "CHANGE MANAGEMENT CONTROL PMBOK PMP",
    path: "./assets/js/dm7.js",
  },
  {
    num: 8,
    title: "Tailoring",
    category: memoGroup.PM_BASICS,
    keywords: "TAILORING PMBOK FIT PMP",
    path: "./assets/js/dm8.js",
  },
  {
    num: 9,
    title: "Programs & Portfolios",
    category: memoGroup.PM_BASICS,
    keywords: "PROGRAMS PORTFOLIOS PMBOK PMP",
    path: "./assets/js/dm9.js",
  },
  {
    num: 10,
    title: "Manage Communications",
    category: memoGroup.COMMUNICATION,
    keywords: "COMMUNICATIONS MANAGEMENT PLAN FRED BROOKS GROUP INTERCOMMUNICATION FORMULA MYITHICAL MAN MONTH",
    path: "./assets/js/dm10.js",
  },
  {
    num: 11,
    title: "Phase Gates",
    category: memoGroup.PM_BASICS,
    keywords: "PHASE GATES EXPLOIT POSITIVE RISK SCRUM AGILE REVIEWS RETROSPECTIVES ENOS NASA PMBOK PMP",
    path: "./assets/js/dm11.js",
  },
  {
    num: 12,
    title: "RACI Charts",
    category: memoGroup.TT,
    keywords: "RACI CHART RESPONSIBLE ACCOUNTABLE CONSULT INFORM COMMUNICATION TOOLS",
    path: "./assets/js/dm12.js",
  },
  {
    num: 13,
    title: "Cost of Quality",
    category: memoGroup.QUALITY,
    keywords: "COST QUALITY CONTROL POOR FAILURE NONCONFORMANCE QC QA DILBERT PMBOK PMP",
    path: "./assets/js/dm13.js",
  },
  {
    num: 14,
    title: "Pareto Principle",
    category: memoGroup.PM_BASICS,
    keywords: "PARETO DIAGRAM PRINCIPLE CHART 80 20 HISTOGRAM QUALITY PMBOK PMP",
    path: "./assets/js/dm14.js",
  },
  {
    num: 15,
    title: "Stakeholders",
    category: memoGroup.PM_BASICS,
    keywords: "STAKEHOLDERS PMBOK PMP",
    path: "./assets/js/dm15.js",
  },
  {
    num: 16,
    title: "Process Groups",
    category: memoGroup.PM_BASICS,
    keywords: "PROCESS GROUPS PMBOK PMP INITIATING PLANNING MONITORING CONTROLLING CLOSING",
    path: "./assets/js/dm16.js",
  },
  {
    num: 17,
    title: "Probability & Impact Matrix",
    category: memoGroup.TT,
    keywords: "PROBABILITY IMPACT MATRIX RISK PMBOK TOOLS PMBOK PMP",
    path: "./assets/js/dm17.js",
  },
  {
    num: 18,
    title: "Three Point Estimate",
    category: memoGroup.TT,
    keywords: "THREE 3 POINT ESTIMATE TOOLS TECHNIQUES PMBOK PERT PMP",
    path: "./assets/js/dm18.js",
  },
  {
    num: 19,
    title: "Critical Path",
    category: memoGroup.TIME,
    keywords: "CRITICAL PATH METHOD FLOAT SLACK TIMELINE SEQUENCE SCHEDULE TECHNIQUES PMBOK PMP",
    path: "./assets/js/dm19.js",
  },
  {
    num: 20,
    title: "Artifact/Product/Deliverable",
    category: memoGroup.PM_BASICS,
    keywords: "ARTIFACT PRODUCT DELIVERABLE",
    path: "./assets/js/dm20.js",
  },
  {
    num: 21,
    title: "Parkinson's Law: Work Expands",
    category: memoGroup.MEETINGS,
    keywords: "MEETINGS PARKINSON'S LAW TOOLS TECHNIQUES PMBOK WORK EXPANDS WATER",
    path: "./assets/js/dm21.js",
  },
  {
    num: 22,
    title: "Parkinson's Law of Triviality",
    category: memoGroup.MEETINGS,
    keywords: "MEETINGS PARKINSON'S LAW TRIVIALITY BIKESHEDDING NUCLEAR POWER PLANT",
    path: "./assets/js/dm22.js",
  },
  {
    num: 23,
    title: "Little's Law",
    category: memoGroup.TIME,
    keywords: "LITTLE'S LAW TIME SCHEUDLE PIPELINE",
    path: "./assets/js/dm23.js",
  },
  {
    num: 24,
    title: "Deadlines",
    category: memoGroup.TIME,
    keywords: "DEADLINES STRESS",
    path: "./assets/js/dm24.js",
  },
  {
    num: 25,
    title: "Team Develoment",
    category: memoGroup.PEOPLE,
    keywords: "TEAM DEVELOPMENTAL SEQUENCE GROUPS TUCKMAN JENSEN NAVY FORMING STORMING NORMING PERFORMING ADJOURNING PMBOK PMP",
    path: "./assets/js/dm25.js",
  },
  {
    num: 26,
    title: "Motivation: Expectancy, Hygiene, Achievment",
    category: memoGroup.PSYCHOLOGY,
    keywords: "MOTIVATION EXPECTANCY THEORY HERZBERG'S HYGIENE TWO-FACTOR ACHIEVMENT MCCLELLAND'S HUMAN NEED DILBERT PSYCHOLOGY PMBOK PMP",
    path: "./assets/js/dm26.js",
  },
  {
    num: 27,
    title: "Motivation: X, Y, Z",
    category: memoGroup.PSYCHOLOGY,
    keywords: "MOTIVATION X Y Z MCGREGGOR OUCHI JAPAN PSYCHOLOGY PMBOK PMP",
    path: "./assets/js/dm27.js",
  },
  {
    num: 28,
    title: "Bases of Sosical Power",
    category: memoGroup.PEOPLE,
    keywords: "JOHN FRENCH BERTRAM RAVEN BASES SOCIAL POWER POSITIONAL AUTHORITY FORMAL LEGITIMATE REWARD COERCIVE PUNISHMENT PENALTY PERSONAL EXPERT REFERENT HOMER SIMPSONS SPIDERMAN PETER PARKER MARVEL PEOPLE MANAGEMENT PSYCHOLOGY",
    path: "./assets/js/dm28.js",
  },
  {
    num: 29,
    title: "How Do You Say Hello?",
    category: memoGroup.COMMUNICATION,
    keywords: "HOW DO YOU SAY HELLO PSYCHOLOGY COMMUNICATION PHILIP MCALEER ALEXANDER TODOROV PASCAL BELIN GLASGOW PUBLIC SPEAKING",
    path: "./assets/js/dm29.js",
  },
  {
    num: 30,
    title: "The Sound of Power",
    category: memoGroup.COMMUNICATION,
    keywords: "SOUND POWER COMMUNICATION PSYCHOLOGY CONVEYING DETECTING HIERARCHICAL RANK THROUGH VOICE PITCH PUBLIC SPEAKING SEI JEN KO SAN DIEGO UNIVERSITY MELODY SADLER ADAM GALINSKY PSYCHOLOGICAL SCIENCE",
    path: "./assets/js/dm30.js",
  },
  {
    num: 31,
    title: "Leadership in Practice",
    category: memoGroup.PEOPLE,
    keywords: "LEADERSHIP STYLES VISION AUTOCRATIC LAISSEZ-FAIRE DEMOCRATIC PARTICIPATIVE DECISIONS MAKING",
    path: "./assets/js/dm31.js",
  },
  {
    num: 32,
    title: "Leadership in Theory",
    category: memoGroup.PEOPLE,
    keywords: "LEADERSHIP THEORY TANNENBAUM SCHMIDT CONTINUUM MANAGEMENT SITUATIONAL LEVELS FREEDOM CONTEXTUAL DIRECTING COACHING SUPPORTING DELEGATING TRANSACTIONAL TRANSFORMATIONAL",
    path: "./assets/js/dm32.js",
  },
  {
    num: 33,
    title: "Emotional Intelligence",
    category: memoGroup.PEOPLE,
    keywords: "EMOTIONAL INTELLIGENCE EMOTIONS IGNORED EFFECTIVE LISTENING BETTER GROUP DYNAMICS INTROSPECTION JULIAN TREASURE TED TALK",
    path: "./assets/js/dm33.js",
  },
  {
    num: 34,
    title: "Completed Staff Work",
    category: memoGroup.PEOPLE,
    keywords: "DOCTRINE COMPLETED STAFF WORK PRESENT SOLUTIONS SCOPE SBAR SITUATION BACKGROUND ASSESSMENT RECOMMENDATION SCOPE SUBJECT CHALLENGE OPPORTUNITIES POSSIBILITIES EVALUATE",
    path: "./assets/js/dm34.js",
  },
  {
    num: 35,
    title: "OODA Loop Decision Model",
    category: memoGroup.TT,
    keywords: "OODA OBSERVE ORIENT DECIDE ACT LOOP DECISON MAKING MODEL JOHN BOYD AERIAL ATTACK STUDY FIGHTER PILOTS",
    path: "./assets/js/dm35.js",
  },
  {
    num: 36,
    title: "Message to Garcia",
    category: memoGroup.PEOPLE,
    keywords: "ANDREW ROWAN MESSAGE CALIXTO GARCIA ELBERT HUBBARD CUBA SPANISH-AMERICAN WAR WILLIAM MCKINLEY",
    path: "./assets/js/dm36.js",
  },
  {
    num: 37,
    title: "Synergy and Program Management",
    category: memoGroup.ENVIRONMENT,
    keywords: "BUZZWORDS SYNERGY PROGRAM MANAGEMENT BENEFITS MAPPING",
    path: "./assets/js/dm37.js",
  },
  {
    num: 38,
    title: "Communication Methods",
    category: memoGroup.COMMUNICATION,
    keywords: "EFFECTIVE COMMUNICATION METHODS INTERACTIVE PUSH PULL",
    path: "./assets/js/dm38.js",
  },
  {
    num: 39,
    title: "Why Projects Are Undertaken",
    category: memoGroup.PM_BASICS,
    keywords: "WHY PROJECTS UNDERTAKEN MARKET DEMAND STRATEGIC OPPORTUNITY BUSINESS NEED SOCIAL ENVIRONMENTAL CONSIDERATION CUSTOMER REQUEST TECHNOLOGICAL ADVANCE LEGAL REQUIREMENT PMBOK PMP",
    path: "./assets/js/dm39.js",
  },
  {
    num: 40,
    title: "Burnout",
    category: memoGroup.PSYCHOLOGY,
    keywords: "BURNOUT PSYCHOLOGY Z73.0 DROWNING DRIED UP STRESS",
    path: "./assets/js/dm40.js",
  },
  {
    num: 41,
    title: "Collaboration in High Functioning Teams",
    category: memoGroup.PEOPLE,
    keywords: "HIGH FUNCTIONING TEAMWORK INTEGRITY TONE EMMERSON THUNDERDOME KNEEJERK REACTION BLAME COLLABORATION PROUD MARY TINA TURNER",
    path: "./assets/js/dm41.js",
  },
  {
    num: 42,
    title: "Law of Diminishing Marginal Returns",
    category: memoGroup.TIME,
    keywords: "LAW DIMINISHING MARGINAL RETURNS ECONOMICS VOLTAIRE PERFECT ENEMY OF GOOD BRAG-PLAINING",
    path: "./assets/js/dm42.js",
  },
  {
    num: 43,
    title: "Conflict Management",
    category: memoGroup.TT,
    keywords: "CONFLICT MANAGEMENT WITHDRAW AVOID SMOOTH ACCOMMODATE FORCE DIRECT COMPROMISE RECONCILE COLLABORATE PROBLEM SOLVING PMBOK PMP",
    path: "./assets/js/dm43.js",
  },
  {
    num: 44,
    title: "Trigger Condition",
    category: memoGroup.ENVIRONMENT,
    keywords: "TRIGGER CONDITION RISK TSUNAMI",
    path: "./assets/js/dm44.js",
  },
  {
    num: 45,
    title: "How You Craft a Message",
    category: memoGroup.COMMUNICATION,
    keywords: "SPRINGTIME SPRING TIME BLIND CRAFT MESSAGE ODIN DAVID OGILVY MARY WELLS LAWRENCE JACQUES PREVERT CENTRAL PARK BEGGAR SIGN",
    path: "./assets/js/dm45.js",
  },
  {
    num: 46,
    title: "Coaching",
    category: memoGroup.PEOPLE,
    keywords: "COACHING TELEMACHUS MENTORING ALFRED LORD TENNYSON ULYSSES COUNSELING BOBBY KNIGHT CHAIR",
    path: "./assets/js/dm46.js",
  },
  {
    num: 47,
    title: "Close Project",
    category: memoGroup.PM_BASICS,
    keywords: "CLOSE PROJECT PMBOK PMP PROCESS GROUPS FALL HUMANITY ADDITION STARVATION INTEGRATION EXTINCTION BIG GULPS DUMBER",
    path: "./assets/js/dm47.js",
  },
  {
    num: 48,
    title: "Serial Position Effect",
    category: memoGroup.PSYCHOLOGY,
    keywords: "SERIAL POSITION EFFECT PRIMARY RECENCY MEMORY FORGET",
    path: "./assets/js/dm48.js",
  },
  {
    num: 49,
    title: "Gantt Chart",
    category: memoGroup.TIME,
    keywords: "HENRY GANTT CHART ME BAR SCHEDULE INFORMATION ACTIVITIES",
    path: "./assets/js/dm49.js",
  },
  {
    num: 50,
    title: "Abbreviations (100LL)",
    category: memoGroup.COMMUNICATION,
    keywords: "COMMUNICATION ABBREVIATIONS 100LL LESSONS LEARNED SIMPLICITY INSULT INTELLIGENCE CFB DNB HAR CVG REG PR KPI PLV GLRA CIO 57",
    path: "./assets/js/dm50.js",
  },
  {
    num: 51,
    title: "TL;DR",
    category: memoGroup.COMMUNICATION,
    keywords: "TL;DR TLDR BREVITY POLONIUS BLAISE PASCAL COMMUNICATION CLEAR PRECISE UNDERSTANDABLE",
    path: "./assets/js/dm51.js",
  },
  {
    num: 52,
    title: "Feedback",
    category: memoGroup.COMMUNICATION,
    keywords: "FEEDBACK POSITIVE NEGATIVE PERFORMANCE SYGAL AMITAY DAVID MOORE KATHARINE MOLLOY LORNA HALLIDAY",
    path: "./assets/js/dm52.js",
  },
  {
    num: 53,
    title: "Talk is not cheap (100LL)",
    category: memoGroup.COMMUNICATION,
    keywords: "TALK NOT CHEAP 100LL LESSONS LEARNED COMMUNICATION TELEPHONE OREO SPEEDWAGON TGI FRIDAYS 97",
    path: "./assets/js/dm53.js",
  },
  {
    num: 54,
    title: "Consistency",
    category: memoGroup.QUALITY,
    keywords: "CONSISTENCY CONSISTENT QUALITY HALLOWEEN WINDOWS",
    path: "./assets/js/dm54.js",
  },
  {
    num: 55,
    title: "Blowback",
    category: memoGroup.COMMUNICATION,
    keywords: "FEEDBACK BLOWBACK WOUND COMMUNICATION",
    path: "./assets/js/dm55.js",
  },
];
