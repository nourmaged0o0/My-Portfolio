"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, ExternalLink, MapPin, Calendar, Phone, Brain, Code, Database, Server, Globe, Cpu, Zap, Palette, GitBranch, Cloud, Shield, Users, Target, Lightbulb, Languages, MousePointer } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import HCIA from "../public/certificates/HCIA.png"
import HCIP from "../public/certificates/HCIP.png"
import DotPy from "../public/certificates/DotPy.png"
import DEPI from "../public/certificates/DEPI.png"

export default function Portfolio() {
  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }

  const projects = [
    {
      id: 1,
      title: "PF PredictX",
      description: "Machine learning model to predict household power factor from time-series data. Enables utilities and households to optimize energy usage and cut costs.",
      techStack: ["Python", "Flask", "Machine Learning", "Time Series Analysis"],
      category: "AI & Full Stack",
      link: "https://pf-predictx.netlify.app/",
    },
    {
      id: 2,
      title: "Pothole Detection System",
      description: "Real-time pothole detection system that estimates depth, height, and width using computer vision and depth estimation.",
      techStack: ["Python", "YOLOv11", "MiDaS", "Computer Vision", "OpenCV"],
      category: "AI/ML",
      link: "https://github.com/nourmaged0o0/Potholes_Detection",
    },
    {
      id: 3,
      title: "Global Ambition Website",
      description: "Official responsive website with multilingual interface supporting Arabic and English content.",
      techStack: ["React", "Django", "Multilingual", "Responsive Design"],
      category: "Full Stack",
      link: "https://b-ambition.com/",
    },
  ]

  const experiences = [
    {
      id: 1,
      company: "Freelancer",
      title: "Full Stack Developer",
      duration: "March 2025 - Present",
      description: "Designed and developed full-stack web applications using Node.js, Express.js, Django, React, and Next.js. Implemented RESTful APIs and handled database integration with MongoDB and PostgreSQL.",
      icon: <Code className="w-5 h-5" />,
    },
    {
      id: 2,
      company: "VirtuFirm",
      title: "Co-founder & Backend Track Head",
      duration: "January 2025 - Present",
      description: "Co-founded a student-led simulation company focused on preparing students for real-world work environments through innovative training modules and workflow simulations.",
      icon: <Brain className="w-5 h-5" />,
    },
    {
      id: 3,
      company: "Digital Egypt Pioneers Initiative",
      title: "IBM Data Scientist Intern",
      duration: "October 2024 - May 2025",
      description: "Conducted data analysis, data cleaning, and machine learning model training for enterprise-level applications. 4 months technical training + 2 months freelancing coaching.",
      icon: <Database className="w-5 h-5" />,
    },
    {
      id: 4,
      company: "Huawei ICT Academy",
      title: "AI Trainee",
      duration: "July 2024 - August 2024",
      description: "Completed HCIA and HCIP levels in AI and ML training. Gained hands-on experience with Machine Learning, Deep Learning, Audio Preprocessing, NLP, and Computer Vision.",
      icon: <Brain className="w-5 h-5" />,
    },
  ]

  const volunteering = [
    {
      id: 1,
      organization: "180 Daraga",
      role: "Technical Member",
      duration: "December 2024 - April 2025",
      description: "Contributed to student activity projects, gained practical skills in both frontend and backend development while working in team-oriented environments.",
    },
    {
      id: 2,
      organization: "Endl",
      role: "Team Leader & Event Speaker",
      duration: "October 2024",
      description: "Led dynamic teams across multiple locations, delivered impactful experiences through collaboration and cultivated strong leadership skills.",
    },
  ]

  const education = [
    {
      id: 1,
      degree: "Bachelor of Computer Science",
      institution: "Cairo University",
      duration: "October 2023 - 2027",
      details: "Major: General | Passionate in Artificial Intelligence | GPA: 2.76",
    },
    {
      id: 2,
      degree: "Data Science & AI Diploma",
      institution: "DotPy",
      duration: "April 2024 - November 2024",
      details: "75 training hours in Data Science and AI. Hands-on experience with supervised/unsupervised learning, data analysis, visualization, and statistical modeling.",
    },
  ]

  const certificates = [
    {
      id: 1,
      name: "DEPI Learning Program",
      issuer: "Digital Egypt Pioneers Initiative - DEPI",
      date: "May 2025",
      category: "Data Science",
      description: "7 months comprehensive training program in data science and AI applications, including 4 months technical training and 2 months freelancing coaching.",
      image: DEPI,
      location: "Egypt",
      duration: "7 months",
      type: "Hybrid"
    },
    {
      id: 2,
      name: "HCIA - Huawei Certified ICT Associate",
      issuer: "Huawei ICT Academy - Cairo University",
      date: "August 2024",
      category: "AI/ML",
      description: "Entry-level AI and Machine Learning certification covering fundamental concepts and practical applications.",
      image: HCIA,
      location: "Giza, Al Jizah, Egypt",
      duration: "2 months",
      type: "Hybrid"
    },
    {
      id: 3,
      name: "HCIP - Huawei Certified ICT Professional",
      issuer: "Huawei ICT Academy - Cairo University",
      date: "August 2024",
      category: "AI/ML",
      description: "Advanced certification in AI and ML technologies including Deep Learning, Audio Preprocessing, NLP, and Computer Vision.",
      image: HCIP,
      location: "Giza, Al Jizah, Egypt",
      duration: "2 months",
      type: "Hybrid"
    },
    {
      id: 4,
      name: "Data Science & AI Diploma",
      issuer: "DotPy",
      date: "November 2024",
      category: "Data Science",
      description: "Comprehensive diploma covering Data Science and AI including CNN, Computer Vision, YOLO, Machine Learning, Deep Learning, and Python programming.",
      image: DotPy,
      location: "Egypt",
      duration: "7 months",
      type: "On-Site"
    },
  ]

  const technicalSkills = [
    { name: "HTML, CSS", icon: <Globe className="w-4 h-4" />, category: "Frontend" },
    { name: "JavaScript, TypeScript", icon: <Code className="w-4 h-4" />, category: "Programming" },
    { name: "React.js, Next.js", icon: <Zap className="w-4 h-4" />, category: "Frontend" },
    { name: "Node.js, Express.js", icon: <Server className="w-4 h-5" />, category: "Backend" },
    { name: "Python", icon: <Code className="w-4 h-4" />, category: "Programming" },
    { name: "Django, Flask", icon: <Server className="w-4 h-4" />, category: "Backend" },
    { name: "TensorFlow/Keras", icon: <Brain className="w-4 h-4" />, category: "AI/ML" },
    { name: "Computer Vision", icon: <Cpu className="w-4 h-4" />, category: "AI/ML" },
    { name: "YOLO", icon: <Target className="w-4 h-4" />, category: "AI/ML" },
    { name: "Data Annotation", icon: <MousePointer className="w-4 h-4" />, category: "AI/ML" },
    { name: "C++", icon: <Code className="w-4 h-4" />, category: "Programming" },
    { name: "MLOps", icon: <Zap className="w-4 h-4" />, category: "AI/ML" },
    { name: "OpenCV", icon: <Cpu className="w-4 h-4" />, category: "AI/ML" },
    { name: "REST APIs", icon: <Server className="w-4 h-4" />, category: "Backend" },
    { name: "MongoDB, PostgreSQL, MySQL", icon: <Database className="w-4 h-4" />, category: "Database" },
    { name: "Git, GitHub", icon: <GitBranch className="w-4 h-4" />, category: "Tools" },
    { name: "Docker", icon: <Cloud className="w-4 h-4" />, category: "Tools" },
    { name: "AWS", icon: <Cloud className="w-4 h-4" />, category: "Cloud" },
    { name: "Tailwind CSS", icon: <Palette className="w-4 h-4" />, category: "Frontend" },
  ]

  const softSkills = [
    { name: "Project Management", icon: <Target className="w-4 h-4" /> },
    { name: "Problem Solving", icon: <Lightbulb className="w-4 h-4" /> },
    { name: "Leadership", icon: <Users className="w-4 h-4" /> },
    { name: "Team Working", icon: <Users className="w-4 h-4" /> },
    { name: "Touch Typing", icon: <MousePointer className="w-4 h-4" /> },
    { name: "Intermediate English", icon: <Languages className="w-4 h-4" /> },
  ]

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const staggerItem = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.6 }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-[#000000e3] text-white">
      {/* Navigation */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-purple-500/20"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              NOUR MAGED
            </div>
            <div className="hidden md:flex space-x-8">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-gray-300 hover:text-purple-400 transition-colors font-medium cursor-pointer"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('experience')}
                className="text-gray-300 hover:text-purple-400 transition-colors font-medium cursor-pointer"
              >
                Experience
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="text-gray-300 hover:text-purple-400 transition-colors font-medium cursor-pointer"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('skills')}
                className="text-gray-300 hover:text-purple-400 transition-colors font-medium cursor-pointer"
              >
                Skills
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-300 hover:text-purple-400 transition-colors font-medium cursor-pointer"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <motion.section 
        id="home" 
        className="pt-25 pb-20 px-6 scale-95"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto text-center">
          <div className="mb-12">
            <motion.h1 
              className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3}}
            >
              NOUR MAGED
            </motion.h1>
            <motion.h2 
              className="text-3xl md:text-4xl text-purple-300 mb-8 font-light"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3}}
            >
              FULL STACK & AI ENGINEER
            </motion.h2>
            <motion.p 
              className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3}}
            >
              Full Stack Engineer with a backend focus, skilled in Node.js, Django, MongoDB, and PostgreSQL. 
              Experienced in AI/ML with expertise in Computer Vision, YOLO, and TensorFlow. 
              Passionate about integrating cutting-edge technologies to deliver complete solutions.
            </motion.p>

            {/* Contact Info */}
            <motion.div 
              className="flex flex-wrap justify-center gap-6 mb-8 text-gray-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3}}
            >
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-purple-300" />
                <span>Cairo, Egypt</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-purple-300" />
                <span>(+20) 1270187283</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-purple-300" />
                <span>nourmaged1822004@gmail.com</span>
              </div>
            </motion.div>
          </div>

          {/* Social Links */}
          <motion.div 
            className="flex justify-center space-x-6 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3}}
          >
            <Link
              href="https://github.com/nourmaged0o0"
              target="_blank"
              className="p-4 rounded-full bg-purple-600/20 border border-purple-500/30 hover:bg-purple-600/40 hover:border-purple-400 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25"
            >
              <Github className="w-6 h-6 text-purple-300" />
            </Link>
            <Link
              href="https://linkedin.com/in/nourelmaghraby"
              target="_blank"
              className="p-4 rounded-full bg-purple-600/20 border border-purple-500/30 hover:bg-purple-600/40 hover:border-purple-400 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25"
            >
              <Linkedin className="w-6 h-6 text-purple-300" />
            </Link>
            <Link
              href="mailto:nourmaged1822004@gmail.com"
              target="_blank"
              className="p-4 rounded-full bg-purple-600/20 border border-purple-500/30 hover:bg-purple-600/40 hover:border-purple-400 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25"
            >
              <Mail className="w-6 h-6 text-purple-300" />
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section 
        id="experience" 
        className="py-20 px-6 bg-black/30"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="container mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
            variants={fadeInUp}
          >
            EXPERIENCE
          </motion.h2>

          <div className="max-w-5xl mx-auto space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                variants={staggerItem}
                custom={index}
              >
                <Card className="bg-gray-900/50 border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-purple-600/20 rounded-lg border border-purple-500/30 text-purple-300">
                          {exp.icon}
                        </div>
                        <div>
                          <CardTitle className="text-white text-xl">{exp.title}</CardTitle>
                          <div className="flex items-center gap-2 text-purple-300 mt-1">
                            <span className="font-medium">{exp.company}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-gray-300 bg-purple-600/10 px-3 py-1 rounded-full border border-purple-500/30">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm font-medium">{exp.duration}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 leading-relaxed">{exp.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section 
        id="projects" 
        className="py-20 px-6 bg-black/30"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="container mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
            variants={fadeInUp}
          >
            PROJECTS
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={staggerItem}
                custom={index}
              >
                <Card className="bg-gray-900/50 border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 group">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-white text-xl">{project.title}</CardTitle>
                      <Badge
                        variant="secondary"
                        className={`text-xs font-medium ${
                          project.category === "AI/ML" 
                            ? "bg-blue-600/20 text-blue-200 border border-blue-400/30" 
                            : project.category === "AI & Full Stack"
                            ? "bg-purple-600/20 text-purple-200 border border-purple-400/30"
                            : "bg-green-600/20 text-green-200 border border-green-400/30"
                        }`}
                      >
                        {project.category}
                      </Badge>
                    </div>
                    <CardDescription className="text-gray-300">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-purple-600/20 text-purple-200 border border-purple-500/30 text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <Link href={project.link}  target="_blank">
                    <Button
                      variant="outline"
                      className="w-full cursor-pointer border-purple-500/50 text-purple-200 hover:bg-purple-600/20 hover:border-purple-400 bg-transparent"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Project
                    </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Volunteering Section */}
      <motion.section 
        className="py-20 px-6 bg-black/30"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="container mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
            variants={fadeInUp}
          >
            VOLUNTEERING
          </motion.h2>

          <div className="max-w-4xl mx-auto space-y-6">
            {volunteering.map((vol, index) => (
              <motion.div
                key={vol.id}
                variants={staggerItem}
                custom={index}
              >
                <Card className="bg-gray-900/50 border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                      <div>
                        <CardTitle className="text-white text-xl">{vol.role}</CardTitle>
                        <div className="text-purple-300 mt-1 font-medium">{vol.organization}</div>
                      </div>
                      <div className="flex items-center gap-2 text-gray-300 bg-purple-600/10 px-3 py-1 rounded-full border border-purple-500/30">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm font-medium">{vol.duration}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 leading-relaxed">{vol.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Education Section */}
      <motion.section 
        className="py-20 px-6 bg-black/30"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="container mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
            variants={fadeInUp}
          >
            EDUCATION
          </motion.h2>

        <div className="max-w-4xl mx-auto space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                variants={staggerItem}
                custom={index}
              >
                <Card className="bg-gray-900/50 border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                      <div>
                        <CardTitle className="text-white text-xl">{edu.degree}</CardTitle>
                        <div className="text-purple-300 mt-1 font-medium">{edu.institution}</div>
                      </div>
                      <div className="flex items-center gap-2 text-gray-300 bg-purple-600/10 px-3 py-1 rounded-full border border-purple-500/30">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm font-medium">{edu.duration}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 leading-relaxed">{edu.details}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Certificates Section */}
      <motion.section 
        className="py-20 px-6 bg-black/30"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="container mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
            variants={fadeInUp}
          >
            CERTIFICATES
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.id}
                variants={staggerItem}
                custom={index}
              >
                <Card className="bg-gray-900/50 border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 group">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-white text-lg">{cert.name}</CardTitle>
                      <Badge
                        variant="secondary"
                        className={`text-xs font-medium ${
                          cert.category === "AI/ML" 
                            ? "bg-blue-600/20 text-blue-200 border border-blue-400/30" 
                            : cert.category === "Data Science"
                            ? "bg-green-600/20 text-green-200 border border-green-400/30"
                            : "bg-purple-600/20 text-purple-200 border border-purple-400/30"
                        }`}
                      >
                        {cert.category}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 text-purple-300 text-sm font-medium">
                      <span>{cert.issuer}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 text-sm leading-relaxed mb-3">{cert.description}</p>
                    
                    {/* Certificate Image */}
                    <div className="mb-3">
                      <div className="relative w-full h-48 bg-gray-800/50 rounded-lg border border-purple-500/20 overflow-hidden group-hover:border-purple-400/40 transition-colors">
                        <Image 
                          src={cert.image} 
                          alt={cert.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                    </div>

                    {/* Additional Details */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-gray-400 text-xs">
                        <Calendar className="w-3 h-3" />
                        <span>Issued: {cert.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400 text-xs">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>{cert.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400 text-xs">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Duration: {cert.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400 text-xs">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                        </svg>
                        <span>Type: {cert.type}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section 
        id="skills" 
        className="py-20 px-6 bg-black/30"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="container mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
            variants={fadeInUp}
          >
            SKILLS
          </motion.h2>

          <div className="max-w-7xl mx-auto">
            {/* Technical Skills */}
            <div className="mb-12">
              <motion.h3 
                className="text-2xl font-bold mb-8 text-white flex items-center gap-3"
                variants={fadeInUp}
              >
                <Server className="w-6 h-6 text-purple-300" />
                Technical Skills
              </motion.h3>
              
              {/* Skills by Category */}
              <motion.div 
                className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
                variants={staggerContainer}
              >
                {technicalSkills.map((skill, index) => (
                  <motion.div
                    key={index}
                    variants={staggerItem}
                    custom={index}
                    className="bg-gray-900/50 border border-purple-500/20 rounded-lg px-4 py-3 hover:border-purple-400/40 transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="text-purple-300 group-hover:text-purple-200 transition-colors">
                        {skill.icon}
                      </div>
                      <span className="text-gray-200 font-medium text-sm">{skill.name}</span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Soft Skills */}
            <div>
              <motion.h3 
                className="text-2xl font-bold mb-8 text-white flex items-center gap-3"
                variants={fadeInUp}
              >
                <Brain className="w-6 h-6 text-purple-300" />
                Soft Skills
              </motion.h3>
              <motion.div 
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
                variants={staggerContainer}
              >
                {softSkills.map((skill, index) => (
                  <motion.div
                    key={index}
                    variants={staggerItem}
                    custom={index}
                    className="bg-gray-900/50 border border-purple-500/20 rounded-lg px-4 py-3 hover:border-purple-400/40 transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="text-purple-300 group-hover:text-purple-200 transition-colors">
                        {skill.icon}
                      </div>
                      <span className="text-gray-200 font-medium text-sm">{skill.name}</span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        id="contact" 
        className="py-20 px-6 bg-black/30"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="container mx-auto max-w-2xl">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
            variants={fadeInUp}
          >
            GET IN TOUCH
          </motion.h2>

          <motion.div variants={scaleIn}>
            <Card className="bg-gray-900/50 border-purple-500/20">
              <CardHeader>
                <CardTitle className="text-white text-2xl text-center">Let's Work Together</CardTitle>
                <CardDescription className="text-gray-300 text-center">
                  Have a project in mind? I'd love to hear about it.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-purple-300 mb-2 block">Name</label>
                    <Input
                      placeholder="Your name"
                      className="bg-gray-800/50 border-purple-500/30 text-white placeholder:text-gray-500 focus:border-purple-400"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-purple-300 mb-2 block">Email</label>
                    <Input
                      type="email"
                      placeholder="your.email@example.com"
                      className="bg-gray-800/50 border-purple-500/30 text-white placeholder:text-gray-500 focus:border-purple-400"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-purple-300 mb-2 block">Message</label>
                  <Textarea
                    placeholder="Tell me about your project..."
                    rows={5}
                    className="bg-gray-800/50 border-purple-500/30 text-white placeholder:text-gray-500 focus:border-purple-400"
                  />
                </div>
                <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer 
        className="py-2 px-6 border-t border-purple-500/20 bg-black/50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto text-center">
          <p className="text-gray-400">© 2025 Nour Maged</p>
        </div>
      </motion.footer>
    </div>
  )
}
