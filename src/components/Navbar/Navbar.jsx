import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const navLinks = [
  { path: '/', label: 'الرئيسية' },
  { path: '/about', label: 'من نحن' },
  {
    path: '/brands',
    label: 'البراندات',
    dropdown: [
      { path: '/brands/thutmose', label: 'شبلونة تحتمس الثالث' },
      { path: '/brands/dialogue', label: 'ماعت' },
      { path: '/brands/aristotle', label: 'شبلونة أرسطو' },
      { path: '/brands/campbell', label: 'شبلونة كامبل' },
      { path: '/brands/stars', label: 'شبلونة مواقع النجوم' },
    ],
  },
  { path: 'https://shabllona.com', label: 'المنتجات', external: true },
  { path: '/digital-twin', label: 'التوأم الرقمي' },
  { path: '/faq', label: 'الأسئلة الشائعة' },
  { path: '/contact', label: 'تواصل معنا' },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const closeMobile = () => {
    setMobileOpen(false);
    setDropdownOpen(false);
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.navContainer}`}>
        <Link to="/" className={styles.logo} onClick={closeMobile}>
          <img src="/images/logo/shabllona-logo.jpg" alt="شبلونة" className={styles.logoImage} />
          <div className={styles.logoText}>
            <span className={styles.logoName}>شبلونة</span>
            <span className={styles.logoTagline}>حلول التوأمة الرقمية المتقدمة</span>
          </div>
        </Link>

        <button
          className={`${styles.hamburger} ${mobileOpen ? styles.active : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="فتح القائمة"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {mobileOpen && <div className={styles.overlay} onClick={closeMobile}></div>}

        <ul className={`${styles.navLinks} ${mobileOpen ? styles.open : ''}`}>
          {navLinks.map((link) =>
            link.dropdown ? (
              <li
                key={link.path}
                className={styles.dropdownItem}
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `${styles.navLink} ${isActive ? styles.activeLink : ''}`
                  }
                  onClick={closeMobile}
                  end
                >
                  {link.label}
                  <i className="fas fa-chevron-down" style={{ fontSize: '0.7rem', marginRight: '5px' }}></i>
                </NavLink>
                <ul className={`${styles.dropdown} ${dropdownOpen ? styles.dropdownVisible : ''}`}>
                  {link.dropdown.map((sub) => (
                    <li key={sub.path}>
                      <NavLink
                        to={sub.path}
                        className={({ isActive }) =>
                          `${styles.dropdownLink} ${isActive ? styles.activeLink : ''}`
                        }
                        onClick={closeMobile}
                      >
                        {sub.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </li>
            ) : link.external ? (
              <li key={link.path}>
                <a
                  href={link.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.navLink}
                  onClick={closeMobile}
                >
                  {link.label}
                </a>
              </li>
            ) : (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `${styles.navLink} ${isActive ? styles.activeLink : ''}`
                  }
                  onClick={closeMobile}
                  end={link.path === '/'}
                >
                  {link.label}
                </NavLink>
              </li>
            )
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
