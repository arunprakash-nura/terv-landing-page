import React from 'react';
import { Clock, Briefcase, Code, Users, Award, Zap } from 'lucide-react';

const Highlights = () => {
    const highlights = [
        {
            icon: <Clock size={32} />,
            title: '10 Weeks Intensive',
            desc: 'Accelerated learning path designed to take you from zero to hero in just 2.5 months.'
        },
        {
            icon: <Briefcase size={32} />,
            title: '100% Placement Guarantee',
            desc: 'Dedicated placement cell, resume building, mock interviews, and job referrals to top companies.'
        },
        {
            icon: <Code size={32} />,
            title: 'Real-World Projects',
            desc: 'Build 5+ production-grade applications to showcase in your portfolio.'
        },
        {
            icon: <Users size={32} />,
            title: 'Expert Mentorship',
            desc: 'Get guidance from industry veterans who have "been there, done that".'
        },
        {
            icon: <Award size={32} />,
            title: 'Industry Recognized',
            desc: 'Certification that holds value and proves your competency to recruiters.'
        },
        {
            icon: <Zap size={32} />,
            title: 'Career Transformation',
            desc: 'Average salary hike of 150% for our placed students.'
        }
    ];

    return (
        <section className="section section-bg-light">
            <div className="container">
                <div className="section-title">
                    <h2>Why Choose <span style={{ color: 'var(--color-primary)' }}>Terv Pro?</span></h2>
                    <p>We provide everything you need to succeed in the modern tech landscape.</p>
                </div>

                <div className="grid grid-3">
                    {highlights.map((item, index) => (
                        <div key={index} style={{
                            backgroundColor: 'white',
                            padding: '32px',
                            borderRadius: 'var(--radius-lg)',
                            boxShadow: 'var(--shadow-sm)',
                            transition: 'transform 0.2s',
                            cursor: 'default'
                        }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-5px)';
                                e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                            }}
                        >
                            <div style={{
                                color: 'var(--color-primary)',
                                marginBottom: '20px',
                                backgroundColor: 'rgba(120, 77, 245, 0.1)',
                                width: '64px',
                                height: '64px',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                {item.icon}
                            </div>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>{item.title}</h3>
                            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Highlights;
