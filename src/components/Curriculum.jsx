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
        <section className="section" id="curriculum">
            <div className="container">
                <div className="section-title">
                    <h2>Comprehensive <span style={{ color: 'var(--color-primary)' }}>Curriculum</span></h2>
                    <p>A structured 10-week roadmap to mastery.</p>
                </div>

                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    {weeks.map((item, index) => (
                        <div key={index} style={{
                            marginBottom: '20px',
                            backgroundColor: 'white',
                            borderRadius: 'var(--radius-md)',
                            boxShadow: 'var(--shadow-sm)',
                            overflow: 'hidden',
                            border: '1px solid #eee'
                        }}>
                            <div style={{
                                padding: '24px',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                backgroundColor: 'var(--color-bg-light)',
                                borderBottom: '1px solid #eee'
                            }}>
                                <div>
                                    <span style={{
                                        fontSize: '0.85rem',
                                        fontWeight: '700',
                                        color: 'var(--color-primary)',
                                        textTransform: 'uppercase',
                                        letterSpacing: '1px'
                                    }}>{item.week}</span>
                                    <h3 style={{ fontSize: '1.2rem', marginTop: '4px', color: 'var(--color-secondary)' }}>{item.title}</h3>
                                </div>
                            </div>
                            <div style={{ padding: '24px' }}>
                                <ul style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                                    gap: '12px'
                                }}>
                                    {item.topics.map((topic, i) => (
                                        <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.95rem', color: 'var(--color-text-muted)' }}>
                                            <ChevronRight size={16} color="var(--color-primary)" />
                                            {topic}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Curriculum;
