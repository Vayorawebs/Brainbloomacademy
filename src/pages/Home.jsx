import styles from './Home.module.css';
import { Link } from 'react-router-dom';
import { CheckCircle, BookOpen, Users, Brain, Activity, FileText, Star, Award, TrendingUp, ShieldCheck } from 'lucide-react';
import aboutTeacherImg from '../assets/images/about_teacher_1777145581279.png';

const Home = () => {
  return (
    <div className={styles.home}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className={`container ${styles.heroContent} animate-fade-in`}>
          <div className={styles.badge}>Admission Open for Current Term</div>
          <h1 className={styles.title}>Where Young Minds Blossom into Brilliance</h1>
          <p className={styles.subtitle}>Empowering students from Class 6 to 12 with top-tier education, transforming potential into performance through scientifically designed curricula and expert mentorship.</p>
          <div className={styles.heroButtons}>
            <Link to="/contact" className="btn btn-orange">Demo Classes Available</Link>
            <Link to="/courses" className="btn btn-white">View Our Programs</Link>
          </div>
          <div className={styles.classTypes}>
            <span className={styles.glowText}>Premium Online & Offline Classes Available</span>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.statsSection}>
        <div className="container">
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <Users size={32} />
              <h3>1500+</h3>
              <p>Happy Students</p>
            </div>
            <div className={styles.statCard}>
              <Award size={32} />
              <h3>50+</h3>
              <p>Top Achievers</p>
            </div>
            <div className={styles.statCard}>
              <TrendingUp size={32} />
              <h3>100%</h3>
              <p>Score Improvement</p>
            </div>
            <div className={styles.statCard}>
              <ShieldCheck size={32} />
              <h3>10+</h3>
              <p>Years of Excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Overview */}
      <section className={styles.aboutSnippet}>
        <div className={`container ${styles.snippetContainer}`}>
          <div className={styles.snippetText}>
            <h2 className="text-maroon">Empowering The Leaders of Tomorrow</h2>
            <div className={styles.divider}></div>
            <p>At Brain Bloom Academy, we don't just teach; we inspire. Guided by a philosophy of continuous intellectual growth, our seasoned educators employ modern pedagogical strategies to simplify complex concepts.</p>
            <p>We are a highly sought-after tuition center in Mohali, renowned for taking students from foundational struggles to top-board achievements. Our holistic environment ensures every child finds their own path to excellence.</p>
            <Link to="/about" className={styles.learnMore}>Read Our Story →</Link>
          </div>
          <div className={styles.snippetImage}>
             <img src={aboutTeacherImg} alt="Happy Teacher" />
          </div>
        </div>
      </section>

      {/* Key Points Section */}
      <section className={styles.keyPoints}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className="text-maroon">Why Choose Brain Bloom?</h2>
            <p className={styles.sectionDesc}>We provide a proven, results-driven educational framework tailored to your child's cognitive needs.</p>
            <div className={styles.dividerCenter}></div>
          </div>
          
          <div className={styles.pointsGrid}>
            <div className={styles.pointCard}>
              <CheckCircle className={styles.pointIcon} size={40} />
              <h3>Quality Education</h3>
              <p>Experienced faculty focusing on deep conceptual clarity rather than short-term memorization.</p>
            </div>
            <div className={styles.pointCard}>
              <BookOpen className={styles.pointIcon} size={40} />
              <h3>Full Syllabus Coverage</h3>
              <p>Comprehensive, timeline-driven curriculum planning ensuring total mastery well before exams.</p>
            </div>
            <div className={styles.pointCard}>
              <Users className={styles.pointIcon} size={40} />
              <h3>Personal Attention</h3>
              <p>Optimized small batches ensuring custom learning paths and immediate feedback for each student.</p>
            </div>
            <div className={styles.pointCard}>
              <Activity className={styles.pointIcon} size={40} />
              <h3>Regular Test Analysis</h3>
              <p>Rigorous weekly and monthly assessments paired with advanced psychological performance tracking.</p>
            </div>
            <div className={styles.pointCard}>
              <FileText className={styles.pointIcon} size={40} />
              <h3>All Notes Provided</h3>
              <p>Professionally structured, concise study materials that distill textbooks into highly usable data.</p>
            </div>
            <div className={styles.pointCard}>
              <Brain className={styles.pointIcon} size={40} />
              <h3>Special Doubt Sessions</h3>
              <p>Dedicated 1-on-1 problem-solving slots designed strictly to obliterate confusion.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Classes Overview */}
      <section className={styles.classesOverview}>
        <div className="container">
          <div className={styles.classesGrid}>
            <div className={styles.classCard}>
              <div className={styles.classBadge}>6th to 8th</div>
              <h3>Foundation Building</h3>
              <p className={styles.subjects}>ALL SUBJECTS</p>
              <p className={styles.classDesc}>Securing fundamental concepts required for future advanced academics.</p>
            </div>
            <div className={styles.classCard}>
              <div className={styles.classBadge}>9th to 10th</div>
              <h3>Board Preparation</h3>
              <p className={styles.subjects}>SCIENCE, MATH, ENGLISH, SST</p>
              <p className={styles.classDesc}>Intense, highly strategized coaching for perfect 10 CGPA / Top scores.</p>
            </div>
            <div className={styles.classCard}>
              <div className={styles.classBadge}>11th to 12th</div>
              <h3>Specialized Streams</h3>
              <p className={styles.subjects}>MEDICAL, NON-MEDICAL, COMMERCE, HUMANITIES</p>
              <p className={styles.classDesc}>Expert-led direction for crucial pre-university milestones.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
