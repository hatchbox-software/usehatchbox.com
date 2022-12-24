import { h } from 'preact';
import { motion, useInView } from 'framer-motion';
import '../style/index.css';
import '../style/header.scss';
import '../style/bring-site-to-life.scss';
import '../style/features.scss';
import '../style/pricing.scss';
import '../style/contact.scss';
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

    return (
        <div id="app">
            <div class="section center">
                <div class="content">
                    <div>
                        <motion.div class="header" initial={{ opacity: 0, y: '-10px' }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                            <div class="gradient">
                                <div class="meet">Meet</div>
                                <div class="hatchbox">Hatchbox!</div>
                            </div>
                            <div class="description">
                                Transform your small business with custom website development and lifelong support from Hatchbox
                            </div>
                        </motion.div>
                        <motion.div class="buttons" initial={{ y: '10px', opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
                            <div class="button" onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}>
                                PRICING
                            </div>
                            <div
                                class="button secondary"
                                onClick={() => document.getElementById('learn-more')?.scrollIntoView({ behavior: 'smooth' })}>
                                LEARN MORE
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
                    <div class="section-header">Bring your website to life!</div>
                    <div class="site-to-life-description">
                        Are you ready to take your small business to the next level? Look no further than Hatchbox. A website is an essential tool for
                        reaching and engaging with customers, establishing an online presence, and standing out in a crowded market.
                    </div>
                    <div class="site-to-life-description">
                        Our team is dedicated to developing custom websites for small businesses like yours, tailored to your unique needs and goals.
                        Let us help bring your website to life and boost your business to new heights.
                    </div>
                </div>
            </div>
            <div class="section" id="learn-more">
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
                                    <img src="assets/edit.svg" />
                                </div>
                            </div>
                            <div>
                                <div class="feature-title">Custom site development</div>
                                <div class="feature-description">
                                    Our team will work with you directly to understand your business and create a website that reflects your unique
                                    brand and personality.
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
                                <div class="feature-title">Optimal website performance</div>
                                <div class="feature-description">
                                    We use advanced coding techniques to ensure that your website loads quickly and performs well.
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
                                    We're here for you every step of the way, offering ongoing support to keep your website running smoothly. This
                                    includes the ability to work with a person directly to make updates to your website.
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
                                    We'll provide regular analytics summaries to help you track your website’s performance.
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
                                $<CountUp end={section3IsInView ? 125 : 0} duration={1} />
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
                        part? Our pricing is designed to be cost-effective. Sign up today for a low cost initiation fee of $125 and a low monthly fee
                        of just $50. Lifetime support and quarterly site analytics reviews are included in all plans, and you can cancel at any time.
                    </div>
                    <div class="pricing-description">
                        Don't let a lack of technical expertise or time hold you back. Let Hatchbox help your business reach its full potential.
                    </div>
                </div>
            </div>
            <div class="section">
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
                        hesitate to contact us. To get in touch with us, please email us at:
                    </div>
                    <div class="email">usehatchbox@gmail.com</div>
                    <div class="contact-us-description">
                        We will do our best to respond to your message as soon as possible. We look forward to working with you and helping your small
                        business thrive online!
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
