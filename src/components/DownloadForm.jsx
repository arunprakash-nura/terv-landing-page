import React, { useState } from 'react';
import { X } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { EMAIL_CONFIG } from '../emailConfig';

const DownloadForm = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        currentProfile: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const currentProfiles = [
        'Working in Non IT Industry',
        'Working in IT Industry',
        'Students',
        'Graduated and Looking For a Career'
    ];

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const requests = [];

            // Only send email if EmailJS is configured
            if (EMAIL_CONFIG.SERVICE_ID && EMAIL_CONFIG.SERVICE_ID !== 'YOUR_SERVICE_ID') {
                const templateParams = {
                    from_name: formData.name,
                    from_email: formData.email,
                    phone: formData.phone,
                    current_profile: formData.currentProfile,
                    to_email: 'your-email@example.com'
                };

                requests.push(
                    emailjs.send(
                        EMAIL_CONFIG.SERVICE_ID,
                        EMAIL_CONFIG.DOWNLOAD_TEMPLATE_ID,
                        templateParams,
                        EMAIL_CONFIG.PUBLIC_KEY
                    )
                );
            }

            // Prepare Google Sheets data
            const sheetsData = {
                formType: 'download',
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                currentProfile: formData.currentProfile
            };

            requests.push(
                fetch(EMAIL_CONFIG.GOOGLE_SHEETS_URL, {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(sheetsData)
                })
            );

            // Send all requests in parallel
            await Promise.all(requests);

            console.log('Download form submitted:', formData);

            // Show success message
            alert('Thank you! Your syllabus will download now.');

            // Trigger syllabus download
            const link = document.createElement('a');
            link.href = `${import.meta.env.BASE_URL}syllabus.pdf`;
            link.download = 'Terv-Full-Stack-Syllabus.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            // Reset form and close
            setFormData({
                name: '',
                email: '',
                phone: '',
                currentProfile: ''
            });
            onClose();
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('There was an error submitting your request. Your syllabus will still download. Please contact us if you need assistance.');

            // Still download syllabus even if submission fails
            const link = document.createElement('a');
            link.href = `${import.meta.env.BASE_URL}syllabus.pdf`;
            link.download = 'Terv-Full-Stack-Syllabus.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            onClose();
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
                maxWidth: '500px',
                width: '100%',
                maxHeight: '90vh',
                overflowY: 'auto',
                position: 'relative'
            }}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div style={{
                    padding: '24px',
                    borderBottom: '1px solid #e5e7eb',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    position: 'sticky',
                    top: 0,
                    backgroundColor: 'white',
                    zIndex: 1
                }}>
                    <h2 style={{ margin: 0, fontSize: '1.5rem', color: 'var(--color-secondary)' }}>Download Syllabus</h2>
                    <button
                        onClick={onClose}
                        style={{
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            padding: '8px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <X size={24} color="#666" />
                    </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} style={{ padding: '24px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        {/* Name */}
                        <div>
                            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: 'var(--color-text-main)' }}>
                                Name <span style={{ color: 'red' }}>*</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                style={{
                                    width: '100%',
                                    padding: '12px',
                                    borderRadius: 'var(--radius-sm)',
                                    border: '1px solid #d1d5db',
                                    fontSize: '1rem'
                                }}
                                placeholder="Enter your full name"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: 'var(--color-text-main)' }}>
                                Email ID <span style={{ color: 'red' }}>*</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                style={{
                                    width: '100%',
                                    padding: '12px',
                                    borderRadius: 'var(--radius-sm)',
                                    border: '1px solid #d1d5db',
                                    fontSize: '1rem'
                                }}
                                placeholder="your.email@example.com"
                            />
                        </div>

                        <div>
                            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: 'var(--color-text-main)' }}>
                                Phone Number <span style={{ color: 'red' }}>*</span>
                            </label>
                            <input
                                type="tel"
                                name="phone"
                                required
                                value={formData.phone}
                                onChange={handleChange}
                                pattern="[0-9]{10}"
                                maxLength="10"
                                title="Please enter a valid 10-digit mobile number (numbers only). Example: 9876543210"
                                style={{
                                    width: '100%',
                                    padding: '12px',
                                    borderRadius: 'var(--radius-sm)',
                                    border: '1px solid #d1d5db',
                                    fontSize: '1rem'
                                }}
                                placeholder="10-digit mobile number"
                            />
                        </div>

                        {/* Current Profile */}
                        <div>
                            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: 'var(--color-text-main)' }}>
                                Current Profile <span style={{ color: 'red' }}>*</span>
                            </label>
                            <select
                                name="currentProfile"
                                required
                                value={formData.currentProfile}
                                onChange={handleChange}
                                style={{
                                    width: '100%',
                                    padding: '12px',
                                    borderRadius: 'var(--radius-sm)',
                                    border: '1px solid #d1d5db',
                                    fontSize: '1rem'
                                }}
                            >
                                <option value="">Select your current profile</option>
                                {currentProfiles.map((profile) => (
                                    <option key={profile} value={profile}>{profile}</option>
                                ))}
                            </select>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="btn btn-primary"
                            disabled={isSubmitting}
                            style={{
                                width: '100%',
                                padding: '14px',
                                fontSize: '1.1rem',
                                marginTop: '8px',
                                opacity: isSubmitting ? 0.7 : 1,
                                cursor: isSubmitting ? 'not-allowed' : 'pointer'
                            }}
                        >
                            {isSubmitting ? 'Submitting...' : 'Download Syllabus'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default DownloadForm;
