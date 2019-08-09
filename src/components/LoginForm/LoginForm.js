import React from 'react';
import { Redirect } from 'react-router-dom';
import styles from './LoginForm.module.css';

// Реализуйте компонент формы логина.
// Используйте `/contexts/Auth` для получения метода authorize
// и статуса isAuthorized.

// Когда пользователь авторизован - перенаправьте его на роут /app

function Form(props) {
  const { authError, authorize } = props;

  function onSubmit(e) {
    e.preventDefault();

    const form = e.target.closest('form');

    onSubmit = authorize(form.email.value, form.password.value);
  }

  return (
    <form className={styles.bg}>
      <div className={styles.form + ' t-form'}>
        <p>
          <label htmlFor="email">
            <span className={styles.labelText}>Почта</span>
          </label>
          <input
            type="text"
            name="email"
            className={styles.input + ' t-input-email'}
          />
        </p>
        <p>
          <label htmlFor="password">
            <span className={styles.labelText}>Пароль</span>
          </label>
          <input
            type="password"
            name="password"
            className={styles.input + ' t-input-password'}
          />
        </p>
        {authError && <p className={styles.error}>{authError}</p>}
        <div className={styles.buttons}>
          <button
            className={styles.button + ' t-login'}
            type="submit"
            onSubmit={onSubmit}
            onClick={onSubmit}
          >
            Войти
          </button>
        </div>
      </div>
    </form>
  );
}

export default props => {
  const { isAuthorized, authError, authorize } = props;

  return !isAuthorized ? (
    <Form authError={authError} authorize={authorize} />
  ) : (
    <Redirect to="/app" />
  );
};
