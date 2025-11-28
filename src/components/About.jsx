import React from 'react';

const About = () => {
    return (
        <section className="section" id="program">
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '60px',
                    alignItems: 'center'
                }} className="about-grid">

                    {/* Image Side */}
                    <div className="about-image">
                        <img
                            src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                            alt="Team collaboration"
                            style={{
                                borderRadius: 'var(--radius-lg)',
                                boxShadow: 'var(--shadow-lg)'
                            }}
                        />
                    </div>

                    {/* Text Side */}
                    <div>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '24px', color: 'var(--color-secondary)' }}>
                            Learn like you would At <span style={{ color: 'var(--color-primary)' }}>India's Top Tech Companies</span>
                        </h2>
                        <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', marginBottom: '20px' }}>
                            Terv Pro is an intensive, career-focused training program designed to transform ambitious individuals into job-ready full-stack developers.
                        </p>
                        <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', marginBottom: '32px' }}>
                            We don't just teach code; we simulate a real-world work environment. Our curriculum is crafted by industry experts to ensure you learn the exact skills top companies are hiring for today.
                        </p>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                            <div style={{ padding: '20px', backgroundColor: 'var(--color-bg-light)', borderRadius: 'var(--radius-md)' }}>
                                <h3 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>Practical Learning</h3>
                                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>80% Hands-on coding, 20% Theory. Build while you learn.</p>
                            </div>
                            <div style={{ padding: '20px', backgroundColor: 'var(--color-bg-light)', borderRadius: 'var(--radius-md)' }}>
                                <h3 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>Expert Mentors</h3>
                                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>Learn from developers working at top product companies.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <style>{`
        @media (max-width: 960px) {
          .about-grid { grid-template-columns: 1fr !important; }
          .about-image { order: 1; }
        }
      `}</style>
        </section>
    );
};

export default About;
