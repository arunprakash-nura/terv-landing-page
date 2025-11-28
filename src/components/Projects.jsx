import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Projects = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const projects = [
        {
            type: 'Guided Project',
            title: 'Work like Full Stack Developers at Amazon',
            description: 'Build a functional and scalable ecommerce app.',
            image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=400&h=300&fit=crop',
            technologies: ['MongoDB', 'React JS', 'Node JS', 'Express JS']
        },
        {
            type: 'Independent Project',
            title: 'Build an OTT platform like Netflix Engineers',
            description: 'Build a video streaming fullstack app from design to deployment with GenAI',
            image: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=400&h=300&fit=crop',
            technologies: ['Prompt Engineering', 'LLM', 'Cursor', 'OpenAI']
        },
        {
            type: 'Guided Project',
            title: 'Work like Backend Developers at Zepto',
            description: 'Build a high-scale distributed web backend for a quick commerce delivery app.',
            image: 'https://images.unsplash.com/photo-1607082349566-187342175e2f?w=400&h=300&fit=crop',
            technologies: ['MongoDB', 'Java', 'Spring Boot', 'Redis']
        },
        {
            type: 'Independent Project',
            title: 'Experience building a Snapchat like app',
            description: 'Build a real-time messaging and media sharing application.',
            image: `${import.meta.env.BASE_URL}snapchat-project.png`,
            technologies: ['HTML', 'CSS', 'WebRTC', 'Socket.io']
        },
        {
            type: 'Guided Project',
            title: 'Work like Frontend Developers at AirBnB',
            description: 'Build a highly responsive frontend for a travel app.',
            image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=300&fit=crop',
            technologies: ['HTML', 'CSS', 'Bootstrap', 'React JS']
        },
        {
            type: 'Guided Project',
            title: 'Work like Backend Developers at Uber',
            description: 'Build a real-time ride matching and tracking system.',
            image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=400&h=300&fit=crop',
            technologies: ['Node JS', 'PostgreSQL', 'Redis', 'WebSockets']
        }
    ];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === projects.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? projects.length - 1 : prevIndex - 1
        );
    };

    const getVisibleProjects = () => {
        const visible = [];
        for (let i = 0; i < 3; i++) {
            const index = (currentIndex + i) % projects.length;
            visible.push(projects[index]);
        }
        return visible;
    };

    return (
        <section style={{
            padding: '80px 20px',
            backgroundColor: 'white'
        }}>
            <div className="container">
                {/* Section Header */}
                <div style={{
                    textAlign: 'center',
                    marginBottom: '60px'
                }}>
                    <h2 style={{
                        fontSize: '2.5rem',
                        fontWeight: '700',
                        color: 'var(--color-secondary)',
                        marginBottom: '16px'
                    }}>
                        Modern Work Experience-Based Learning Approach
                    </h2>
                    <p style={{
                        fontSize: '1.1rem',
                        color: 'var(--color-text-muted)',
                        maxWidth: '800px',
                        margin: '0 auto'
                    }}>
                        At Terv, you learn and grow exactly how you would on a real job. You will start from the fundamentals, receive support from our mentors and community, and <strong>build your way to the top</strong> - through professional work-like Full-stack and Backend web development projects.
                    </p>
                </div>

                {/* Carousel */}
                <div style={{ position: 'relative', maxWidth: '1200px', margin: '0 auto' }}>
                    {/* Navigation Buttons */}
                    <button
                        onClick={prevSlide}
                        style={{
                            position: 'absolute',
                            left: '-20px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            zIndex: 10,
                            backgroundColor: 'white',
                            border: '2px solid var(--color-primary)',
                            borderRadius: '50%',
                            width: '48px',
                            height: '48px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            boxShadow: 'var(--shadow-md)',
                            transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = 'var(--color-primary)';
                            e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = 'white';
                            e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
                        }}
                    >
                        <ChevronLeft size={24} color="var(--color-primary)" />
                    </button>

                    <button
                        onClick={nextSlide}
                        style={{
                            position: 'absolute',
                            right: '-20px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            zIndex: 10,
                            backgroundColor: 'white',
                            border: '2px solid var(--color-primary)',
                            borderRadius: '50%',
                            width: '48px',
                            height: '48px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            boxShadow: 'var(--shadow-md)',
                            transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = 'var(--color-primary)';
                            e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = 'white';
                            e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
                        }}
                    >
                        <ChevronRight size={24} color="var(--color-primary)" />
                    </button>

                    {/* Projects Grid */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gap: '30px',
                        padding: '0 40px'
                    }} className="projects-grid">
                        {getVisibleProjects().map((project, index) => (
                            <div
                                key={index}
                                style={{
                                    backgroundColor: 'var(--color-bg-light)',
                                    borderRadius: 'var(--radius-lg)',
                                    overflow: 'hidden',
                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                    cursor: 'pointer'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-8px)';
                                    e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = 'none';
                                }}
                            >
                                {/* Project Type Badge */}
                                <div style={{
                                    position: 'relative',
                                    padding: '20px 20px 0'
                                }}>
                                    <span style={{
                                        display: 'inline-block',
                                        backgroundColor: project.type === 'Guided Project' ? '#10b981' : '#06b6d4',
                                        color: 'white',
                                        padding: '6px 16px',
                                        borderRadius: '20px',
                                        fontSize: '0.85rem',
                                        fontWeight: '600'
                                    }}>
                                        {project.type}
                                    </span>
                                </div>

                                {/* Project Image */}
                                <div style={{
                                    padding: '20px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    minHeight: '200px'
                                }}>
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        style={{
                                            width: '100%',
                                            height: '180px',
                                            objectFit: 'cover',
                                            borderRadius: 'var(--radius-md)'
                                        }}
                                    />
                                </div>

                                {/* Project Details */}
                                <div style={{ padding: '0 20px 20px' }}>
                                    <h3 style={{
                                        fontSize: '1.1rem',
                                        fontWeight: '700',
                                        color: 'var(--color-secondary)',
                                        marginBottom: '12px',
                                        minHeight: '56px'
                                    }}>
                                        {project.title}
                                    </h3>
                                    <p style={{
                                        fontSize: '0.9rem',
                                        color: 'var(--color-text-muted)',
                                        marginBottom: '16px',
                                        minHeight: '40px'
                                    }}>
                                        {project.description}
                                    </p>

                                    {/* Technologies */}
                                    <div style={{
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        gap: '8px'
                                    }}>
                                        {project.technologies.map((tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                style={{
                                                    padding: '6px 12px',
                                                    backgroundColor: 'white',
                                                    border: '1px solid #e5e7eb',
                                                    borderRadius: '20px',
                                                    fontSize: '0.85rem',
                                                    color: 'var(--color-text-main)',
                                                    fontWeight: '500'
                                                }}
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div style={{
                    textAlign: 'center',
                    marginTop: '60px'
                }}>
                    <button
                        className="btn"
                        onClick={() => {
                            const bookCallSection = document.querySelector('#book-call');
                            if (bookCallSection) {
                                bookCallSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                            }
                        }}
                        style={{
                            backgroundColor: '#fbbf24',
                            color: '#1f2937',
                            padding: '18px 48px',
                            fontSize: '1.3rem',
                            fontWeight: '700',
                            border: 'none',
                            borderRadius: '12px',
                            cursor: 'pointer',
                            boxShadow: '0 10px 25px rgba(251, 191, 36, 0.3)',
                            transition: 'all 0.3s ease',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '12px'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-4px)';
                            e.currentTarget.style.boxShadow = '0 15px 35px rgba(251, 191, 36, 0.4)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 10px 25px rgba(251, 191, 36, 0.3)';
                        }}
                    >
                        Book Your Trial, Now
                        <ChevronRight size={24} />
                    </button>
                </div>
            </div>

            {/* Responsive Styles */}
            <style>{`
                @media (max-width: 960px) {
                    .projects-grid {
                        grid-template-columns: 1fr !important;
                        padding: 0 20px !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default Projects;
