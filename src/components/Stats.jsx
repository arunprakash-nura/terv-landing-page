import React from 'react';

const Stats = () => {
    const stats = [
        { number: '75K+', label: 'Graduates Placed' },
        { number: '100%', label: 'Placement Rate' },
        { number: '₹12.5L', label: 'Highest Package' },
        { number: '720+', label: 'Hiring Partners' }
    ];

    return (
        <section style={{
            backgroundColor: 'var(--color-primary)',
            padding: '40px 0',
            marginTop: '-40px',
            position: 'relative',
            zIndex: 10
        }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '40px',
                    textAlign: 'center',
                    color: 'white'
                }}>
                    {stats.map((stat, index) => (
                        <div key={index}>
                            <div style={{
                                fontSize: '2.5rem',
                                fontWeight: '800',
                                marginBottom: '8px'
                            }}>
                                {stat.number}
                            </div>
                            <div style={{
                                fontSize: '1rem',
                                opacity: 0.9
                            }}>
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
