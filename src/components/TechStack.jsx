import React from 'react';

const TechStack = () => {
    const techs = [
        {
            name: 'Java',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
            color: '#007396'
        },
        {
            name: 'HTML5',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
            color: '#E34F26'
        },
        {
            name: 'CSS3',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
            color: '#1572B6'
        },
        {
            name: 'JavaScript',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
            color: '#F7DF1E'
        },
        {
            name: 'React',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
            color: '#61DAFB'
        },
        {
            name: 'Node.js',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
            color: '#339933'
        },
        {
            name: 'Spring Boot',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
            color: '#6DB33F'
        },
        {
            name: 'Django',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg',
            color: '#092E20'
        },
        {
            name: 'Express',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
            color: '#000000'
        },
        {
            name: 'GitHub',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
            color: '#181717'
        },
        {
            name: 'MongoDB',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
            color: '#47A248'
        },
        {
            name: 'Git',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
            color: '#F05032'
        },
        {
            name: 'AWS',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
            color: '#FF9900'
        },
        {
            name: 'Azure',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg',
            color: '#0078D4'
        },
        {
            name: 'GCP',
            logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg',
            color: '#4285F4'
        }
    ];

    return (
        <section className="section section-bg-light">
            <div className="container">
                <div className="section-title">
                    <h2>Master the <span style={{ color: 'var(--color-primary)' }}>Modern Stack</span></h2>
                    <p>We focus on the most in-demand technologies in the industry.</p>
                </div>

                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: '40px',
                    maxWidth: '1000px',
                    margin: '0 auto'
                }}>
                    {techs.map((tech, index) => (
                        <div key={index} style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '12px'
                        }}>
                            <div style={{
                                width: '80px',
                                height: '80px',
                                backgroundColor: 'white',
                                borderRadius: '20px',
                                boxShadow: 'var(--shadow-sm)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                padding: '16px',
                                transition: 'transform 0.2s, box-shadow 0.2s'
                            }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-5px)';
                                    e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                                }}
                            >
                                <img
                                    src={tech.logo}
                                    alt={tech.name}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'contain'
                                    }}
                                />
                            </div>
                            <span style={{ fontWeight: '600', fontSize: '0.9rem', color: 'var(--color-text-main)' }}>{tech.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;
