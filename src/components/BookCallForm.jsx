import React, { useState } from 'react';
import { X, CheckCircle } from 'lucide-react';
import { EMAIL_CONFIG } from '../emailConfig';

const BookCallForm = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const benefits = [
        "Discover new courses & preparatory materials",
        "Practice with our company specific mock tests",
        "Improve your performance using our Advanced Analytics",
        "Ace the interviews and Launch a Career",
        "Get access to special courses and programms"
    ];

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Custom validation with professional messages
        if (!formData.name.trim()) {
            alert('Please enter your name to continue.');
            return;
        }

        if (!formData.phone.trim()) {
            alert('Please enter your contact number to continue.');
            return;
        }

        if (!/^[0-9]{10}$/.test(formData.phone.trim())) {
            alert('Please enter a valid 10-digit mobile number.');
            return;
        }

        if (!formData.email.trim()) {
            alert('Please enter your email address to continue.');
            return;
        }

        if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email.trim())) {
            alert('Please enter a valid email address.');
            return;
        }

        setIsSubmitting(true);

        try {
            // Prepare Google Sheets data
            const sheetsData = {
                formType: 'book_call',
                name: formData.name.trim(),
                phone: formData.phone.trim(),
                email: formData.email.trim()
            };

            // Send to Google Sheets
            await fetch(EMAIL_CONFIG.GOOGLE_SHEETS_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(sheetsData)
            });

            console.log('Book call form submitted:', formData);

            // Show success message
            alert('Thank you! We will contact you soon to schedule your call.');

            // Reset form and close
            setFormData({
                name: '',
                phone: '',
                email: ''
            });
            onClose();
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('There was an error submitting your request. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    if (!isOpen) return null;

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '20px'
        }}
            onClick={onClose}
        >
            <div style={{
                backgroundColor: 'white',
                borderRadius: 'var(--radius-lg)',
                maxWidth: '900px',
                width: '100%',
                maxHeight: '90vh',
                overflowY: 'auto',
                position: 'relative',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 0
            }}
                className="book-call-modal"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Left Side: Benefits */}
                <div style={{
                    background: 'linear-gradient(135deg, #201140 0%, #4c1d95 100%)',
                    color: 'white',
                    padding: '40px',
                    borderRadius: 'var(--radius-lg) 0 0 var(--radius-lg)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                }}>
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
                        fontSize: '2rem',
                        marginBottom: '30px',
                        color: 'white',
                        lineHeight: '1.2'
                    }}>
                        Ready to become next success story?
                    </h2>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        {benefits.map((benefit, index) => (
                            <div key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                                <div style={{
                                    backgroundColor: 'var(--color-primary)',
                                    borderRadius: '50%',
                                    padding: '4px',
                                    display: 'flex',
                                    marginTop: '2px',
                                    flexShrink: 0
                                }}>
                                    <CheckCircle size={16} color="white" />
                                </div>
                                <span style={{ fontSize: '1rem', opacity: 0.95 }}>{benefit}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Side: Form */}
                <div style={{ position: 'relative' }}>
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        style={{
                            position: 'absolute',
                            top: '20px',
                            right: '20px',
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            padding: '8px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            zIndex: 1
                        }}
                    >
                        <X size={24} color="#666" />
                    </button>

                    {/* Form Header */}
                    <div style={{
                        backgroundColor: '#e0f2fe',
                        padding: '32px',
                        textAlign: 'center',
                        position: 'relative'
                    }}>
                        <div style={{
                            height: '120px',
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
                            fontSize: '1.5rem',
                            margin: 0
                        }}>Let's talk!</h3>
                    </div>

                    {/* Form Content */}
                    <div style={{ padding: '40px' }}>
                        <p style={{
                            textAlign: 'center',
                            color: 'var(--color-text-muted)',
                            marginBottom: '32px',
                            fontSize: '1.1rem'
                        }}>Drop your details below</p>

                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
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
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Contact number (10 digits)"
                                maxLength="10"
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
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
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

                            <button
                                type="submit"
                                className="btn btn-primary"
                                disabled={isSubmitting}
                                style={{
                                    width: '100%',
                                    marginTop: '16px',
                                    borderRadius: 'var(--radius-sm)',
                                    padding: '14px',
                                    opacity: isSubmitting ? 0.7 : 1,
                                    cursor: isSubmitting ? 'not-allowed' : 'pointer'
                                }}
                            >
                                {isSubmitting ? 'Submitting...' : 'Book a call'}
                            </button>
                        </form>
                    </div>
                </div>

                {/* Responsive styles */}
                <style>{`
                    @media (max-width: 768px) {
                        .book-call-modal {
                            grid-template-columns: 1fr !important;
                            max-width: 500px !important;
                        }
                        .book-call-modal > div:first-child {
                            border-radius: var(--radius-lg) var(--radius-lg) 0 0 !important;
                            padding: 30px !important;
                        }
                    }
                `}</style>
            </div>
        </div>
    );
};

export default BookCallForm;
