import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import contactData from '../../data/contactData';
import styles from './ContactForm.module.css';

function ContactForm() {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    serviceType: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');

  function validate() {
    const newErrors = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'يرجى إدخال الاسم الكامل';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'يرجى إدخال البريد الإلكتروني';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'يرجى إدخال بريد إلكتروني صحيح';
    }
    if (!formData.serviceType) {
      newErrors.serviceType = 'يرجى اختيار نوع الخدمة';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'يرجى كتابة الرسالة';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;

    setStatus('sending');

    emailjs
      .sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        formRef.current,
        'YOUR_PUBLIC_KEY'
      )
      .then(
        () => {
          setStatus('success');
          setFormData({
            fullName: '',
            email: '',
            phone: '',
            serviceType: '',
            message: '',
          });
        },
        () => {
          setStatus('error');
        }
      );
  }

  return (
    <div className={styles.formWrapper}>
      <h2 className={styles.formTitle}>أرسل لنا رسالة</h2>
      <p className={styles.formSubtitle}>
        املأ النموذج التالي وسنتواصل معك في أقرب وقت
      </p>

      {status === 'success' && (
        <div className={styles.successMessage}>
          <i className="fas fa-check-circle" />
          <span>تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.</span>
        </div>
      )}

      {status === 'error' && (
        <div className={styles.errorMessage}>
          <i className="fas fa-exclamation-circle" />
          <span>حدث خطأ أثناء الإرسال. يرجى المحاولة لاحقاً أو التواصل عبر الواتساب.</span>
        </div>
      )}

      <form ref={formRef} onSubmit={handleSubmit} noValidate>
        <div className={styles.formGroup}>
          <label htmlFor="fullName" className={styles.label}>
            الاسم الكامل <span className={styles.required}>*</span>
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className={`${styles.input} ${errors.fullName ? styles.inputError : ''}`}
            placeholder="أدخل اسمك الكامل"
          />
          {errors.fullName && (
            <span className={styles.fieldError}>{errors.fullName}</span>
          )}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>
            البريد الإلكتروني <span className={styles.required}>*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
            placeholder="example@email.com"
            dir="ltr"
          />
          {errors.email && (
            <span className={styles.fieldError}>{errors.email}</span>
          )}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="phone" className={styles.label}>
            رقم الهاتف
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={styles.input}
            placeholder="+20XXXXXXXXXX"
            dir="ltr"
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="serviceType" className={styles.label}>
            نوع الخدمة <span className={styles.required}>*</span>
          </label>
          <select
            id="serviceType"
            name="serviceType"
            value={formData.serviceType}
            onChange={handleChange}
            className={`${styles.input} ${styles.select} ${errors.serviceType ? styles.inputError : ''}`}
          >
            <option value="">اختر نوع الخدمة</option>
            {contactData.serviceTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          {errors.serviceType && (
            <span className={styles.fieldError}>{errors.serviceType}</span>
          )}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="message" className={styles.label}>
            الرسالة <span className={styles.required}>*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={`${styles.input} ${styles.textarea} ${errors.message ? styles.inputError : ''}`}
            placeholder="اكتب رسالتك هنا..."
            rows={5}
          />
          {errors.message && (
            <span className={styles.fieldError}>{errors.message}</span>
          )}
        </div>

        <button
          type="submit"
          className={styles.submitButton}
          disabled={status === 'sending'}
        >
          {status === 'sending' ? (
            <>
              <i className="fas fa-spinner fa-spin" />
              جاري الإرسال...
            </>
          ) : (
            <>
              <i className="fas fa-paper-plane" />
              إرسال الرسالة
            </>
          )}
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
