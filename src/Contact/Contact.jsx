import styles from './Contact.module.css'
import { 
    FaEnvelope, FaPhone, FaMapMarkerAlt, 
    FaGithub, FaLinkedin, FaInstagram,
    FaPaperPlane, FaUser, FaComment
} from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { useState } from 'react'

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // Handle form submission here
        console.log('Form submitted:', formData)
        alert('Message sent successfully!')
        setFormData({ name: '', email: '', message: '' })
    }

    return (
        <section className={styles.contact} id="contact">
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>Get In Touch</h2>
                <p className={styles.sectionSubtitle}>Let's work together</p>

                <div className={styles.contactWrapper}>
                    {/* Left Side - Contact Info */}
                    <div className={styles.contactInfo}>
                        <h3>Send me a message</h3>
                        <p className={styles.infoDescription}>
                            Fill out the form and I'll get back to you shortly.
                        </p>
                        <p className={styles.infoDescription}>
                            Have a project in mind or want to discuss an opportunity? I'm
                            always open to new connections and collaborations.
                        </p>

                        <div className={styles.contactDetails}>
                            <div className={styles.contactItem}>
                                <div className={styles.iconWrapper}>
                                    <MdEmail className={styles.contactIcon} />
                                </div>
                                <div>
                                    <h4>Email</h4>
                                    <a href="mailto:vipuradevnak@gmail.com">vipuradevnak@gmail.com</a>
                                </div>
                            </div>

                            <div className={styles.contactItem}>
                                <div className={styles.iconWrapper}>
                                    <FaPhone className={styles.contactIcon} />
                                </div>
                                <div>
                                    <h4>Phone</h4>
                                    <a href="tel:+94703960848">+94 70 396 0848</a>
                                </div>
                            </div>

                            <div className={styles.contactItem}>
                                <div className={styles.iconWrapper}>
                                    <FaMapMarkerAlt className={styles.contactIcon} />
                                </div>
                                <div>
                                    <h4>Location</h4>
                                    <span>Pannipitiya, Sri Lanka</span>
                                </div>
                            </div>
                        </div>

                        <div className={styles.socialLinks}>
                            <a href="#" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                                <FaGithub />
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                                <FaLinkedin />
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                                <FaInstagram />
                            </a>
                        </div>
                    </div>

                    {/* Right Side - Contact Form */}
                    <div className={styles.contactForm}>
                        <form onSubmit={handleSubmit}>
                            <div className={styles.formGroup}>
                                <div className={styles.inputWrapper}>
                                    <FaUser className={styles.inputIcon} />
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Your Name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className={styles.formGroup}>
                                <div className={styles.inputWrapper}>
                                    <FaEnvelope className={styles.inputIcon} />
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Your Email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className={styles.formGroup}>
                                <div className={styles.textareaWrapper}>
                                    <FaComment className={styles.textareaIcon} />
                                    <textarea
                                        name="message"
                                        placeholder="Your Message"
                                        rows="5"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                </div>
                            </div>

                            <button type="submit" className={styles.submitBtn}>
                                <FaPaperPlane /> Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact