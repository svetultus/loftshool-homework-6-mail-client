import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from '../Home';
import InboxList from '../InboxList';
import InboxMail from '../InboxMail';
import OutboxList from '../OutboxList';
import OutboxMail from '../OutboxMail';
import { AuthProvider } from '../../context/Auth';
import { DataProvider } from '../../context/Data';
import '../AppRouter/AppRouter.module.css';

// Реализуйте роутер приложения.
// Здесь должны быть обьявлены роуты,
// которые будут доступны авторизованному пользователю.
// - Home
// - InboxList
// - InboxMail
// - OutboxList
// - OutboxMail

// Так же в этом файле обьявите лейаут,
// используйте стили из AppRouter.module.css

export default () => {
  const home = () => <Home />;
  const inboxList = () => <InboxList />;
  const inboxMail = () => <InboxMail />;
  const outboxList = () => <OutboxList />;
  const outboxMail = () => <OutboxMail />;

  return (
    <DataProvider>
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route path="/home" component={home} />
            <Route path="/inboxList" component={inboxList} />
            <Route path="/inboxMail" component={inboxMail} />
            <Route path="/outboxList" component={outboxList} />
            <Route path="/outboxMail" component={outboxMail} />
            <Redirect to="/home" />
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </DataProvider>
  );
};
