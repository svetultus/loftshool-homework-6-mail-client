import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import PrivateRoute from '../PrivateRoute';

import AppRouter from '../AppRouter';
import { AuthProvider, withAuth } from '../../context/Auth';
import { DataProvider } from '../../context/Data';
import Home from '../Home';
import LoginForm from '../LoginForm';
import InboxList from '../InboxList';
import InboxMail from '../InboxMail';
import OutboxList from '../OutboxList';
import OutboxMail from '../OutboxMail';

// Мы оборачиваем наши роуты в несколько провайдеров
// DataProvider - предоставляет обьект data с имейлами.
// AuthProvider - предоставляет метод авторизации authorize
//                и текущий статус isAuthorized
// BrowserRouter - провайдер react-router-dom.

export default () => {
  const appRouter = () => <AppRouter />;
  //const loginForm = () => <LoginForm />;
  const loginForm = withAuth(props => <LoginForm {...props} />);
  const home = () => <Home />;
  //const inboxList = withData(props => <InboxList {...props} />);
  const inboxList = () => <InboxList />;
  const inboxMail = () => <InboxMail />;
  const outboxList = () => <OutboxList />;
  const outboxMail = () => <OutboxMail />;

  return (
    <DataProvider>
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route path="/app" component={appRouter} exact />
            <Route path="/login" component={loginForm} />
            <Route path="/home" component={home} />
            <Route path="/inbox" component={inboxList} />
            <Route path="/inboxMail" component={inboxMail} />
            <Route path="/outbox" component={outboxList} />
            <Route path="/outboxMail" component={outboxMail} />
            {/*
            Добавьте роуты /app и /login.
            Роут /app должен быть доступен 
            только авторизованному пользователю,
            используйте приватный роут.
            По умолчанию должен происходить редирект
            на страницу логина.

            /app будет использовать AppRouter в качестве вью
            /login будет использовать LoginForm
          */}
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </DataProvider>
  );
};
