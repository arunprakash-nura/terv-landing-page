import React from 'react';
import { GraduationCap, Briefcase, TrendingUp } from 'lucide-react';

const Eligibility = () => {
    const eligibilityGroups = [
        {
            icon: GraduationCap,
            title: 'Students & Graduates',
            description: 'Ideal for final-year students, recent graduates, or those pursuing degrees in any discipline.'
        },
        {
            icon: Briefcase,
            title: 'Working Professionals',
            description: 'Suitable for IT and non-IT professionals aiming to upskill or switch to AI ML roles.'
        },
        {
            icon: TrendingUp,
            title: 'Career Switchers',
            description: 'Perfect for those looking to move into high-demand roles in Artificial Intelligence, Machine Learning, or Data Science.'
        }
    ];

    return (
        <section className="section section-bg-light">
            <div className="container">
                <div className="section-title">
                    <h2>Program Eligibility</h2>
                    <p style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--color-text-muted)' }}>
                        The course is designed to be accessible and inclusive for learners from all backgrounds. No Prior Coding Experience is Required.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '32px',
                    marginTop: '48px'
                }}>
                    {eligibilityGroups.map((group, index) => (
                        <div key={index} style={{
                            backgroundColor: 'white',
                            borderRadius: 'var(--radius-lg)',
                            padding: '32px',
                            textAlign: 'center',
                            transition: 'transform 0.2s, box-shadow 0.2s',
                            border: '2px solid #e9d5ff',
                            boxShadow: 'var(--shadow-sm)'
                        }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-5px)';
                                e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                                e.currentTarget.style.borderColor = 'var(--color-primary)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                                e.currentTarget.style.borderColor = '#e9d5ff';
                            }}
                        >
                            <div style={{
                                width: '64px',
                                height: '64px',
                                backgroundColor: 'var(--color-primary)',
                                borderRadius: '16px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto 24px'
                            }}>
                                <group.icon size={32} color="white" />
                            </div>
                            <h3 style={{
                                fontSize: '1.5rem',
                                marginBottom: '16px',
                                color: 'var(--color-text-main)',
                                fontWeight: '700'
                            }}>
                                {group.title}
                            </h3>
                            <p style={{
                                color: 'var(--color-text-muted)',
                                lineHeight: '1.6',
                                fontSize: '1rem'
                            }}>
                                {group.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Eligibility;
