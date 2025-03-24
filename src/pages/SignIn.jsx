import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';
import styles from '../styles/SingIn.module.css';

export default function SignIn() {
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
              Please sign in to your account and simplify your email experience with OutlookFusion
            </p>
          </div>

          <form className={styles.form}>
            <div className={styles.formGroup}>
              <label className={styles.label}>Email or Username</label>
              <input
                type="text"
                placeholder="Enter your email or username"
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

            <div className={styles.checkbox}>
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember Me</label>
            </div>

            <button type="submit" className={styles.submitButton}>
              Sign in
            </button>
          </form>

          <p className={styles.textCenter}>
            <span className={styles.signupText}>New on our platform? </span>
            <Link to="/signup" className={styles.signupLink}>
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}