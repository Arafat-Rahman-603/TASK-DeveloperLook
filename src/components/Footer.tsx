"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import RotatingBadge from "./RotatingBadge";

const Logo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" height="100%" viewBox="0 0 208 84" fill="none">
    <path d="M207.793 18.4091V68.8219C207.793 77.2049 200.998 84 192.615 84H7.46524C3.34207 84 0 80.6579 0 76.5348V37.5951C0 33.8732 2.69331 30.6933 6.36831 30.0829L186.384 0.251801C197.596 -1.60491 207.793 7.04266 207.793 18.4049" fill="#000000" />
    <path d="M188.876 80.0646H55.9061V25.8317L186.618 5.34814C195.454 3.96521 203.444 10.7945 203.444 19.7408V65.4969C203.444 73.5427 196.922 80.0646 188.876 80.0646Z" fill="white" />
    <path d="M71.2635 26.8177V47.2585L67.5415 47.5957V27.3683L59.9312 28.4866V76.7781L67.5415 76.7055V56.478L71.2635 56.2305V76.6714L79.3818 76.5945V25.6226L71.2635 26.8177Z" fill="black" />
    <path d="M94.7092 23.3646L92.5452 42.7512L92.4427 44.4116L92.2378 44.4329L92.1354 42.7939L90.0055 24.0561L81.2256 25.3494L87.9482 58.2622V76.5134L96.8391 76.4323V57.75L104.142 21.9731L94.7092 23.3646Z" fill="black" />
    <path d="M159.835 25.0207V13.7695L135.377 17.3719V76.0695L159.835 75.839V64.5921L147.179 65.0274V51.2238L159.101 50.4384V39.2854L147.179 40.3695V26.5701L159.835 25.0207Z" fill="black" />
    <path d="M120.844 48.8506L116.226 49.2006V29.3018L120.844 28.7256V48.8506ZM105.943 21.7085V76.347L116.149 76.2488V58.5396L120.882 58.2878C127.071 57.9591 131.92 52.8457 131.92 46.6482V31.3805C131.92 24.2695 125.603 18.8146 118.565 19.8518L105.943 21.7128V21.7085Z" fill="black" />
    <path d="M182.598 64.7713L176.494 64.9677V21.7768L182.598 21.0128V64.7713ZM162.993 13.3042V75.8091L185.769 75.5957C192.163 75.536 197.315 70.3372 197.315 63.9433V21.7469C197.315 14.636 190.998 9.18108 183.959 10.2183L162.989 13.3085L162.993 13.3042Z" fill="black" />
    <path d="M21.5464 80.0646H34.7482V70.4738L27.1336 70.6957V59.8585L34.2873 59.4018V49.8835L27.1336 50.5494V39.7079L34.7482 38.739V29.1481L21.5464 31.214V80.0646Z" fill="white" />
    <path d="M36.7714 28.828V38.4829L42.03 37.8128V80.0646H48.3812V37.0061L54.0239 36.289V26.1262L36.7714 28.828Z" fill="white" />
    <path d="M14.2348 51.7488V41.2829L8.49394 42.0128V71.5152L14.2348 71.3488V62.6969L10.7092 62.8976V54.5146L19.5616 53.7634V80.0604H14.2391V77.3159L13.3128 78.225C12.1134 79.4031 10.5 80.0604 8.8226 80.0604H7.90491C5.48905 80.0604 3.53418 78.1012 3.53418 75.6896V39.0207C3.53418 36.1524 5.62563 33.7067 8.45978 33.2628L14.5165 32.3152C17.1671 31.9012 19.5659 33.95 19.5659 36.6305V51.2494L14.2433 51.7445L14.2348 51.7488Z" fill="white" />
  </svg>
);

