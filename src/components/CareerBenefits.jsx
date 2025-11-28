import React from 'react';
import { Code, Users, Briefcase, Award, Github, Target } from 'lucide-react';

const CareerBenefits = () => {
    const benefits = [
        {
            icon: <Code size={32} />,
            title: 'Learn by Working like Tech Professionals',
            description: 'Learn Full Stack Development, Backend Development, QA Automation through an immersive project-based curriculum focused on practical developer skills and real-world scenarios.',
            color: '#10b981'
        },
        {
            icon: <Users size={32} />,
            title: 'Gain Work-ex on Problems Given by Real Tech Companies',
            description: 'Gain the work experience of building professional software products for India\'s top tech companies like CRED, Paytm, Jumbotail, Vicara, and others.',
            color: '#06b6d4'
        },
        {
            icon: <Briefcase size={32} />,
            title: 'Learn From Seasoned Industry Professionals in Real Time',
            description: 'Participate in activity-based live working sessions facilitated by industry mentors from companies like Microsoft, Flipkart, Nilenso.',
            color: '#8b5cf6'
        },
        {
            icon: <Award size={32} />,
            title: 'Get career support to break through into ambitious roles',
            description: 'Be prepared for every interview and land exciting development jobs with structured planning and personalised guidance & support from Crio career coaches.',
            color: '#f59e0b'
        },
        {
            icon: <Github size={32} />,
            title: 'Build a GitHub portfolio that impresses recruiters',
            description: 'Go beyond just certificates with a Crio verified project portfolio on GitHub and impress any recruiter at a product based company with your skills and experience.',
            color: '#ec4899'
        },
        {
            icon: <Target size={32} />,
            title: 'Stand out at interviews with real proof of work',
            description: 'Validate your learnings and let your skills shine with a work experience certificate that makes you stand out at interviews.',
            color: '#ef4444'
        }
    ];

    return (
        <section style={{
            padding: '80px 20px',
            backgroundColor: 'var(--color-bg-light)'
        }}>
            <div className="container">
                {/* Section Header */}
                <div style={{
                    textAlign: 'center',
                    marginBottom: '60px',
                    maxWidth: '900px',
                    margin: '0 auto 60px'
                }}>
                    <h2 style={{
                        fontSize: '2.5rem',
                        fontWeight: '700',
                        color: 'var(--color-secondary)',
                        marginBottom: '20px'
                    }}>
                        An All-Round Effective Way To Supercharge Your Tech Career
                    </h2>
                    <p style={{
                        fontSize: '1.1rem',
                        color: 'var(--color-text-muted)',
                        lineHeight: '1.6'
                    }}>
                        <strong>Hands-on, work experience-based learning</strong> is at the heart of everything you do at Terv. Build software projects like the top 1% Tech Professionals and <strong>learn all the skills</strong> you need to <strong>land the best</strong> Fullstack/Backend Developers or SDET Jobs.
                    </p>
                </div>

                {/* Benefits Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '30px',
                    maxWidth: '1200px',
                    margin: '0 auto'
                }} className="benefits-grid">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            style={{
                                backgroundColor: 'white',
                                padding: '32px',
                                borderRadius: 'var(--radius-lg)',
                                boxShadow: 'var(--shadow-sm)',
                                transition: 'all 0.3s ease',
                                cursor: 'pointer'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-8px)';
                                e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                            }}
                        >
                            {/* Icon */}
                            <div style={{
                                width: '64px',
                                height: '64px',
                                backgroundColor: `${benefit.color}15`,
                                borderRadius: '12px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '20px',
                                color: benefit.color
                            }}>
                                {benefit.icon}
                            </div>

                            {/* Title */}
                            <h3 style={{
                                fontSize: '1.1rem',
                                fontWeight: '700',
                                color: 'var(--color-secondary)',
                                marginBottom: '12px',
                                lineHeight: '1.4'
                            }}>
                                {benefit.title}
                            </h3>

                            {/* Description */}
                            <p style={{
                                fontSize: '0.95rem',
                                color: 'var(--color-text-muted)',
                                lineHeight: '1.6'
                            }}>
                                {benefit.description}
                            </p>
                        </div>
                    ))}
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
                            fontSize: '1.2rem',
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
                        Book Your Trial, Now →
                    </button>
                </div>
            </div>

            {/* Responsive Styles */}
            <style>{`
                @media (max-width: 960px) {
                    .benefits-grid {
                        grid-template-columns: repeat(2, 1fr) !important;
                    }
                }
                @media (max-width: 640px) {
                    .benefits-grid {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default CareerBenefits;
