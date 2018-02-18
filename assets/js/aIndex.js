const memoGroup = {
  PSYCHOLOGY: "Psychology",
  PM_BASICS: "Project Management Basics",
  ENVIRONMENT: "Environment",
  QUALITY: "Quality",
  COMMUNICATION: "Communication",
  TT: "Tools & Techniques",
  MEETINGS: "Meetings",
  TIME: "Time & Schedule",
  PEOPLE: "People & Teams",
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
    keywords: "PROGRESSIVE ELABORATION UNCERTAINTY",
    path: "./assets/js/dm1.js",
  },
  {
    num: 2,
    title: "Triple Constraint",
    category: memoGroup.PM_BASICS,
    keywords: "TRIPLE CONSTRAINTS TRIANGLE COST SCOPE SCHEDULE QUALITY",
    path: "./assets/js/dm2.js",
  },
  {
    num: 3,
    title: "Organizational Structures",
    category: memoGroup.ENVIRONMENT,
    keywords: "ORGANIZATIONAL STRUCTURE FUNCTIONAL PROJECTIZED MATRIX WEAK BALANCED STRONG",
    path: "./assets/js/dm3.js",
  },
  {
    num: 4,
    title: "Work Breakdown Structure",
    category: memoGroup.PM_BASICS,
    keywords: "WORK BREAKDOWN STRUCTURE WBS DRAGON DILBERT DOGBERT",
    path: "./assets/js/dm4.js",
  },
  {
    num: 5,
    title: "PM Knowledge Areas",
    category: memoGroup.PM_BASICS,
    keywords: "KNOWLEDGE AREAS PMBOK PROCESS GROUPS",
    path: "./assets/js/dm5.js",
  },
  {
    num: 6,
    title: "Expert Judgment",
    category: memoGroup.PM_BASICS,
    keywords: "EXPERT JUDGMENT TOOLS TECHNIQUES PMBOK",
    path: "./assets/js/dm6.js",
  },
  {
    num: 7,
    title: "Change Management",
    category: memoGroup.PM_BASICS,
    keywords: "CHANGE MANAGEMENT CONTROL PMBOK",
    path: "./assets/js/dm7.js",
  },
  {
    num: 8,
    title: "Tailoring",
    category: memoGroup.PM_BASICS,
    keywords: "TAILORING PMBOK FIT",
    path: "./assets/js/dm8.js",
  },
  {
    num: 9,
    title: "Programs & Portfolios",
    category: memoGroup.PM_BASICS,
    keywords: "PROGRAMS PORTFOLIOS PMBOK",
    path: "./assets/js/dm9.js",
  },
  {
    num: 10,
    title: "Manage Communications",
    category: memoGroup.COMMUNICATION,
    keywords: "MANAGE COMMUNICATIONS FRED BROOKS GROUP INTERCOMMUNICATION FORMULA MYITHICAL MAN MONTH",
    path: "./assets/js/dm10.js",
  },
  {
    num: 11,
    title: "Phase Gates",
    category: memoGroup.PM_BASICS,
    keywords: "PHASE GATES EXPLOIT POSITIVE RISK SCRUM AGILE REVIEWS RETROSPECTIVES ENOS NASA",
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
    keywords: "COST QUALITY POOR FAILURE NONCONFORMANCE DILBERT",
    path: "./assets/js/dm13.js",
  },
  {
    num: 14,
    title: "Pareto Principle",
    category: memoGroup.PM_BASICS,
    keywords: "PARETO DIAGRAM PRINCIPLE CHART 80 20 HISTOGRAM QUALITY",
    path: "./assets/js/dm14.js",
  },
  {
    num: 15,
    title: "Stakeholders",
    category: memoGroup.PM_BASICS,
    keywords: "STAKEHOLDERS PMBOK",
    path: "./assets/js/dm15.js",
  },
  {
    num: 16,
    title: "Process Groups",
    category: memoGroup.PM_BASICS,
    keywords: "PROCESS GROUPS PMBOK INITIATING PLANNING MONITORING CONTROLLING CLOSING",
    path: "./assets/js/dm16.js",
  },
  {
    num: 17,
    title: "Probability & Impact Matrix",
    category: memoGroup.TT,
    keywords: "PROBABILITY IMPACT MATRIX RISK PMBOK TOOLS",
    path: "./assets/js/dm17.js",
  },
  {
    num: 18,
    title: "Three Point Estimate",
    category: memoGroup.TT,
    keywords: "THREE 3 POINT ESTIMATE TOOLS TECHNIQUES PMBOK PERT",
    path: "./assets/js/dm18.js",
  },
  {
    num: 19,
    title: "Critical Path",
    category: memoGroup.TIME,
    keywords: "CRITICAL PATH METHOD FLOAT SLACK TIMELINE SEQUENCE SCHEDULE TECHNIQUES",
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
    keywords: "TEAM DEVELOPMENTAL SEQUENCE GROUPS TUCKMAN JENSEN NAVY FORMING STORMING NORMING PERFORMING ADJOURNING",
    path: "./assets/js/dm25.js",
  },
  {
    num: 26,
    title: "Motivation: Expectancy, Hygiene, Achievment",
    category: memoGroup.PSYCHOLOGY,
    keywords: "MOTIVATION EXPECTANCY THEORY HERZBERG'S HYGIENE TWO-FACTOR ACHIEVMENT MCCLELLAND'S HUMAN NEED DILBERT",
    path: "./assets/js/dm26.js",
  },
  {
    num: 27,
    title: "Motivation: X, Y, Z",
    category: memoGroup.PSYCHOLOGY,
    keywords: "MOTIVATION X Y Z MCGREGGOR OUCHI JAPAN",
    path: "./assets/js/dm27.js",
  },
];
