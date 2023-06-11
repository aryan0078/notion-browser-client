import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { ReactComponent as NotionLogo } from "../../assets/images/notion-logo.svg";
import styles from "./register.module.scss";
import { useRegisterUserData } from "../../services/useUserData";
import {
  createImageFromInitials,
  getRandomColor,
} from "../../utils/generateProfilePicture";
import { useThemeDetector } from "../../hooks/useThemeDetector";
import { parseJWT } from "../../utils/parseJWT";
import { request } from "../../lib/axios";
import { useDispatch } from "react-redux";
import { setUser } from "../../slice/userSlice";
import { AxiosError } from "axios";
import {
  validateRegistration,
  validateRegistrationProps,
} from "../../utils/validateRegistration";

const Register = () => {
  const { theme } = useContext(ThemeContext);

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [formErrors, setFormErrors] = useState<
    Partial<validateRegistrationProps>
  >({});
  const [isSubmit, setIsSubmit] = useState<boolean>(false);

  const isDarkMode = useThemeDetector();
  const { mutate } = useRegisterUserData();
  const dispatch = useDispatch();

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      handleRegistration();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formErrors, isSubmit]);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    setFormErrors(validateRegistration({ name, email, password }));
    setIsSubmit(true);
  };

  const handleRegistration = () => {
    const color = getRandomColor();
    const url = createImageFromInitials(50, name, color)!;

    const userData = {
      name,
      email,
      password,
      isDarkMode,
      profilePicture: {
        url,
      },
    };

    mutate(userData, {
      onSuccess: async (data) => {
        if (data) {
          const { userId } = parseJWT(data.accessToken);
          const user = await request({ url: `/users/${userId}` });

          dispatch(setUser({ ...user.data }));

          setName("");
          setEmail("");
          setPassword("");
        }
      },
      onError: (error: AxiosError) => {
        const data = error.response?.data as {
          error: string;
        };

        setError(data.error);
      },
    });
  };

  return (
    <div className={`${styles.container} ${styles[theme]}`}>
      <div className={`${styles.nav}`}>
        <NotionLogo data-testid="notion-logo" className={`${styles.logo}`} />
        <p>Notion</p>
      </div>
      <div className={`${styles.register_panel}`}>
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            value={name}
            placeholder="Enter your full name..."
            onChange={handleNameChange}
          />
          {formErrors.name && (
            <p className={`${styles.error}`}>{formErrors.name}</p>
          )}
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="text"
            value={email}
            placeholder="Enter your email address..."
            onChange={handleEmailChange}
          />
          {formErrors.email && (
            <p className={`${styles.error}`}>{formErrors.email}</p>
          )}
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            placeholder="Enter your password..."
            onChange={handlePasswordChange}
          />
          {formErrors.password && (
            <p className={`${styles.error}`}>{formErrors.password}</p>
          )}
          <button type="submit">Sign up</button>
          <br />
        </form>
        {error && <p className={`${styles.error}`}>{error}</p>}
        <p>Already have an account?</p> <a href="/">Login</a>
      </div>
    </div>
  );
};

export default Register;