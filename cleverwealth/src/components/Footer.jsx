import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import waveImg from '../assets/waveImg.png';
import { motion } from 'framer-motion';

const Footer = () => {
    // Define inline styles as a JavaScript object
    const footerStyle = {
        position: 'relative',
        width: '100%',
        background: '#f5f5f5',
        minHeight: '150px',
        padding: '20px',
        textAlign: 'center',
        overflow: 'hidden', // Ensures waves don't overflow the footer
    };

    const socialIcon = {
        fontSize: '24px',
        margin: '0 10px',
        display: 'inline-block',
        transition: '0.5s',
    };

    const linkStyle = {
        fontSize: '20px',
        margin: '0 15px',
        textDecoration: 'none',
        color: 'black',
        transition: 'color 0.3s ease',
    };

    const footerContainerStyle = {
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        backgroundColor: 'green', // Green background color
        background: 'linear-gradient(green, rgba(144, 238, 144, 0.5))', // Green to light green gradient
    };

    // Inline style for the footer (waves container)
    const footerStyles = {
        position: 'relative',
        width: '100%',
        height: '100px',
        overflow: 'hidden', // Prevents waves from overflowing
    };

    // Inline style for each wave div
    const waveStyle = (zIndex) => ({
        position: 'absolute',
        left: 0,
        bottom: 0,
        width: '100%',
        height: '100px',
        backgroundImage: `url(${waveImg})`,
        backgroundSize: '1000px 100px',
        zIndex: zIndex,
    });

    // Framer Motion animations for waves
    const waveAnimation1 = {
        hidden: { backgroundPositionX: '0px', opacity: 0.6 },
        visible: {
            backgroundPositionX: '1000px',
            transition: { repeat: Infinity, ease: 'linear', duration: 25 },
        },
    };

    const waveAnimation2 = {
        hidden: { backgroundPositionX: '0px', opacity: 0.5 },
        visible: {
            backgroundPositionX: '-1000px',
            transition: { repeat: Infinity, ease: 'linear', duration: 15 },
        },
    };

    const waveAnimation3 = {
        hidden: { backgroundPositionX: '0px', opacity: 0.4 },
        visible: {
            backgroundPositionX: '1000px',
            transition: { repeat: Infinity, ease: 'linear', duration: 10 },
        },
    };

    const waveAnimation4 = {
        hidden: { backgroundPositionX: '0px', opacity: 0.3 },
        visible: {
            backgroundPositionX: '-1000px',
            transition: { repeat: Infinity, ease: 'linear', duration: 5 },
        },
    };


    return (
        <div style={footerStyle}>
            <div className="footericons">
                <FaFacebookF
                    style={socialIcon}
                    onMouseOver={(e) => {
                        e.currentTarget.style.color = 'blue';
                        e.currentTarget.style.transform = 'translateY(-10px)'; // Move on hover
                    }}
                    onMouseOut={(e) => {
                        e.currentTarget.style.color = 'black';
                        e.currentTarget.style.transform = 'translateY(0)'; // Reset on hover out
                    }}
                />
                <FaTwitter
                    style={socialIcon}
                    onMouseOver={(e) => {
                        e.currentTarget.style.color = '#61dafb';
                        e.currentTarget.style.transform = 'translateY(-10px)';
                    }}
                    onMouseOut={(e) => {
                        e.currentTarget.style.color = 'black';
                        e.currentTarget.style.transform = 'translateY(0)';
                    }}
                />
                <FaLinkedinIn
                    style={socialIcon}
                    onMouseOver={(e) => {
                        e.currentTarget.style.color = 'blue';
                        e.currentTarget.style.transform = 'translateY(-10px)';
                    }}
                    onMouseOut={(e) => {
                        e.currentTarget.style.color = 'black';
                        e.currentTarget.style.transform = 'translateY(0)';
                    }}
                />
                <FaInstagram
                    style={socialIcon}
                    onMouseOver={(e) => {
                        e.currentTarget.style.color = 'pink';
                        e.currentTarget.style.transform = 'translateY(-10px)';
                    }}
                    onMouseOut={(e) => {
                        e.currentTarget.style.color = 'black';
                        e.currentTarget.style.transform = 'translateY(0)';
                    }}
                />
            </div>

            {/* Navigation Links */}
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                <a
                    href="/product"
                    style={linkStyle}
                    onMouseOver={(e) => (e.currentTarget.style.color = 'green')}
                    onMouseOut={(e) => (e.currentTarget.style.color = 'black')}
                >
                    Product
                </a>
                <a
                    href="/solutions"
                    style={linkStyle}
                    onMouseOver={(e) => (e.currentTarget.style.color = 'green')}
                    onMouseOut={(e) => (e.currentTarget.style.color = 'black')}
                >
                    Solutions
                </a>
                <a
                    href="/usecases"
                    style={linkStyle}
                    onMouseOver={(e) => (e.currentTarget.style.color = 'green')}
                    onMouseOut={(e) => (e.currentTarget.style.color = 'black')}
                >
                    Use Cases
                </a>
                <a
                    href="/pricing"
                    style={linkStyle}
                    onMouseOver={(e) => (e.currentTarget.style.color = 'green')}
                    onMouseOut={(e) => (e.currentTarget.style.color = 'black')}
                >
                    Pricing
                </a>
                <a
                    href="/company"
                    style={linkStyle}
                    onMouseOver={(e) => (e.currentTarget.style.color = 'green')}
                    onMouseOut={(e) => (e.currentTarget.style.color = 'black')}
                >
                    Company
                </a>
            </div>

            <p style={{ marginTop: '20px' }}>&copy; 2024 Your Website. All Rights Reserved.</p>


        </div>
    );
};

export default Footer;
