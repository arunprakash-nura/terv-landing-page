import React from 'react';

const CareerServices = () => {
    const services = [
        {
            icon: '🎯',
            title: '1:1 Interview preparation (Mock Interviews) before technical interview rounds with our hiring partners',
            bgColor: '#E0F7F4'
        },
        {
            icon: '🎓',
            title: 'Soft-Skills training coupled with pre-training and post-training assessments',
            bgColor: '#E0F7F4'
        },
        {
            icon: '📝',
            title: 'Series of mock assessments and detailed interview prep sprints to ace top tech jobs',
            bgColor: '#E0F7F4'
        },
        {
            icon: '📊',
            title: 'Expert guidance to get your profile ready (Github, LinkedIn, Resume)',
            bgColor: '#E0F7F4'
        },
        {
            icon: '💼',
            title: 'Access to a diverse set of job opportunities with 1000+ hiring partners',
            bgColor: '#E0F7F4'
        }
    ];

    return (
        <section className="section section-bg-light">
            <div className="container">
                <div className="section-title">
                    <h2>
                        Prepare To Break Through<br />
                        Into <span style={{ color: 'var(--color-primary)' }}>Top Tech Jobs</span><br />
                        In The Market
                    </h2>
                    <p style={{
                        maxWidth: '800px',
                        margin: '0 auto',
                        fontSize: '1rem',
                        color: 'var(--color-text-muted)'
                    }}>
                        All of our program come with <strong style={{ color: 'var(--color-text-main)' }}>exclusive Career Services</strong> that will equip you to use your learnings and skills to ace your next interview or excel in your current role.
                    </p>
                </div>

                {/* Services Grid */}
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: '24px',
                    maxWidth: '1100px',
                    margin: '0 auto'
                }}>
                    {services.map((service, index) => (
                        <div
                            key={index}
                            style={{
                                background: service.bgColor,
                                borderRadius: '16px',
                                padding: '32px 24px',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                textAlign: 'center',
                                gap: '16px',
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                cursor: 'default',
                                minHeight: '200px',
                                flex: '1 1 300px',
                                maxWidth: '350px'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-8px)';
                                e.currentTarget.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.1)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                        >
                            {/* Icon */}
                            <div style={{
                                width: '64px',
                                height: '64px',
                                background: 'linear-gradient(135deg, #00D9C0 0%, #00B8A9 100%)',
                                borderRadius: '12px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '32px',
                                boxShadow: '0 4px 12px rgba(0, 217, 192, 0.3)'
                            }}>
                                {service.icon}
                            </div>

                            {/* Title */}
                            <p style={{
                                fontSize: '0.95rem',
                                lineHeight: '1.6',
                                color: 'var(--color-text-main)',
                                fontWeight: '500',
                                margin: 0
                            }}>
                                {service.title}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CareerServices;
