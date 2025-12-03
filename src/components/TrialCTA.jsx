import React from 'react';

const TrialCTA = ({ onBookCallClick }) => {
    return (
        <section style={{
            padding: '20px 20px',
            backgroundColor: 'white',
            textAlign: 'center'
        }}>
            <div className="container" style={{
                maxWidth: '800px',
                margin: '0 auto'
            }}>
                <button
                    onClick={onBookCallClick}
                    style={{
                        padding: '16px 40px',
                        fontSize: '1.1rem',
                        fontWeight: '700',
                        fontWeight: '700',
                        color: 'white',
                        backgroundColor: '#794DFD',
                        border: 'none',
                        borderRadius: '50px',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 8px 20px rgba(121, 77, 253, 0.3)',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '10px'
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-3px)';
                        e.currentTarget.style.boxShadow = '0 12px 25px rgba(121, 77, 253, 0.4)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 8px 20px rgba(121, 77, 253, 0.3)';
                    }}
                >
                    Book Your Trial, Now
                    <span style={{ fontSize: '1.4rem', fontWeight: '400' }}>→</span>
                </button>
            </div>
        </section>
    );
};

export default TrialCTA;
