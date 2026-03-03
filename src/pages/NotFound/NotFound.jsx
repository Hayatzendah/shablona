import { Link } from 'react-router-dom';
import SEO from '../../components/SEO/SEO';
import styles from './NotFound.module.css';

function NotFound() {
  return (
    <>
      <SEO
        title="الصفحة غير موجودة"
        description="عذراً، الصفحة التي تبحث عنها غير موجودة"
      />
      <section className={styles.notFound}>
        <div className={styles.content}>
          <h1 className={styles.errorCode}>404</h1>
          <h2 className={styles.title}>الصفحة غير موجودة</h2>
          <p className={styles.description}>عذراً، الصفحة التي تبحث عنها غير موجودة</p>
          <Link to="/" className={styles.homeButton}>
            <i className="fas fa-home"></i>
            العودة للرئيسية
          </Link>
        </div>
      </section>
    </>
  );
}

export default NotFound;
