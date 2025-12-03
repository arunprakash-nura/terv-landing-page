import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Hero = ({ onApplyClick, onDownloadClick }) => {
    return (
        <section style={{
            backgroundColor: 'var(--color-secondary)',
            color: 'white',
            paddingTop: 'calc(var(--header-height) + 60px)',
            paddingBottom: '80px',
            position: 'relative',
            overflow: 'hidden'
        }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '60px',
                    alignItems: 'center'
                }} className="hero-grid">

                    {/* Text Content */}
                    <div>
                        <div style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            backgroundColor: 'rgba(120, 77, 245, 0.2)',
                            padding: '8px 16px',
                            borderRadius: 'var(--radius-full)',
                            marginBottom: '24px',
                            color: '#a58aff',
                            fontWeight: '600',
                            fontSize: '0.9rem'
                        }}>
                            <span style={{ width: '8px', height: '8px', backgroundColor: '#00ff88', borderRadius: '50%' }}></span>
                            Next Cohort Starting From 17th December
                        </div>

                        <h1 style={{
                            fontSize: '3.5rem',
                            marginBottom: '24px',
                            color: 'white',
                            lineHeight: '1.1'
                        }}>
                            Launch Your <span style={{ color: 'var(--color-primary)' }}>Full-Stack Career</span> in Just 10 Weeks
                        </h1>

                        <p style={{
                            fontSize: '1.25rem',
                            color: 'rgba(255, 255, 255, 0.8)',
                            marginBottom: '32px',
                            maxWidth: '540px'
                        }}>
                            Master the Full Stack, build real-world projects, and get hired by top companies.
                            100% Placement Guarantee.
                        </p>

                        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                            <button className="btn btn-primary" style={{ padding: '16px 32px', fontSize: '1.1rem' }} onClick={onApplyClick}>
                                Apply Now <ArrowRight size={20} style={{ marginLeft: '8px' }} />
                            </button>
                            <button className="btn" style={{
                                backgroundColor: 'rgba(255,255,255,0.1)',
                                color: 'white',
                                backdropFilter: 'blur(10px)',
                                border: '2px solid rgba(255,255,255,0.3)'
                            }}
                                onClick={onDownloadClick}
                            >
                                Download Syllabus
                            </button>
                        </div>

                        <div style={{ marginTop: '40px', display: 'flex', gap: '24px', fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <CheckCircle size={16} color="var(--color-primary)" /> 100% Live Classes
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <CheckCircle size={16} color="var(--color-primary)" /> 5+ Real Projects
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <CheckCircle size={16} color="var(--color-primary)" /> Placement Guarantee
                            </div>
                        </div>
                    </div>

                    {/* Image/Visual */}
                    <div style={{ position: 'relative' }} className="hero-image">
                        <div style={{
                            position: 'absolute',
                            top: '-20px',
                            right: '-20px',
                            width: '100px',
                            height: '100px',
                            background: 'linear-gradient(135deg, var(--color-primary), #00d4ff)',
                            borderRadius: '50%',
                            filter: 'blur(40px)',
                            opacity: 0.5,
                            zIndex: 0
                        }}></div>

                        <img
                            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                            alt="Students learning"
                            style={{
                                borderRadius: 'var(--radius-lg)',
                                boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                                position: 'relative',
                                zIndex: 1,
                                border: '1px solid rgba(255,255,255,0.1)'
                            }}
                        />

                        {/* Floating Card */}
                        <div style={{
                            position: 'absolute',
                            bottom: '-30px',
                            left: '-30px',
                            backgroundColor: 'white',
                            padding: '20px',
                            borderRadius: 'var(--radius-md)',
                            boxShadow: 'var(--shadow-lg)',
                            zIndex: 2,
                            color: 'var(--color-text-main)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '16px',
                            maxWidth: '280px'
                        }}>
                            <div style={{
                                width: '50px',
                                height: '50px',
                                backgroundColor: '#e0f2fe',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: '#0284c7',
                                fontWeight: 'bold'
                            }}>
                                100%
                            </div>
                            <div>
                                <div style={{ fontWeight: '700', fontSize: '1.1rem' }}>Placement Rate</div>
                                <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>Success across 75+ Students</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
        @media (max-width: 960px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .hero-image { order: -1; margin-bottom: 20px; }
          h1 { font-size: 2.5rem !important; }
        }
      `}</style>
        </section>
    );
};

export default Hero;