const navLinks = [
  { href: "#expertises", label: "Expertises" },
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const topRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  const isTopInView = useInView(topRef, { once: true, margin: "-60px" });
  const isBottomInView = useInView(bottomRef, { once: true, margin: "-60px" });

  return (
    <footer className="footer-v2" id="contact" ref={footerRef}>
      
      {/* Top CTA Area */}
      <motion.div
        ref={topRef}
        className="footer-top-cta"
        initial={{ opacity: 0, y: 30 }}
        animate={isTopInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <h2 className="footer-huge-title">Let&apos;s Get Hyped!</h2>
        
        <div className="footer-action-buttons">
          <button className="btn-primary">
            Mail ons direct
            <span className="btn-squircle-icon">
              <svg className="arrow-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </span>
          </button>
          
          <button className="btn-primary">
            Get Results
            <span className="btn-squircle-icon">
              <svg className="arrow-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8.5 14.5A2.5 2.5 0 0011 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 11-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 002.5 2.5z" />
              </svg>
            </span>
          </button>
        </div>
      </motion.div>

      {/* Bottom Slanted Area */}
      <div className="footer-bottom-slanted" ref={bottomRef}>
        
        {/* Rotating Badge strictly positioned hugging the boundary line */}
        <div className="footer-badge-wrapper">
          <RotatingBadge />
        </div>

        <motion.div
          className="footer-bottom-content-wrapper"
          initial={{ opacity: 0 }}
          animate={isBottomInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Left: Graphic Logo */}
          <div className="footer-logo-block">
            <div className="footer-graphic-logo">
              <Logo />
            </div>
          </div>

          {/* Right Area: Nav and Contact Grouped Together in 2 Columns */}
          <div className="footer-right-content-group">
            
            {/* Column A: Nav and Social */}
            <div className="footer-nav-col">
              <div className="footer-pill-nav">
                {navLinks.map((link) => (
                  <a key={link.href} href={link.href} className="footer-pill-btn">
                    {link.label}
                  </a>
                ))}
              </div>

              <div className="footer-social-row">
                <span className="footer-follow-text">Follow us</span>
                <div className="footer-social-icons">
                  <a href="#" aria-label="LinkedIn" className="social-circle">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a href="#" aria-label="TikTok" className="social-circle">
                    <svg viewBox="0 0 28 28" fill="currentColor">
                       <path d="M16.536 2.6c0 2.21-1.3 4.29-3.25 5.2V11.7c4.16 0 6.63-2.6 6.63-6.63v-2.47h-3.38z" />
                       <path d="M12.636 21.06c-1.82 0-3.38-1.56-3.38-3.38 0-1.82 1.56-3.38 3.38-3.38.39 0 .78.13 1.17.26v-3.64c-.39-.13-.78-.13-1.17-.13-3.77 0-6.89 3.12-6.89 6.89 0 3.77 3.12 6.89 6.89 6.89 1.56 0 2.86-.52 3.9-1.43v-4.03c-.91.91-2.34 1.56-3.9 1.56z" />
                       <path d="M15.236 2.6h-3.51v16.25c0 1.04-.91 1.95-1.95 1.95s-1.95-.91-1.95-1.95.91-1.95 1.95-1.95v-3.51c-2.99 0-5.46 2.47-5.46 5.46s2.47 5.46 5.46 5.46 5.46-2.47 5.46-5.46v-10.4c1.17 1.04 2.73 1.56 4.42 1.56V6.5c-2.34 0-4.16-1.56-4.42-3.9z" />
                    </svg>
                  </a>
                  <a href="#" aria-label="Instagram" className="social-circle">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                  <a href="#" aria-label="YouTube" className="social-circle">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="footer-micro-texts-left">
                <span>© 2025 Get Hyped</span>
                <span className="design-by">© Design by Dylan</span>
              </div>
            </div>

            {/* Column B: Contact Information */}
            <div className="footer-contact-col">
              <div className="contact-group">
                <h4>Contact</h4>
                <p>info@gethyped.nl</p>
                <p>+31 6 1533 7496</p>
              </div>
              <div className="contact-group">
                <h4>Adres</h4>
                <p>Beltrumsestraat 6,</p>
                <p>7141 AL Groenlo</p>
              </div>
              
              <div className="footer-micro-texts-right">
                <span>Privacyvoorwaarden</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
