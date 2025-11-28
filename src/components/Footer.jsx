import React from 'react';
import { Instagram, Facebook, Linkedin, Youtube, CheckCircle } from 'lucide-react';

const Footer = ({ onApplyClick }) => {
    return (
        <footer style={{ backgroundColor: 'var(--color-secondary)', color: 'white', paddingTop: '80px', paddingBottom: '40px' }}>
            <div className="container">
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    marginBottom: '60px'
                }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', color: 'white' }}>Your Full-Stack Journey Starts Here</h2>
                    <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.7)', marginBottom: '32px', maxWidth: '600px' }}>
                        Join 500+ successful graduates. Transform your career in 10 weeks.
                    </p>
                    <button className="btn btn-primary" style={{ padding: '16px 40px', fontSize: '1.2rem' }} onClick={onApplyClick}>
                        Apply Now
                    </button>
                </div>

                {/* Main Footer Content */}
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '60px', marginBottom: '40px' }}>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                        gap: '60px',
                        marginBottom: '60px'
                    }}>
                        {/* PRODUCT Column */}
                        <div>
                            <h4 style={{ fontSize: '1.2rem', marginBottom: '24px', color: 'white', fontWeight: '700' }}>PRODUCT</h4>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                <a href="#" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1rem' }}>Features</a>
                                <a href="#" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1rem' }}>Pricing</a>
                                <a href="#" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1rem' }}>Case Studies</a>
                            </div>
                        </div>

                        {/* RESOURCES Column */}
                        <div>
                            <h4 style={{ fontSize: '1.2rem', marginBottom: '24px', color: 'white', fontWeight: '700' }}>RESOURCES</h4>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                <a href="#" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1rem' }}>Blogs</a>
                                <a href="#" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1rem' }}>Cheatsheets</a>
                                <a href="#" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1rem' }}>Podcasts</a>
                            </div>
                        </div>

                        {/* PLANS Column */}
                        <div>
                            <h4 style={{ fontSize: '1.2rem', marginBottom: '24px', color: 'white', fontWeight: '700' }}>PLANS</h4>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                <a href="#" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1rem' }}>For institutions</a>
                                <a href="#" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1rem' }}>For students</a>
                                <a href="#" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1rem' }}>Board of Advisors</a>
                            </div>
                        </div>

                        {/* CONTACT US Column */}
                        <div>
                            <h4 style={{ fontSize: '1.2rem', marginBottom: '24px', color: 'white', fontWeight: '700' }}>CONTACT US</h4>
                            <div style={{ marginBottom: '24px' }}>
                                <p style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '8px' }}>Terv Corporate Office</p>
                                <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: '1.6', fontSize: '0.95rem' }}>
                                    #149, Opp to DLF IT Park, Mount Poonamalle Rd, Chennai, Tamil Nadu, Pincode-600089.
                                </p>
                            </div>
                            <div>
                                <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.7)' }}>
                                    Mobile: <span style={{ fontWeight: '600', color: 'white' }}>+91-84288 83388</span>
                                </p>
                            </div>

                            {/* Social Media Icons */}
                            <div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
                                <a href="#" style={{
                                    backgroundColor: 'var(--color-primary)',
                                    width: '44px',
                                    height: '44px',
                                    borderRadius: '8px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    transition: 'transform 0.2s'
                                }}
                                    onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px)'}
                                    onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                                >
                                    <Instagram size={20} />
                                </a>
                                <a href="#" style={{
                                    backgroundColor: 'var(--color-primary)',
                                    width: '44px',
                                    height: '44px',
                                    borderRadius: '8px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    transition: 'transform 0.2s'
                                }}
                                    onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px)'}
                                    onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                                >
                                    <Facebook size={20} />
                                </a>
                                <a href="#" style={{
                                    backgroundColor: 'var(--color-primary)',
                                    width: '44px',
                                    height: '44px',
                                    borderRadius: '8px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    transition: 'transform 0.2s'
                                }}
                                    onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px)'}
                                    onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                                >
                                    <Linkedin size={20} />
                                </a>
                                <a href="#" style={{
                                    backgroundColor: 'var(--color-primary)',
                                    width: '44px',
                                    height: '44px',
                                    borderRadius: '8px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    transition: 'transform 0.2s'
                                }}
                                    onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px)'}
                                    onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                                >
                                    <Youtube size={20} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '32px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '24px', marginBottom: '32px' }}>
                        <div style={{ display: 'flex', gap: '24px', alignItems: 'center', flexWrap: 'wrap' }}>
                            <a href="#" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>Terms and conditions</a>
                            <span style={{ color: 'rgba(255,255,255,0.3)' }}>•</span>
                            <a href="#" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>Privacy</a>
                            <span style={{ color: 'rgba(255,255,255,0.3)' }}>•</span>
                            <a href="#" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>Legal</a>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <img src={`${import.meta.env.BASE_URL}logo.png`} alt="TERV Pro" style={{ height: '32px', width: 'auto' }} />
                            <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem' }}>Made with ❤️ in 🇮🇳</span>
                        </div>
                    </div>

                    {/* Payment Methods */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                            <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>Our accepted payment methods:</span>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                backgroundColor: '#22c55e',
                                padding: '8px 16px',
                                borderRadius: '20px'
                            }}>
                                <CheckCircle size={16} />
                                <span style={{ fontSize: '0.85rem', fontWeight: '600' }}>100% safe and secure payment</span>
                            </div>
                        </div>


                        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="VISA" style={{ height: '24px', opacity: 0.7 }} />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" style={{ height: '24px', opacity: 0.7 }} />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/e/e1/UPI-Logo-vector.svg" alt="UPI" style={{ height: '24px', opacity: 0.7 }} />
                            <img src="https://razorpay.com/assets/razorpay-glyph.svg" alt="Razorpay" style={{ height: '24px', opacity: 0.7, filter: 'brightness(0) invert(1)' }} />
                        </div>
                    </div>

                    <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem', marginTop: '24px', textAlign: 'center' }}>
                        © 2025 © terv. All rights reserved
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
