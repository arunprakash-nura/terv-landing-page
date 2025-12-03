import React from 'react';

const HiringPartners = () => {
    const categories = [
        {
            id: 'unicorns',
            label: 'Unicorns',
            color: '#fef3c7', // Light yellow for badge
            companies: [
                { name: 'Zoho', logo: 'https://download.logo.wine/logo/Zoho_Corporation/Zoho_Corporation-Logo.wine.png' },
                { name: 'Groww', logo: 'https://resources.groww.in/web-assets/img/website-logo/groww_logo.webp' },
                { name: 'Slice', logo: 'https://techstory.in/wp-content/uploads/2022/06/Slice_company_logo.svg_.png' },
                { name: 'BharatPe', logo: 'https://s3-us-west-2.amazonaws.com/cbi-image-service-prd/original/a6dda45b-eade-470f-be76-67fdff753060.png' },
                { name: 'Grofers', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Grofers_logo.svg/2560px-Grofers_logo.svg.png' },
                { name: 'CRED', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/CRED-LOGO2.png' },
                { name: 'Cars24', logo: 'https://images.seeklogo.com/logo-png/44/2/cars24-logo-png_seeklogo-447285.png' },
                { name: 'Urban Company', logo: 'https://pnghdpro.com/wp-content/themes/pnghdpro/download/social-media-and-brands/urban-company-logo-hd.png' },
                { name: 'Meesho', logo: 'https://images.seeklogo.com/logo-png/50/2/meesho-logo-png_seeklogo-507116.png' },
                { name: 'NoBroker', logo: 'https://pnghdpro.com/wp-content/themes/pnghdpro/download/social-media-and-brands/nobroker-logo-hd.png' },
                { name: 'PharmEasy', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/PharmEasy_logo.png' },
                { name: 'upGrad', logo: 'https://www.upgrad.com/_nuxt/img/826e3a7.png' },
                { name: 'Ola', logo: 'https://upload.wikimedia.org/wikipedia/en/0/0f/Ola_Cabs_logo.svg' },
                { name: 'Flipkart', logo: 'https://cdn.freebiesupply.com/logos/large/2x/flipkart-logo-png-transparent.png' },
                { name: 'Dailyhunt', logo: 'https://lh3.googleusercontent.com/ApIuHzKvV6lC9jvpf3O218k0DkxHSg__hweHZMlIvgWq3wAGZxqMH7xbKAhEKk24z2yfl3Xs5vmP5TJThorARJFJjMW1nhtKnt9Iq7SrOS1C26FItg' }
            ]
        },
        {
            id: 'startups',
            label: 'High Growth Startups',
            color: '#d1fae5', // Light green for badge
            companies: [
                { name: 'Vicara', logo: 'https://cdn.razorpay.com/logos/HACBwqWoPV4qyZ_large.png' },
                { name: 'Yellow Class', logo: 'https://s3.ap-south-1.amazonaws.com/assets.ynos.in/startup-logos/YNOS352481.jpg' },
                { name: 'Briq', logo: 'https://images.crunchbase.com/image/upload/c_pad,h_256,w_256,f_auto,q_auto:eco,dpr_1/bados11lhyu9ci3wpjxr?ik-sanitizeSvg=true' },
                { name: 'Jumbotail', logo: 'https://d820a6sl534t.cloudfront.net/uploads/logo/abe1a5a9-910e-4dd8-a1b4-a34811edc5f9/large_da812452-1ad0-4f79-9923-2c60467ff19b.png' },
                { name: 'Ninjacart', logo: 'https://ninjacart.com/wp-content/uploads/2023/10/cropped-Group-207-1.png' },
                { name: 'Ula', logo: 'https://logowik.com/content/uploads/images/ula5127.jpg' },
                { name: 'Shiprocket', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/00/SR-logo-wiki.png' },
                { name: 'Tracxn', logo: 'https://cdn.prod.website-files.com/61e96d66da0c3c1b8259f330/61ea2be27cc6d375db35a889_Tracxn%20Standard%20Logo_Black.png' },
                { name: 'Ather', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Ather-logo.svg/1280px-Ather-logo.svg.png' },
                { name: 'FamPay', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/14/FamPay_Logo.png' },
                { name: 'Rupeek', logo: 'https://assets.rupeek.com/website/media/rupeek_logo_primary.svg' },
                { name: 'LendingKart', logo: 'https://media.lendingkart.com/wp-content/uploads/2023/01/Lendingkart-logo_1200X630.png' },
                { name: 'Superset', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Superset_logo.svg/2560px-Superset_logo.svg.png' },
                { name: 'Navi', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e2/Navi_Logo.png' },
                { name: 'JusPay', logo: 'https://juspay.io/juspaylogo.svg' },
                { name: 'Capillary', logo: 'https://ik.imgkit.net/3vlqs5axxjf/external/http://phocuswright.blob.core.windows.net/pcw/CapillaryLogo_Horiz.png?tr=w-1200%2Cfo-auto' },
                { name: 'WebEngage', logo: 'https://webengage.com/wp-content/uploads/2025/01/we-logo-retention-simplified_black.svg' },
                { name: 'Vouch', logo: 'https://www.vouch-technologies.com/wp-content/uploads/2023/09/Vouch_Logo_Hor_Colour_RGB_NEW_Mega-Menu.png' }
            ]
        },
        {
            id: 'mncs',
            label: 'MNCs and GCC',
            color: '#cffafe', // Light cyan for badge
            companies: [
                { name: 'PwC', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/PricewaterhouseCoopers_Logo.svg/2560px-PricewaterhouseCoopers_Logo.svg.png' },
                { name: 'Accenture', logo: 'https://www.vectorlogo.zone/logos/accenture/accenture-ar21.svg' },
                { name: 'Microsoft', logo: 'https://www.vectorlogo.zone/logos/microsoft/microsoft-ar21.svg' },
                { name: 'Amazon', logo: 'https://www.vectorlogo.zone/logos/amazon/amazon-ar21.svg' },
                { name: 'Grab', logo: 'https://www.vectorlogo.zone/logos/grab/grab-ar21.svg' },
                { name: 'Salesforce', logo: 'https://www.vectorlogo.zone/logos/salesforce/salesforce-ar21.svg' },
                { name: 'Oracle', logo: 'https://www.vectorlogo.zone/logos/oracle/oracle-ar21.svg' },
                { name: 'IBM', logo: 'https://www.vectorlogo.zone/logos/ibm/ibm-ar21.svg' },
                { name: 'Arcesium', logo: 'https://files.codingninjas.com/arcesium-1-1706092253.webp' },
                { name: 'Walmart', logo: 'https://www.vectorlogo.zone/logos/walmart/walmart-ar21.svg' },
                { name: 'Tekion', logo: 'https://www.primarymarkets.com/wp-content/uploads/2024/03/Tekion-Circle-Logo.png' },
                { name: 'VMware', logo: 'https://cdn.freebiesupply.com/images/large/2x/vmware-logo-black.png' },
                { name: 'D.E. Shaw & Co', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/60/D._E._Shaw_%26_Co._logo.png' },
                { name: 'Deloitte', logo: 'https://www.pngall.com/wp-content/uploads/13/Deloitte-Logo-PNG-Cutout.png' },
                { name: 'EY', logo: 'https://www.vectorlogo.zone/logos/ey/ey-ar21.svg' }
            ]
        }
    ];



    return (
        <section style={{
            padding: '80px 20px 20px 20px',
            backgroundColor: 'white'
        }}>
            <div className="container">
                {/* Section Header */}
                <div style={{
                    textAlign: 'center',
                    marginBottom: '60px'
                }}>
                    <h2 style={{
                        fontSize: '2.5rem',
                        fontWeight: '700',
                        color: 'var(--color-secondary)',
                        marginBottom: '16px',
                        lineHeight: '1.2'
                    }}>
                        Work At Tech Unicorns,<br />
                        High Growth Startups, MNCs And GCC
                    </h2>
                    <p style={{
                        fontSize: '1.1rem',
                        color: 'var(--color-text-muted)',
                        maxWidth: '700px',
                        margin: '0 auto'
                    }}>
                        <strong>Build your Github portfolio of projects</strong> and impress recruiters at Tech Unicorns, MNCs and GCC, and hyper growth startups.
                    </p>
                </div>

                {/* Categories */}
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '60px',
                    maxWidth: '1200px',
                    margin: '0 auto'
                }}>
                    {categories.map((category, idx) => (
                        <div key={category.id} style={{ position: 'relative' }}>
                            {/* Category Badge - Centered above row */}
                            <div style={{
                                display: 'flex',
                                justifyContent: 'center',
                                marginBottom: '30px'
                            }}>
                                <span style={{
                                    padding: '8px 24px',
                                    borderRadius: '20px',
                                    backgroundColor: category.color,
                                    color: '#1f2937',
                                    fontSize: '0.95rem',
                                    fontWeight: '700',
                                    boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                                }}>
                                    {category.label}
                                </span>
                            </div>

                            {/* Marquee Container Wrapper */}
                            <div style={{
                                backgroundColor: '#f9fafb',
                                borderRadius: '100px',
                                padding: '20px 40px',
                                overflow: 'hidden',
                                position: 'relative'
                            }}>
                                {/* Marquee Track */}
                                <div
                                    className={`marquee-track ${idx === 1 ? 'reverse' : ''}`}
                                    style={{
                                        display: 'flex',
                                        gap: '60px',
                                        alignItems: 'center'
                                    }}
                                >
                                    {/* First set of logos */}
                                    {category.companies.map((company, index) => (
                                        <div
                                            key={`${category.id}-1-${index}`}
                                            style={{
                                                flexShrink: 0,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                transition: 'transform 0.3s ease'
                                            }}
                                        >
                                            <img
                                                src={company.logo}
                                                alt={company.name}
                                                style={{
                                                    height: '40px',
                                                    width: 'auto',
                                                    maxWidth: '140px',
                                                    objectFit: 'contain',
                                                    transition: 'transform 0.3s ease'
                                                }}
                                                onMouseEnter={(e) => {
                                                    e.currentTarget.style.transform = 'scale(1.1)';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.currentTarget.style.transform = 'scale(1)';
                                                }}
                                                onError={(e) => {
                                                    e.currentTarget.style.display = 'none';
                                                }}
                                            />
                                        </div>
                                    ))}
                                    {/* Duplicate set for seamless loop */}
                                    {category.companies.map((company, index) => (
                                        <div
                                            key={`${category.id}-2-${index}`}
                                            style={{
                                                flexShrink: 0,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                transition: 'transform 0.3s ease'
                                            }}
                                        >
                                            <img
                                                src={company.logo}
                                                alt={company.name}
                                                style={{
                                                    height: '40px',
                                                    width: 'auto',
                                                    maxWidth: '140px',
                                                    objectFit: 'contain',
                                                    filter: 'grayscale(100%)',
                                                    opacity: 0.7,
                                                    transition: 'all 0.3s ease'
                                                }}
                                                onMouseEnter={(e) => {
                                                    e.currentTarget.style.filter = 'grayscale(0%)';
                                                    e.currentTarget.style.opacity = '1';
                                                    e.currentTarget.style.transform = 'scale(1.1)';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.currentTarget.style.filter = 'grayscale(100%)';
                                                    e.currentTarget.style.opacity = '0.7';
                                                    e.currentTarget.style.transform = 'scale(1)';
                                                }}
                                                onError={(e) => {
                                                    e.currentTarget.style.display = 'none';
                                                }}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Marquee Animation CSS */}
                <style>{`
                    @keyframes marquee {
                        0% {
                            transform: translateX(0);
                        }
                        100% {
                            transform: translateX(-50%);
                        }
                    }

                    @keyframes marquee-reverse {
                        0% {
                            transform: translateX(-50%);
                        }
                        100% {
                            transform: translateX(0);
                        }
                    }

                    .marquee-track {
                        animation: marquee 40s linear infinite;
                    }

                    .marquee-track.reverse {
                        animation: marquee-reverse 40s linear infinite;
                    }

                    .marquee-track:hover {
                        animation-play-state: running;
                    }
                `}</style>
            </div>
        </section>
    );
};

export default HiringPartners;
