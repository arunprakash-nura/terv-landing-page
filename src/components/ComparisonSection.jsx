import React from 'react';
import { Check, X } from 'lucide-react';

const ComparisonSection = () => {
    const features = [
        { name: 'Real work experience', video: false, bootcamp: false, terv: true },
        { name: 'True, project-based learning', video: false, bootcamp: false, terv: true },
        { name: 'Live sessions & mentorship', video: false, bootcamp: true, terv: true },
        { name: 'AI-driven software development', video: false, bootcamp: false, terv: true },
        { name: 'Job-ready portfolio', video: false, bootcamp: false, terv: true },
        { name: 'Externship with top companies', video: false, bootcamp: false, terv: true },
        { name: 'Career guidance', video: false, bootcamp: true, terv: true },
        { name: 'Assured Referrals', video: false, bootcamp: false, terv: true },
    ];

    return (
        <section className="section" style={{ backgroundColor: 'white', paddingTop: '20px' }}>
            <div className="container" style={{ maxWidth: '60%', margin: '0 auto' }}>
                <div className="section-title">
                    <h2 style={{ fontSize: '2rem' }}>Real Work Experience, Real Project-Based <br /> Learning With <span style={{ color: 'var(--color-primary)' }}>Terv</span></h2>
                    <p style={{ margin: '0 auto 40px auto', fontSize: '1rem' }}>
                        The best way to learn a skill is by applying what you learn in real scenarios. At Terv, we take it a notch
                        higher by giving you actual work experience-based learning. So, instead of just watching tutorials, you
                        actually experience building real products like professional engineers.
                    </p>
                    <p style={{ margin: '0 auto', color: 'var(--color-text-muted)', fontSize: '1rem' }}>
                        Basically, how a real professional working in a leading product company would grow their career.
                    </p>
                </div>

                <div style={{ overflowX: 'auto', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '600px' }}>
                        <thead>
                            <tr style={{ backgroundColor: '#794DFD', color: 'white' }}>
                                <th style={{ padding: '15px', textAlign: 'left', width: '40%', fontSize: '1rem' }}></th>
                                <th style={{ padding: '15px', textAlign: 'center', width: '20%', fontSize: '1rem' }}>Video Courses</th>
                                <th style={{ padding: '15px', textAlign: 'center', width: '20%', fontSize: '1rem' }}>Bootcamps</th>
                                <th style={{ padding: '15px', textAlign: 'center', width: '20%', fontSize: '1rem', fontWeight: '800' }}>Terv</th>
                            </tr>
                        </thead>
                        <tbody>
                            {features.map((feature, index) => (
                                <tr key={index} style={{ borderBottom: '1px solid rgba(122, 80, 247, 0.16)', backgroundColor: index % 2 === 0 ? '#f9f9f9' : 'white' }}>
                                    <td style={{ padding: '15px', fontWeight: '600', color: 'var(--color-secondary)', fontSize: '1rem' }}>{feature.name}</td>
                                    <td style={{ padding: '15px', textAlign: 'center' }}>
                                        {feature.video ? <Check size={24} color="#794DFD" strokeWidth={3} /> : <X size={24} color="#CBD5E1" strokeWidth={3} />}
                                    </td>
                                    <td style={{ padding: '15px', textAlign: 'center' }}>
                                        {feature.bootcamp ? <Check size={20} color="#794DFD" strokeWidth={3} /> : <X size={20} color="#CBD5E1" strokeWidth={3} />}
                                    </td>
                                    <td style={{ padding: '15px', textAlign: 'center', backgroundColor: '#eee6ff' }}>
                                        {feature.terv ? <Check size={20} color="#794DFD" strokeWidth={3} /> : <X size={20} color="#CBD5E1" strokeWidth={3} />}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div style={{ textAlign: 'center', marginTop: '40px', color: 'var(--color-text-muted)', margin: '40px auto 0 auto', fontSize: '1rem' }}>
                    <p>
                        Recruiters too, look for real project experience when hiring tech professionals and here at Terv, we strive to provide just that. We
                        empower learners with high-quality applied learning opportunities and build skills that translate into career growth and success.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ComparisonSection;
