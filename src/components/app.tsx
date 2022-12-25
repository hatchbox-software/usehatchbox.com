import { h } from 'preact';
import { motion, useInView } from 'framer-motion';
import '../style/index.css';
import '../style/header.scss';
import '../style/bring-site-to-life.scss';
import '../style/features.scss';
import '../style/pricing.scss';
import '../style/contact.scss';
import '../style/preview.scss';
import '../style/roadmap.scss';
import { useRef } from 'react';
import CountUp from 'react-countup';

const App = () => {
    const section1Ref = useRef(null);
    const section1IsInView = useInView(section1Ref, { once: true });

    const section2Ref = useRef(null);
    const section2IsInView = useInView(section2Ref, { once: true });

    const section3Ref = useRef(null);
    const section3IsInView = useInView(section3Ref, { once: true });

    const section4Ref = useRef(null);
    const section4IsInView = useInView(section4Ref, { once: true });

    const section5Ref = useRef(null);
    const section5IsInView = useInView(section5Ref, { once: true });

    const section6Ref = useRef(null);
    const section6IsInView = useInView(section6Ref, { once: true });

    const scrollElementIntoView = (id: string) => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div id="app">
            <motion.div className="navbar" initial={{ opacity: 0, y: '-10px' }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <div onClick={() => scrollElementIntoView('contact-us')}>Contact Us</div>
                <div onClick={() => scrollElementIntoView('roadmap')}>Roadmap</div>
            </motion.div>
            <div class="section center">
                <div class="content">
                    <div>
                        <motion.div class="header" initial={{ opacity: 0, y: '-10px' }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                            <div class="gradient">
                                <div class="meet">Meet</div>
                                <div class="hatchbox">Hatchbox!</div>
                            </div>
                            <div class="description">Transform your business with custom website development and lifelong support from Hatchbox</div>
                        </motion.div>
                        <motion.div class="buttons" initial={{ y: '10px', opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
                            <div class="button" onClick={() => scrollElementIntoView('pricing')}>
                                PRICING
                            </div>
                            <div class="button secondary" onClick={() => scrollElementIntoView('live-preview')}>
                                LIVE PREVIEW
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
            <div class="section light">
                <div
                    class="content center"
                    ref={section1Ref}
                    style={{
                        transform: section1IsInView ? 'none' : 'translateY(50px)',
                        opacity: section1IsInView ? 1 : 0,
                        transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s',
                    }}>
                    <div class="section-header">Bring your site to life!</div>
                    <div class="site-to-life-description">
                        Are you ready to take your business to the next level? Look no further than Hatchbox. A site is an essential tool for reaching
                        and engaging with customers, establishing an online presence, and standing out in a crowded market.
                    </div>
                    <div class="site-to-life-description">
                        Our team is dedicated to developing custom sites for businesses like yours, tailored to your unique needs and goals. Let us
                        help bring your site to life and boost your business to new heights.
                    </div>
                </div>
            </div>
            <div class="section">
                <div
                    class="content center"
                    ref={section2Ref}
                    style={{
                        transform: section2IsInView ? 'none' : 'translateY(50px)',
                        opacity: section2IsInView ? 1 : 0,
                        transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s',
                    }}>
                    <div class="section-header">With Hatchbox, you'll get:</div>
                    <div class="features">
                        <div class="feature">
                            <div>
                                <div class="feature-icon">
                                    <img src="assets/browser.svg" />
                                </div>
                            </div>
                            <div>
                                <div class="feature-title">Custom site development</div>
                                <div class="feature-description">
                                    Our team will work with you directly to understand your business and create a site that reflects your unique brand
                                    and personality.
                                </div>
                            </div>
                        </div>
                        <div class="feature">
                            <div>
                                <div class="feature-icon">
                                    <img src="assets/globe.svg" />
                                </div>
                            </div>
                            <div>
                                <div class="feature-title">Domain name registration and management</div>
                                <div class="feature-description">
                                    We'll help you choose and register a domain name that represents your business, and manage it for you ongoing.
                                </div>
                            </div>
                        </div>
                        <div class="feature">
                            <div>
                                <div class="feature-icon">
                                    <img src="assets/flash.svg" />
                                </div>
                            </div>
                            <div>
                                <div class="feature-title">Optimal site performance</div>
                                <div class="feature-description">
                                    We use advanced coding techniques to ensure that your site loads quickly and performs well.
                                </div>
                            </div>
                        </div>
                        <div class="feature">
                            <div>
                                <div class="feature-icon">
                                    <img src="assets/heart.svg" />
                                </div>
                            </div>
                            <div>
                                <div class="feature-title">Lifetime support</div>
                                <div class="feature-description">
                                    We're here for you every step of the way, offering ongoing support to keep your site running smoothly. This
                                    includes the ability to work with a person directly to make updates to your site.
                                </div>
                            </div>
                        </div>
                        <div class="feature">
                            <div>
                                <div class="feature-icon">
                                    <img src="assets/bar.svg" />
                                </div>
                            </div>
                            <div>
                                <div class="feature-title">Quarterly site analytics</div>
                                <div class="feature-description">
                                    We'll provide regular analytics summaries to help you track your site’s performance.
                                </div>
                            </div>
                        </div>
                        <div class="feature">
                            <div>
                                <div class="feature-icon">
                                    <img src="assets/edit.svg" />
                                </div>
                            </div>
                            <div>
                                <div class="feature-title">Optional in-house writing</div>
                                <div class="feature-description">
                                    We offer in-house writing services to help bring your brand's voice and message across on your site. Simply
                                    provide us with the general idea or theme for the content, and our team will take it from there.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="section light" id="pricing">
                <div
                    class="content center"
                    ref={section3Ref}
                    style={{
                        transform: section3IsInView ? 'none' : 'translateY(50px)',
                        opacity: section3IsInView ? 1 : 0,
                        transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s',
                    }}>
                    <div class="section-header">Pricing</div>
                    <div class="pricing-header">
                        <div class="pricing-item">
                            <div class="pricing-value">
                                $<CountUp end={section3IsInView ? 150 : 0} duration={1} />
                            </div>
                            <div class="pricing-type">Initiation</div>
                        </div>
                        <div class="pricing-item">
                            <div class="pricing-value">
                                $<CountUp end={section3IsInView ? 50 : 0} duration={1} />
                            </div>
                            <div class="pricing-type">Per Month</div>
                        </div>
                    </div>
                    <div class="pricing-description">
                        Our main priority is to help businesses succeed with the skills and expertise we have gained over the years. And the best
                        part? Our pricing is designed to be cost-effective. Get started for a low cost initiation fee of $150 and a low monthly fee of
                        just $50. Lifetime support is included in all plans, and you can cancel at any time.
                    </div>
                    <div class="pricing-description">
                        Don't let a lack of technical expertise or time hold you back. Let Hatchbox help your business reach its full potential.
                    </div>
                </div>
            </div>
            <div class="section" id="roadmap">
                <div
                    class="content center"
                    ref={section6Ref}
                    style={{
                        transform: section6IsInView ? 'none' : 'translateY(50px)',
                        opacity: section6IsInView ? 1 : 0,
                        transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s',
                    }}>
                    <div class="section-header">Roadmap</div>
                    <div class="steps">
                        <div class="step">
                            <div class="number">1</div>
                            <div>
                                <div class="steps-title">Initial consultation</div>
                                <div class="steps-description">
                                    We'll have a conversation to understand your business, target audience, and goals for your website.
                                </div>
                            </div>
                        </div>
                        <div class="step">
                            <div class="number">2</div>
                            <div>
                                <div class="steps-title">Gathering content and assets</div>
                                <div class="steps-description">
                                    We'll work with you to gather all of the necessary content and assets for your website, including text, images,
                                    and any other media. We'll provide templates or guidelines to help you organize your content.
                                </div>
                            </div>
                        </div>
                        <div class="step">
                            <div class="number">3</div>
                            <div>
                                <div class="steps-title">Design and development</div>
                                <div class="steps-description">
                                    We'll build your website based on your content and the templates provided. We'll make any necessary revisions or
                                    adjustments based on your feedback.
                                </div>
                            </div>
                        </div>
                        <div class="step">
                            <div class="number">4</div>
                            <div>
                                <div class="steps-title">Testing and launch</div>
                                <div class="steps-description">
                                    We'll test your website to ensure that it is functioning correctly and is optimized for SEO. Once you have
                                    approved the website, we'll launch it and make it live for the public to access.
                                </div>
                            </div>
                        </div>
                        <div class="step">
                            <div class="number">5</div>
                            <div>
                                <div class="steps-title">Ongoing support and maintenance</div>
                                <div class="steps-description">
                                    We'll provide ongoing support and maintenance for your website, including handling any updates or changes
                                    requested by you. We'll also offer quarterly site analytic reviews to help you track the performance of your
                                    website and identify any areas for improvement.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="section light" id="live-preview">
                <div
                    class="content center"
                    ref={section5Ref}
                    style={{
                        transform: section5IsInView ? 'none' : 'translateY(50px)',
                        opacity: section5IsInView ? 1 : 0,
                        transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s',
                    }}>
                    <div class="section-header">Live Previews</div>
                    <motion.div
                        class="preview"
                        onClick={() => window.open('https://preview-forkd.vercel.app/')}
                        whileHover={{
                            scale: 1.05,
                            transition: { duration: 0.5 },
                        }}>
                        <img src="assets/preview.png" alt="preview" />
                        <div class="preview-title">Fork'd Preview Site</div>
                        <div class="preview-description">
                            To see a live preview of a small restaurant site that showcases all of our available features, just click here!
                        </div>
                    </motion.div>
                </div>
            </div>
            <div class="section" id="contact-us">
                <div
                    class="content center"
                    ref={section4Ref}
                    style={{
                        transform: section4IsInView ? 'none' : 'translateY(50px)',
                        opacity: section4IsInView ? 1 : 0,
                        transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s',
                    }}>
                    <div class="section-header">Contact Us</div>
                    <div class="contact-us-description">
                        Thank you for your interest in Hatchbox! If you have any questions or would like to learn more about our services, don't
                        hesitate to contact us. Please email us at:
                    </div>
                    <div class="email">usehatchbox@gmail.com</div>
                    <div class="contact-us-description">
                        We will do our best to respond to your message as soon as possible. We look forward to working with you and helping your
                        business thrive online!
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
