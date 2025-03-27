import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import { useNavigate, NavLink } from 'react-router-dom';
import Logo from '../components/Logo';
import { useForm } from "react-hook-form";
import styles from '../styles/SingIn.module.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import toast from 'react-hot-toast';
import { dotPulse } from 'ldrs'

export default function SignIn() {
  dotPulse.register()
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const token = localStorage.getItem("token");
  const sesion = localStorage.getItem("sesion");
  const [isOpen, setIsOpen] = useState(null);
  const [loading, setloading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();

  const submit = async (data) => {
    console.log(data);
    setloading(true);
    axios.post(
      "http://10.37.37.234:8000/api/login",
      {
        username_or_email: data.email,
        password: data.password
      }
    )
      .then((response) => {
        if (response?.status == 200 && response?.data?.access_token !== "") {
          localStorage.setItem("token", response.data.access_token);
          localStorage.setItem("sesion", "activo");

          // Guardar credenciales si "Remember Me" está marcado
          if (rememberMe) {
            localStorage.setItem("rememberedEmail", data.email);
            localStorage.setItem("rememberedPassword", data.password);
          } else {
            // Limpiar credenciales guardadas si no está marcado
            localStorage.removeItem("rememberedEmail");
            localStorage.removeItem("rememberedPassword");
          }

          navigate("/dashboard");
          setloading(false);
        }
      })
      .catch((error) => {
        setloading(false);
        toast.error("Incorrect credentials!");
        console.log(error);
      });
  }

  useEffect(() => {
    const rememberedEmail = localStorage.getItem("rememberedEmail");
    const rememberedPassword = localStorage.getItem("rememberedPassword");

    if (rememberedEmail && rememberedPassword) {
      setValue("email", rememberedEmail);
      setValue("password", rememberedPassword);
      setRememberMe(true);
    }
  }, [setValue]);

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

          <form className={styles.form} onSubmit={handleSubmit(submit)}>
            <div className={styles.formGroup}>
              <label className={styles.label}>Email</label>
              <input
                type="text"
                placeholder="Enter your email or username"
                className={styles.input}
                {...register("email", {
                  required: "¡Este campo es requerido!"
                })}
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Password</label>
              <div className={styles.passwordContainer}>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className={styles.input}
                  {...register("password", {
                    required: "¡Este campo es requerido!"
                  })}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className={styles.passwordToggle}
                >
                  {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={19} />}
                </button>
              </div>
            </div>

            <div className={styles.checkbox}>
              <input
                type="checkbox"
                id="remember"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <label htmlFor="remember">Remember Me</label>
            </div>

            <button type="submit" className={styles.submitButton}>
              {loading ?
                <l-dot-pulse
                  size="43"
                  speed="1.3"
                  color="white"
                ></l-dot-pulse>
                : "Sign In"}
            </button>
          </form>

          <p className={styles.textCenter}>
            <span className={styles.signupText}>New on our platform? </span>
            <Link to="/signup" a className={styles.signupLink}>
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
} 