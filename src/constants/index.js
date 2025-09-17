import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    // bomberman,
    // HPDBMS,
    algorithms,
    threejs,
    flappy,
    // sms,
    jobhook,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "works",
      title: "Works",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Full Stack Developer",
      icon: web,
    },
    {
      title: "API & Backend Engineer",
      icon: backend,
    },
    {
      title: "Java Developer",
      icon: mobile,
    },
    {
      title: "Problem Solver",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Frontend Development",
      company_name: "None",
      icon: starbucks,
      iconBg: "#383E56",
      date: "August 2022 - present",
      points: [
        "Building responsive and interactive UIs using HTML, CSS, JavaScript, and React.js.",
        "Optimizing frontend performance and ensuring cross-browser compatibility.",
        "Implementing reusable components and modern UI/UX design principles."
      ],
    },
    {
      title: "Java Programming",
      company_name: "none",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing object-oriented applications and implementing core Java concepts.",
        "Solving data structure and algorithm problems using Java.",
        "Working with Java-based tools and frameworks for backend development."
      ],
    },
    {
      title: "SpringBoot",
      company_name: "none",
      icon: shopify,
      iconBg: "#383E56",
      date: "Nov 2024 - Present",
      points: [
        "Creating RESTful APIs and backend services using Spring Boot.",
        "Implementing authentication and authorization with Spring Security and JWT.",
        "Integrating databases and third-party APIs into backend applications."
      ],
    },
    {
      title: "Database Management",
      company_name: "none",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Dec 2022 - Present",
      points: [
        "Designing, creating, and managing relational and NoSQL databases.",
        "Writing optimized SQL queries for data retrieval and manipulation.",
        "Ensuring database performance, security, and scalability."
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "This portfolio is sleek, fast, and beautifully designed — truly impressive!",
      name: "Nandini Pal",
      designation: "Fullstack Developer",
      company: "Amazon",
      // image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "Perfect blend of creativity and technical skill — highly recommended.",
      name: "Pratham Sharma",
      designation: "FE Developer",
      company: "minecraft",
      // image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "Smooth animations, responsive design, and a professional feel all around.",
      name: "Yash Joshi",
      designation: "Fullstack Developer",
      company: "Self Employed",
      // image: "https://randomuser.me/api/portraits/men/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "JobHook",
      description:
        "A Job Portal System to efficiently manage job applications, recruiter postings, and user profiles. Includes role-based dashboards for job seekers, recruiters, and admins to handle job listings, applications, and profile management.",
      tags: [
        {
          name: "typescript",
          color: "blue-text-gradient",
        },
        {
          name: "html",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: jobhook,
      source_code_link: "https://jobhook-frontend.onrender.com",
    },
    // {
    //   name: "School Management System",
    //   description:
    //     "School Management System for DPS with role-based dashboards to track attendance, academics, and administration.",
    //   tags: [
    //     {
    //       name: "react",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "restapi",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "bootstrap",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: sms,
    //   source_code_link: "https://github.com/Ayushdu37/School_Management_System",
    // },
    {
      name: "Algorithms Visualizer",
      description:
        "A simple web application that visualizes some of the most popular algorithms.",
      tags: [
        {
          name: "typescript",
          color: "blue-text-gradient",
        },
        {
          name: "html",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: algorithms,
      source_code_link: "https://ayush-algo-vis.netlify.app/",
    },
    {
      name: "Flappy Bird",
      description:
        "A Java swing game that is inspired by the classic FLappy Bird game.",
      tags: [
        {
          name: "Java",
          color: "blue-text-gradient",
        },
        {
          name: "Java-Swing",
          color: "green-text-gradient",
        },
      ],
      image: flappy,
      source_code_link: "https://github.com/Ayushdu37/Flappy-Bird",
    },
    
    
  ];
  
  export { services, technologies, experiences, testimonials, projects };