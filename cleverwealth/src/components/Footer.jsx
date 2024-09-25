import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';



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

    const waveStyle = {
        position: 'absolute',
        top: '-100px',
        left: '0',
        width: '100%',
        height: '100px',
        background: '#0ff url(/waveImg.png)',
        backgroundSize: '1000px 100px',
    };

    const wave1Style = {
        ...waveStyle,
        zIndex: 1000,
        opacity: 1,
        bottom: 0,
        animation: 'animateWave 4s linear infinite',
    };

    const wave2Style = {
        ...waveStyle,
        zIndex: 999,
        opacity: 0.5,
        bottom: '10px',
        animation: 'animateWave_02 4s linear infinite',
    };

    const wave3Style = {
        ...waveStyle,
        zIndex: 998,
        opacity: 0.3,
        bottom: '25px',
        animation: 'animateWave_03 6s linear infinite',
    };

    const wave4Style = {
        ...waveStyle,
        zIndex: 997,
        opacity: 0.2,
        bottom: '20px',
        animation: 'animateWave_04 8s linear infinite',
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

            <div className="waves" style={{ position: 'relative', height: '150px', overflow: 'hidden' }}>
                <div style={wave1Style} />
                <div style={wave2Style} />
                <div style={wave3Style} />
                <div style={wave4Style} />
            </div>

            {/* Animation Styles */}
            <style>
                {`
                    @keyframes animateWave {
                        0% {
                            background-position-x: 1000px;
                        }
                        100% {
                            background-position-x: 0px;
                        }
                    }

                    @keyframes animateWave_02 {
                        0% {
                            background-position-x: 0px;
                        }
                        100% {
                            background-position-x: 1000px;
                        }
                    }

                    @keyframes animateWave_03 {
                        0% {
                            background-position-x: 500px;
                        }
                        100% {
                            background-position-x: -500px;
                        }
                    }

                    @keyframes animateWave_04 {
                        0% {
                            background-position-x: 0px;
                        }
                        100% {
                            background-position-x: 500px;
                        }
                    }
                `}
            </style>
        </div>
    );
};

export default Footer;
