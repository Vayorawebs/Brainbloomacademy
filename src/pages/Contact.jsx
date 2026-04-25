import styles from './Contact.module.css';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for contacting Brain Bloom Academy! We will reach out soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className={styles.contactPage}>
      {/* Header */}
      <section className={styles.header}>
        <div className="container">
          <h1 className="animate-fade-in">Get In Touch</h1>
          <p className="animate-fade-in">Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
        </div>
      </section>

      <section className={styles.contactSection}>
        <div className={`container ${styles.contactContainer}`}>
          
          {/* Info Card */}
          <div className={styles.infoCard}>
            <h2>Contact Information</h2>
            <p className={styles.infoSubtitle}>Fill up the form and our team will get back to you within 24 hours.</p>

            <div className={styles.infoItems}>
              <div className={styles.infoItem}>
                <Phone className={styles.icon} size={24} />
                <div>
                  <a href="tel:9592549240">95925-49240</a><br/>
                  <a href="tel:9888395469">98883-95469</a>
                </div>
              </div>

              <div className={styles.infoItem}>
                <MapPin className={styles.icon} size={28} />
                <p>Sec. 119, Garg House No. 29, Ward No. 1, Gali No. 2, Near Sun Tower, S.A.S Nagar Mohali (160055)</p>
              </div>

              <div className={styles.infoItem}>
                <Clock className={styles.icon} size={24} />
                <div>
                  <p>Mon-Sat: 4:00 PM - 9:30 PM</p>
                  <p>Sunday: Closed (Or by appointment)</p>
                </div>
              </div>
            </div>

            <div className={styles.decorativeCircle1}></div>
            <div className={styles.decorativeCircle2}></div>
          </div>

          {/* Form */}
          <div className={styles.formContainer}>
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.inputGroup}>
                <label htmlFor="name">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                  placeholder="John Doe"
                />
              </div>

              <div className={styles.formRow}>
                <div className={styles.inputGroup}>
                  <label htmlFor="email">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required 
                    placeholder="john@example.com"
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="phone">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    value={formData.phone}
                    onChange={handleChange}
                    required 
                    placeholder="+91 99999-99999"
                  />
                </div>
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  required 
                  rows="5"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button type="submit" className={`btn btn-orange ${styles.submitBtn}`}>
                Send Message <Send size={18} />
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* Map Section */}
      <section className={styles.mapSection}>
        <iframe 
          src="https://www.google.com/maps?q=S.A.S+Nagar+Mohali&output=embed" 
          width="100%" 
          height="450" 
          style={{border: 0}} 
          allowFullScreen="" 
          loading="lazy" 
          title="Academy Location"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;
