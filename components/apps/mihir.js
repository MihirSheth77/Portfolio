import React, { Component } from 'react';

// Add these components before the AboutMihir class
function About() {
    return (
        <>
            <div className="flex flex-col items-center justify-center">
                {/* Profile Image with Animation */}
                <div className="relative w-32 h-32 md:w-40 md:h-40 mb-8">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-pulse"></div>
                    <img 
                        className="relative z-10 w-full h-full rounded-full object-cover p-1"
                        src="./images/logos/bitmoji.png" 
                        alt="Mihir Sheth" 
                    />
                    <div className="absolute -bottom-2 -right-2 bg-green-500 w-5 h-5 rounded-full border-2 border-white"></div>
                </div>

                {/* Name and Title with Animated Gradient */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl md:text-5xl font-bold mb-2">
                        <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
                            Mihir Sheth
                        </span>
                    </h1>
                    <div className="relative inline-block">
                        <span className="text-xl md:text-2xl text-gray-300">Software Engineer & Co-founder</span>
                        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></div>
                    </div>
                </div>

                {/* Interactive Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl mb-8">
                    {/* About Card */}
                    <div className="bg-gray-800/50 backdrop-blur-md rounded-xl p-6 hover:shadow-xl transition-all duration-300 border border-gray-700/50 group">
                        <h3 className="text-xl font-semibold mb-4 text-blue-400 flex items-center">
                            <svg className="w-5 h-5 mr-2 transform group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"/>
                            </svg>
                            Who Am I?
                        </h3>
                        <p className="text-gray-300 leading-relaxed">
                            A passionate Software Engineer with an entrepreneurial spirit. I blend technical expertise with innovative thinking to create impactful solutions. Currently pursuing my Master's in Computer Science while building the next big thing!
                        </p>
                    </div>

                    {/* Contact Card */}
                    <div className="bg-gray-800/50 backdrop-blur-md rounded-xl p-6 hover:shadow-xl transition-all duration-300 border border-gray-700/50 group">
                        <h3 className="text-xl font-semibold mb-4 text-purple-400 flex items-center">
                            <svg className="w-5 h-5 mr-2 transform group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                            </svg>
                            Let's Connect
                        </h3>
                        <a 
                            href="mailto:mihirsheth291199@gmail.com"
                            className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center"
                        >
                            <span className="underline">mihirsheth291199@gmail.com</span>
                            <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Interests Section */}
                <div className="w-full max-w-4xl">
                    <div className="bg-gray-800/50 backdrop-blur-md rounded-xl p-6 border border-gray-700/50">
                        <h3 className="text-xl font-semibold mb-4 text-green-400 flex items-center">
                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M5 3a2 2 0 012-2h6a2 2 0 012 2v11a2 2 0 01-2 2H7a2 2 0 01-2-2V3zm6 14a1 1 0 100-2 1 1 0 000 2z"/>
                            </svg>
                            Beyond Coding
                        </h3>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <li className="flex items-center space-x-3 bg-gray-700/30 p-3 rounded-lg">
                                <span className="text-2xl">📚</span>
                                <span>Avid reader of tech blogs and business books</span>
                            </li>
                            <li className="flex items-center space-x-3 bg-gray-700/30 p-3 rounded-lg">
                                <span className="text-2xl">🎮</span>
                                <span>Gaming enthusiast exploring virtual worlds</span>
                            </li>
                            <li className="flex items-center space-x-3 bg-gray-700/30 p-3 rounded-lg">
                                <span className="text-2xl">🌍</span>
                                <span>Love exploring new places and cultures</span>
                            </li>
                            <li className="flex items-center space-x-3 bg-gray-700/30 p-3 rounded-lg">
                                <span className="text-2xl">💡</span>
                                <span>Always excited to learn new technologies</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

// Add Education component
function Education() {
    return (
        <>
            <div className="relative">
                <div className="font-bold relative text-3xl mt-2 md:mt-4 mb-8 bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
                    Education Journey
                    <div className="absolute bottom-0 left-0 w-20 h-1 bg-blue-500 rounded-full"></div>
                </div>

                <div className="space-y-8">
                    {/* Northeastern Card */}
                    <div className="bg-gray-800 rounded-xl p-6 transform hover:scale-105 transition-all duration-300">
                        <div className="flex items-center space-x-6">
                            <div className="w-24 h-24 relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-pulse"></div>
                                <img 
                                    src="./images/edu/northeastern.png"
                                    alt="Northeastern University" 
                                    className="w-full h-full object-cover rounded-full relative z-10 p-1"
                                />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                                    Northeastern University
                                </h3>
                                <p className="text-gray-400">2022 - 2024</p>
                                <p className="text-lg mt-1">Master of Science in Computer Science</p>
                                <p className="text-green-400 font-semibold mt-1">GPA: 4.0/4.0</p>
                                <p className="text-sm text-gray-500 mt-2">Boston, Massachusetts</p>
                            </div>
                        </div>
                    </div>

                    {/* Mumbai University Card */}
                    <div className="bg-gray-800 rounded-xl p-6 transform hover:scale-105 transition-all duration-300">
                        <div className="flex items-center space-x-6">
                            <div className="w-24 h-24 relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-pulse"></div>
                                <img 
                                    src="./images/edu/mumbai.png"
                                    alt="Mumbai University" 
                                    className="w-full h-full object-cover rounded-full relative z-10 p-1"
                                />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                                    Mumbai University
                                </h3>
                                <p className="text-gray-400">2018 - 2022</p>
                                <p className="text-lg mt-1">Bachelor of Engineering in Computer Science</p>
                                <p className="text-green-400 font-semibold mt-1">CGPA: 9.35/10</p>
                                <p className="text-sm text-gray-500 mt-2">Mumbai, Maharashtra</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

// Add Skills component
function Skills() {
    const skills = {
        languages: [
            { name: "JavaScript", badge: "https://img.shields.io/badge/-JavaScript-%23F7DF1C?style=for-the-badge&logo=javascript&logoColor=000000&labelColor=%23F7DF1C&color=%23FFCE5A" },
            { name: "TypeScript", badge: "https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" },
            { name: "Python", badge: "https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" },
            { name: "Java", badge: "https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white" },
            { name: "C++", badge: "https://img.shields.io/badge/C%2B%2B-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white" },
            { name: "Go", badge: "https://img.shields.io/badge/Go-00ADD8?style=for-the-badge&logo=go&logoColor=white" },
            { name: "Rust", badge: "https://img.shields.io/badge/Rust-000000?style=for-the-badge&logo=rust&logoColor=white" },
            { name: "HTML5", badge: "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" },
            { name: "CSS3", badge: "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" },
            { name: "SQL", badge: "https://img.shields.io/badge/SQL-4479A1?style=for-the-badge&logo=postgresql&logoColor=white" }
        ],
        frameworks: [
            { name: "React", badge: "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" },
            { name: "Next.js", badge: "https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white" },
            { name: "Vue.js", badge: "https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vue.js&logoColor=4FC08D" },
            { name: "Angular", badge: "https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white" },
            { name: "Node.js", badge: "https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" },
            { name: "Express", badge: "https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express&logoColor=white" },
            { name: "Spring Boot", badge: "https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=spring&logoColor=white" },
            { name: "Django", badge: "https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white" },
            { name: "FastAPI", badge: "https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white" },
            { name: "Flask", badge: "https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white" },
            { name: "TailwindCSS", badge: "https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" },
            { name: "Material-UI", badge: "https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white" }
        ],
        devops: [
            { name: "AWS", badge: "https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white" },
            { name: "GCP", badge: "https://img.shields.io/badge/Google_Cloud-4285F4?style=for-the-badge&logo=google-cloud&logoColor=white" },
            { name: "Azure", badge: "https://img.shields.io/badge/Azure-0089D6?style=for-the-badge&logo=microsoft-azure&logoColor=white" },
            { name: "Docker", badge: "https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" },
            { name: "Kubernetes", badge: "https://img.shields.io/badge/Kubernetes-326CE5?style=for-the-badge&logo=kubernetes&logoColor=white" },
            { name: "Jenkins", badge: "https://img.shields.io/badge/Jenkins-D24939?style=for-the-badge&logo=jenkins&logoColor=white" },
            { name: "GitHub Actions", badge: "https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white" },
            { name: "Terraform", badge: "https://img.shields.io/badge/Terraform-7B42BC?style=for-the-badge&logo=terraform&logoColor=white" },
            { name: "Ansible", badge: "https://img.shields.io/badge/Ansible-000000?style=for-the-badge&logo=ansible&logoColor=white" },
            { name: "Git", badge: "https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" },
            { name: "Linux", badge: "https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black" },
            { name: "CircleCI", badge: "https://img.shields.io/badge/CircleCI-343434?style=for-the-badge&logo=circleci&logoColor=white" },
            { name: "Prometheus", badge: "https://img.shields.io/badge/Prometheus-E6522C?style=for-the-badge&logo=prometheus&logoColor=white" },
            { name: "Grafana", badge: "https://img.shields.io/badge/Grafana-F46800?style=for-the-badge&logo=grafana&logoColor=white" },
            { name: "ArgoCD", badge: "https://img.shields.io/badge/Argo%20CD-1e0b3e?style=for-the-badge&logo=argo&logoColor=white" }
        ],
        databases: [
            { name: "MongoDB", badge: "https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" },
            { name: "PostgreSQL", badge: "https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" },
            { name: "MySQL", badge: "https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white" },
            { name: "Redis", badge: "https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white" },
            { name: "Elasticsearch", badge: "https://img.shields.io/badge/Elasticsearch-005571?style=for-the-badge&logo=elasticsearch&logoColor=white" },
            { name: "Cassandra", badge: "https://img.shields.io/badge/Cassandra-1287B1?style=for-the-badge&logo=apache%20cassandra&logoColor=white" },
            { name: "DynamoDB", badge: "https://img.shields.io/badge/Amazon%20DynamoDB-4053D6?style=for-the-badge&logo=Amazon%20DynamoDB&logoColor=white" },
            { name: "Neo4j", badge: "https://img.shields.io/badge/Neo4j-008CC1?style=for-the-badge&logo=neo4j&logoColor=white" }
        ]
    };

    return (
        <>
            <div className="relative p-4">
                <div className="font-bold relative text-3xl mb-8">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
                        Technical Arsenal
                    </span>
                    <div className="absolute bottom-0 left-0 w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                    {/* Languages Card */}
                    <div className="bg-gray-800/50 backdrop-blur-md rounded-xl p-6 hover:shadow-xl transition-all duration-300 border border-gray-700/50">
                        <h3 className="text-xl font-semibold mb-4 text-blue-400 flex items-center">
                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"/>
                            </svg>
                            Languages & Tools
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {skills.languages.map((skill, index) => (
                                <img 
                                    key={index}
                                    className="transform hover:scale-110 transition-transform duration-200 hover:shadow-lg" 
                                    src={skill.badge} 
                                    alt={skill.name} 
                                />
                            ))}
                        </div>
                    </div>

                    {/* Frameworks Card */}
                    <div className="bg-gray-800/50 backdrop-blur-md rounded-xl p-6 hover:shadow-xl transition-all duration-300 border border-gray-700/50">
                        <h3 className="text-xl font-semibold mb-4 text-green-400 flex items-center">
                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"/>
                            </svg>
                            Frameworks & Libraries
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {skills.frameworks.map((skill, index) => (
                                <img 
                                    key={index}
                                    className="transform hover:scale-110 transition-transform duration-200 hover:shadow-lg" 
                                    src={skill.badge} 
                                    alt={skill.name} 
                                />
                            ))}
                        </div>
                    </div>

                    {/* DevOps Card */}
                    <div className="bg-gray-800/50 backdrop-blur-md rounded-xl p-6 hover:shadow-xl transition-all duration-300 border border-gray-700/50">
                        <h3 className="text-xl font-semibold mb-4 text-purple-400 flex items-center">
                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z"/>
                            </svg>
                            DevOps & Cloud
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {skills.devops.map((skill, index) => (
                                <img 
                                    key={index}
                                    className="transform hover:scale-110 transition-transform duration-200 hover:shadow-lg" 
                                    src={skill.badge} 
                                    alt={skill.name} 
                                />
                            ))}
                        </div>
                    </div>

                    {/* Database Card */}
                    <div className="bg-gray-800/50 backdrop-blur-md rounded-xl p-6 hover:shadow-xl transition-all duration-300 border border-gray-700/50">
                        <h3 className="text-xl font-semibold mb-4 text-red-400 flex items-center">
                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z"/>
                                <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z"/>
                                <path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z"/>
                            </svg>
                            Databases
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {skills.databases.map((skill, index) => (
                                <img 
                                    key={index}
                                    className="transform hover:scale-110 transition-transform duration-200 hover:shadow-lg" 
                                    src={skill.badge} 
                                    alt={skill.name} 
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Key Highlights */}
                <div className="mt-8">
                    <div className="bg-gray-800/50 backdrop-blur-md rounded-xl p-6 border border-gray-700/50">
                        <h3 className="text-xl font-semibold mb-4 text-yellow-400 flex items-center">
                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M5 3a2 2 0 012-2h6a2 2 0 012 2v11a2 2 0 01-2 2H7a2 2 0 01-2-2V3zm0 11a2 2 0 002 2h6a2 2 0 002-2V3a2 2 0 00-2-2H7a2 2 0 00-2 2v11z"/>
                            </svg>
                            Key Highlights
                        </h3>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <li className="flex items-center space-x-3 bg-gray-700/30 p-3 rounded-lg">
                                <svg className="h-5 w-5 text-yellow-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>Full-stack development with modern technologies</span>
                            </li>
                            <li className="flex items-center space-x-3 bg-gray-700/30 p-3 rounded-lg">
                                <svg className="h-5 w-5 text-yellow-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>Cloud architecture and DevOps expertise</span>
                            </li>
                            <li className="flex items-center space-x-3 bg-gray-700/30 p-3 rounded-lg">
                                <svg className="h-5 w-5 text-yellow-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>Microservices and Distributed Systems</span>
                            </li>
                            <li className="flex items-center space-x-3 bg-gray-700/30 p-3 rounded-lg">
                                <svg className="h-5 w-5 text-yellow-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>System Design and Architecture</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

// Add Projects component
function Projects() {
    const project_list = [
        {
            name: "TARS - AI Research Assistant",
            date: "Jan 2024",
            description: [
                "Built an intelligent research assistant using OpenAI's GPT-4 API and LangChain",
                "Implemented semantic search and document summarization capabilities",
                "Developed a user-friendly interface for researchers to interact with AI",
                "Integrated with academic databases and research paper repositories"
            ],
            domains: ["python", "openai", "langchain", "react", "mongodb", "docker"],
            highlight: "Processes 1000+ research papers daily with 95% accuracy"
        },
        {
            name: "Distributed Task Scheduler",
            date: "Dec 2023",
            description: [
                "Designed and implemented a distributed task scheduling system",
                "Built fault-tolerant architecture with leader election and task replication",
                "Implemented efficient task distribution algorithms and load balancing",
                "Developed monitoring dashboard for system health and metrics"
            ],
            domains: ["golang", "kubernetes", "redis", "prometheus", "grafana"],
            highlight: "Handles 10,000+ concurrent tasks with 99.9% reliability"
        },
        {
            name: "E-Commerce Microservices Platform",
            date: "Nov 2023",
            description: [
                "Architected and developed a scalable e-commerce platform using microservices",
                "Implemented event-driven architecture using Apache Kafka",
                "Built CI/CD pipeline with automated testing and deployment",
                "Designed real-time inventory management and order processing system"
            ],
            domains: ["java", "spring-boot", "kafka", "postgresql", "aws", "docker"],
            highlight: "Processes 1000+ transactions per second with < 100ms latency"
        }
    ];

    return (
        <div className="w-full h-full flex flex-col items-center overflow-y-auto pb-8">
            <div className="w-full max-w-4xl">
                <div className="font-bold relative text-3xl mt-2 md:mt-4 mb-8">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
                        Featured Projects
                    </span>
                    <div className="absolute bottom-0 left-0 w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    {project_list.map((project, index) => (
                        <div key={index} className="bg-gray-800/50 backdrop-blur-md rounded-xl p-6 hover:shadow-xl transition-all duration-300 border border-gray-700/50 group">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="text-xl font-semibold text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                                        {project.name}
                                    </h3>
                                    <span className="text-gray-400 text-sm">{project.date}</span>
                                </div>
                                <div className="bg-blue-500/10 rounded-full px-3 py-1">
                                    <span className="text-blue-400 text-sm font-medium">Featured</span>
                                </div>
                            </div>

                            <ul className="mt-4 list-disc list-inside space-y-2 text-gray-300">
                                {project.description.map((desc, i) => (
                                    <li key={i} className="hover:text-white transition-colors duration-200">
                                        {desc}
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-6 flex items-center space-x-4">
                                <div className="flex-1">
                                    <div className="flex flex-wrap gap-2">
                                        {project.domains.map((domain, i) => (
                                            <span key={i} 
                                                className="px-3 py-1 bg-gray-700/50 rounded-full text-sm text-gray-300 hover:bg-gray-700 transition-colors duration-200">
                                                {domain}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex items-center bg-green-500/10 rounded-full px-3 py-1">
                                    <span className="text-green-400 text-sm font-medium">
                                        {project.highlight}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

// Add Resume component
function Resume() {
    return (
        <iframe className="h-full w-full" src="./files/mihir-resume.pdf" title="Mihir's Resume"></iframe>
    )
}

export class AboutMihir extends Component {
    constructor() {
        super();
        this.screens = {};
        this.state = {
            screen: () => { },
            active_screen: "about",
            navbar: false,
        }
    }

    componentDidMount() {
        this.screens = {
            "about": <About />,
            "education": <Education />,
            "skills": <Skills />,
            "projects": <Projects />,
            "resume": <Resume />,
        }

        let lastVisitedScreen = localStorage.getItem("about-section");
        if (lastVisitedScreen === null || lastVisitedScreen === undefined) {
            lastVisitedScreen = "about";
        }
        this.changeScreen(document.getElementById(lastVisitedScreen));
    }

    changeScreen = (e) => {
        const screen = e.id || e.target.id;
        localStorage.setItem("about-section", screen);
        this.setState({
            screen: this.screens[screen],
            active_screen: screen
        });
    }

    showNavBar = () => {
        this.setState({ navbar: !this.state.navbar });
    }

    renderNavLinks = () => {
        return (
            <>
                <div id="about" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "about" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className="w-3 md:w-4" alt="about mihir" src="./themes/Yaru/status/about.svg" />
                    <span className="ml-1 md:ml-2 text-gray-50">About Me</span>
                </div>
                <div id="education" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "education" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className="w-3 md:w-4" alt="mihir's education" src="./themes/Yaru/status/education.svg" />
                    <span className="ml-1 md:ml-2 text-gray-50">Education</span>
                </div>
                <div id="skills" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "skills" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className="w-3 md:w-4" alt="mihir's skills" src="./themes/Yaru/status/skills.svg" />
                    <span className="ml-1 md:ml-2 text-gray-50">Skills</span>
                </div>
                <div id="projects" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "projects" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className="w-3 md:w-4" alt="mihir's projects" src="./themes/Yaru/status/projects.svg" />
                    <span className="ml-1 md:ml-2 text-gray-50">Projects</span>
                </div>
                <div id="resume" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "resume" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className="w-3 md:w-4" alt="mihir's resume" src="./themes/Yaru/status/download.svg" />
                    <span className="ml-1 md:ml-2 text-gray-50">Resume</span>
                </div>
            </>
        );
    }

    render() {
        return (
            <div className="w-full h-full flex bg-ub-cool-grey text-white select-none relative">
                <div className="md:flex hidden flex-col w-1/4 md:w-1/5 text-sm overflow-y-auto windowMainScreen border-r border-black">
                    {this.renderNavLinks()}
                </div>
                <div onClick={this.showNavBar} className="md:hidden flex flex-col items-center justify-center absolute bg-ub-cool-grey rounded w-6 h-6 top-1 left-1">
                    <div className=" w-3.5 border-t border-white"></div>
                    <div className=" w-3.5 border-t border-white" style={{ marginTop: "2pt", marginBottom: "2pt" }}></div>
                    <div className=" w-3.5 border-t border-white"></div>
                </div>
                <div className="flex flex-col w-full md:w-4/5 justify-start items-center flex-grow bg-ub-grey overflow-y-auto windowMainScreen">
                    {this.state.screen}
                </div>
            </div>
        );
    }
}

// Export the display function
export const displayAboutMihir = () => {
    return <AboutMihir />;
} 