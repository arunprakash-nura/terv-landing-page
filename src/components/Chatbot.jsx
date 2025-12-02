import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Bot, User, ChevronDown } from 'lucide-react';
import { EMAIL_CONFIG } from '../emailConfig';

const Chatbot = ({ onApplyClick, onDownloadClick }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [showNotification, setShowNotification] = useState(true);
    const [showTooltip, setShowTooltip] = useState(false);
    const [collectingInfo, setCollectingInfo] = useState(null); // 'name', 'phone', 'email', null
    const [userInfo, setUserInfo] = useState({ name: '', phone: '', email: '' });
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    useEffect(() => {
        if (isOpen && messages.length === 0) {
            // Send welcome message when chatbot opens for the first time
            setTimeout(() => {
                addBotMessage(
                    "👋 Hi! I'm Terv Assistant. I'm here to help you learn about our Full-Stack Development Program. How can I assist you today?",
                    getWelcomeOptions()
                );
            }, 500);
        }
    }, [isOpen]);

    // Show tooltip after 3 seconds, hide after 10 seconds
    useEffect(() => {
        const showTimer = setTimeout(() => {
            if (!isOpen) {
                setShowTooltip(true);
            }
        }, 3000);

        const hideTimer = setTimeout(() => {
            setShowTooltip(false);
        }, 13000); // 3s delay + 10s display

        return () => {
            clearTimeout(showTimer);
            clearTimeout(hideTimer);
        };
    }, [isOpen]);

    const addBotMessage = (text, quickReplies = null) => {
        setIsTyping(true);
        setTimeout(() => {
            setMessages(prev => [...prev, {
                type: 'bot',
                text,
                quickReplies,
                timestamp: new Date()
            }]);
            setIsTyping(false);
        }, 800);
    };

    const addUserMessage = (text) => {
        setMessages(prev => [...prev, {
            type: 'user',
            text,
            timestamp: new Date()
        }]);
    };

    const getWelcomeOptions = () => [
        { label: '📚 Program Details', value: 'program' },
        { label: '✅ Eligibility', value: 'eligibility' },
        { label: '💻 Curriculum', value: 'curriculum' },
        { label: '💬 Chat on WhatsApp', value: 'whatsapp' },
        { label: '🚀 Apply Now', value: 'apply' }
    ];

    const getFollowUpOptions = () => [
        { label: '📥 Download Brochure', value: 'download' },
        { label: '📞 Book a Call', value: 'call' },
        { label: '💬 Chat on WhatsApp', value: 'whatsapp' },
        { label: '🏢 Hiring Partners', value: 'partners' },
        { label: '🔙 Main Menu', value: 'menu' }
    ];

    const handleQuickReply = (option) => {
        addUserMessage(option.label);
        handleUserInput(option.value);
    };

    const handleUserInput = (input) => {
        const lowerInput = input.toLowerCase();

        // Program Details
        if (lowerInput.includes('program') || lowerInput === 'program') {
            addBotMessage(
                "🎓 Our Full-Stack Development Program is a comprehensive training designed to transform you into a job-ready developer!\n\n✨ Key Features:\n• 6-month intensive training\n• Live projects with real companies\n• Industry-expert mentors\n• 100% placement assistance\n• Hands-on coding experience\n\nWould you like to know more?",
                getFollowUpOptions()
            );
        }
        // Eligibility
        else if (lowerInput.includes('eligibility') || lowerInput === 'eligibility') {
            addBotMessage(
                "✅ Eligibility Criteria:\n\n• Bachelor's degree in any field\n• Basic understanding of programming (preferred but not mandatory)\n• Passion for technology and problem-solving\n• Commitment to complete the program\n\nNo prior coding experience? No problem! We'll teach you from scratch.\n\nReady to apply?",
                [
                    { label: '🚀 Apply Now', value: 'apply' },
                    { label: '📚 View Curriculum', value: 'curriculum' },
                    { label: '🔙 Main Menu', value: 'menu' }
                ]
            );
        }
        // Curriculum
        else if (lowerInput.includes('curriculum') || lowerInput === 'curriculum' || lowerInput.includes('tech')) {
            addBotMessage(
                "💻 Our Curriculum Covers:\n\n🎯 Frontend:\n• React.js, HTML5, CSS3\n• JavaScript (ES6+)\n• Responsive Design\n\n⚙️ Backend:\n• Node.js, Express.js\n• RESTful APIs\n• Database Management\n\n🛠️ Tools & More:\n• Git & GitHub\n• MongoDB, MySQL\n• Deployment & DevOps\n\nPlus: Live projects, interview prep, and soft skills training!",
                [
                    { label: '📥 Download Full Syllabus', value: 'download' },
                    { label: '🚀 Apply Now', value: 'apply' },
                    { label: '🔙 Main Menu', value: 'menu' }
                ]
            );
        }
        // Career/Benefits
        else if (lowerInput.includes('career') || lowerInput.includes('placement') || lowerInput.includes('job')) {
            addBotMessage(
                "🌟 Career Benefits:\n\n✨ 100% Placement Assistance\n• Dedicated placement team\n• Interview preparation\n• Resume building workshops\n• Mock interviews\n\n🏢 Our Hiring Partners:\n• Top IT companies\n• Startups & MNCs\n• Average package: 4-8 LPA\n\nYour success is our mission!",
                [
                    { label: '🏢 View Hiring Partners', value: 'partners' },
                    { label: '🚀 Apply Now', value: 'apply' },
                    { label: '🔙 Main Menu', value: 'menu' }
                ]
            );
        }
        // Hiring Partners
        else if (lowerInput.includes('partner') || lowerInput === 'partners' || lowerInput.includes('companies')) {
            addBotMessage(
                "🏢 Our Hiring Partners include leading companies across various sectors:\n\n• Tech Giants & MNCs\n• Fast-growing Startups\n• Product-based Companies\n• Service-based Organizations\n\nOur alumni work at top companies with competitive packages. Want to join them?",
                [
                    { label: '🚀 Apply Now', value: 'apply' },
                    { label: '📞 Book a Call', value: 'call' },
                    { label: '🔙 Main Menu', value: 'menu' }
                ]
            );
        }
        // Apply
        else if (lowerInput.includes('apply') || lowerInput === 'apply' || lowerInput.includes('enroll')) {
            addBotMessage(
                "🎉 Excellent! Let's get you started on your journey to becoming a Full-Stack Developer!\n\nI'll open the application form for you. Fill in your details and our team will contact you within 24 hours.",
                [
                    { label: '📥 Download Brochure First', value: 'download' },
                    { label: '📞 Talk to Counselor', value: 'call' },
                    { label: '🔙 Main Menu', value: 'menu' }
                ]
            );
            setTimeout(() => {
                onApplyClick();
            }, 1000);
        }
        // Download
        else if (lowerInput.includes('download') || lowerInput === 'download' || lowerInput.includes('brochure') || lowerInput.includes('syllabus')) {
            addBotMessage(
                "📥 Great! I'll open the download form for you. Get the complete syllabus and program details delivered to your inbox!",
                [
                    { label: '🚀 Apply Now', value: 'apply' },
                    { label: '📞 Book a Call', value: 'call' },
                    { label: '🔙 Main Menu', value: 'menu' }
                ]
            );
            setTimeout(() => {
                onDownloadClick();
            }, 1000);
        }
        // WhatsApp
        else if (lowerInput.includes('whatsapp') || lowerInput === 'whatsapp') {
            addBotMessage(
                "💬 Great! I'll connect you to our WhatsApp for personalized assistance.\n\nOur team is available to answer all your questions and guide you through the enrollment process!",
                [
                    { label: '🚀 Apply Now', value: 'apply' },
                    { label: '📥 Download Brochure', value: 'download' },
                    { label: '🔙 Main Menu', value: 'menu' }
                ]
            );
            setTimeout(() => {
                const phoneNumber = '918428881144';
                const message = encodeURIComponent('Hi! I want to know more about the program');
                window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
            }, 1000);
        }
        // Book a Call / Talk to Counselor
        else if (lowerInput.includes('call') || lowerInput === 'call' || lowerInput.includes('talk') || lowerInput.includes('speak') || lowerInput.includes('counselor')) {
            setCollectingInfo('name');
            addBotMessage(
                "📞 Excellent! I'd be happy to connect you with our career counselor.\n\nLet me collect a few details to schedule your call.\n\nFirst, may I know your name?"
            );
        }
        // Main Menu
        else if (lowerInput.includes('menu') || lowerInput === 'menu' || lowerInput.includes('start') || lowerInput.includes('help')) {
            addBotMessage(
                "Here's what I can help you with:",
                getWelcomeOptions()
            );
        }
        // Duration/Time
        else if (lowerInput.includes('duration') || lowerInput.includes('long') || lowerInput.includes('months')) {
            addBotMessage(
                "⏱️ The program duration is 6 months of intensive training.\n\n• Full-time: Monday to Friday\n• Live sessions + self-paced learning\n• Flexible weekend batches available\n\nWhat else would you like to know?",
                getFollowUpOptions()
            );
        }
        // Fees/Cost
        else if (lowerInput.includes('fee') || lowerInput.includes('cost') || lowerInput.includes('price') || lowerInput.includes('payment')) {
            addBotMessage(
                "💰 For detailed fee structure and payment options:\n\n• Flexible EMI options available\n• Scholarship opportunities\n• Special discounts for early birds\n\nLet's connect you with our counselor for personalized pricing!",
                [
                    { label: '📞 Book a Call', value: 'call' },
                    { label: '🚀 Apply Now', value: 'apply' },
                    { label: '🔙 Main Menu', value: 'menu' }
                ]
            );
        }
        // Default response
        else {
            addBotMessage(
                "I'm here to help! I can answer questions about:\n\n• Program details & curriculum\n• Eligibility criteria\n• Career benefits & placements\n• Application process\n• Hiring partners\n\nWhat would you like to know?",
                getWelcomeOptions()
            );
        }
    };

    const handleSendMessage = () => {
        if (inputValue.trim()) {
            addUserMessage(inputValue);

            // If we're collecting information, handle it
            if (collectingInfo) {
                handleInfoCollection(inputValue.trim());
            } else {
                handleUserInput(inputValue);
            }

            setInputValue('');
        }
    };

    const handleInfoCollection = (value) => {
        if (collectingInfo === 'name') {
            // Validate name - only letters and spaces, minimum 2 characters
            const nameRegex = /^[a-zA-Z\s]{2,50}$/;
            if (nameRegex.test(value)) {
                setUserInfo(prev => ({ ...prev, name: value }));
                setCollectingInfo('phone');
                addBotMessage("Great! Now, please share your contact number:");
            } else {
                addBotMessage("Please enter a valid name using only letters (no numbers, symbols, or special characters). Your name should be at least 2 characters long.");
            }
        } else if (collectingInfo === 'phone') {
            // Validate phone - exactly 10 digits, no spaces or special characters
            const phoneRegex = /^[0-9]{10}$/;
            const cleanedPhone = value.replace(/\s+/g, '');

            if (phoneRegex.test(cleanedPhone)) {
                setUserInfo(prev => ({ ...prev, phone: cleanedPhone }));
                setCollectingInfo('email');
                addBotMessage("Perfect! Lastly, please provide your email address:");
            } else {
                addBotMessage("Please enter a valid 10-digit mobile number (numbers only, no spaces or special characters). Example: 9876543210");
            }
        } else if (collectingInfo === 'email') {
            // Validate email format
            const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

            if (emailRegex.test(value)) {
                setUserInfo(prev => ({ ...prev, email: value }));
                setCollectingInfo(null);

                // Submit the collected information
                submitUserInfo({ ...userInfo, email: value });

                addBotMessage(
                    `✅ Thank you! I've received your details:\n\n📝 Name: ${userInfo.name}\n📞 Phone: ${userInfo.phone}\n📧 Email: ${value}\n\nOur counselor will contact you within 24 hours. Is there anything else I can help you with?`,
                    getFollowUpOptions()
                );

                // Reset user info
                setUserInfo({ name: '', phone: '', email: '' });
            } else {
                addBotMessage("Please enter a valid email address. Example: yourname@example.com");
            }
        }
    };

    const submitUserInfo = async (info) => {
        try {
            console.log('Submitting user info:', info);

            // Prepare Google Sheets data
            const sheetsData = {
                formType: 'book_call',
                name: info.name,
                phone: info.phone,
                email: info.email
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

            console.log('Data sent to Google Sheets successfully');
        } catch (error) {
            console.error('Error submitting user info:', error);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    const toggleChat = () => {
        setIsOpen(!isOpen);
        setShowNotification(false);
    };

    return (
        <>
            {/* Chat Button */}
            <div style={{
                position: 'fixed',
                bottom: '24px',
                right: '24px',
                zIndex: 9999
            }}>
                {/* Tooltip Popup Message */}
                {!isOpen && showTooltip && (
                    <div style={{
                        position: 'absolute',
                        bottom: '70px',
                        right: '0',
                        background: 'white',
                        padding: '12px 16px',
                        borderRadius: '12px',
                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        minWidth: '200px',
                        animation: 'slideInRight 0.5s ease',
                        zIndex: 10000
                    }}>
                        <div style={{
                            flex: 1,
                            fontSize: '14px',
                            fontWeight: '500',
                            color: 'var(--color-text-main)'
                        }}>
                            👋 How can I help you?
                        </div>
                        <button
                            onClick={() => setShowTooltip(false)}
                            style={{
                                background: 'none',
                                border: 'none',
                                color: 'var(--color-text-muted)',
                                cursor: 'pointer',
                                padding: '4px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: '4px',
                                transition: 'background 0.2s'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.background = '#f0f0f0'}
                            onMouseLeave={(e) => e.currentTarget.style.background = 'none'}
                        >
                            <X size={16} />
                        </button>
                        {/* Tooltip Arrow */}
                        <div style={{
                            position: 'absolute',
                            bottom: '-8px',
                            right: '20px',
                            width: '0',
                            height: '0',
                            borderLeft: '8px solid transparent',
                            borderRight: '8px solid transparent',
                            borderTop: '8px solid white',
                            filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))'
                        }} />
                    </div>
                )}

                {!isOpen && (
                    <button
                        onClick={toggleChat}
                        style={{
                            width: '60px',
                            height: '60px',
                            borderRadius: '50%',
                            background: 'linear-gradient(135deg, var(--color-primary) 0%, #9b6dff 100%)',
                            border: 'none',
                            color: 'white',
                            cursor: 'pointer',
                            boxShadow: '0 4px 20px rgba(120, 77, 245, 0.4)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'all 0.3s ease',
                            position: 'relative',
                            animation: 'pulse 2s infinite',
                            padding: 0,
                            overflow: 'hidden'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'scale(1.1)';
                            e.currentTarget.style.boxShadow = '0 6px 30px rgba(120, 77, 245, 0.6)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'scale(1)';
                            e.currentTarget.style.boxShadow = '0 4px 20px rgba(120, 77, 245, 0.4)';
                        }}
                    >
                        {/* Animated GIF Icon */}
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/4712/4712027.png"
                            alt="Chat"
                            style={{
                                width: '32px',
                                height: '32px',
                                animation: 'wiggle 2s ease-in-out infinite',
                                filter: 'brightness(0) invert(1)'
                            }}
                        />
                        {showNotification && (
                            <span style={{
                                position: 'absolute',
                                top: '0',
                                right: '0',
                                width: '18px',
                                height: '18px',
                                background: '#ff4757',
                                borderRadius: '50%',
                                border: '2px solid white',
                                animation: 'bounce 1s infinite'
                            }} />
                        )}
                    </button>
                )}

                {/* Chat Window */}
                {isOpen && (
                    <div style={{
                        position: 'fixed',
                        bottom: '24px',
                        right: '24px',
                        width: '380px',
                        maxWidth: 'calc(100vw - 48px)',
                        height: '600px',
                        maxHeight: 'calc(100vh - 100px)',
                        background: 'white',
                        borderRadius: '16px',
                        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.15)',
                        display: 'flex',
                        flexDirection: 'column',
                        overflow: 'hidden',
                        animation: 'slideUp 0.3s ease'
                    }}>
                        {/* Header */}
                        <div style={{
                            background: 'linear-gradient(135deg, var(--color-primary) 0%, #9b6dff 100%)',
                            color: 'white',
                            padding: '20px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <div style={{
                                    width: '40px',
                                    height: '40px',
                                    background: 'rgba(255, 255, 255, 0.2)',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <Bot size={24} />
                                </div>
                                <div>
                                    <div style={{ fontWeight: '600', fontSize: '16px' }}>Terv Assistant</div>
                                    <div style={{ fontSize: '12px', opacity: 0.9 }}>Online • Ready to help</div>
                                </div>
                            </div>
                            <button
                                onClick={toggleChat}
                                style={{
                                    background: 'rgba(255, 255, 255, 0.2)',
                                    border: 'none',
                                    color: 'white',
                                    width: '32px',
                                    height: '32px',
                                    borderRadius: '50%',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    transition: 'background 0.2s'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)'}
                                onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'}
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Messages */}
                        <div style={{
                            flex: 1,
                            overflowY: 'auto',
                            padding: '20px',
                            background: '#f8f9fa',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '16px'
                        }}>
                            {messages.map((message, index) => (
                                <div key={index}>
                                    <div style={{
                                        display: 'flex',
                                        justifyContent: message.type === 'user' ? 'flex-end' : 'flex-start',
                                        gap: '8px',
                                        alignItems: 'flex-end'
                                    }}>
                                        {message.type === 'bot' && (
                                            <div style={{
                                                width: '28px',
                                                height: '28px',
                                                background: 'linear-gradient(135deg, var(--color-primary) 0%, #9b6dff 100%)',
                                                borderRadius: '50%',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                color: 'white',
                                                flexShrink: 0
                                            }}>
                                                <Bot size={16} />
                                            </div>
                                        )}
                                        <div style={{
                                            maxWidth: '75%',
                                            padding: '12px 16px',
                                            borderRadius: message.type === 'user' ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
                                            background: message.type === 'user'
                                                ? 'linear-gradient(135deg, var(--color-primary) 0%, #9b6dff 100%)'
                                                : 'white',
                                            color: message.type === 'user' ? 'white' : 'var(--color-text-main)',
                                            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                                            fontSize: '14px',
                                            lineHeight: '1.5',
                                            whiteSpace: 'pre-line'
                                        }}>
                                            {message.text}
                                        </div>
                                        {message.type === 'user' && (
                                            <div style={{
                                                width: '28px',
                                                height: '28px',
                                                background: 'var(--color-secondary)',
                                                borderRadius: '50%',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                color: 'white',
                                                flexShrink: 0
                                            }}>
                                                <User size={16} />
                                            </div>
                                        )}
                                    </div>

                                    {/* Quick Replies */}
                                    {message.quickReplies && index === messages.length - 1 && (
                                        <div style={{
                                            display: 'flex',
                                            flexWrap: 'wrap',
                                            gap: '8px',
                                            marginTop: '12px',
                                            marginLeft: message.type === 'bot' ? '36px' : '0'
                                        }}>
                                            {message.quickReplies.map((option, idx) => (
                                                <button
                                                    key={idx}
                                                    onClick={() => handleQuickReply(option)}
                                                    style={{
                                                        padding: '8px 16px',
                                                        background: 'white',
                                                        border: '1.5px solid var(--color-primary)',
                                                        borderRadius: '20px',
                                                        color: 'var(--color-primary)',
                                                        fontSize: '13px',
                                                        fontWeight: '500',
                                                        cursor: 'pointer',
                                                        transition: 'all 0.2s',
                                                        whiteSpace: 'nowrap'
                                                    }}
                                                    onMouseEnter={(e) => {
                                                        e.currentTarget.style.background = 'var(--color-primary)';
                                                        e.currentTarget.style.color = 'white';
                                                        e.currentTarget.style.transform = 'translateY(-2px)';
                                                    }}
                                                    onMouseLeave={(e) => {
                                                        e.currentTarget.style.background = 'white';
                                                        e.currentTarget.style.color = 'var(--color-primary)';
                                                        e.currentTarget.style.transform = 'translateY(0)';
                                                    }}
                                                >
                                                    {option.label}
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}

                            {/* Typing Indicator */}
                            {isTyping && (
                                <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-end' }}>
                                    <div style={{
                                        width: '28px',
                                        height: '28px',
                                        background: 'linear-gradient(135deg, var(--color-primary) 0%, #9b6dff 100%)',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'white'
                                    }}>
                                        <Bot size={16} />
                                    </div>
                                    <div style={{
                                        padding: '12px 16px',
                                        borderRadius: '16px 16px 16px 4px',
                                        background: 'white',
                                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                                        display: 'flex',
                                        gap: '4px'
                                    }}>
                                        <span style={{
                                            width: '8px',
                                            height: '8px',
                                            background: 'var(--color-primary)',
                                            borderRadius: '50%',
                                            animation: 'typing 1.4s infinite',
                                            animationDelay: '0s'
                                        }} />
                                        <span style={{
                                            width: '8px',
                                            height: '8px',
                                            background: 'var(--color-primary)',
                                            borderRadius: '50%',
                                            animation: 'typing 1.4s infinite',
                                            animationDelay: '0.2s'
                                        }} />
                                        <span style={{
                                            width: '8px',
                                            height: '8px',
                                            background: 'var(--color-primary)',
                                            borderRadius: '50%',
                                            animation: 'typing 1.4s infinite',
                                            animationDelay: '0.4s'
                                        }} />
                                    </div>
                                </div>
                            )}

                            <div ref={messagesEndRef} />
                        </div>

                        {/* WhatsApp Button - Always Visible */}
                        <div style={{
                            padding: '12px 16px',
                            background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
                            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '8px',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease'
                        }}
                            onClick={() => {
                                const phoneNumber = '918428881144';
                                const message = encodeURIComponent('Hi! I want to know more about the program');
                                window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = 'linear-gradient(135deg, #128C7E 0%, #075E54 100%)';
                                e.currentTarget.style.transform = 'scale(1.02)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)';
                                e.currentTarget.style.transform = 'scale(1)';
                            }}
                        >
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="white"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                            </svg>
                            <span style={{
                                color: 'white',
                                fontWeight: '600',
                                fontSize: '14px'
                            }}>
                                Continue on WhatsApp
                            </span>
                        </div>

                        {/* Input */}
                        <div style={{
                            padding: '16px',
                            background: 'white',
                            borderTop: '1px solid #e9ecef',
                            display: 'flex',
                            gap: '8px'
                        }}>
                            <input
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onKeyPress={handleKeyPress}
                                placeholder="Type your message..."
                                style={{
                                    flex: 1,
                                    padding: '12px 16px',
                                    border: '1.5px solid #e9ecef',
                                    borderRadius: '24px',
                                    fontSize: '14px',
                                    outline: 'none',
                                    transition: 'border-color 0.2s'
                                }}
                                onFocus={(e) => e.currentTarget.style.borderColor = 'var(--color-primary)'}
                                onBlur={(e) => e.currentTarget.style.borderColor = '#e9ecef'}
                            />
                            <button
                                onClick={handleSendMessage}
                                disabled={!inputValue.trim()}
                                style={{
                                    width: '44px',
                                    height: '44px',
                                    borderRadius: '50%',
                                    background: inputValue.trim()
                                        ? 'linear-gradient(135deg, var(--color-primary) 0%, #9b6dff 100%)'
                                        : '#e9ecef',
                                    border: 'none',
                                    color: 'white',
                                    cursor: inputValue.trim() ? 'pointer' : 'not-allowed',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    transition: 'all 0.2s',
                                    flexShrink: 0
                                }}
                                onMouseEnter={(e) => {
                                    if (inputValue.trim()) {
                                        e.currentTarget.style.transform = 'scale(1.05)';
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'scale(1)';
                                }}
                            >
                                <Send size={18} />
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* Animations */}
            <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes pulse {
          0%, 100% {
            box-shadow: 0 4px 20px rgba(120, 77, 245, 0.4);
          }
          50% {
            box-shadow: 0 4px 30px rgba(120, 77, 245, 0.6);
          }
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-4px);
          }
        }

        @keyframes typing {
          0%, 60%, 100% {
            transform: translateY(0);
            opacity: 0.7;
          }
          30% {
            transform: translateY(-8px);
            opacity: 1;
          }
        }

        @keyframes wiggle {
          0%, 100% {
            transform: rotate(0deg);
          }
          10%, 30% {
            transform: rotate(-10deg);
          }
          20%, 40% {
            transform: rotate(10deg);
          }
          50% {
            transform: rotate(0deg);
          }
        }

        @media (max-width: 480px) {
          div[style*="width: 380px"] {
            width: calc(100vw - 32px) !important;
            right: 16px !important;
            bottom: 16px !important;
          }
        }
      `}</style>
        </>
    );
};

export default Chatbot;
