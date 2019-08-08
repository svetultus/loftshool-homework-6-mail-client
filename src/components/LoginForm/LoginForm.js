import React from 'react';
//import '../contexts/Auth';
import { BrowserRouter, Redirect } from 'react-router-dom';

// Реализуйте компонент формы логина.
// Используйте `/contexts/Auth` для получения метода authorize
// и статуса isAuthorized.

// Когда пользователь авторизован - перенаправьте его на роут /app
export default () => (
  <div className="LoginForm">
    <div className="LoginForm_form t-form">
      <p>
        <label for="email">
          <span className="LoginForm_labelText">Почта</span>
        </label>
        <input
          type="text"
          name="email"
          className="LoginForm_input t-input-email"
          value=""
        />
      </p>
      <p>
        <label for="password">
          <span className="LoginForm_labelText">Пароль</span>
        </label>
        <input
          type="password"
          name="password"
          className="LoginForm_input t-input-password"
          value=""
        />
      </p>
      <div className="LoginForm_buttons">
        <button className="LoginForm_button t-login">Войти</button>
      </div>
    </div>
  </div>
);
