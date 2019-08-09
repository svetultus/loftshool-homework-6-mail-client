import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import PrivateRoute from '../PrivateRoute';

import AppRouter from '../AppRouter';
import { AuthProvider, withAuth } from '../../context/Auth';
import { DataProvider } from '../../context/Data';
import LoginForm from '../LoginForm';

// Мы оборачиваем наши роуты в несколько провайдеров
// DataProvider - предоставляет обьект data с имейлами.
// AuthProvider - предоставляет метод авторизации authorize
//                и текущий статус isAuthorized
// BrowserRouter - провайдер react-router-dom.
{
  /*
            Добавьте роуты /app и /login.
            Роут /app должен быть доступен 
            только авторизованному пользователю,
            используйте приватный роут.
            По умолчанию должен происходить редирект
            на страницу логина.

            /app будет использовать AppRouter в качестве вью
            /login будет использовать LoginForm
          */
}

export default () => {
  const appRouter = () => <AppRouter />;
  const loginForm = withAuth(props => <LoginForm {...props} />);

  return (
    <DataProvider>
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <PrivateRoute path="/app" component={appRouter} />
            <Route path="/login" component={loginForm} />
            <Redirect to="/login" component={loginForm} />
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </DataProvider>
  );
};
