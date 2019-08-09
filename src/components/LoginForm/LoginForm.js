import React from 'react';
import { withAuth } from '../../context/Auth';
import { BrowserRouter, Redirect } from 'react-router-dom';

// Реализуйте компонент формы логина.
// Используйте `/contexts/Auth` для получения метода authorize
// и статуса isAuthorized.

// Когда пользователь авторизован - перенаправьте его на роут /app

function Form(props) {
  const { authError, authorize } = props;

  function onSubmit(e) {
    e.preventDefault();

    const form = e.target.closest('.LoginForm');

    onSubmit = authorize(form.email.value, form.password.value);
  }

  return (
    <form className="LoginForm">
      <div className="LoginForm_form t-form">
        <p>
          <label htmlFor="email">
            <span className="LoginForm_labelText">Почта</span>
          </label>
          <input
            type="text"
            name="email"
            className="LoginForm_input t-input-email"
          />
        </p>
        <p>
          <label htmlFor="password">
            <span className="LoginForm_labelText">Пароль</span>
          </label>
          <input
            type="password"
            name="password"
            className="LoginForm_input t-input-password"
          />
        </p>
        {authError && <p className="LoginForm_error">{authError}</p>}
        <div className="LoginForm_buttons">
          <button
            className="LoginForm_button t-login"
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
