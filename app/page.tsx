"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, ExternalLink, MapPin, Calendar, Phone, Brain, Code, Database, Server, Globe, Cpu, Zap, Palette, GitBranch, Cloud, Shield, Users, Target, Lightbulb, Languages, MousePointer, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { useEffect, useRef, useState, useMemo, useCallback } from "react"
import HCIA from "../public/certificates/HCIA.png"
import HCIP from "../public/certificates/HCIP.png"
import DotPy from "../public/certificates/DotPy.png"
import DEPI from "../public/certificates/DEPI.png"

export default function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0])
  const [selectedCertificate, setSelectedCertificate] = useState<any>(null)

  // Smooth scroll function
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }, [])

  // Close modal when clicking outside or pressing escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedCertificate(null)
      }
    }

    if (selectedCertificate) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [selectedCertificate])

  // Scroll to top on page refresh/load
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Memoized data to prevent re-renders
  const projects = useMemo(() => [
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
  ], [])

  const experiences = useMemo(() => [
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
  ], [])

  const volunteering = useMemo(() => [
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
  ], [])

  const education = useMemo(() => [
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
  ], [])

  const certificates = useMemo(() => [
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
  ], [])

  const technicalSkills = useMemo(() => [
    { name: "HTML, CSS", icon: <Globe className="w-4 h-4" />, category: "Frontend" },
    { name: "JavaScript, TypeScript", icon: <Code className="w-4 h-4" />, category: "Programming" },
    { name: "React.js, Next.js", icon: <Zap className="w-4 h-4" />, category: "Frontend" },
    { name: "Node.js, Express.js", icon: <Server className="w-4 h-4" />, category: "Backend" },
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
  ], [])

  const softSkills = useMemo(() => [
    { name: "Project Management", icon: <Target className="w-4 h-4" /> },
    { name: "Problem Solving", icon: <Lightbulb className="w-4 h-4" /> },
    { name: "Leadership", icon: <Users className="w-4 h-4" /> },
    { name: "Team Working", icon: <Users className="w-4 h-4" /> },
    { name: "Touch Typing", icon: <MousePointer className="w-4 h-4" /> },
    { name: "Intermediate English", icon: <Languages className="w-4 h-4" /> },
  ], [])

  // Simplified animation variants for better performance
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.4,
        ease: "easeOut"
      }
    }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  }

  const staggerItem = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.3,
        ease: "easeOut"
      }
    }
  }

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.4,
        ease: "easeOut"
      }
    }
  }

  // Reduced particle count for better performance
  const particles = useMemo(() => 
    Array.from({ length: 12 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: Math.random() * 1.5,
      duration: 1.5 + Math.random()
    })), []
  )

  return (
    <div 
      ref={containerRef}
      className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-[#000000e3] text-white overflow-hidden"
    >
      {/* Certificate Modal */}
      {selectedCertificate && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedCertificate(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-4xl w-full max-h-[90vh] bg-gradient-to-br from-gray-900/95 to-gray-800/95 border border-purple-500/30 rounded-2xl overflow-hidden backdrop-blur-xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedCertificate(null)}
              className="absolute top-4 right-4 z-10 p-2 cursor-pointer bg-purple-600/80 hover:bg-purple-500/80 rounded-full text-white transition-colors duration-200 backdrop-blur-sm"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Certificate Image */}
            <div className="relative w-full h-[70vh] bg-gray-800/50">
              <Image
                src={selectedCertificate.image}
                alt={selectedCertificate.name}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
              />
            </div>

            {/* Certificate Details */}
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2">{selectedCertificate.name}</h3>
              <p className="text-purple-300 mb-4">{selectedCertificate.issuer}</p>
              <p className="text-gray-300 text-sm leading-relaxed">{selectedCertificate.description}</p>
              
              <div className="flex flex-wrap gap-4 mt-4">
                <div className="flex items-center gap-2 text-gray-300 text-sm">
                  <MapPin className="w-4 h-4 text-purple-300" />
                  <span>{selectedCertificate.location}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300 text-sm">
                  <Calendar className="w-4 h-4 text-purple-300" />
                  <span>{selectedCertificate.date}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300 text-sm">
                  <span>Duration: {selectedCertificate.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300 text-sm">
                  <Globe className="w-4 h-4 text-purple-300" />
                  <span>Type: {selectedCertificate.type}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Simplified Background Particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 bg-purple-400/20 rounded-full"
            style={{
              left: particle.left,
              top: particle.top,
            }}
            animate={{
              y: [0, -60, 0],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Simplified Background */}
      <motion.div
        className="fixed inset-0 bg-gradient-to-br from-purple-900/15 via-transparent to-pink-900/15"
        style={{
          y: y,
          opacity: opacity,
        }}
      />

      {/* Navigation */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: selectedCertificate ? 0 : 1, y: selectedCertificate ? -100 : 0 }}
        transition={{ duration: 0.4 }}
        className="fixed top-0 w-full z-50 backdrop-blur-xl bg-black/40 border-b border-purple-500/30 shadow-2xl"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div 
              className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              NOUR MAGED
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {['home', 'experience', 'projects', 'certificates', 'skills', 'contact'].map((section) => (
                <motion.button 
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-gray-300 hover:text-purple-400 transition-colors duration-200 font-medium cursor-pointer relative group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="capitalize">{section}</span>
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300" />
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <motion.section 
        id="home" 
        className="pt-32 pb-20 px-6 relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Simple floating elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl" />
          <div className="absolute top-40 right-20 w-24 h-24 bg-pink-500/10 rounded-full blur-xl" />
          <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-blue-500/10 rounded-full blur-xl" />
        </div>

        <div className="container mx-auto text-center relative z-10">
          <div className="mb-12">
            <motion.h1 
              className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6,
                ease: "easeOut"
              }}
            >
              NOUR MAGED
            </motion.h1>
            <motion.h2 
              className="text-3xl md:text-4xl text-purple-300 mb-8 font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5,
                delay: 0.2,
                ease: "easeOut"
              }}
            >
              FULL STACK & AI ENGINEER
            </motion.h2>
            <motion.p 
              className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5,
                delay: 0.3,
                ease: "easeOut"
              }}
            >
              Full Stack Engineer with a backend focus, skilled in Node.js, Django, MongoDB, and PostgreSQL. 
              Experienced in AI/ML with expertise in Computer Vision, YOLO, and TensorFlow. 
              Passionate about integrating cutting-edge technologies to deliver complete solutions.
            </motion.p>

            {/* Contact Info */}
            <motion.div 
              className="flex flex-wrap justify-center gap-6 mb-8 text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5,
                delay: 0.4,
                ease: "easeOut"
              }}
            >
              {[
                { icon: <MapPin className="w-5 h-5 text-purple-300" />, text: "Cairo, Egypt" },
                { icon: <Phone className="w-5 h-5 text-purple-300" />, text: "(+20) 1270187283" },
                { icon: <Mail className="w-5 h-5 text-purple-300" />, text: "nourmaged1822004@gmail.com" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.icon}
                  <span>{item.text}</span>
                </motion.div>
              ))}
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
        className="py-20 px-6 relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
      >
        <div className="container mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 via-[#b800b8] to-purple-400 bg-clip-text text-transparent"
            variants={fadeInUp}
          >
            EXPERIENCE
          </motion.h2>

          <div className="max-w-5xl mx-auto space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                variants={staggerItem}
                whileHover={{ 
                  scale: 1.01,
                  y: -2,
                  transition: { duration: 0.2 }
                }}
              >
                <Card className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 backdrop-blur-xl">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                      <div className="flex items-start gap-4">
                        <motion.div 
                          className="p-3 bg-gradient-to-br from-purple-600/30 to-pink-600/30 rounded-lg border border-purple-500/30 text-purple-300 backdrop-blur-sm"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.2 }}
                        >
                          {exp.icon}
                        </motion.div>
                        <div>
                          <CardTitle className="text-white text-xl">{exp.title}</CardTitle>
                          <div className="flex items-center gap-2 text-purple-300 mt-1">
                            <span className="font-medium">{exp.company}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-gray-300 bg-gradient-to-r from-purple-600/20 to-pink-600/20 px-3 py-1 rounded-full border border-purple-500/30 backdrop-blur-sm">
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
        className="py-20 px-6 relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
      >
        <div className="container mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 via-[#b800b8] to-purple-400 bg-clip-text text-transparent"
            variants={fadeInUp}
          >
            PROJECTS
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={staggerItem}
                whileHover={{ 
                  scale: 1.02,
                  y: -3,
                  transition: { duration: 0.2 }
                }}
              >
                <Card className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 backdrop-blur-xl group h-full">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-white text-xl">{project.title}</CardTitle>
                      <Badge
                        variant="secondary"
                        className={`text-xs font-medium backdrop-blur-sm ${
                          project.category === "AI/ML" 
                            ? "bg-gradient-to-r from-blue-600/30 to-blue-500/30 text-blue-200 border border-blue-400/30" 
                            : project.category === "AI & Full Stack"
                            ? "bg-gradient-to-r from-purple-600/30 to-pink-600/30 text-purple-200 border border-purple-400/30"
                            : "bg-gradient-to-r from-green-600/30 to-green-500/30 text-green-200 border border-green-400/30"
                        }`}
                      >
                        {project.category}
                      </Badge>
                    </div>
                    <CardDescription className="text-gray-300">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col h-full">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 text-purple-200 border border-purple-500/30 text-xs backdrop-blur-sm"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="mt-auto">
                      <Link href={project.link} target="_blank">
                        <Button
                          variant="outline"
                          className="w-full cursor-pointer border-purple-500/50 text-purple-200 hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-pink-600/20 hover:border-purple-400 bg-transparent backdrop-blur-sm transition-all duration-300"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Project
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Certificates Section */}
      <motion.section 
        id="certificates" 
        className="py-20 px-6 relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
      >
        <div className="container mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 via-[#b800b8] to-purple-400 bg-clip-text text-transparent"
            variants={fadeInUp}
          >
            CERTIFICATES
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.id}
                variants={staggerItem}
                whileHover={{ 
                  scale: 1.02,
                  y: -3,
                  transition: { duration: 0.2 }
                }}
              >
                <Card className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 backdrop-blur-xl group">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-white text-xl">{cert.name}</CardTitle>
                      <Badge
                        variant="secondary"
                        className={`text-xs font-medium backdrop-blur-sm ${
                          cert.category === "AI/ML" 
                            ? "bg-gradient-to-r from-blue-600/30 to-blue-500/30 text-blue-200 border border-blue-400/30" 
                            : "bg-gradient-to-r from-green-600/30 to-green-500/30 text-green-200 border border-green-400/30"
                        }`}
                      >
                        {cert.category}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 text-purple-300 mb-2">
                      <span className="font-medium">{cert.issuer}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300 bg-gradient-to-r from-purple-600/20 to-pink-600/20 px-3 py-1 rounded-full border border-purple-500/30 backdrop-blur-sm w-fit">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm font-medium">{cert.date}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 text-sm leading-relaxed mb-3">{cert.description}</p>
                    {/* Certificate Image - Clickable */}
                    <div className="mb-3">
                      <div 
                        className="relative w-full h-48 bg-gray-800/50 rounded-lg border border-purple-500/20 overflow-hidden group-hover:border-purple-400/40 transition-colors cursor-pointer"
                        onClick={() => setSelectedCertificate(cert)}
                      >
                        <Image
                          src={cert.image}
                          alt={cert.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        {/* Click indicator */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-purple-600/80 p-2 rounded-full backdrop-blur-sm">
                            <ExternalLink className="w-4 h-4 text-white" />
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Additional Details */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-gray-300 text-sm">
                        <MapPin className="w-4 h-4 text-purple-300" />
                        <span>{cert.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-300 text-sm">
                        <Calendar className="w-4 h-4 text-purple-300" />
                        <span>Duration: {cert.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-300 text-sm">
                        <Globe className="w-4 h-4 text-purple-300" />
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
        className="py-20 px-6 relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
      >
        <div className="container mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 via-[#b800b8] to-purple-400 bg-clip-text text-transparent"
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
              
              <motion.div 
                className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
                variants={staggerContainer}
              >
                {technicalSkills.map((skill, index) => (
                  <motion.div
                    key={index}
                    variants={staggerItem}
                    whileHover={{ 
                      scale: 1.02,
                      y: -1,
                      transition: { duration: 0.2 }
                    }}
                    className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 border border-purple-500/30 rounded-lg px-4 py-3 hover:border-purple-400/50 transition-all duration-300 backdrop-blur-xl group"
                  >
                    <div className="flex items-center gap-3">
                      <motion.div 
                        className="text-purple-300 group-hover:text-purple-200 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                      >
                        {skill.icon}
                      </motion.div>
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
                    whileHover={{ 
                      scale: 1.02,
                      y: -1,
                      transition: { duration: 0.2 }
                    }}
                    className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 border border-purple-500/30 rounded-lg px-4 py-3 hover:border-purple-400/50 transition-all duration-300 backdrop-blur-xl group"
                  >
                    <div className="flex items-center gap-3">
                      <motion.div 
                        className="text-purple-300 group-hover:text-purple-200 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                      >
                        {skill.icon}
                      </motion.div>
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
        className="py-20 px-6 relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
      >
        <div className="container mx-auto max-w-2xl">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 via-[#b800b8] to-purple-400 bg-clip-text text-transparent"
            variants={fadeInUp}
          >
            GET IN TOUCH
          </motion.h2>

          <motion.div 
            variants={scaleIn}
            whileHover={{ 
              scale: 1.01,
              transition: { duration: 0.2 }
            }}
          >
            <Card className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 border border-purple-500/30 backdrop-blur-xl">
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
                      className="bg-gray-800/50 border-purple-500/30 text-white placeholder:text-gray-500 focus:border-purple-400 backdrop-blur-sm"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-purple-300 mb-2 block">Email</label>
                    <Input
                      type="email"
                      placeholder="your.email@example.com"
                      className="bg-gray-800/50 border-purple-500/30 text-white placeholder:text-gray-500 focus:border-purple-400 backdrop-blur-sm"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-purple-300 mb-2 block">Message</label>
                  <Textarea
                    placeholder="Tell me about your project..."
                    rows={5}
                    className="bg-gray-800/50 border-purple-500/30 text-white placeholder:text-gray-500 focus:border-purple-400 backdrop-blur-sm"
                  />
                </div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 rounded-lg shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 backdrop-blur-sm">
                    Send Message
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer 
        className="py-4 px-6 border-t border-purple-500/30 bg-gradient-to-r from-black/50 to-gray-900/50 backdrop-blur-xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <div className="container mx-auto text-center">
          <p className="text-gray-400">© 2025 Nour Maged</p>
        </div>
      </motion.footer>
    </div>
  )
}
