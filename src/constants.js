// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';
import junit5logo  from './assets/tech_logo/Junit5.jpg';
import hibernatelogo from './assets/tech_logo/hibernate.jpg';
import springai from './assets/tech_logo/spring AI.jpg';
import rag from './assets/tech_logo/RAG.jpg'


// Experience Section Logo's
//import webverseLogo from './assets/company_logo/webverse_logo.png';
import bharat_internLogo from './assets/company_logo/bharat_intern.jpeg';
import codesoft from './assets/company_logo/codesoft.png';
import DureTechLogo from './assets/company_logo/DureTechLogo.jpg';

// Education Section Logo's
import SBTETLogo from './assets/education_logo/sbtet-logo.png';
import cmrLogo from './assets/education_logo/cmrtc_logo.png';
import BSELogo from './assets/education_logo/BSE.png';

// Project Section Logo's
import clgexamguideLogo from './assets/work_logo/clgexamguide.png';
import docPatLogo from './assets/work_logo/docPat.png';
import sotingLogo from './assets/work_logo/Sorting.png';
import taskremLogo from './assets/work_logo/task_rem.png';
// import npmLogo from './assets/work_logo/npm.png';
import webverLogo from './assets/work_logo/web_dig.png';
import cmLogo from './assets/work_logo/cm.png';
import imagesearchLogo from './assets/work_logo/image_search.png';
import removebgLogo from './assets/work_logo/remove_bg.png';
import SUBYLogo from './assets/work_logo/SUBY.png';
import welthLogo from './assets/work_logo/welth.png';
import imonitor from './assets/work_logo/IMonitor.png';
import unitaid from './assets/work_logo/Unitaid.png';
import sde from './assets/work_logo/sde.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
    //  { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
     // { name: 'Angular', logo: angularLogo },
      { name: 'Redux', logo: reduxLogo },
     // { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
    //  { name: 'GSAP', logo: gsapLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', logo: springbootLogo },
      { name: 'Spring AI', logo: springai },
      { name: 'RAG', logo: rag },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    
      { name: 'PostgreSQL', logo: postgreLogo },
      {name : 'junit5' , logo:junit5logo},
      {name: 'hibernate', logo: hibernatelogo},
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },

    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      //{ name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
    //  { name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
     // { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
    //  { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
     // { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    /*{
      id: 0,
      img: webverseLogo,
      role: "Fullstack Developer",
      company: "Webverse Digital",
      date: "April 2024 - Present",
      desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "TypeScript",
        "Node JS",
        "Tailwind CSS",
        "MongoDb",
        "Redux",
        " Next Js",
      ],
    },
     */

    {
      id: 0,
      img: DureTechLogo,
      role: "Associate Software Engineer",
      company: "Dure Technologies",
      date: "Jan 2026 - present 2026",
      desc:  `• Worked on developing and maintaining RESTful APIs using Java and Spring Boot.\n
• Optimized SQL queries and improved API response time by 30%.
• Implemented input validation and exception handling.
• Resolved backend issues by debugging request lifecycle flows.`,
      skills: [
        "Java",
        "Spring Boot",
        "MongoDB",
        "Postgres",
        "RestAPI's",
        "ReactJS",
        "Redux",
        "JavaScript",
        "Tailwind CSS",
        "HTML",
        "CSS"
      ],
    },
    {
      id: 1,
      img: bharat_internLogo,
      role: "Web Developer Intern",
      company: "Bharat Intern",
      date: "August 2023 - September 2023",
      desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, PHP, SQL, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
      skills: [
        "ReactJS",
        "Redux",
        "JavaScript",
        "Tailwind CSS",
        "HTML",
        "CSS",
        "SQL",
      ],
    },
    {
      id: 2,
      img: codesoft,
      role: "Java Intern",
      company: "CodeSoft",
      date: "October 2023 - November 2023",
      desc: "Worked as a Java Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Java. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
      skills: [
        "HTML",
        "CSS",
        "Javascript",
        "Bootstrap",
        "Java",
        "JUnit",
        "JSP",
        "Servlet",
      ],
    },
  ];
  
  export const education = [
    
    {
      id: 1,
      img: cmrLogo,
      school: "CMR TECHNICAL CAMPUS, Hyderabad",
      date: "Sept 2022 - jun 2025",
      grade: "74.5%",
      desc: "I completed my Bachelor of Technology in Information Technology (B.Tech.) from CMR TECHNICAL CAMPUS, Hyderabad. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at CMR TECHNICAL CAMPUS allowed me to work on projects that applied theoretical concepts to real-world problems.",
      degree: "Bachelor of Technology  - B.Tech (Information Technology)",
    },
    {
      id: 2,
      img: SBTETLogo,
      school: "Goverment Polytechnic college , Mahabubnagar",
      date: "july 2019 - May 2022",
      grade: "89.3%",
      desc: "I completed my Diploma in Electrical and Electronics Engineering  from Government Polytechnic college, Mahabubnagar, under the SBTET board, where I studied Physics, Chemistry, and Mathematics (PCM) with Electrical and Electronics Engg.",
      degree: "Diploma(XII) - Electrical and Electronics Engg",
    },
    // {
    //   id: 3,
    //   img: BSELogo,
    //   school: "Zilla Parishad High School, Renivatla",
    //   date: "Jun 2018 - May 2019",
    //   grade: "85%",
    //   desc: "I completed my class 10 education from Zilla Parishad High School, Renivatla, under the SBSE board, where I studied Physics, Chemistry, and Mathematics (PCM).",
    //   degree: "SBSE(X), Physics, Chemistry, and Mathematics ,SOCIAL (PCM)",
    // },
  ];
  
  export const projects = [

    
    {
      id: 0,
      title: "SDE Internships & Jobs — Full-Stack SaaS Job Portal ",
      description:
      `Independently designed and deployed a production-grade SaaS job portal from scratch, used by real users,
enabling SDE students and graduates to discover and apply for internships and jobs.
◦ Built full-stack architecture with React.js frontend (Vercel), Node.js/Express.js backend (Render) and Post-
greSQL database (Supabase) with SSL-secured cloud connectivity
◦ Designed relational database schema with 6 tables, 5 stored procedures, custom ENUMs and 5 performance
indexes in PostgreSQL.`,
      image: sde,
      tags: ["React.js", "Node.js", "Express.js", "PostgreSQL (Supabase)", "JWT", "Razorpay", "AWS S3", "REST API's"],
      github: "https://github.com/anilkumark215/sdejobs-backend",
      webapp: "https://sdejobs-frontend.vercel.app/",
    },

    {
      id: 1,
      title: "Monitor – Healthcare Monitoring Program Management Platform",
      description:
      `Used by Ministries of Health across 48+ countries for healthcare program monitoring and management.
◦ Enabled real-time data collection, monitoring, and reporting for public health initiatives, field operations, audits, and
compliance activities.
◦ Provided centralized dashboards, analytics, role-based access control, and workflow management.
◦ Supported government stakeholders in making data-driven decisions and improving healthcare outcomes.`,
      image: imonitor,
      tags: ["Java","Spring Boot", "MongoDB", "Postgresql","REST API's"],
      github: "",
      webapp: "https://v1.nextgen.imonitorplus.com/dashboard/login",
    },

    {
      id: 2,
      title: "Unitaid – TB Program Management Monitoring Platform",
      description:
      `◦ Used by Ministries of Health across 20+ countries to support Tuberculosis (TB) program management and monitoring.
◦ Enabled secure collection, management, and analysis of TB-related healthcare data through centralized dashboards and
reporting tools.
◦ Provided performance tracking, analytics, role-based access, and real-time visibility into program outcomes.
◦ Improved operational transparency and supported data-driven decision-making for national TB control initiatives`,
      image: unitaid,
      tags: ["Java","Spring Boot", "postgres", "ReactJS"],
      github: "https://github.com/anilkumark215/Swiggy_Clone_React",
      webapp: "https://swiggy-clone-react-ten.vercel.app/",
    },

      {
      id: 3,
      title: "SUBY – MERN Stack Food Delivery App",
      description:
        "Developed a Swiggy-like food delivery web app using MERN stack (MongoDB, Express.js, React.js, Node.js). Implemented role-based access for customers and vendors, enabling vendors to manage their own restaurants, menus, and orders Added features like cart, order tracking, and admin dashboard. Ensured secure payments and real-time order status updates using Socket.io.",
      image: SUBYLogo,
      tags: ["MongoDB","EXPRESS.JS", "React JS", "Node.js"],
      github: "https://github.com/anilkumark215/Swiggy_Clone_React",
      webapp: "https://swiggy-clone-react-ten.vercel.app/",
    },
    {
      id: 4,
      title: "Welth (AI Finance Platform)",
      description:"Built a Full Stack AI Finance Platform using Next.js, Tailwind, Prisma, and Shadcn UI, integrating Gemini AI for intelligent financial insights.Implemented secure authentication, real-time data handling, and responsive UI to deliver a seamless user experience.",
      image: welthLogo,
      tags: [" Next.js", "ReactJs","Tailwind", "Prisma", "Shadcn UI","inngest","Gemini AI"],
      github: "https://github.com/anilkumark215/Welth-AI-Financial-Platform--Full-stack",
      webapp: "https://welth-ai-financial-platform-full-st-pi.vercel.app/",
    },
    {
      id: 5,
      title: "DOCTOR-PATIENT-PORTAL",
      description:
      " Developed an advanced online portal in Java leveraging JSP and Servlets to streamline patient engagement through features like real-time appointment bookings; ensured reliability of service operations via comprehensive JUnit5 test coverage.",
      image: docPatLogo,
      tags: ["Java", "JSP", "SERVLET", "MySQL", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/anilkumark215/DOCTOR-PATIENT-PORTAL",
      webapp: "https://doctor-patient-portal-new-2025.onrender.com",
    },
    {
      id: 6,
      title: " GUIDE-FOR-COLLEGE-EXAM-WEBSITE-MASTER",
      description:
      "Developed an online platform using Java, HTML, CSS, and JavaScript with a centralized MySQL database, enabling students to access previous exam papers via a user-friendly searchable interface improving usage and retrieval speed.",
      image: clgexamguideLogo,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
      github : "https://github.com/anilkumark215",
      webapp: "https://guide-for-college-exam-website-master.netlify.app/?",
    },
    
    {
      id: 7,
      title: "SORTING VISUALIZER",
      description:
      "Designed a web app to visualize sorting algorithms like Bubble,Merge,and QuickSort with animations and complexity visualization. Engineered unique functionalities allowing end-users to select from five different sortingalgorithms effort lessly while fine tuning animation speed supto three times faster than default",
      image: sotingLogo,
      tags: ["API", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/anilkumark215",
      webapp: "https://sorting-visualizer-algo-anil.netlify.app/",
    },
   
  ];  

  