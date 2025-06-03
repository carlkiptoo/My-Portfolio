<template>
    <div class="projects-container">
        <div class="projects-content">
            <div class="section-header">
                <h2 class="section-title">My Work</h2>
                <p class="section-subtitle">Here are some of my projects that I have worked on.</p>
            </div>
            <div class="projects-grid">
                <div class="project-card" v-for="project in projects" :key="project.id">
                    <div class="project-img">
                        <img :src="project.image" :alt="project.title" />
                        <div class="project-overlay">
                            <a :href="project.github" target="_blank" rel="noopener noreferrer" class="github-link">
                                <svg class="github-icon" viewBox="0 0 24 24" fill="currentColor">
                                    <path
                                        d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                                </svg>
                            </a>
                            <div class="project-content">
                                <h3 class="project-title">{{ project.title }}</h3>
                                <p class="project-description">{{ project.description }}</p>

                                <div class="tech-stack">
                                    <span class="tag" v-for="tech in project.stack" :key="tech.id">
                                        {{ tech}}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const projects = ref([

    {
        id: 2,
        title: "Task Management App",
        description: "A collaborative task management application with real-time updates, team collaboration features, and project tracking. Built with modern technologies for optimal performance.",
        image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
        stack: ["React", "TypeScript", "Firebase", "Material-UI", "Socket.io"],
        github: "https://github.com/kiptoo/task-manager"
    },

    {
        id: 2,
        title: "Task Management App",
        description: "A collaborative task management application with real-time updates, team collaboration features, and project tracking. Built with modern technologies for optimal performance.",
        image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
        stack: ["React", "TypeScript", "Firebase", "Material-UI", "Socket.io"],
        github: "https://github.com/kiptoo/task-manager"
    },
    {
        id: 3,
        title: "Weather Dashboard",
        description: "A responsive weather dashboard that provides detailed weather information, forecasts, and interactive maps. Features location-based weather and customizable widgets.",
        image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
        stack: ["JavaScript", "Chart.js", "OpenWeather API", "CSS Grid", "PWA"],
        github: "https://github.com/kiptoo/weather-dashboard"
    },
    {
        id: 4,
        title: "Portfolio Website",
        description: "A modern, responsive portfolio website showcasing projects and skills. Built with performance and accessibility in mind, featuring smooth animations and clean design.",
        image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
        stack: ["Vue.js", "Nuxt.js", "SCSS", "GSAP", "Netlify"],
        github: "https://github.com/kiptoo/portfolio-website"
    }
])

</script>

<style scoped>
.projects-container {
    background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
    padding: 5rem 2rem;
    min-height: 100vh;
}

.projects-content {
    max-width: 1200px;
    margin: 0 auto;
}

.section-header {
    text-align: center;
    margin-bottom: 4rem;
}
.section-title {
    font-size: 2.5rem;
    font-weight: 700;
    color: #1e293b;
    margin-bottom: 1rem;
    position: relative;
}

.section-title::after {
    content: '';
    position: absolute;
    bottom: -0.5rem;
    left: 50%;
    transform: translateX(-50%);
    width: 4rem;
    height: 0.25rem;
    background: linear-gradient(90deg, #3b82f6, #8b5cf6);
    border-radius: 2px;
}
.section-subtitle {
    font-size: 1.125rem;
    color: #64748b;
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
}
.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
    margin-top: 3rem;
}
.project-card {
    background: white;
    border-radius: 1rem;
    overflow: hidden;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease-in-out;
    border: 1px solid #e5e7eb;
}

.project-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.project-img {
    position: relative;
    height: 200px;
    overflow: hidden;
}
.project-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease-in-out;
}
.project-card:hover .project-img img {
    transform: scale(2.05);
}
.project-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background:rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
}
.project-card:hover .project-overlay {
    opacity: 1;
}
.github-link {
    color: white;
    padding: 0.75rem;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(10px);
    transition: all 0.3s ease-in-out;
    display: flex;
    align-items: center;
    justify-content: center;
}
.github-link:hover {
    background: rgba(255, 255, 255, 0.5);
    transform: scale(1.1);
}
.github-icon {
    width: 2rem;
    height: 2rem;
}
.project-content {
    padding: 1.5rem;
}
.project-title {
    font-size: 1.25rem;
    font-weight: 600;
    color: #fafafa;
    margin-bottom: 0.95rem;
}
.project-description {
    color: #ededed;
    line-height: 1.6;
    margin-bottom: 1.25rem;
    font-size: 0.95rem;
}
.tech-stack {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
}
.tag {
    background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
    color: white;
    padding: 0.25rem 0.75rem;
    border-radius: 1rem;
    font-size: 0.75rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.025rem;
}

@media (max-width: 768px) {
    .projects-container {
        padding: 3rem 1rem;
    }

    .section-title {
        font-size: 2rem;
    }
    .projects-grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }
    .project-card {
        margin: 0 auto;
        max-width: 400px;
    }

}

@media (max-width: 480px) {
    .projects-container {
        padding: 2rem 1rem;
    }

    .section-title {
        font-size: 1.75rem;
    }
    .project-content {
        padding: 1.25rem;
    }
    .projects-grid {
        grid-template-columns: 1fr;
        gap: 1.25rem;
    }
}
</style>