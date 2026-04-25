import styles from './Navbar.module.css';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, BrainCircuit } from 'lucide-react';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.navContainer}`}>
        <Link to="/" className={styles.logo} onClick={closeMenu}>
          <BrainCircuit size={32} color="var(--orange)" />
          <div className={styles.logoText}>
            <span className={styles.brain}>Brain Bloom</span>
            <span className={styles.academy}>ACADEMY</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <ul className={`${styles.navLinks} ${isOpen ? styles.active : ''}`}>
          <li>
            <Link to="/" className={location.pathname === '/' ? styles.activeLink : ''} onClick={closeMenu}>Home</Link>
          </li>
          <li>
            <Link to="/about" className={location.pathname === '/about' ? styles.activeLink : ''} onClick={closeMenu}>About Us</Link>
          </li>
          <li>
            <Link to="/courses" className={location.pathname === '/courses' ? styles.activeLink : ''} onClick={closeMenu}>Courses</Link>
          </li>
          <li>
            <Link to="/contact" className={location.pathname === '/contact' ? styles.activeLink : ''} onClick={closeMenu}>Contact</Link>
          </li>
          <li className={styles.mobileOnly}>
            <a href="tel:9592549240" className="btn btn-orange">Call Now</a>
          </li>
        </ul>

        {/* Desktop Call CTA */}
        <div className={styles.ctaContainer}>
            <a href="tel:9592549240" className={`${styles.callBtn} btn btn-orange`}>
                Admission Open
            </a>
        </div>

        {/* Hamburger Menu */}
        <button className={styles.mobileToggle} onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
