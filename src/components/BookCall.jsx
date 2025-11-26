import React from 'react';
import { CheckCircle } from 'lucide-react';

const BookCall = () => {
    const benefits = [
        "Discover new courses & preparatory materials",
        "Practice with our company specific mock tests",
        "Improve your performance using our Advanced Analytics",
        "Ace the interviews and Launch a Career",
        "Get access to special courses and programms"
    ];

    return (
        <section className="section" style={{
            background: 'linear-gradient(135deg, #201140 0%, #4c1d95 100%)',
            color: 'white',
            padding: '80px 0'
        }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '60px',
                    alignItems: 'center'
                }} className="book-call-grid">

                    {/* Left Side: Content */}
                    <div>
                        <div style={{
                            color: 'var(--color-primary)',
                            fontWeight: '700',
                            letterSpacing: '1px',
                            marginBottom: '16px',
                            textTransform: 'uppercase',
                            fontSize: '0.9rem'
                        }}>
                            Get Started
                        </div>
                        <h2 style={{
                            fontSize: '3.5rem',
                            marginBottom: '40px',
                            color: 'white',
                            lineHeight: '1.1'
                        }}>
                            Ready to become next success story?
                        </h2>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                            {benefits.map((benefit, index) => (
                                <div key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                                    <div style={{
                                        backgroundColor: 'var(--color-primary)',
                                        borderRadius: '50%',
                                        padding: '4px',
                                        display: 'flex',
                                        marginTop: '2px'
                                    }}>
                                        <CheckCircle size={20} color="white" />
                                    </div>
                                    <span style={{ fontSize: '1.25rem', opacity: 0.95 }}>{benefit}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side: Form Card */}
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <div style={{
                            backgroundColor: 'white',
                            borderRadius: 'var(--radius-lg)',
                            overflow: 'hidden',
                            width: '100%',
                            maxWidth: '550px',
                            boxShadow: '0 25px 50px rgba(0,0,0,0.25)'
                        }}>
                            {/* Card Header with Illustration */}
                            <div style={{
                                backgroundColor: '#e0f2fe',
                                padding: '32px',
                                textAlign: 'center',
                                position: 'relative'
                            }}>
                                {/* Placeholder for illustration */}
                                <div style={{
                                    height: '140px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <img
                                        src="https://img.freepik.com/free-vector/colleagues-working-together-project_74855-6308.jpg"
                                        alt="Lets talk"
                                        style={{ height: '100%', objectFit: 'contain', mixBlendMode: 'multiply' }}
                                    />
                                </div>
                                <h3 style={{
                                    position: 'absolute',
                                    top: '30px',
                                    right: '30px',
                                    color: '#333',
                                    fontSize: '1.5rem'
                                }}>Lets talk!</h3>
                            </div>

                            {/* Form Content */}
                            <div style={{ padding: '40px' }}>
                                <p style={{
                                    textAlign: 'center',
                                    color: 'var(--color-text-muted)',
                                    marginBottom: '32px',
                                    fontSize: '1.1rem'
                                }}>Drop your details below</p>

                                <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                    <input
                                        type="text"
                                        placeholder="Your name"
                                        style={{
                                            padding: '16px 20px',
                                            borderRadius: 'var(--radius-sm)',
                                            border: '1px solid #ddd',
                                            fontSize: '1.1rem',
                                            outline: 'none'
                                        }}
                                    />
                                    <input
                                        type="tel"
                                        placeholder="Contact number"
                                        style={{
                                            padding: '16px 20px',
                                            borderRadius: 'var(--radius-sm)',
                                            border: '1px solid #ddd',
                                            fontSize: '1.1rem',
                                            outline: 'none'
                                        }}
                                    />
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        style={{
                                            padding: '16px 20px',
                                            borderRadius: 'var(--radius-sm)',
                                            border: '1px solid #ddd',
                                            fontSize: '1.1rem',
                                            outline: 'none'
                                        }}
                                    />

                                    <p style={{ fontSize: '0.85rem', color: '#999', textAlign: 'center', marginTop: '12px' }}>
                                        By clicking book a call you accept our terms will also recieve exclusive offers, updates about new courses, packages
                                    </p>

                                    <button className="btn btn-primary" style={{
                                        width: '100%',
                                        marginTop: '16px',
                                        borderRadius: 'var(--radius-sm)',
                                        padding: '14px'
                                    }}>
                                        Book a call
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <style>{`
        @media (max-width: 960px) {
          .book-call-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
        </section>
    );
};

export default BookCall;
