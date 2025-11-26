import React from 'react';
import { ChevronRight } from 'lucide-react';

const Curriculum = () => {
    const weeks = [
        {
            week: 'Week 1-2',
            title: 'Web Fundamentals & JavaScript',
            topics: ['HTML5 Semantic Structure', 'CSS3 Flexbox & Grid', 'JavaScript ES6+', 'DOM Manipulation', 'Git & Version Control']
        },
        {
            week: 'Week 3-4',
            title: 'Frontend Development with React',
            topics: ['React Components & Props', 'State Management (Hooks)', 'Routing with React Router', 'API Integration', 'Building Single Page Apps']
        },
        {
            week: 'Week 5-6',
            title: 'Backend Development',
            topics: ['Node.js Runtime', 'Express.js Framework', 'RESTful API Design', 'Middleware & Authentication', 'Server-side Logic']
        },
        {
            week: 'Week 7-8',
            title: 'Database & DevOps',
            topics: ['MongoDB Schema Design', 'Mongoose ODM', 'Aggregation Pipelines', 'AWS Deployment Basics', 'CI/CD Pipelines']
        },
        {
            week: 'Week 9-10',
            title: 'Capstone Project & Career Prep',
            topics: ['Full Stack Application Build', 'System Design Basics', 'Resume Building', 'Mock Interviews', 'Salary Negotiation']
        }
    ];

    return (
        <section className="section section-bg-light">
            <div className="container">
                <div className="section-title">
                    <h2>Comprehensive Curriculum</h2>
                    <p>A structured 10-week roadmap to mastery</p>
                </div>

                <div style={{ display: 'grid', gap: '24px', maxWidth: '1000px', margin: '0 auto' }}>
                    {weeks.map((item, index) => (
                        <div key={index} style={{
                            backgroundColor: 'white',
                            borderRadius: 'var(--radius-lg)',
                            overflow: 'hidden',
                            border: '1px solid #e5e7eb',
                            boxShadow: 'var(--shadow-sm)',
                            transition: 'box-shadow 0.2s'
                        }}
                            onMouseEnter={(e) => e.currentTarget.style.boxShadow = 'var(--shadow-md)'}
                            onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'var(--shadow-sm)'}
                        >
                            {/* Header */}
                            <div style={{
                                padding: '24px',
                                backgroundColor: '#f9fafb',
                                borderBottom: '1px solid #e5e7eb'
                            }}>
                                <div style={{
                                    color: 'var(--color-primary)',
                                    fontSize: '0.85rem',
                                    fontWeight: '700',
                                    textTransform: 'uppercase',
                                    letterSpacing: '1px',
                                    marginBottom: '8px'
                                }}>
                                    {item.week}
                                </div>
                                <h3 style={{
                                    fontSize: '1.5rem',
                                    color: 'var(--color-text-main)',
                                    fontWeight: '700',
                                    margin: 0
                                }}>
                                    {item.title}
                                </h3>
                            </div>

                            {/* Topics Grid */}
                            <div style={{ padding: '24px' }}>
                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                                    gap: '16px'
                                }}>
                                    {item.topics.map((topic, idx) => (
                                        <div key={idx} style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '8px',
                                            color: 'var(--color-text-muted)',
                                            fontSize: '0.95rem'
                                        }}>
                                            <ChevronRight size={16} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
                                            <span>{topic}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Curriculum;
