import styles from './Footer.module.css';
import { MapPin, Phone, Mail, Clock, BrainCircuit } from 'lucide-react';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        
        {/* Brand Section */}
        <div className={styles.footerSection}>
          <div className={styles.logo}>
            <BrainCircuit size={40} color="var(--orange)" />
            <div className={styles.logoText}>
              <span className={styles.brain}>Brain Bloom</span>
              <span className={styles.academy}>ACADEMY</span>
            </div>
          </div>
          <p className={styles.tagline}>Where Young Minds Blossom into Brilliance....</p>
          <div className={styles.socials}>
            {/* Add social placeholders if needed */}
          </div>
        </div>

        {/* Quick Links */}
        <div className={styles.footerSection}>
          <h3 className={styles.heading}>Quick Links</h3>
          <ul className={styles.links}>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/courses">Courses</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Classes */}
        <div className={styles.footerSection}>
          <h3 className={styles.heading}>Our Classes</h3>
          <ul className={styles.links}>
            <li>6th to 8th (All Subjects)</li>
            <li>9th to 10th (Science, Math, English, SST)</li>
            <li>11th to 12th (Non Medical)</li>
            <li>11th to 12th (Commerce & Humanities)</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className={styles.footerSection}>
          <h3 className={styles.heading}>Contact Us</h3>
          <ul className={styles.contactInfo}>
            <li>
              <Phone size={18} className={styles.icon} />
              <div>
                <a href="tel:9592549240">95925-49240</a> <br/>
                <a href="tel:9888395469">98883-95469</a>
              </div>
            </li>
            <li>
              <MapPin size={24} className={styles.iconLocation} />
              <span>Sec. 119, Garg House No. 29, Ward No. 1, Gali No. 2, Near Sun Tower, S.A.S Nagar Mohali (160055)</span>
            </li>
          </ul>
        </div>

      </div>
      
      <div className={styles.bottomBar}>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Brain Bloom Academy. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
