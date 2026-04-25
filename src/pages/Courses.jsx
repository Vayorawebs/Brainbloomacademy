import styles from './Courses.module.css';

const courses = [
  {
    id: 1,
    grade: "6th to 8th",
    title: "Middle School Foundation",
    subjects: "All Subjects",
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80",
    description: "Building unshakeable fundamentals. We ensure students not only memorize but deeply comprehend core scientific and mathematical concepts necessary for higher education."
  },
  {
    id: 2,
    grade: "9th & 10th",
    title: "Expert Board Prep",
    subjects: "Science, Math, English, SST",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80",
    description: "Our meticulously planned curriculum is engineered for one goal: exceptional board results. With aggressive performance tracking and doubt-clearing sessions."
  },
  {
    id: 3,
    grade: "11th & 12th",
    title: "Science (Medical / Non-Medical)",
    subjects: "Physics, Chemistry, Math, Biology",
    image: "/images/course_science_1777145715194.png",
    description: "High-level cognitive coaching aligning board preparations with severe competitive exam readiness. Taught by specialized subject matter experts."
  },
  {
    id: 4,
    grade: "11th & 12th",
    title: "Commerce & Humanities",
    subjects: "Accountancy, Economics, Business, History",
    image: "/images/course_commerce_1777145731352.png",
    description: "Comprehensive financial and theoretical mastery. Our courses combine textbook learning with real-world case studies for total student fluency."
  }
];

const Courses = () => {
  return (
    <div className={styles.coursesPage}>
      {/* Header */}
      <section className={styles.header}>
        <div className="container">
          <h1 className="animate-fade-in">Our Elite Academic Programs</h1>
          <p className="animate-fade-in">We don't offer generic tuition. We offer heavily strategized, success-oriented coaching designed to extract the absolute best out of your child.</p>
        </div>
      </section>

      {/* Courses Grid */}
      <section className={styles.coursesSection}>
        <div className="container">
          <div className={styles.grid}>
            {courses.map(course => (
              <div key={course.id} className={styles.courseCard}>
                <div className={styles.imageWrapper}>
                  <img src={course.image} alt={course.title} />
                  <div className={styles.gradeBadge}>{course.grade}</div>
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.courseTitle}>{course.title}</h3>
                  <p className={styles.subjects}>{course.subjects}</p>
                  <p className={styles.description}>{course.description}</p>
                  <a href="/contact" className={`btn btn-orange ${styles.enrollBtn}`}>Secure Admission</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Banner */}
      <section className={styles.premiumBanner}>
        <div className="container">
           <h2>Ready to Transform Your Academic Future?</h2>
           <p>Join the academy trusted by hundreds of parents for guaranteed results.</p>
           <a href="/contact" className="btn btn-white">Book Your Demo Class Today</a>
        </div>
      </section>
    </div>
  );
};

export default Courses;
