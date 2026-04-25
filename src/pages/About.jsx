import styles from './About.module.css';
import { Target, Award, Lightbulb, Users, CheckCircle } from 'lucide-react';
import aboutTeacherImg from '../assets/images/about_teacher_1777145581279.png';

const About = () => {
  return (
    <div className={styles.aboutPage}>
      {/* Header */}
      <section className={styles.header}>
        <div className="container">
          <h1 className="animate-fade-in">About Brain Bloom Academy</h1>
          <p className="animate-fade-in">Molding aspirations into achievements. We empower students from classes 6th to 12th with unmatched conceptual clarity and absolute exam confidence.</p>
        </div>
      </section>

      {/* Main Content Split */}
      <section className={styles.contentSection}>
        <div className={`container ${styles.splitContainer}`}>
          
          <div className={styles.imageColumn}>
            <img 
              src={aboutTeacherImg} 
              alt="Classroom Education" 
              className={styles.aboutImage}
            />
            <div className={styles.floatingCard}>
              <Award size={40} className="text-orange" />
              <h4>Global Standards in Education</h4>
            </div>
          </div>

          <div className={styles.textColumn}>
            <h2 className="text-maroon">Who We Are</h2>
            <div className={styles.divider}></div>
            <p>
              Brain Bloom Academy is an elite tuition center situated in Mohali, highly committed to nurturing the brightest minds of tomorrow. 
              We provide highly focused and strategically planned coaching for classes 6th to 12th across all major subjects with a deep emphasis on strong fundamentals.
            </p>
            <p>
              Unlike conventional centers, we believe that every student has a unique intellectual potential. Our tailored teaching methodology, psychological reinforcement, and rigorous testing ensure we bring out the brilliance in absolutely everyone.
            </p>

            <ul className={styles.checkmarks}>
               <li><CheckCircle className="text-orange" size={20}/> Elite Faculty Selection</li>
               <li><CheckCircle className="text-orange" size={20}/> Strictly Controlled Batch Sizes</li>
               <li><CheckCircle className="text-orange" size={20}/> Data-Driven Progress Tracking</li>
            </ul>

            <div className={styles.missionCard}>
              <Target size={32} className="text-maroon" />
              <div>
                <h3>Our Mission</h3>
                <p>To help students conquer academic anxiety, exceed their potential, and build curiosity, discipline, and complex problem-solving skills for their future professional endeavors.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Core Values */}
      <section className={styles.valuesSection}>
        <div className="container">
          <h2 className={styles.valuesTitle}>Our Core Pillars</h2>
          <div className={styles.valuesGrid}>
            <div className={styles.valueItem}>
              <Users size={40} />
              <h4>Elite Faculty</h4>
              <p>Top-tier, experienced educators dedicated wholly to your child's success.</p>
            </div>
            <div className={styles.valueItem}>
              <Lightbulb size={40} />
              <h4>Smart Classrooms</h4>
              <p>Modern infrastructure leveraging visual analytics for highly interactive learning.</p>
            </div>
            <div className={styles.valueItem}>
              <Target size={40} />
              <h4>Absolute Concept Focus</h4>
              <p>We eliminate rote learning. We focus entirely on deep, functional understanding.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
