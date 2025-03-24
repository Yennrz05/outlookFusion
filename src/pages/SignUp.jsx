import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';
import styles from '../styles/SingUp.module.css';

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Logo />
      </div>
      
      <div className={styles.mainContent}>
        <div className={styles.formContainer}>
          <div className={styles.textCenter}>
            <h2 className={styles.title}>Welcome to OutlookFusion! 👋</h2>
            <p className={styles.subtitle}>
              Please create account and simplify your email experience with OutlookFusion
            </p>
          </div>

          <form className={styles.form}>
            <div className={styles.formGroup}>
              <label className={styles.label}>Username</label>
              <input
                type="text"
                placeholder="Enter your username"
                className={styles.input}
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className={styles.input}
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Password</label>
              <div className={styles.passwordContainer}>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className={styles.input}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className={styles.passwordToggle}
                >
                  {/* {showPassword ? <EyeOff size={20} /> : <Eye size={20} />} */}
                </button>
              </div>
            </div>

            <div className={styles.termsContainer}>
              <input type="checkbox" id="terms" />
              <label htmlFor="terms">
                I agree to{' '}
                <a href="#" className={styles.termsLink}>privacy policy & terms</a>
              </label>
            </div>

            <button type="submit" className={styles.submitButton}>
              Sign up
            </button>
          </form>

          <p className={styles.textCenter}>
            <span className={styles.signinText}>Already have an account? </span>
            <Link to="/" className={styles.signinLink}>
              Sign in instead
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}