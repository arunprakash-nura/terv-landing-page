import React from 'react';

const Stats = () => {
    const stats = [
        { value: '500+', label: 'Graduates Placed' },
        { value: '98%', label: 'Placement Rate' },
        { value: '₹6.2L', label: 'Average Package' },
        { value: '150+', label: 'Hiring Partners' }
    ];

    return (
        <section style={{
            backgroundColor: 'var(--color-primary)',
            padding: '40px 0',
            marginTop: '-40px', // Overlap with Hero
            position: 'relative',
            zIndex: 10
        }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gap: '20px',
                    textAlign: 'center',
                    color: 'white'
                }} className="stats-grid">
                    {stats.map((stat, index) => (
                        <div key={index} style={{
                            borderRight: index !== stats.length - 1 ? '1px solid rgba(255,255,255,0.2)' : 'none'
                        }} className="stat-item">
                            <div style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '4px' }}>{stat.value}</div>
                            <div style={{ fontSize: '1rem', opacity: 0.9 }}>{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
            <style>{`
        @media (max-width: 768px) {
          .stats-grid { grid-template-columns: 1fr 1fr !important; gap: 40px !important; }
          .stat-item { border-right: none !important; }
        }
      `}</style>
        </section>
    );
};

export default Stats;
