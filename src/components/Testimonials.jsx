import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
    const reviews = [
        {
            name: 'Rahul Verma',
            role: 'Cloud Developer at IBM',
            package: '₹6.7 LPA',
            quote: "The hands-on training and placement support were exactly what I needed. Within two weeks of completing the program, I had multiple offers."
        },
        {
            name: 'Kavya Rao',
            role: 'MERN Developer at Hexaware',
            package: '₹5.9 LPA',
            quote: "Best decision I made! The instructors were amazing. By graduation, I had built five complete applications that showcased my skills."
        },
        {
            name: 'Arun P',
            role: 'Backend Developer',
            package: '₹6.5 LPA',
            quote: "From zero coding experience to landing a job. TERV Pro delivers on their promise! The structured approach made it possible."
        }
    ];

    return (
        <section className="section" id="reviews">
            <div className="container">
                <div className="section-title">
                    <h2>Student <span style={{ color: 'var(--color-primary)' }}>Success Stories</span></h2>
                    <p>Don't just take our word for it. Hear from our graduates.</p>
                </div>

                <div className="grid grid-3">
                    {reviews.map((review, index) => (
                        <div key={index} style={{
                            padding: '32px',
                            backgroundColor: 'white',
                            borderRadius: 'var(--radius-lg)',
                            border: '1px solid #eee',
                            display: 'flex',
                            flexDirection: 'column',
                            height: '100%'
                        }}>
                            <div style={{ display: 'flex', gap: '4px', marginBottom: '16px' }}>
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={16} fill="#FFC107" color="#FFC107" />
                                ))}
                            </div>
                            <p style={{
                                fontStyle: 'italic',
                                color: 'var(--color-text-muted)',
                                marginBottom: '24px',
                                flex: 1
                            }}>"{review.quote}"</p>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                <div style={{
                                    width: '48px',
                                    height: '48px',
                                    backgroundColor: 'var(--color-bg-light)',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontWeight: 'bold',
                                    color: 'var(--color-primary)'
                                }}>
                                    {review.name[0]}
                                </div>
                                <div>
                                    <div style={{ fontWeight: '700', color: 'var(--color-secondary)' }}>{review.name}</div>
                                    <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>{review.role}</div>
                                    <div style={{ fontSize: '0.85rem', color: 'var(--color-primary)', fontWeight: '600' }}>{review.package}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
